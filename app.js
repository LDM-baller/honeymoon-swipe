/* Honeymoon Swipe — app logic (vanilla, no build step) */
(function () {
  "use strict";

  var CARDS = window.HM_CARDS || [];
  var byId = {};
  CARDS.forEach(function (c) { byId[c.id] = c; });

  var state = {
    name: "", person: "", session: "",
    idx: 0,
    decisions: [],     // [{id, dir:'like'|'nope'}] in swipe order
    rankOrder: []      // liked ids, favourite-first
  };

  var $ = function (id) { return document.getElementById(id); };
  function show(screen) {
    ["screen-start", "screen-swipe", "screen-rank", "screen-results"]
      .forEach(function (s) { $(s).classList.add("hidden"); });
    $(screen).classList.remove("hidden");
  }

  /* ---------------- START ---------------- */
  var startBtn = $("start-btn");
  function checkStart() {
    startBtn.disabled = !(
      $("name-input").value.trim() &&
      state.person &&
      $("session-input").value.trim()
    );
  }
  $("name-input").addEventListener("input", checkStart);
  $("session-input").addEventListener("input", checkStart);
  Array.prototype.forEach.call($("person-seg").children, function (b) {
    b.addEventListener("click", function () {
      state.person = b.getAttribute("data-p");
      Array.prototype.forEach.call($("person-seg").children, function (x) {
        x.classList.toggle("on", x === b);
        x.classList.toggle("ghost", x !== b);
      });
      checkStart();
    });
  });

  startBtn.addEventListener("click", function () {
    state.name = $("name-input").value.trim();
    state.session = $("session-input").value.trim().toLowerCase().replace(/\s+/g, "-");
    $("who").textContent = state.name + " · " + state.person;
    show("screen-swipe");
    renderDeck();
  });

  /* ---------------- SWIPE ---------------- */
  var deck = $("deck");

  function regionClass(c) { return c.image ? "" : "g-" + (c.region || "island"); }

  function cardEl(c, top) {
    var el = document.createElement("div");
    el.className = "card " + regionClass(c);
    el.dataset.id = c.id;
    if (!top) { el.style.transform = "scale(0.95) translateY(10px)"; el.style.filter = "brightness(0.96)"; }

    var art = "";
    if (c.image) art = '<div class="art" style="background-image:url(\'' + c.image + '\')"></div>';
    var credit = (c.image && c.image_credit) ? '<div class="credit">' + esc(c.image_credit) + "</div>" : "";

    var quote = c.quote ? '<div class="quote">' + esc(c.quote) + "</div>" : "";
    el.innerHTML =
      art + credit +
      '<div class="stamp like">Yes</div><div class="stamp nope">Nope</div>' +
      '<div class="meta">' +
        '<div class="kicker">' + esc(c.location) + "</div>" +
        "<h2>" + esc(c.activity) + "</h2>" +
        '<div class="exp">' + esc(c.experience) + "</div>" +
        '<div class="base">Based at ' + esc(c.place) + "</div>" +
        quote +
        '<a class="src" href="' + c.source_url + '" target="_blank" rel="noopener">Featured in ' + esc(c.source) + " ↗</a>" +
      "</div>";
    return el;
  }

  function renderDeck() {
    deck.innerHTML = "";
    $("progress").textContent = state.idx < CARDS.length
      ? (state.idx + 1) + " / " + CARDS.length
      : "done";

    if (state.idx >= CARDS.length) { goToRank(); return; }

    // peek card behind
    if (state.idx + 1 < CARDS.length) deck.appendChild(cardEl(CARDS[state.idx + 1], false));
    var top = cardEl(CARDS[state.idx], true);
    deck.appendChild(top);
    attachDrag(top);
  }

  function attachDrag(el) {
    var startX = 0, startY = 0, dx = 0, dy = 0, dragging = false;
    var likeStamp = el.querySelector(".stamp.like");
    var nopeStamp = el.querySelector(".stamp.nope");

    function down(e) {
      dragging = true;
      var p = point(e);
      startX = p.x; startY = p.y;
      el.style.transition = "none";
    }
    function move(e) {
      if (!dragging) return;
      var p = point(e);
      dx = p.x - startX; dy = p.y - startY;
      el.style.transform = "translate(" + dx + "px," + dy + "px) rotate(" + (dx / 18) + "deg)";
      likeStamp.style.opacity = dx > 0 ? Math.min(dx / 90, 1) : 0;
      nopeStamp.style.opacity = dx < 0 ? Math.min(-dx / 90, 1) : 0;
    }
    function up() {
      if (!dragging) return;
      dragging = false;
      el.style.transition = "transform .3s ease, opacity .3s ease";
      if (Math.abs(dx) > 90) {
        commit(dx > 0 ? "like" : "nope", el);
      } else {
        el.style.transform = "";
        likeStamp.style.opacity = 0; nopeStamp.style.opacity = 0;
      }
      dx = 0; dy = 0;
    }
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
  }

  function point(e) { return { x: e.clientX, y: e.clientY }; }

  function flyOut(el, dir) {
    var off = dir === "like" ? window.innerWidth : -window.innerWidth;
    el.style.transition = "transform .35s ease, opacity .35s ease";
    el.style.transform = "translate(" + off + "px,-40px) rotate(" + (dir === "like" ? 24 : -24) + "deg)";
    el.style.opacity = "0";
  }

  function commit(dir, el) {
    var c = CARDS[state.idx];
    state.decisions.push({ id: c.id, dir: dir });
    if (el) flyOut(el, dir);
    state.idx++;
    setTimeout(renderDeck, 180);
  }

  $("btn-like").addEventListener("click", function () {
    var top = deck.querySelector(".card:last-child");
    commit("like", top);
  });
  $("btn-nope").addEventListener("click", function () {
    var top = deck.querySelector(".card:last-child");
    commit("nope", top);
  });
  $("btn-back").addEventListener("click", function () {
    if (state.decisions.length === 0) return;
    state.decisions.pop();
    state.idx = Math.max(0, state.idx - 1);
    renderDeck();
  });

  // Keyboard: ← nope, → like, ↑ undo (only while swiping)
  document.addEventListener("keydown", function (e) {
    if ($("screen-swipe").classList.contains("hidden")) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); $("btn-nope").click(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); $("btn-like").click(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); $("btn-back").click(); }
  });

  /* ---------------- RANK ---------------- */
  function goToRank() {
    state.rankOrder = state.decisions.filter(function (d) { return d.dir === "like"; })
      .map(function (d) { return d.id; });
    if (state.rankOrder.length === 0) { saveAndShowResults(); return; }
    renderRank();
    show("screen-rank");
  }

  function renderRank() {
    var ol = $("rank-list");
    ol.innerHTML = "";
    state.rankOrder.forEach(function (id, i) {
      var c = byId[id];
      var li = document.createElement("li");
      li.className = "rank-item";
      li.innerHTML =
        '<div class="num">' + (i + 1) + "</div>" +
        '<div class="ri-body"><strong>' + esc(c.activity) + "</strong><span>" + esc(c.place) + " · " + esc(c.location) + "</span></div>" +
        '<div class="arrows"><button data-dir="up">▲</button><button data-dir="down">▼</button></div>';
      li.querySelector('[data-dir="up"]').addEventListener("click", function () { moveRank(i, -1); });
      li.querySelector('[data-dir="down"]').addEventListener("click", function () { moveRank(i, 1); });
      ol.appendChild(li);
    });
  }
  function moveRank(i, delta) {
    var j = i + delta;
    if (j < 0 || j >= state.rankOrder.length) return;
    var t = state.rankOrder[i];
    state.rankOrder[i] = state.rankOrder[j];
    state.rankOrder[j] = t;
    renderRank();
  }
  $("rank-done").addEventListener("click", saveAndShowResults);

  /* ---------------- SAVE + RESULTS ---------------- */
  function myRecord() {
    return {
      v: 1,
      session: state.session,
      person: state.person,
      name: state.name,
      likes: state.rankOrder,   // favourite-first
      nopes: state.decisions.filter(function (d) { return d.dir === "nope"; }).map(function (d) { return d.id; })
    };
  }
  function storeKey(session, person) { return "hm:" + session + ":" + person; }

  function saveAndShowResults() {
    var rec = myRecord();
    try { localStorage.setItem(storeKey(rec.session, rec.person), JSON.stringify(rec)); } catch (e) {}
    show("screen-results");
    $("results-sub").textContent = rec.likes.length + " favourites, ranked. Now combine with your partner.";
    myShareCode = encodeRec(rec);

    // auto-combine if partner already saved on this device
    var otherKey = storeKey(rec.session, rec.person === "A" ? "B" : "A");
    var other = localStorage.getItem(otherKey);
    if (other) { try { combine(rec, JSON.parse(other)); } catch (e) {} }
  }

  var myShareCode = "";
  function encodeRec(rec) { return btoa(unescape(encodeURIComponent(JSON.stringify(rec)))); }
  function decodeRec(code) { return JSON.parse(decodeURIComponent(escape(atob(code.trim())))); }

  $("btn-copy").addEventListener("click", function () {
    copy(myShareCode);
    this.textContent = "Copied ✓";
  });
  $("btn-combine").addEventListener("click", function () {
    var code = $("import-box").value.trim();
    if (!code) return;
    var other;
    try { other = decodeRec(code); } catch (e) { alert("That code didn't read — check you copied all of it."); return; }
    combine(myRecord(), other);
  });

  function combine(me, other) {
    if (other.person === me.person) {
      alert("You're both marked Partner " + me.person + ". One of you should restart and pick the other.");
    }
    $("combined").classList.remove("hidden");

    // mutual likes
    var mutual = me.likes.filter(function (id) { return other.likes.indexOf(id) !== -1; });
    var mEl = $("mutual");
    mEl.innerHTML = mutual.length
      ? mutual.map(function (id) { return '<span class="chip mutual">' + esc(byId[id] ? byId[id].place : id) + "</span>"; }).join("")
      : '<p class="note">No exact overlap yet — that\'s fine, the brief below blends both of you.</p>';

    // source hit-rate (combined right-swipe counts by source)
    var counts = {};
    [me, other].forEach(function (p) {
      p.likes.forEach(function (id) {
        var c = byId[id]; if (!c) return;
        counts[c.source] = (counts[c.source] || 0) + 1;
      });
    });
    var max = Math.max.apply(null, Object.keys(counts).map(function (k) { return counts[k]; }).concat([1]));
    var rows = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
    $("hitrate").innerHTML = rows.map(function (src) {
      var pct = Math.round((counts[src] / max) * 100);
      return '<div class="bar-row"><span class="lbl">' + esc(src) + '</span>' +
             '<span class="bar-track"><span class="bar-fill" style="width:' + pct + '%"></span></span>' +
             '<span class="val">' + counts[src] + "</span></div>";
    }).join("");

    $("claude-brief").value = buildBrief(me, other, mutual);
  }

  function tagTally(likes) {
    var t = {};
    likes.forEach(function (id) {
      var c = byId[id]; if (!c) return;
      (c.tags || []).forEach(function (tag) { t[tag] = (t[tag] || 0) + 1; });
    });
    return Object.keys(t).sort(function (a, b) { return t[b] - t[a]; })
      .map(function (k) { return k + "(" + t[k] + ")"; });
  }
  function favLines(rec) {
    return rec.likes.map(function (id, i) {
      var c = byId[id]; if (!c) return "";
      return "   " + (i + 1) + ". " + c.activity + " — " + c.place + ", " + c.location + "  [" + c.week_fit + "]";
    }).join("\n");
  }

  function buildBrief(me, other, mutual) {
    var L = [];
    L.push("HONEYMOON PLANNING BRIEF");
    L.push("========================");
    L.push("Trip: 2 weeks, late November. Two stops — one per week (pair an experiential week with a decompress week).");
    L.push("Hard filters: true luxury (Aman tier). Amazing food. Light activity only (easy walks, no real hiking).");
    L.push("Bonus: at least one off-the-beaten-path / earth experience (e.g. fossil or gem digging) is a big plus.");
    L.push("All destinations must be genuinely good to visit in late November.");
    L.push("");
    L.push("PARTNER " + me.person + " (" + me.name + ") — favourites, most-loved first:");
    L.push(favLines(me));
    L.push("   Preference signals: " + tagTally(me.likes).join(", "));
    L.push("");
    L.push("PARTNER " + other.person + " (" + other.name + ") — favourites, most-loved first:");
    L.push(favLines(other));
    L.push("   Preference signals: " + tagTally(other.likes).join(", "));
    L.push("");
    L.push("BOTH LOVED: " + (mutual.length ? mutual.map(function (id) { return byId[id].place; }).join(", ") : "(no exact overlap)"));
    L.push("");
    L.push("ASK: Recommend 2–3 two-week itineraries (Week 1 + Week 2, with a specific Aman-tier hotel per stop,");
    L.push("standout meals, and one light off-beat experience). Explain why each fits both of us and late-November timing.");
    return L.join("\n");
  }

  $("btn-copy-brief").addEventListener("click", function () {
    copy($("claude-brief").value); this.textContent = "Copied ✓";
  });

  $("btn-restart").addEventListener("click", function () {
    state.idx = 0; state.decisions = []; state.rankOrder = [];
    $("combined").classList.add("hidden");
    $("import-box").value = "";
    // flip the A/B toggle to the other partner to make combining easy
    var other = state.person === "A" ? "B" : "A";
    Array.prototype.forEach.call($("person-seg").children, function (x) {
      var on = x.getAttribute("data-p") === other;
      x.classList.toggle("on", on);
      x.classList.toggle("ghost", !on);
    });
    state.person = other;
    checkStart();
    show("screen-start");
  });

  /* ---------------- utils ---------------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function copy(text) {
    if (navigator.clipboard) { navigator.clipboard.writeText(text); return; }
    var ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  show("screen-start");
})();
