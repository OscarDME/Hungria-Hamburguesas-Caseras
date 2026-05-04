// lib/copy.js
// A landing oldal TELJES látható szövegének egyetlen igazságforrása.
// Minden egyes sornak, amit a felhasználó olvashat a képernyőn, ITT kell lennie.

export const copy = {
  metadata: {
    title: "101 Házi Hamburger | Digitális Receptkönyv",
    description:
      "Digitális receptkönyv házi hamburgerekhez. 101 egyszerű, szaftos és zseniális recept, hogy ellenállhatatlan burgereket készíthess otthon.",
  },

  promoBar: {
    text: "Különleges, korlátozott idejű ajánlat",
    icon: "flame",
  },

  hero: {
    eyebrow: "Digitális receptkönyv házi hamburgerekhez",
    headline: {
      pre: "101 házi hamburger, amivel",
      accent: "mindenkit leveszel a lábáról",
    },
    subheadline:
      "Fedezz fel egyszerű, szaftos és piszkosul finom recepteket. Készíts ellenállhatatlan burgereket felesleges macera, túlköltekezés és gyorskaja-rendelés nélkül.",
    paragraph:
      "Tedd különlegessé a hétköznapi étkezéseket egyszerű, de nagyszerű ötletekkel – tökéletesek a családi és baráti összejövetelekre.",
    stats: [
      { value: "101", label: "isteni ötlet" },
      { value: "Házias", label: "éttermi minőség otthon" },
    ],
    bullets: [
      "101 különféle, jól bevált recept",
      "Szaftos és elronthatatlan burgerek",
      "Könnyen beszerezhető, hétköznapi alapanyagok",
      "Marha-, csirke- és egyéb izgalmas variációk",
      "Tökéletes választás vacsorákhoz és bulikhoz",
      "Éttermi minőségű ízélmény a saját konyhádból",
    ],
    cta: "KÉREM A 101 BURGER RECEPTET",
    trust: [
      { icon: "lock", text: "Azonnali hozzáférés" },
      { icon: "mail", text: "E-mailben kapod meg" },
      { icon: "card", text: "Biztonságos fizetés" },
    ],
    image: "/hero-mockup.webp",
    imageAlt: "101 Házi Hamburger Csomag - Digitális könyv",
    badge: "101 isteni ötlet",
  },

  story: {
    eyebrow: "A zseniális ételekért nem kell kimozdulnod",
    headline: {
      pre: "Nem kell étterembe menned ahhoz, hogy beleharapj egy",
      accent: "igazán brutális hamburgerbe",
    },
    paragraphs: [
      {
        text: "Néha nem az a baj, hogy nem vagyunk éhesek... hanem az, hogy fogalmunk sincs, hogyan dobjunk össze valami szaftosat, valami újat, aminek olyan íze van, hogy azonnal repetát kérsz.",
        style: "default",
      },
      {
        text: "Készítsd el otthon, ellenállhatatlan ízekkel!",
        style: "bold-accent",
      },
    ],
    painsTitle: "Amikor elfogynak az ötletek, általában ez történik:",
    pains: [
      "Végül mindig ugyanazt az unalmas ételt készíted el",
      "A hamburgerek kiszáradnak vagy ízetlenek lesznek",
      "Nem tudod jól párosítani a szószokat, sajtokat és feltéteket",
      "Inkább gyorskaját rendelsz, pedig otthon is főzhetnél",
      "Teljesen kifogysz az ötletekből a hétvégi vagy esti vacsorákhoz",
    ],
    bridge:
      "A titok nyitja az egyértelmű receptekben, a zseniális ízkombinációkban és az egyszerű lépésekben rejlik – így lesz minden egyes burger egy valódi kulináris élmény.",
    image: "/chef-hamburguesas.webp",
    imageAlt: "Tálalásra kész házi hamburger",
  },

  steps: {
    eyebrow: "Csak 3 lépés az otthoni ízélményig",
    headline: {
      pre: "Végre egy egyszerű módja annak, hogy",
      accent: "ellenállhatatlan házi burgereket",
      post: "készíts az egész családnak",
    },
    subheadline:
      "Élvezd a szaftos, könnyen elkészíthető és ízekkel teli recepteket anélkül, hogy kimozdulnál, túlbonyolítanád a dolgokat, vagy mindig ugyanazt a kört futnád.",
    paragraph:
      "Csak válassz egy receptet, kövess néhány egyszerű lépést, és zsebeld be a dicséreteket egy olyan ételért, amiből mindenki repetázni akar.",
    items: [
      {
        number: "01",
        title: "Válassz egy burgert bármilyen alkalomra",
        body: "Egy gyors hétköznapi vacsorától egy laza hétvégi családi ebédig – mindig lesz egy tuti ötleted valami újra anélkül, hogy órákig törnéd a fejed.",
      },
      {
        number: "02",
        title: "Készíts ízekkel teli, házias recepteket",
        body: "Kövess egyszerű hús, csirke, sajt, szósz és feltét kombinációkat, hogy szaftos, egyedi, igazi házi burgereket alkoss.",
      },
      {
        number: "03",
        title: "Élvezd az ételt, ami összehozza a társaságot",
        body: "Tálalj ellenállhatatlan burgereket otthon, és tedd különlegessé a közös étkezéseket a családdal vagy a barátokkal.",
      },
    ],
    cta: "KÉREM A 101 BURGER RECEPTET",
    trust: [
      { icon: "lock", text: "Azonnali hozzáférés" },
      { icon: "mail", text: "E-mailben kapod meg" },
      { icon: "card", text: "Biztonságos fizetés" },
    ],
  },

  benefits: {
    eyebrow: "Több íz, kevesebb macera",
    headline: {
      pre: "Mi változik meg, amikor van",
      accent: "101 ötleted",
      post: "otthoni burgerek készítéséhez?",
    },
    subheadline:
      "Felejtsd el a folyamatos rögtönzést, és varázsolj minden étkezést valami házias, finom és könnyen megosztható élménnyé.",
    items: [
      {
        title: "Soha nem fogysz ki az ötletekből",
        body: "Mindig lesz kéznél egy új recept, hogy túl sok gondolkodás nélkül készíthess valami finomat.",
        icon: "sparkles",
      },
      {
        title: "Különlegesebb étkezések",
        body: "Változtasd az egyszerű vacsorát is élménnyé, amit öröm megosztani a szeretteiddel.",
        icon: "heart",
      },
      {
        title: "Több íz, kimozdulás nélkül",
        body: "Készíts szaftos, kézműves jellegű burgereket éttermi szintű ízkombinációkkal.",
        icon: "home",
      },
      {
        title: "Kevesebb macera a konyhában",
        body: "Érthető receptek, könnyen beszerezhető alapanyagok és pofonegyszerű lépések.",
        icon: "zap",
      },
      {
        title: "Variációk minden alkalomra",
        body: "Egy gyors vacsorától kezdve a lusta hétvégéken át a baráti összejövetelekig.",
        icon: "users",
      },
      {
        title: "Vége a sóvárgásnak",
        body: "Amikor megkívánsz valami igazán jót, megcsinálhatod magadnak drága kiszállítás nélkül.",
        icon: "utensils",
      },
    ],
    closing: {
      pre: "Ezzel a könyvvel az otthoni burgerkészítés többé nem unalmas rutin, hanem egy szuper egyszerű módja annak, hogy",
      accent: "valami igazán brutálisan finommal kényeztesd a szeretteidet.",
    },
  },

  features: {
    eyebrow: "Minden, amire szükséged van a változatos burgerekhez",
    headline: {
      pre: "101 házi hamburger, hogy minden étkezés",
      accent: "ellenállhatatlan legyen",
    },
    subheadline:
      "Praktikus receptkönyv szaftos, változatos és ízbomba burgerek készítéséhez. Stressz nélkül, minden ízléshez, pillanathoz és vágyhoz igazítva.",
    items: [
      {
        emoji: "🍔",
        eyebrow: "Ízlés szerint",
        title: "Burgerek minden hangulathoz",
        body: "Találd meg a klasszikus, krémes, ropogós, fűszeres, brutál kiadós vagy épp könnyedebb recepteket, és válassz aszerint, amit ma megkívántál.",
      },
      {
        emoji: "👨‍🍳",
        eyebrow: "Lépésről lépésre",
        title: "Pofonegyszerű elkészítés",
        body: "Kövess egyszerű utasításokat minden egyes burger összerakásához, anélkül, hogy az arányokon, kombókon vagy a sorrenden kéne agyalnod.",
      },
      {
        emoji: "🥬",
        eyebrow: "Alapanyagok",
        title: "Változatos összetevők és párosítások",
        body: "Használj marhát, csirkét, sajtokat, bacont, zöldségeket, gombát, avokádót, savanyúságot és egyedi feltéteket az új ízélményekhez.",
      },
      {
        emoji: "🔥",
        eyebrow: "Extra ízbomba",
        title: "Szószok és a titkos extrák",
        body: "Adj több karaktert a burgereidnek házi öntetekkel, krémes szószokkal, BBQ-val, mustárral és olyan fűszerekkel, amik megadják azt a bizonyos pluszt.",
      },
      {
        emoji: "🏡",
        eyebrow: "Közös élmény",
        title: "Ötletek bulikra és hétvégékre",
        body: "Készíts hamburgereket, amik tökéletesek a családnak, a haverok átjövetelekor, vagy ha csak egy különlegesebb ebédre vágytok otthon.",
      },
      {
        emoji: "🚚",
        eyebrow: "Kiszállítás nélkül",
        title: "Több élvezet rendelés helyett",
        body: "Csillapítsd az éhséged otthon olyan receptekkel, amik gazdagok, háziasak, és sokkal jobban esnek, mint egy összecsapott rendelős kaja.",
      },
    ],
    cta: "KÉREM A 101 BURGER RECEPTET",
    trust: [
      { icon: "lock", text: "Azonnali hozzáférés" },
      { icon: "mail", text: "E-mailben kapod meg" },
      { icon: "card", text: "Biztonságos fizetés" },
    ],
  },

  carouselSection: {
    eyebrow: "Egyszerű receptek az otthoni élvezetekért",
    headline: {
      pre: "Isteni házi burgerek",
      accent: "könnyű és praktikus változatokban",
    },
    images: [
      { src: "/carousel/slide-1.webp", alt: "Szaftos házi burger fatálon tálalva" },
      { src: "/carousel/slide-2.webp", alt: "Baconös burger olvasztott sajttal" },
      { src: "/carousel/slide-3.webp", alt: "Különféle házi hamburgerek" },
      { src: "/carousel/slide-4.webp", alt: "Burgerkészítés folyamat közben" },
    ],
    chips: [
      "GYORSAN ELKÉSZÍTHETŐ",
      "HÉTKÖZNAPI ALAPANYAGOK",
      "HÁZIAS ÍZVILÁG",
      "TÖKÉLETES VENDÉGVÁRÓ",
    ],
    forYouTitle: "A „101 Házi Hamburger” neked szól, ha:",
    forYou: [
      {
        title: "Valami finomat főznél felesleges macera nélkül:",
        body: "könnyen követhető receptek, amikkel zseniális burgereket készíthetsz anélkül, hogy órákat töltenél a konyhában.",
      },
      {
        title: "Gyors ötleteket keresel az otthoni étkezésekhez:",
        body: "praktikus megoldások azokra a napokra, amikor valami nagyon jót ennél, de nem akarsz sokat agyalni a főzésen.",
      },
      {
        title: "Szeretnéd lenyűgözni a családot vagy a haverokat:",
        body: "szaftos, házias és nagyon finom burgerek vacsorára, hétvégére vagy baráti összejövetelekre.",
      },
      {
        title: "Változatosságra vágysz túlbonyolított receptek nélkül:",
        body: "izgalmas húspogácsa, csirke, sajt, szósz és zöldség kombinációk, hogy ne mindig ugyanazt egyétek.",
      },
      {
        title: "Jobban szereted a házias ízeket a rendelős kajánál:",
        body: "készíts laktató, praktikus és sokkal kielégítőbb burgereket otthon, amikor csak megkívánod.",
      },
    ],
    cta: "KÉREM A 101 BURGER RECEPTET",
    trust: [
      { icon: "lock", text: "Azonnali hozzáférés" },
      { icon: "mail", text: "E-mailben kapod meg" },
      { icon: "card", text: "Biztonságos fizetés" },
    ],
    a11yPrev: "Előző recept",
    a11yNext: "Következő recept",
    a11yDot: "Ugrás a receptre",
  },

  bonuses: {
    eyebrow: "Korlátozott ideig elérhető extra bónuszok",
    headline: {
      pre: "Ha lecsapsz a",
      accent: "101 Házi Hamburger",
      post: "könyvre, ezeket az ajándékokat is megkapod",
    },
    intro:
      "Tedd tökéletessé a burgereidet ezekkel a praktikus útmutatókkal. Készíts olyan házi szószokat és önteteket, amik minden receptet egy új szintre emelnek.",
    items: [
      {
        badge: "🎁 1. BÓNUSZ",
        title: "Házi Szószok Útmutatója",
        body: "Egyszerű receptek krémes, BBQ, csípős és különleges szószokhoz, amiktől a burgereid egyszerűen verhetetlenek lesznek.",
        priceLabel: "Különleges érték:",
        priceValue: "Ingyenes bónusz",
        image: "/bonuses/bono-salsas.webp",
        imageAlt: "Házi Szószok Útmutatója",
      },
      {
        badge: "🎁 2. BÓNUSZ",
        title: "Házi Öntetek Útmutatója",
        body: "Tanuld meg, hogyan dobj össze pikk-pakk isteni önteteket, amik tökéletesen passzolnak a burgerekhez, sültkrumplihoz vagy salátákhoz.",
        priceLabel: "Különleges érték:",
        priceValue: "Ingyenes bónusz",
        image: "/bonuses/bono-aderezos.webp",
        imageAlt: "Házi Öntetek Útmutatója",
      },
    ],
    outro: {
      pre: "Ezekkel a bónuszokkal megadhatod a burgereidnek azt az extra ízlöketet, amitől egy hétköznapi recept is",
      accent: "valami egészen kivételes élménnyé válik.",
    },
    cta: "KÉREM A 101 BURGER RECEPTET",
    trust: [
      { icon: "lock", text: "Azonnali hozzáférés" },
      { icon: "mail", text: "E-mailben kapod meg" },
      { icon: "card", text: "Biztonságos fizetés" },
    ],
  },

  recap: {
    eyebrow: "Minden egy helyen, azonnal",
    headline: {
      pre: "Mindent megkapsz, ami az",
      accent: "ellenállhatatlan házi burgerek",
      post: "készítéséhez kell",
    },
    subheadline:
      "A fő receptkönyv plusz az extra útmutatók, hogy a burgereidet ízbomba szószokkal és hibátlan öntetekkel koronázhasd meg.",
    paragraph: "Ma már felesleges ezen agyalni, vágj bele!",
    body: "Hozzáférést kapsz egy szuper praktikus receptgyűjteményhez és rengeteg ötlethez, hogy szaftos, házias, elronthatatlan burgereket készíts. Mindemellett pedig az extra anyagok is a tieid, amikkel minden falat csak még jobb lesz.",
    highlight:
      "✨ Tartalmazza a fő receptkönyvet és a különleges bónuszokat, amikkel új szintre emelheted a házi alkotásaidat.",
    cta: "KÉREM A 101 BURGER RECEPTET",
    trust: [
      { icon: "lock", text: "Azonnali hozzáférés" },
      { icon: "mail", text: "E-mailben kapod meg" },
      { icon: "card", text: "Biztonságos fizetés" },
    ],
  },

  testimonials: {
    eyebrow: "Vélemények azoktól, akik imádnak otthon sütni-főzni",
    headline: {
      pre: "Nézd meg, mit mondanak azok, akik már ilyen",
      accent: "brutál jó házi burgereket",
      post: "csinálnak",
    },
    subheadline:
      "Valódi történetek olyan emberektől, akik több ötletre, több ízre és különlegesebb étkezésekre vágytak, ahelyett, hogy mindig csak rendelnének.",
    items: [
      {
        name: "Mária L.",
        role: "A családjának főz",
        avatar: "/testimonials/avatar-1.webp",
        quote:
          "Nagyon imádom, mert végre nem ugyanazt a megszokott burgert csinálom mindig. Most már rengeteg ötletem van, hogy változatosak és sokkal finomabbak legyenek az otthoni vacsoráink.",
      },
      {
        name: "András P.",
        role: "Tökéletes hétvégékre",
        avatar: "/testimonials/avatar-2.webp",
        quote:
          "A szószok és a feltétek kombinációi zseniálisak. Olyan íze lett a hamburgereimnek, mintha egy kézműves étteremből rendeltem volna, pedig a saját konyhámban dobtam össze.",
      },
      {
        name: "Kata R.",
        role: "Több íz rendelés nélkül",
        avatar: "/testimonials/avatar-3.webp",
        quote:
          "Azért vettem meg, mert le akartam szokni az állandó gyorskaja rendelésről. Most, ha megkívánunk valami ilyesmit, pikk-pakk összedobunk egy burgert itthon.",
      },
      {
        name: "János M.",
        role: "Egyszerű és praktikus receptek",
        avatar: "/testimonials/avatar-4.webp",
        quote:
          "A recepteket pofonegyszerű követni. Nem kell séfnek lenned, csak ráböksz egy ötletre, és már kész is egy brutálisan finom kaja a semmiből.",
      },
      {
        name: "Zsófia G.",
        role: "Tökéletes baráti bulikhoz",
        avatar: "/testimonials/avatar-5.webp",
        quote:
          "Imádom, hogy mindenféle ízléshez van benne valami. Tartottunk egy burgerestet a haverokkal, és mindenki repetázni akart.",
      },
    ],
    cta: "KÉREM A 101 BURGER RECEPTET",
    trust: [
      { icon: "lock", text: "Azonnali hozzáférés" },
      { icon: "mail", text: "E-mailben kapod meg" },
      { icon: "card", text: "Biztonságos fizetés" },
    ],
    starsAlt: "5-ből 5 csillag",
  },

  finalCta: {
    eyebrow: "🔥 Különleges, korlátozott idejű ajánlat",
    headline: {
      pre: "Zsebeld be a",
      accent: "101 Házi Hamburger",
      post: "könyvet az extra bónuszokkal együtt",
    },
    subheadline:
      "Készíts szaftos, elronthatatlan és elképesztően finom burgereket otthon. Praktikus receptek hétköznapi vacsorákra, lusta hétvégékre, bulikra, vagy amikor csak rád tör az éhség.",
    badge: "🎁 Tartalmazza a receptkönyvet + az ajándék bónuszokat",
    productName: {
      pre: "101 Házi",
      accent: "Hamburger",
    },
    productTagline:
      "Egyszerű, isteni és praktikus receptek olyan burgerekhez, amiknek éttermi minőségű, házias ízük van.",
    bullets: [
      "Fő receptkönyv 101 házi burger ötlettel",
      "Klasszikus, krémes, ropogós, fűszeres és kiadós receptek",
      "Marha, csirke, sajt, bacon, zöldség és különleges feltét variációk",
      "Lépésről lépésre útmutató a stresszmentes főzéshez",
      "1. Bónusz: Házi Szószok Útmutatója",
      "2. Bónusz: Házi Öntetek Útmutatója",
      "Ötletek gyors vacsorákhoz, hétvégékre és haveri összejövetelekre",
      "Azonnali hozzáférés a digitális könyvhöz",
    ],
    closing: {
      pre: "Tökéletes választás, ha jót akarsz enni anélkül, hogy a kiszállításra várnál:",
      body: "praktikus ötleteid lesznek a szaftos házi burgerekhez, amiket imádni fog megosztani a családdal vagy a barátokkal.",
    },
    priceOldLabel: "Eredeti ár:",
    priceOld: "14 990 Ft",
    priceNote: "Az ajánlat csak ma érvényes",
    priceNow: "2 990",
    priceCurrency: "Ft",
    priceFooter: "Azonnali digitális hozzáférés a fő termékhez és a bónuszokhoz.",
    urgency: "Utolsó darabok ezen az akciós áron",
    discountPct: "80%",
    discountLabel: "KEDVEZMÉNY",
    button: "IGEN, KÉREM A 101 BURGERT!",
    trust: [
      { icon: "lock", text: "Biztonságos fizetés" },
      { icon: "mail", text: "E-mailes hozzáférés" },
      { icon: "zap", text: "Azonnali kiszállítás" },
    ],
    imageAlt: "101 Házi Hamburger csomag az extra bónuszokkal",
  },

  faq: {
    eyebrow: "Gyakran Ismételt Kérdések",
    headline: {
      pre: "Minden kérdésedre válaszolunk, mielőtt belevágnál a",
      accent: "házi burgerezésbe",
    },
    subheadline:
      "Itt találod a leggyakoribb válaszokat a receptkönyvvel, a bónuszokkal és a hozzáféréssel kapcsolatban.",
    items: [
      {
        q: "Hogyan kapom meg a recepteket?",
        a: "A fizetés befejezése után azonnal megkapod a digitális hozzáférést arra az e-mail címre, amit a vásárláskor megadtál.",
      },
      {
        q: "Telefonról is tudom olvasni?",
        a: "Igen! Bármilyen okostelefonról, tabletről vagy számítógépről hozzáférhetsz. Csak internetkapcsolatra van szükséged az anyagok megnyitásához.",
      },
      {
        q: "Profi szakácsnak kell lennem?",
        a: "Dehogy! A recepteket úgy alkottuk meg, hogy végtelenül egyszerűek, praktikusak és egyértelműek legyenek, még akkor is, ha alig van tapasztalatod a konyhában.",
      },
      {
        q: "Mit tartalmaz pontosan a vásárlás?",
        a: "Tartalmazza a '101 Házi Hamburger' digitális főkönyvet, valamint az exkluzív bónuszokat – a házi szószok és öntetek útmutatóit.",
      },
      {
        q: "Bonyolultak a receptek?",
        a: "Egyáltalán nem. A lényeg pont az, hogy elképesztő burgereket készíthess otthon, elrettentő konyhai folyamatok vagy beszerezhetetlen alapanyagok nélkül.",
      },
      {
        q: "Mikor kezdhetem el?",
        a: "Azonnal, amint megkaptad a hozzáférést! Csak válassz egy szimpatikus receptet, és kövesd a lépéseket.",
      },
    ],
    cta: "KÉREM A 101 BURGER RECEPTET",
    trust: [
      { icon: "lock", text: "Biztonságos fizetés" },
      { icon: "mail", text: "Azonnali hozzáférés" },
      { icon: "burger", text: "Ajándék bónuszok" },
    ],
  },

  closing: {
    eyebrow: "Kezdd el még ma a saját konyhádban",
    headline: {
      pre: "Készítsd el életed első igazi",
      accent: "házi hamburgerét",
      post: "még ezen a héten",
    },
    paragraph:
      "Szerezd be a receptkönyvet, válaszd ki az első filmedbe illő burgered, és változtass minden étkezést egy közös élménnyé.",
    cta: "KÉREM A 101 BURGER RECEPTET",
    whatsapp: "Írj nekünk WhatsAppon",
    imageAlt: "Házi hamburger, ami csak arra vár, hogy beleharapj",
  },

  footer: {
    brand: "Crearis",
    tagline: "Digitális receptkönyv házi hamburgerekhez",
    rightsPrefix: "©",
    rightsSuffix: "Crearis. Minden jog fenntartva.",
    disclaimer:
      "Ez az oldal nem áll kapcsolatban, nem társult, nem hagyta jóvá, és nem is szponzorálta a Facebook, továbbá a Facebook semmilyen formában nem vizsgálta felül és nem támogatta azt. A Facebook a Meta Platforms, Inc. bejegyzett védjegye.",
  },
};