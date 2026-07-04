# Honeymoon Swipe — deck research (new cards)

Research pass for the couple's brief: 2 weeks in **late November**, two stops (pair one experiential week with one decompress week), true Aman-tier luxury, amazing food, **light activity only** (walks, game drives, boat rides — no trekking/altitude exertion), with a bonus lean toward the bride's love of off-the-beaten-path **"earth" experiences** (gems, fossils, salt pans, caves, hot springs, geology). Every place below is genuinely good to visit in late November (Southern Hemisphere early summer / dry-season tropics / autumn-colour Japan).

These are all **NEW** — none duplicate the six already in `cards.js` (Amanpuri, Amangiri, Lightning Ridge, Sabi Sand, Cape Town & Winelands, Manda Island). Do NOT paste these into `cards.js` blindly; they're a research shortlist. Blurbs are original; `source`/`source_url` credit the curator I found the place through.

```js
// 53 candidate cards — paste-ready object literals matching the app schema.
const HM_CARDS_RESEARCH = [

  // ————————————————————————————————————————————————
  // DECOMPRESS — barefoot-luxury beaches & islands (late-Nov good)
  // ————————————————————————————————————————————————
  {
    id: "soneva-fushi-maldives",
    place: "Soneva Fushi",
    location: "Baa Atoll, Maldives",
    experience: "Bike the sandy jungle paths to your own beach villa, then a barefoot dinner and the open-air observatory after dark.",
    blurb: "The original Maldivian castaway fantasy — jungle-shaded treehouse villas, no shoes, no news, and food that quietly outshines the postcard.",
    quote: "",
    source: "The Luxury Travel Expert",
    source_url: "https://theluxurytravelexpert.com/soneva-fushi-maldives-resort-review/",
    image: "",
    region: "island",
    week_fit: "decompress",
    tags: ["beach", "island", "luxury", "food", "spa", "privacy", "low-activity", "nov-good", "eco"]
  },
  {
    id: "cheval-blanc-randheli-maldives",
    place: "Cheval Blanc Randheli",
    location: "Noonu Atoll, Maldives",
    experience: "A private-pool water villa with butler and a seaplane-in arrival, then couture French-Maldivian tasting menus over the lagoon.",
    blurb: "LVMH's most design-forward island — the Maldives dressed by a Paris atelier, all clean lines, cool marble and quiet extravagance.",
    quote: "",
    source: "The Luxury Traveller",
    source_url: "https://theluxurytraveller.com/hotel-reviews/cheval-blanc-randheli-maldives/",
    image: "",
    region: "island",
    week_fit: "decompress",
    tags: ["beach", "island", "luxury", "food", "design", "spa", "privacy", "low-activity", "nov-good"]
  },
  {
    id: "soneva-jani-maldives",
    place: "Soneva Jani",
    location: "Noonu Atoll, Maldives",
    experience: "Slide straight from your overwater deck into the lagoon, then retract the bedroom roof and fall asleep under the stars.",
    blurb: "The overwater villa reimagined as a grown-up playground — a private lagoon, a water slide off the deck, and a roof that opens to the Milky Way.",
    quote: "",
    source: "Soneva",
    source_url: "https://soneva.com/resorts/soneva-jani/",
    image: "",
    region: "island",
    week_fit: "decompress",
    tags: ["island", "beach", "luxury", "overwater", "spa", "privacy", "low-activity", "nov-good", "quirky"]
  },
  {
    id: "six-senses-zil-pasyon-seychelles",
    place: "Six Senses Zil Pasyon",
    location: "Félicité Island, Seychelles",
    experience: "Wander boulder-framed beaches to a spa tucked among the granite, then hop a boat to a neighbouring sister island for lunch.",
    blurb: "Just thirty villas scattered across a private granite island — that signature Seychelles drama of pink boulders meeting turquoise, at its most sybaritic.",
    quote: "",
    source: "The Private Traveller",
    source_url: "https://theprivatetraveller.com/hotel-reviews/six-senses-zil-pasyon",
    image: "",
    region: "island",
    week_fit: "decompress",
    tags: ["island", "beach", "luxury", "spa", "privacy", "food", "low-activity", "nov-good", "dramatic-landscape"]
  },
  {
    id: "north-island-seychelles",
    place: "North Island, a Luxury Collection Resort",
    location: "North Island, Seychelles",
    experience: "Eleven villas, 170 free-roaming giant tortoises, and turtle-nesting season on the sand — order the menu, time and place all your own.",
    blurb: "The private island where royalty honeymoons — a conservation-first Eden of eleven villas where a 150-year-old tortoise is basically staff.",
    quote: "\"Your venue, your menu, your time.\"",
    source: "CNN Travel",
    source_url: "https://www.cnn.com/travel/north-island-seychelles-spc-intl",
    image: "",
    region: "island",
    week_fit: "decompress",
    tags: ["island", "beach", "luxury", "privacy", "wildlife", "low-activity", "nov-good", "off-beat"]
  },
  {
    id: "fregate-island-private-seychelles",
    place: "Fregate Island Private",
    location: "Fregate Island, Seychelles",
    experience: "Help a keeper log a nesting hawksbill or amble among 3,000 wild Aldabra tortoises, then retreat to a clifftop villa with its own pool.",
    blurb: "A mini-Galápagos of just sixteen villas — where the luxury is genuine wildness: thousands of giant tortoises, saved songbirds, and eighty-percent home-grown dinners.",
    quote: "",
    source: "Luxe Adventure Traveler",
    source_url: "https://luxeadventuretraveler.com/fregate-island-private-seychelles/",
    image: "",
    region: "island",
    week_fit: "either",
    tags: ["island", "beach", "luxury", "wildlife", "off-beat", "privacy", "low-activity", "nov-good"]
  },
  {
    id: "one-only-le-saint-geran-mauritius",
    place: "One&Only Le Saint Géran",
    location: "Belle Mare, Mauritius",
    experience: "Two miles of white sand on a private peninsula, a champagne turndown, and a table at the resort's Michelin-pedigree kitchen.",
    blurb: "The grande dame of the Indian Ocean, reborn — a coconut-grove peninsula built for slow days and theatrical dinners, warming into summer before the cyclone months.",
    quote: "",
    source: "The Luxury Travel Expert",
    source_url: "https://theluxurytravelexpert.com/review-one-only-st-geran-mauritius/",
    image: "",
    region: "tropical-beach",
    week_fit: "decompress",
    tags: ["beach", "island", "luxury", "food", "spa", "low-activity", "nov-good"]
  },
  {
    id: "kisawa-sanctuary-mozambique",
    place: "Kisawa Sanctuary",
    location: "Benguerra Island, Bazaruto Archipelago, Mozambique",
    experience: "A dune-perched residence with private beach, pool and a little Moke to potter in — plus a lazy dhow cruise on the warm Indian Ocean.",
    blurb: "Eleven wildly original residences across 300 hectares of dune and beach — an off-radar Mozambican archipelago that's dry, warm and gorgeous before the rains.",
    quote: "",
    source: "OutThere Magazine",
    source_url: "https://www.outthere.travel/kisawa-sanctuary-benguerra-island-mozambique/",
    image: "",
    region: "tropical-beach",
    week_fit: "decompress",
    tags: ["beach", "island", "luxury", "privacy", "spa", "low-activity", "nov-good", "dramatic-landscape", "off-beat"]
  },
  {
    id: "miavana-madagascar",
    place: "Miavana by Time + Tide",
    location: "Nosy Ankao, Madagascar",
    experience: "Helicopter in to a private island, snorkel over untouched reef, then watch lemurs from the deck of a villa with its own pool.",
    blurb: "Possibly the most remote barefoot palace on earth — a helicopter-only Madagascan island where the reef, the turtles and the lemurs come with a butler.",
    quote: "",
    source: "The Official Luxe",
    source_url: "https://www.theofficialluxe.com/post/time-tide-miavana-a-wildly-luxurious-escape-in-madagascar",
    image: "",
    region: "island",
    week_fit: "decompress",
    tags: ["island", "beach", "luxury", "wildlife", "privacy", "off-beat", "low-activity", "nov-good"]
  },
  {
    id: "capella-lodge-lord-howe",
    place: "Capella Lodge",
    location: "Lord Howe Island, Australia",
    experience: "Nine suites below two dreaming peaks — lagoon swims, a glass of local wine at Gower's, and produce-driven dinners that change daily.",
    blurb: "A secret UNESCO island most Australians never reach — barefoot, endemic-bird-loud and only nine suites, at its warm subtropical best in November.",
    quote: "",
    source: "Robb Report",
    source_url: "https://robbreport.com/travel/resorts/capella-lodge-lord-howe-island-australia-review-1236752952/",
    image: "",
    region: "island",
    week_fit: "either",
    tags: ["island", "beach", "luxury", "food", "off-beat", "low-activity", "nov-good", "dramatic-landscape"]
  },
  {
    id: "qualia-hamilton-island",
    place: "qualia",
    location: "Hamilton Island, Whitsundays, Australia",
    experience: "A private-plunge-pool pavilion over the Coral Sea, then a scenic flight over Heart Reef and a table at Long Pavilion in the treetops.",
    blurb: "Adults-only, water-facing pavilions on the Whitsundays' northern tip — the softest, most polished way to have the Great Barrier Reef on your doorstep.",
    quote: "",
    source: "Scott Dunn",
    source_url: "https://www.scottdunn.com/us/australia/hotels/qualia",
    image: "",
    region: "island",
    week_fit: "decompress",
    tags: ["island", "beach", "luxury", "food", "spa", "low-activity", "nov-good"]
  },
  {
    id: "lizard-island-gbr",
    place: "Lizard Island Resort",
    location: "Great Barrier Reef, Queensland, Australia",
    experience: "Take a picnic dinghy to one of 24 private beaches and snorkel the fringing reef straight off the sand — no boat, no crowds.",
    blurb: "The only luxury resort sitting directly on the outer reef, with two-dozen beaches for forty suites — barefoot indulgence where snorkelling means wading off your own patch of sand.",
    quote: "",
    source: "Islands.com",
    source_url: "https://www.islands.com/1952509/australia-remote-lizard-island-resort-great-barrier-reef-luxurious-world/",
    image: "",
    region: "island",
    week_fit: "decompress",
    tags: ["island", "beach", "luxury", "food", "privacy", "low-activity", "nov-good"]
  },
  {
    id: "southern-ocean-lodge-kangaroo-island",
    place: "Southern Ocean Lodge",
    location: "Kangaroo Island, South Australia",
    experience: "Cliff-edge suites over the wild Southern Ocean, all-inclusive island experiences, and kangaroos, koalas and sea lions on the doorstep.",
    blurb: "Australia's flagship coastal lodge, rebuilt more beautiful than before on a limestone bluff — 'a zoo without fences' where wildlife wanders and you barely have to move.",
    quote: "",
    source: "Forbes",
    source_url: "https://www.forbes.com/sites/everettpotter/2023/12/06/australias-southern-ocean-lodge-is-reborn/",
    image: "",
    region: "island",
    week_fit: "either",
    tags: ["island", "wildlife", "luxury", "food", "low-activity", "nov-good", "dramatic-landscape", "design"]
  },
  {
    id: "saffire-freycinet-tasmania",
    place: "Saffire Freycinet",
    location: "Coles Bay, Tasmania, Australia",
    experience: "Pull on waders at a working oyster lease, shuck-and-slurp with the Hazards mountains behind you, then a Wineglass Bay cruise.",
    blurb: "Twenty glass-fronted suites over Tasmania's east coast, with a serious kitchen and cool-summer November air — light coastal experiences, big flavours.",
    quote: "",
    source: "Jacada Travel",
    source_url: "https://www.jacadatravel.com/australasia/australia/tasmania/accommodation/saffire-freycinet/",
    image: "",
    region: "island",
    week_fit: "either",
    tags: ["coast", "food", "wine", "luxury", "low-activity", "nov-good", "spa", "dramatic-landscape"]
  },
  {
    id: "six-senses-zighy-bay-oman",
    place: "Six Senses Zighy Bay",
    location: "Musandam Peninsula, Oman",
    experience: "A private-pool villa between craggy mountains and a mile of beach, a sunset dhow cruise, and a wine cellar carved into the hillside.",
    blurb: "A stone 'fishing village' cradled between dramatic mountains and the Gulf of Oman — and late November is exactly when Oman turns balmy, dry and perfect.",
    quote: "",
    source: "The Luxury Travel Expert",
    source_url: "https://theluxurytravelexpert.com/review-six-senses-zighy-bay-oman/",
    image: "",
    region: "tropical-beach",
    week_fit: "decompress",
    tags: ["beach", "luxury", "spa", "food", "low-activity", "nov-good", "dramatic-landscape", "privacy"]
  },

  // ————————————————————————————————————————————————
  // EXPERIENTIAL — safari (Southern & East Africa green/dry season)
  // ————————————————————————————————————————————————
  {
    id: "singita-grumeti-tanzania",
    place: "Singita Grumeti (Sasakwa)",
    location: "Grumeti Reserve, Serengeti, Tanzania",
    experience: "Edwardian-manor cottages with infinity pools, unhurried game drives on a private 350,000-acre reserve as the short rains green the plains.",
    blurb: "Singita's most storied address — Out-of-Africa grandeur on a vast private slice of the Serengeti, softest and greenest just as the November herds move through.",
    quote: "",
    source: "Ker & Downey",
    source_url: "https://kerdowney.com/blog/tanzania-safari-singita-grumeti-reserve/",
    image: "",
    region: "savanna",
    week_fit: "experiential",
    tags: ["safari", "wildlife", "luxury", "food", "low-activity", "nov-good", "privacy"]
  },
  {
    id: "andbeyond-phinda-south-africa",
    place: "&Beyond Phinda Private Game Reserve",
    location: "KwaZulu-Natal, South Africa",
    experience: "Glass-walled forest suites, cheetah and black-rhino sightings from the Land Cruiser, and the Indian Ocean beaches a short hop away.",
    blurb: "Seven habitats and Big Five across one lush reserve near the coast — a malaria-light, romance-tuned safari that pairs game drives with barefoot beach add-ons.",
    quote: "",
    source: "&Beyond",
    source_url: "https://www.andbeyond.com/destinations/africa/south-africa/kwazulu-natal/phinda-private-game-reserve/",
    image: "",
    region: "savanna",
    week_fit: "experiential",
    tags: ["safari", "wildlife", "luxury", "low-activity", "nov-good", "culture"]
  },
  {
    id: "royal-malewane-south-africa",
    place: "Royal Malewane",
    location: "Thornybush, Greater Kruger, South Africa",
    experience: "Africa's most decorated guiding team tracks leopard from your seat, then a spa, a colour-drenched suite, and a 60-whisky bush bar.",
    blurb: "Liz Biden's flamboyant Kruger legend — the deepest guiding bench on the continent, plunge-pool suites and food to match, all seen from the comfort of a vehicle.",
    quote: "",
    source: "Robb Report",
    source_url: "https://robbreport.com/travel/hotels/inside-south-africas-waterside-by-royal-malewane-where-color-not-khaki-is-king-1234869174/",
    image: "",
    region: "savanna",
    week_fit: "experiential",
    tags: ["safari", "wildlife", "luxury", "food", "spa", "low-activity", "nov-good"]
  },
  {
    id: "tswalu-kalahari-south-africa",
    place: "Tswalu Kalahari Reserve",
    location: "Northern Cape, South Africa",
    experience: "Sit with a wild but habituated meerkat colony at sunrise, track pangolin and aardvark by vehicle, then dinner on the red dunes.",
    blurb: "South Africa's largest private reserve and its most quietly magical — November rains gild the Kalahari green, the meerkats pose, and the whole place feels like your own.",
    quote: "",
    source: "Extraordinary Journeys",
    source_url: "https://extraordinaryjourneys.com/destinations/africa/where-to-go/tswalu-kalahari",
    image: "",
    region: "desert",
    week_fit: "experiential",
    tags: ["safari", "wildlife", "desert", "off-beat", "low-activity", "nov-good", "dramatic-landscape", "privacy"]
  },
  {
    id: "angama-mara-kenya",
    place: "Angama Mara",
    location: "Maasai Mara, Kenya",
    experience: "Tented suites 'suspended in mid-air' over the Rift Valley, an Out of Africa picnic on the film's actual site, and easy drives below.",
    blurb: "The most cinematic view in the Mara — glass-fronted tents on the escarpment edge, with the greener, quieter short-rains season and a proper kitchen.",
    quote: "",
    source: "Go2Africa",
    source_url: "https://www.go2africa.com/accommodation/angama-mara",
    image: "",
    region: "savanna",
    week_fit: "experiential",
    tags: ["safari", "wildlife", "luxury", "food", "low-activity", "nov-good", "dramatic-landscape"]
  },
  {
    id: "mombo-camp-okavango",
    place: "Wilderness Mombo Camp",
    location: "Moremi, Okavango Delta, Botswana",
    experience: "Elevated tents over game-rich floodplain in the 'predator capital of Africa', with a spa cocoon and drives where lion and leopard abound.",
    blurb: "The Okavango's most famous camp, on an island where the wildlife rarely leaves — pure water-and-plains safari from a raised deck, no exertion required.",
    quote: "",
    source: "Jacada Travel",
    source_url: "https://www.jacadatravel.com/africa/botswana/mombo-concession-okavango/accommodation/mombo-camp/",
    image: "",
    region: "savanna",
    week_fit: "experiential",
    tags: ["safari", "wildlife", "luxury", "low-activity", "nov-good", "privacy"]
  },

  // ————————————————————————————————————————————————
  // EXPERIENTIAL — desert, salt pans & "earth" landscapes
  // ————————————————————————————————————————————————
  {
    id: "jacks-camp-makgadikgadi",
    place: "Jack's Camp",
    location: "Makgadikgadi Salt Pans, Botswana",
    experience: "Walk out to a habituated meerkat gang, ride a quad across a blinding-white salt pan the size of a country, and sleep under 1950s-safari canvas.",
    blurb: "A gloriously eccentric tented world on one of Earth's largest salt flats — meerkats, brown hyena, ancient baobabs and, from November, thousands of migrating zebra.",
    quote: "",
    source: "Natural Selection",
    source_url: "https://naturalselection.travel/camps/jacks-camp-botswana/",
    image: "",
    region: "desert",
    week_fit: "experiential",
    tags: ["desert", "salt-pan", "off-beat", "wildlife", "low-activity", "nov-good", "dramatic-landscape", "quirky"]
  },
  {
    id: "andbeyond-sossusvlei-namibia",
    place: "&Beyond Sossusvlei Desert Lodge",
    location: "Namib Desert, Namibia",
    experience: "A glass-and-stone suite with a skylight over the bed for stargazing, and a gentle drive to Deadvlei's white clay pan among the world's tallest dunes.",
    blurb: "A design object dropped into the oldest desert on earth — orange dunes, a bleached salt-clay pan studded with 900-year-dead trees, and some of the clearest night skies anywhere.",
    quote: "",
    source: "Go2Africa",
    source_url: "https://www.go2africa.com/accommodation/sossusvlei-desert-lodge",
    image: "",
    region: "desert",
    week_fit: "either",
    tags: ["desert", "dramatic-landscape", "salt-pan", "low-activity", "nov-good", "luxury", "design", "stargazing"]
  },
  {
    id: "hoanib-skeleton-coast-namibia",
    place: "Wilderness Hoanib Skeleton Coast Camp",
    location: "Kaokoland / Skeleton Coast, Namibia",
    experience: "Fly in to six tents where the desert meets the sea, and track desert-adapted elephant and lion by 4x4 across an otherworldly dry riverbed.",
    blurb: "One of the most remote luxury camps in Africa — a solar-powered handful of tents amid dunes, springs and shipwreck coast, and elephants that walk the sand.",
    quote: "",
    source: "The Luxury Travel Expert",
    source_url: "https://theluxurytravelexpert.com/review-hoanib-skeleton-coast/",
    image: "",
    region: "desert",
    week_fit: "experiential",
    tags: ["desert", "wildlife", "off-beat", "dramatic-landscape", "low-activity", "nov-good", "remote"]
  },
  {
    id: "wolwedans-namibrand",
    place: "Wolwedans Dune Camp",
    location: "NamibRand Nature Reserve, Namibia",
    experience: "A tent on a 250m dune with your bed rolled out under a certified dark sky — scenic drives and sundowners, nothing more strenuous than stargazing.",
    blurb: "Perched on the crest of a red dune in a private Dark-Sky reserve — a soulful, low-key desert idyll where the main event is the silence and the stars.",
    quote: "",
    source: "Yellow Zebra Safaris",
    source_url: "https://yellowzebrasafaris.com/us/namibia/accommodation/wolwedans-dune-camp/",
    image: "",
    region: "desert",
    week_fit: "either",
    tags: ["desert", "dramatic-landscape", "stargazing", "low-activity", "nov-good", "off-beat", "eco"]
  },
  {
    id: "matetsi-victoria-falls",
    place: "Matetsi Victoria Falls",
    location: "Zambezi River, Zimbabwe",
    experience: "A river-lodge suite with a plunge pool over the Zambezi, a sunset cruise past hippo and elephant, and a short drive to the falls.",
    blurb: "Nine private miles of Zambezi frontage upstream of the falls — and November is the low-water 'Devil's-side' season when the Zimbabwe views come into their own.",
    quote: "",
    source: "Jacada Travel",
    source_url: "https://www.jacadatravel.com/africa/zimbabwe/victoria-falls/accommodation/matetsi-river-lodge/",
    image: "",
    region: "savanna",
    week_fit: "either",
    tags: ["safari", "waterfall", "dramatic-landscape", "boat", "luxury", "low-activity", "nov-good"]
  },
  {
    id: "awasi-atacama-chile",
    place: "Awasi Atacama",
    location: "San Pedro de Atacama, Chile",
    experience: "Your own guide and 4x4 for every day — drift out to flamingo-pink salt lagoons, hidden hot springs and petroglyphs, then stargaze through the lodge telescope.",
    blurb: "A twelve-room adobe hideaway with a private guide per room — the Atacama's salt flats, geology and impossibly clear skies, explored entirely on your own gentle terms.",
    quote: "",
    source: "Plan South America",
    source_url: "https://www.plansouthamerica.com/awasi-atacama-chile/",
    image: "",
    region: "desert",
    week_fit: "experiential",
    tags: ["desert", "salt-pan", "dramatic-landscape", "off-beat", "low-activity", "nov-good", "food", "stargazing"]
  },
  {
    id: "explora-rapa-nui",
    place: "Explora Rapa Nui",
    location: "Easter Island, Chile",
    experience: "A guided amble among the moai at Rano Raraku quarry and Tongariki, then back to an all-inclusive lodge with a pool over the Pacific.",
    blurb: "The remotest inhabited island on earth, done in comfort — moai, volcanic craters and Polynesian-Chilean cooking, in warm, dry, uncrowded November.",
    quote: "",
    source: "Mr & Mrs Smith",
    source_url: "https://www.mrandmrssmith.com/luxury-hotels/explora-rapa-nui",
    image: "",
    region: "island",
    week_fit: "either",
    tags: ["island", "culture", "off-beat", "dramatic-landscape", "low-activity", "nov-good", "archaeology"]
  },
  {
    id: "belmond-das-cataratas-iguazu",
    place: "Belmond Hotel das Cataratas",
    location: "Iguassu Falls, Brazil",
    experience: "The only hotel inside the national park — walk the falls' catwalks before and after the day-trippers, then a Brazilian barbecue by the pool.",
    blurb: "A pink colonial grande dame with the falls to itself after hours — dramatic without a drop of effort, in warm early-summer November.",
    quote: "",
    source: "Forbes Travel Guide",
    source_url: "https://www.forbestravelguide.com/hotels/iguassu-falls-brazil/hotel-das-cataratas-a-belmond-hotel-iguassu-falls",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["waterfall", "dramatic-landscape", "luxury", "low-activity", "nov-good", "food"]
  },
  {
    id: "pikaia-lodge-galapagos",
    place: "Pikaia Lodge",
    location: "Santa Cruz, Galápagos, Ecuador",
    experience: "A land-based Galápagos with a private yacht for day trips — walk among giant tortoises on the lodge's own reserve, snorkel with sea lions, sleep in a real bed.",
    blurb: "The Galápagos without the cabin — a hilltop eco-lodge on a tortoise reserve, day-tripping to the wildlife by yacht in the cool, clear late-year season.",
    quote: "",
    source: "Rainforest Cruises",
    source_url: "https://www.rainforestcruises.com/lodges/pikaia-lodge-galapagos",
    image: "",
    region: "island",
    week_fit: "either",
    tags: ["island", "wildlife", "off-beat", "low-activity", "nov-good", "dramatic-landscape", "boat"]
  },
  {
    id: "tierra-patagonia-chile",
    place: "Tierra Patagonia",
    location: "Torres del Paine, Chile",
    experience: "Watch the granite towers from a heated infinity pool, then a boat toward a calving glacier or a vehicle-based puma-tracking outing — no summit required.",
    blurb: "A lodge shaped like a sun-bleached fossil on Lake Sarmiento — opens for spring in November, with plenty of soft, low-effort ways to take in Patagonia's drama.",
    quote: "",
    source: "Jacada Travel",
    source_url: "https://www.jacadatravel.com/latin-america/chile/torres-del-paine/accommodation/tierra-patagonia/",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["mountain", "dramatic-landscape", "wildlife", "luxury", "spa", "low-activity", "nov-good", "design"]
  },

  // ————————————————————————————————————————————————
  // EXPERIENTIAL — outback, gems & fossils (the bride's "earth" wish)
  // ————————————————————————————————————————————————
  {
    id: "longitude-131-uluru",
    place: "Longitude 131°",
    location: "Uluru, Northern Territory, Australia",
    experience: "A luxury tent facing Uluru through the glass, dinner under the stars, and a slow wander through Bruce Munro's 50,000-stem Field of Light.",
    blurb: "Fifteen glass-fronted tents with Uluru filling the window — Australia's most iconic outback view served with fine wine and zero heavy lifting.",
    quote: "",
    source: "Australian Traveller",
    source_url: "https://www.australiantraveller.com/nt/red-centre/uluru/glamping-uluru-at-longitude-131/",
    image: "",
    region: "outback",
    week_fit: "experiential",
    tags: ["outback", "desert", "dramatic-landscape", "luxury", "culture", "low-activity", "nov-good", "stargazing"]
  },
  {
    id: "arkaba-flinders-ranges",
    place: "Arkaba Conservancy",
    location: "Flinders Ranges, South Australia",
    experience: "A four-suite homestead on a 60,000-acre rewilded station, and a guided visit to the Ediacaran fossil beds where complex life first appears.",
    blurb: "Homestead luxury in ancient ranges twice as old as the dinosaurs — the bride's dream, where an easy tour reads 550-million-year-old fossils out of the rock.",
    quote: "",
    source: "Luxury Lodges of Australia",
    source_url: "https://luxurylodgesofaustralia.com.au/activity/fossils-of-the-flinders/",
    image: "",
    region: "outback",
    week_fit: "experiential",
    tags: ["outback", "fossils", "geology", "wildlife", "off-beat", "low-activity", "nov-good", "dramatic-landscape"]
  },
  {
    id: "coober-pedy-opal",
    place: "Coober Pedy Opal Fields",
    location: "Outback South Australia",
    experience: "Go 'noodling' by hand through the mullock heaps for missed opal (finders keepers), then explore an original 1916 mine and an underground dugout home.",
    blurb: "The subterranean opal capital of the world — a wonderfully strange outback town where you live underground to escape the heat and hunt gems for keeps.",
    quote: "",
    source: "Passport & Pixels",
    source_url: "https://www.passportandpixels.com/coober-pedy-opal-mining-australia/",
    image: "",
    region: "outback",
    week_fit: "experiential",
    tags: ["outback", "opal", "gem-digging", "off-beat", "quirky", "low-activity", "nov-good", "earth"]
  },
  {
    id: "sapphire-gemfields-queensland",
    place: "The Sapphire Gemfields (Rubyvale)",
    location: "Central Queensland, Australia",
    experience: "Buy a bag of 'wash' at a fossicking park and sieve out your own sapphires and zircons — no digging, all ages, keep whatever sparkles.",
    blurb: "The southern hemisphere's largest sapphire field — a low-key, treasure-hunt afternoon in a string of gloriously offbeat gem towns.",
    quote: "",
    source: "Get In The Hotspot",
    source_url: "https://www.getinthehotspot.com/fossicking-for-sapphires-rubyvale/",
    image: "",
    region: "outback",
    week_fit: "experiential",
    tags: ["outback", "gem-digging", "sapphire", "off-beat", "quirky", "low-activity", "nov-good", "earth"]
  },

  // ————————————————————————————————————————————————
  // EITHER — wine country & design
  // ————————————————————————————————————————————————
  {
    id: "cavas-awasi-mendoza",
    place: "Cavas Wine Lodge (Awasi Mendoza)",
    location: "Luján de Cuyo, Mendoza, Argentina",
    experience: "A private villa with plunge pool amid the vines, Andes on the horizon, a wine-infused spa treatment and cellar-door hopping with a guide.",
    blurb: "A Relais & Châteaux villa retreat set right in the Malbec vineyards — springtime-green and warm in November, with the Andes as a backdrop and a very good table.",
    quote: "",
    source: "Plan South America",
    source_url: "https://www.plansouthamerica.com/cavas-wine-lodge-argentina/",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["wine", "food", "luxury", "spa", "low-activity", "nov-good", "dramatic-landscape"]
  },
  {
    id: "vina-vik-chile",
    place: "Viña Vik",
    location: "Millahue Valley, Chile",
    experience: "A titanium-roofed art hotel over an endless vineyard — a private tasting of the flagship reds, museum-grade art on the walls, and a valley-view spa.",
    blurb: "Part avant-garde art object, part cult winery two hours from Santiago — 22 art-filled suites over the vines, at their spring best in November.",
    quote: "",
    source: "Mr & Mrs Smith",
    source_url: "https://www.mrandmrssmith.com/luxury-hotels/vik-chile",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["wine", "food", "luxury", "design", "art", "spa", "low-activity", "nov-good"]
  },
  {
    id: "the-louise-barossa",
    place: "The Louise",
    location: "Barossa Valley, South Australia",
    experience: "A villa suite among the vines with an outdoor shower, a 'backstage pass' to the great Barossa cellars, and dinner at Appellation.",
    blurb: "A serene fifteen-suite lodge in Australia's most famous wine valley — warm spring days, iconic Shiraz, and one of the country's benchmark restaurants next door.",
    quote: "",
    source: "Decanter",
    source_url: "https://www.decanter.com/wine-travel/decanters-dream-destination-the-louise-barossa-south-australia-493679/",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["wine", "food", "luxury", "low-activity", "nov-good"]
  },

  // ————————————————————————————————————————————————
  // EITHER / EXPERIENTIAL — food cities (Southern Hemisphere spring / dry season)
  // ————————————————————————————————————————————————
  {
    id: "capella-sydney",
    place: "Capella Sydney",
    location: "Sydney, Australia",
    experience: "A heritage-building suite steps from the Opera House and harbour, oysters and local wine at Brasserie 1930, and easy strolls through the Botanic Garden.",
    blurb: "Sydney's most elegant new hotel inside a 1912 landmark — a quiet-luxe base for harbour walks and a world-class dining city in glorious late-spring form.",
    quote: "",
    source: "South China Morning Post",
    source_url: "https://www.scmp.com/magazines/style/lifestyle/travel-hotels/article/3275288/how-capella-sydney-hotel-encapsulates-australias-rich-heritage-colonial-architecture-restaurants",
    image: "",
    region: "coastal-city",
    week_fit: "either",
    tags: ["city", "food", "luxury", "culture", "low-activity", "nov-good", "design"]
  },
  {
    id: "palacio-duhau-buenos-aires",
    place: "Palacio Duhau – Park Hyatt",
    location: "Buenos Aires, Argentina",
    experience: "A palace-wing suite in Recoleta, spit-roasted beef and Malbec, and a late night watching porteños dance at a milonga.",
    blurb: "Old-world Recoleta grandeur in the 'Paris of South America' — steak, tango and warm spring evenings make late November prime time in Buenos Aires.",
    quote: "",
    source: "Luxury Travel Advisor",
    source_url: "https://www.luxurytraveladvisor.com/hotels/palacio-duhau-park-hyatt-buenos-aires",
    image: "",
    region: "coastal-city",
    week_fit: "either",
    tags: ["city", "food", "culture", "wine", "luxury", "low-activity", "nov-good"]
  },
  {
    id: "lima-food-capital",
    place: "Belmond Miraflores Park (Lima)",
    location: "Lima, Peru",
    experience: "A clifftop suite over the Pacific in Miraflores, and a table at Central or Maido — routinely named among the world's very best restaurants.",
    blurb: "The gastronomic capital of Latin America, on the coast where late-spring November stays dry and mild — dinner is the destination here.",
    quote: "",
    source: "Luxury Travel Magazine",
    source_url: "https://www.luxurytravelmagazine.com/news-articles/exploring-lima-in-luxury",
    image: "",
    region: "coastal-city",
    week_fit: "experiential",
    tags: ["city", "food", "culture", "luxury", "low-activity", "nov-good"]
  },
  {
    id: "mexico-city-food",
    place: "Four Seasons Mexico City",
    location: "Mexico City, Mexico",
    experience: "A leafy courtyard hotel on Reforma, walks in Chapultepec and Polanco, and dinner at Pujol or Quintonil — with November's dry, mild days.",
    blurb: "One of the world's great food cities, at its most pleasant in the dry post-rain season — a light, walkable, endlessly delicious week.",
    quote: "",
    source: "Mexico Dave",
    source_url: "https://mexicodave.com/mexico-city-travel",
    image: "",
    region: "coastal-city",
    week_fit: "either",
    tags: ["city", "food", "culture", "luxury", "low-activity", "nov-good"]
  },

  // ————————————————————————————————————————————————
  // EITHER — Japan in autumn colour + onsen (peak momiji, late Nov)
  // ————————————————————————————————————————————————
  {
    id: "aman-kyoto",
    place: "Aman Kyoto",
    location: "Kyoto, Japan",
    experience: "A ryokan-style room in an 80-acre secret forest garden, the Momiji Maple Terrace ablaze, and an onsen soak — late November is peak colour.",
    blurb: "A hidden garden sanctuary on Kyoto's forested edge, timed for the maples — Aman calm, exquisite kaiseki, and the year's best foliage just outside.",
    quote: "",
    source: "Nihonluxe",
    source_url: "https://nihonluxe.com/japan-autumn-foliage-luxury-guide/",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["culture", "food", "spa", "autumn", "low-activity", "nov-good", "design", "garden"]
  },
  {
    id: "hoshinoya-kyoto",
    place: "HOSHINOYA Kyoto",
    location: "Arashiyama, Kyoto, Japan",
    experience: "Arrive only by private boat up the Oi River to a riverside ryokan, then watch the Arashiyama maples turn from your room.",
    blurb: "A luxury ryokan you can reach only by boat, gliding up a jade river into the maples — quiet, ceremonial, and gorgeous at late-November peak colour.",
    quote: "",
    source: "Yolo Journal",
    source_url: "https://www.yolojournal.com/hoshinoya-kyoto/",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["culture", "food", "autumn", "boat", "ryokan", "low-activity", "nov-good", "design"]
  },
  {
    id: "aman-tokyo",
    place: "Aman Tokyo",
    location: "Tokyo, Japan",
    experience: "A washi-and-stone suite high above the city with Mount Fuji on the horizon, a huge urban spa, and omakase at Musashi by Aman.",
    blurb: "A serene, soaring sky-sanctuary above Tokyo Station — the calm luxe counterpoint to the world's greatest restaurant city, easily paired with Kyoto by bullet train.",
    quote: "",
    source: "Forbes Vetted",
    source_url: "https://www.forbes.com/sites/forbes-personal-shopper/article/aman-tokyo-review/",
    image: "",
    region: "coastal-city",
    week_fit: "either",
    tags: ["city", "food", "spa", "luxury", "culture", "low-activity", "nov-good", "design"]
  },
  {
    id: "gora-kadan-hakone",
    place: "Gora Kadan",
    location: "Hakone, Japan",
    experience: "A suite with its own open-air rotenburo hot-spring bath, a multi-course kaiseki dinner of matsutake mushroom, and the Hakone maples.",
    blurb: "A former imperial retreat turned onsen ryokan in the Hakone mountains — private mineral baths, autumn kaiseki, and hot-spring 'earth' magic in one.",
    quote: "",
    source: "Japan Uncharted",
    source_url: "https://japanuncharted.com/kanagawa/ryokan/gora-kadan-review",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["hot-springs", "onsen", "food", "culture", "spa", "autumn", "low-activity", "nov-good", "earth"]
  },
  {
    id: "amanemu-ise-shima",
    place: "Amanemu",
    location: "Ise-Shima, Japan",
    experience: "A villa with a private hot-spring bath over Ago Bay, a thermal-spring spa, and a barbecue lunch with a traditional ama free-diver.",
    blurb: "Aman's onsen resort above a pearl-farming bay — deep private hot-spring baths, mineral spa rituals, and comfortable autumn air.",
    quote: "",
    source: "The Week",
    source_url: "https://theweek.com/culture-life/travel/amanemu-an-ultra-luxury-onsen-retreat-in-japans-ise-shima-national-park",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["hot-springs", "onsen", "spa", "food", "low-activity", "nov-good", "coast", "earth"]
  },
  {
    id: "benesse-house-naoshima",
    place: "Benesse House",
    location: "Naoshima, Japan",
    experience: "Sleep inside a Tadao Ando art museum with 24-hour access to the galleries, then amble the shore past Kusama's yellow pumpkin.",
    blurb: "A museum-hotel on Japan's art island — spare Ando concrete, world-class installations at your door, and calm Seto Inland Sea days.",
    quote: "",
    source: "Remote Lands",
    source_url: "https://www.remotelands.com/hotel/benesse-house",
    image: "",
    region: "island",
    week_fit: "either",
    tags: ["island", "art", "culture", "design", "food", "low-activity", "nov-good", "off-beat"]
  },

  // ————————————————————————————————————————————————
  // EITHER / EXPERIENTIAL — New Zealand (late-spring, geothermal "earth")
  // ————————————————————————————————————————————————
  {
    id: "huka-lodge-taupo",
    place: "Huka Lodge",
    location: "Lake Taupō, New Zealand",
    experience: "A riverside suite on the emerald Waikato above the Huka Falls, complimentary fly rods, and long lodge dinners — spring-green in November.",
    blurb: "New Zealand's grande dame lodge on a trout river — quietly perfect for slow days, world-class fishing if you fancy it, and the geothermal wonders of Taupō nearby.",
    quote: "",
    source: "Mr & Mrs Smith",
    source_url: "https://www.mrandmrssmith.com/luxury-hotels/huka-lodge",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["river", "food", "luxury", "spa", "low-activity", "nov-good", "dramatic-landscape"]
  },
  {
    id: "kauri-cliffs-bay-of-islands",
    place: "Rosewood Kauri Cliffs",
    location: "Bay of Islands, New Zealand",
    experience: "A clifftop suite on 6,000 Pacific-facing acres, a cliff-edge infinity pool, and gentle drives to hidden beaches — mild, blooming November.",
    blurb: "Rosewood's Northland lodge on a green headland over the Cavalli Islands — sweeping ocean views and unhurried luxury, at its late-spring best.",
    quote: "",
    source: "Indagare",
    source_url: "https://indagare.com/lodging/lodge-at-kauri-cliffs",
    image: "",
    region: "island",
    week_fit: "either",
    tags: ["coast", "luxury", "food", "spa", "low-activity", "nov-good", "dramatic-landscape", "golf"]
  },
  {
    id: "waitomo-glowworm-caves",
    place: "Waitomo Glowworm Caves",
    location: "Waikato, New Zealand",
    experience: "Drift in silence on a small boat through a limestone grotto lit by thousands of glowworms — a low-effort underground marvel.",
    blurb: "One of earth's strangest, gentlest sights — a silent boat glide beneath a galaxy of glowworms in an ancient cave, easily paired with a luxury lodge stay.",
    quote: "",
    source: "Earth Trekkers",
    source_url: "https://www.earthtrekkers.com/waitomo-caves-blackwater-rafting/",
    image: "",
    region: "mountain",
    week_fit: "experiential",
    tags: ["cave", "earth", "boat", "off-beat", "dramatic-landscape", "low-activity", "nov-good", "geology"]
  },
  {
    id: "rotorua-wai-o-tapu",
    place: "Wai-O-Tapu Thermal Wonderland",
    location: "Rotorua, New Zealand",
    experience: "Walk the boardwalks past the vivid Champagne Pool and NZ's biggest bubbling mud pool, then soak in the historic Polynesian Spa mineral springs.",
    blurb: "New Zealand's geothermal theatre — steaming orange-rimmed pools, boiling mud and geysers on easy boardwalks, with a mineral-spring soak to finish. Pure 'earth' spectacle.",
    quote: "",
    source: "Petrina Darrah",
    source_url: "https://www.petrinadarrah.com/posts/rotorua-geothermal-parks",
    image: "",
    region: "mountain",
    week_fit: "experiential",
    tags: ["geothermal", "hot-springs", "earth", "geology", "off-beat", "dramatic-landscape", "low-activity", "nov-good", "culture"]
  },

  // ————————————————————————————————————————————————
  // EITHER — Oman mountains (Nov = start of prime dry-cool season)
  // ————————————————————————————————————————————————
  {
    id: "alila-jabal-akhdar-oman",
    place: "Alila Jabal Akhdar",
    location: "Al Jabal Al Akhdar, Oman",
    experience: "A canyon-edge suite 2,000m up on the 'Green Mountain', a gentle stroll along the ancient rose-and-pomegranate terraces, and a cliff-top infinity pool.",
    blurb: "A stone eyrie on the rim of a vast Omani gorge — dramatic, cool and blissfully quiet, and late November is exactly when this high desert country is perfect.",
    quote: "",
    source: "Lampoon Magazine",
    source_url: "https://lampoonmagazine.com/alila-jabal-akhdar-oman-green-mountain-retreat-architecture-sustainability/",
    image: "",
    region: "mountain",
    week_fit: "either",
    tags: ["mountain", "dramatic-landscape", "luxury", "spa", "low-activity", "nov-good", "design", "off-beat"]
  }
];
```

