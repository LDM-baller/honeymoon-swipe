/* Honeymoon Swipe — app logic (vanilla, no build step) */
(function () {
  "use strict";

  var CARDS = window.HM_CARDS || [];
  var byId = {};
  CARDS.forEach(function (c) { byId[c.id] = c; });

  // Shuffle the deck on every visit (Fisher–Yates) so order isn't fixed
  for (var s = CARDS.length - 1; s > 0; s--) {
    var r = Math.floor(Math.random() * (s + 1));
    var tmp = CARDS[s]; CARDS[s] = CARDS[r]; CARDS[r] = tmp;
  }

  var state = {
    name: "",
    idx: 0,
    decisions: [],     // [{id, dir:'like'|'nope'}] in swipe order
    rankOrder: []      // liked ids, favourite-first
  };

  var $ = function (id) { return document.getElementById(id); };
  function show(screen) {
    ["screen-start", "screen-swipe", "screen-rank", "screen-results", "screen-organizer"]
      .forEach(function (s) { $(s).classList.add("hidden"); });
    $(screen).classList.remove("hidden");
  }

  /* ---------------- START ---------------- */
  var startBtn = $("start-btn");
  function checkStart() {
    startBtn.disabled = !$("name-input").value.trim();
  }
  $("name-input").addEventListener("input", checkStart);
  $("name-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !startBtn.disabled) startBtn.click();
  });

  startBtn.addEventListener("click", function () {
    state.name = $("name-input").value.trim();
    $("who").textContent = state.name;
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
      name: state.name,
      likes: state.rankOrder,   // favourite-first
      nopes: state.decisions.filter(function (d) { return d.dir === "nope"; }).map(function (d) { return d.id; })
    };
  }

  function saveAndShowResults() {
    var rec = myRecord();
    try { localStorage.setItem("hm:self", JSON.stringify(rec)); } catch (e) {}
    show("screen-results");
    myShareCode = encodeRec(rec);

    if (cloudEnabled()) {
      // Auto-save mode: send to the planner's private table — nothing to copy.
      submitToCloud(rec);
      $("sec-partner").classList.add("hidden");
      $("btn-restart").parentNode.classList.remove("hidden");
      $("results-title").textContent = "All done 🎉";
      $("results-sub").textContent = rec.likes.length + " favourites sent to the planner. Nothing else to do — thank you!";
    } else {
      // Manual share-code fallback.
      $("sec-partner").classList.remove("hidden");
      $("btn-restart").parentNode.classList.remove("hidden");
      $("results-title").textContent = "Your picks are saved ✓";
      $("results-sub").textContent = rec.likes.length + " favourites, ranked. Now combine with your partner.";
    }
  }

  function cloudEnabled() {
    return !!(window.HM_SUPABASE_URL && window.HM_SUPABASE_KEY);
  }
  function sbHeaders(extra) {
    var h = { apikey: window.HM_SUPABASE_KEY, Authorization: "Bearer " + window.HM_SUPABASE_KEY };
    for (var k in (extra || {})) h[k] = extra[k];
    return h;
  }
  function submitToCloud(rec) {
    if (!cloudEnabled()) return;
    try {
      fetch(window.HM_SUPABASE_URL + "/rest/v1/submissions", {
        method: "POST",
        headers: sbHeaders({ "Content-Type": "application/json", Prefer: "return=minimal" }),
        body: JSON.stringify({ name: rec.name, likes: rec.likes, nopes: rec.nopes })
      }).catch(function () {});
    } catch (e) { /* fire-and-forget */ }
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

  // Organizer: run a combine of any two records (from cloud or pasted codes)
  function organizerCombine(a, b) {
    $("sec-partner").classList.add("hidden");
    $("results-title").textContent = "Combined results";
    $("results-sub").textContent = (a.name || "Person 1") + " + " + (b.name || "Person 2") + " — where your tastes meet.";
    $("btn-restart").parentNode.classList.add("hidden");
    combine(a, b);
    show("screen-results");
    window.scrollTo(0, 0);
  }

  // Manual: paste two codes
  $("org-combine").addEventListener("click", function () {
    var a, b;
    try { a = decodeRec($("org-a").value); } catch (e) { alert("The first code didn't read — check you pasted all of it."); return; }
    try { b = decodeRec($("org-b").value); } catch (e) { alert("The second code didn't read — check you pasted all of it."); return; }
    organizerCombine(a, b);
  });

  // Cloud: load all submissions and pick two
  var subs = [], selected = [];
  $("org-load").addEventListener("click", function () {
    if (!cloudEnabled()) { alert("The cloud store isn't configured yet."); return; }
    var btn = this;
    btn.textContent = "Loading…";
    fetch(window.HM_SUPABASE_URL + "/rest/v1/submissions?select=name,likes,nopes,created_at&order=created_at.desc",
      { headers: sbHeaders() })
      .then(function (r) { return r.json(); })
      .then(function (list) {
        subs = Array.isArray(list) ? list : [];
        selected = [];
        renderSubs();
        btn.textContent = "Reload submissions ↻";
        $("org-combine-sel").classList.add("hidden");
      })
      .catch(function (e) {
        btn.textContent = "Load everyone's submissions ↻";
        alert("Couldn't load submissions: " + e);
      });
  });

  function renderSubs() {
    var el = $("org-list");
    if (!subs.length) { el.innerHTML = '<p class="note">No submissions yet.</p>'; return; }
    el.innerHTML = subs.map(function (s, i) {
      var n = (s.likes || []).length;
      return '<div class="sub-row" data-i="' + i + '"><span>' + esc(s.name || "(no name)") +
             '</span><span class="cnt">' + n + " favourites</span></div>";
    }).join("");
    Array.prototype.forEach.call(el.querySelectorAll(".sub-row"), function (row) {
      row.addEventListener("click", function () {
        var i = +row.getAttribute("data-i");
        var pos = selected.indexOf(i);
        if (pos >= 0) { selected.splice(pos, 1); row.classList.remove("sel"); }
        else {
          if (selected.length >= 2) {
            var old = selected.shift();
            var oldRow = el.querySelector('.sub-row[data-i="' + old + '"]');
            if (oldRow) oldRow.classList.remove("sel");
          }
          selected.push(i); row.classList.add("sel");
        }
        $("org-combine-sel").classList.toggle("hidden", selected.length !== 2);
      });
    });
  }

  $("org-combine-sel").addEventListener("click", function () {
    if (selected.length !== 2) return;
    organizerCombine(subs[selected[0]], subs[selected[1]]);
  });

  function combine(me, other) {
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
    L.push((me.name || "Partner 1") + " — favourites, most-loved first:");
    L.push(favLines(me));
    L.push("   Preference signals: " + tagTally(me.likes).join(", "));
    L.push("");
    L.push((other.name || "Partner 2") + " — favourites, most-loved first:");
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

  $("btn-open-claude").addEventListener("click", function () {
    copy($("claude-brief").value);
    this.textContent = "Copied ✓ — opening Claude…";
    window.open("https://claude.ai/new", "_blank", "noopener");
  });

  $("btn-restart").addEventListener("click", function () {
    state.name = ""; state.idx = 0; state.decisions = []; state.rankOrder = [];
    $("combined").classList.add("hidden");
    $("import-box").value = "";
    $("name-input").value = "";
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

  function route() {
    var h = (location.hash || "").replace("#", "");
    if (h === "organizer") show("screen-organizer");
    else if (h === "") {
      // only snap back to start if we're not mid-flow
      if ($("screen-organizer").classList.contains("hidden") === false) show("screen-start");
    }
  }
  window.addEventListener("hashchange", route);

  // Until the cloud store is configured, hide the load panel and default to manual codes
  if (!cloudEnabled()) {
    $("org-cloud").classList.add("hidden");
    $("org-manual").setAttribute("open", "");
  }

  if ((location.hash || "").replace("#", "") === "organizer") show("screen-organizer");
  else show("screen-start");
})();