## Sample two-week pairings (experiential + decompress)

- **Africa earth + island:** Jack's Camp (Makgadikgadi salt pans) or Tswalu Kalahari → Kisawa Sanctuary (Mozambique) or Miavana (Madagascar).
- **Outback gems + reef:** Arkaba/Flinders fossils + Coober Pedy opals → qualia or Lizard Island on the Reef. (Ties directly to the bride's fossil/gem wish.)
- **Japan autumn:** Aman Kyoto / HOSHINOYA Kyoto (maples) → Amanemu or Gora Kadan (onsen decompress). Late Nov = peak colour and prime onsen weather; food is a highlight throughout.
- **South America:** Awasi Atacama (salt flats + geology) or Iguazú → Explora Rapa Nui or a Lima food finale.
- **Namibia desert + Indian Ocean:** &Beyond Sossusvlei (Deadvlei clay pan, dunes) → Seychelles (North Island / Six Senses Zil Pasyon) or Mauritius.

## Sourcing notes

**Curators leaned on (varied deliberately so we can learn which resonates):**
- *Editorial / magazines:* Robb Report (Royal Malewane, Capella Lodge), Forbes / Forbes Vetted / Forbes Travel Guide (Southern Ocean Lodge, Aman Tokyo, Belmond das Cataratas), CNN Travel (North Island), Decanter (The Louise), The Week (Amanemu), Lampoon (Alila Jabal Akhdar), South China Morning Post (Capella Sydney), Islands.com (Lizard Island), Luxury Travel Magazine / Luxury Travel Advisor (Lima, Palacio Duhau).
- *Specialist luxury-travel houses & OTAs:* Jacada Travel, Go2Africa, Scott Dunn, Extraordinary Journeys, Yellow Zebra Safaris, Ker & Downey, Mr & Mrs Smith, Indagare, Plan South America, Rainforest Cruises, Natural Selection, Art of Safari.
- *Named blogs / regional titles:* The Luxury Travel Expert, The Luxury Traveller, The Private Traveller, Luxe Adventure Traveler, The Official Luxe, Australian Traveller, Luxury Lodges of Australia, Passport & Pixels, Get In The Hotspot, Yolo Journal, Nihonluxe, Japan Uncharted, Remote Lands, Earth Trekkers, Petrina Darrah, Mexico Dave.
- *Brand/official (used sparingly, only where the property page was the cleanest cite):* Soneva, &Beyond.

Every card is tied to a real property/experience and a real article I actually pulled up (no invented URLs). Blurbs are written fresh in our own words; a single short quote is used only where the phrase is genuinely the property's own (e.g. North Island's "your venue, your menu, your time" motto).

**Considered but REJECTED for late-November timing (auditable reasoning):**
- **Fiji (Laucala, Kokomo) & French Polynesia (Bora Bora, The Brando):** late Nov is the start of the South Pacific wet/cyclone season — too marginal against the brief's "genuinely good in late Nov" bar.
- **Maldives caveat:** kept only the strongest (Soneva Fushi/Jani, Cheval Blanc). Late Nov is the transition into the dry NE monsoon — generally good but can still catch a shower; flagged rather than over-loaded.
- **Zanzibar (&Beyond Mnemba):** late Oct–Dec "short rains" — beautiful property but seasonally marginal, so left off.
- **Sri Lanka, Bali, most of coastal SE Asia:** monsoon/inter-monsoon and wet in late Nov.
- **Salar de Uyuni / Kachi Lodge (Bolivia):** doubly disqualified — the salt flat sits at ~3,600m (altitude concern vs. the "no high-altitude exertion" brief) AND Kachi Lodge is currently closed. Salt-pan craving is instead served by Jack's Camp (Makgadikgadi, low altitude), &Beyond Sossusvlei (Deadvlei), and Awasi Atacama's salt flats.
- **&Beyond Benguerra (Mozambique):** dropped only because I couldn't confirm a clean, property-specific article URL — Kisawa covers the same Bazaruto archipelago and season.
- **Mediterranean, northern Europe, most of the Caribbean:** cold/wet/off-season or in the hurricane tail in late Nov — excluded wholesale per the brief.
- **Peru's Sacred Valley / Machu Picchu, Rwanda gorillas, Patagonia trekking:** great regions, but the signature activity is high-altitude and/or real hiking. Where a region still worked by vehicle/boat (Tierra Patagonia, Galápagos by yacht), I framed it as explicitly low-effort.

**Count:** 53 new cards (target was ~55). I prioritised seasonality correctness and real article links over hitting an exact number, per the brief.
