const fallbackImage =
  "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=900&q=80";
const californiaCheckoutTaxRate = 0.08625;

const items = {
  corePicks: [
    {
      id: "cradlewise-crib",
      name: "Cradlewise Smart Crib",
      category: "Sleep",
      priority: "Nice",
      price: 1999,
      purchased: true,
      image: "https://assets.cradlewise.com/images/index/meta-image-cng-new.jpg",
      why: "Premium smart crib with responsive soothing and longer use window than many bassinets.",
      notes: "Purchased. Great long-use sleep setup if you want smart automation.",
      url: "https://cradlewise.com/product/smart-crib/"
    },
    {
      id: "newton-nest-convertible-crib",
      name: "Newton Nest 4-in-1 Convertible Crib",
      category: "Sleep",
      priority: "Must",
      price: 749,
      purchased: false,
      image:
        "https://www.newtonbaby.com/cdn/shop/files/4-AngledCrib-Natural.jpg?v=1753220377",
      why: "4-in-1 bassinet-to-crib system that grows from newborn to about 5 years, with a bassinet mattress included.",
      notes: "Keep this as the crib candidate. Product listing may include free sheets depending on the promo; the extra purchased mini sheets are tracked separately.",
      url: "https://www.newtonbaby.com/products/newton-nest-crib?variant=46241386070213"
    },
    {
      id: "newton-mini-sheets-two-pack",
      name: "Newton Breathable Organic Mini Crib Sheets x2",
      category: "Sleep",
      priority: "Must",
      price: 79.98,
      checkoutPrice: 87,
      purchased: true,
      image:
        "https://www.newtonbaby.com/cdn/shop/products/600x600_Sheets_-_White.jpg?v=1686236541",
      why: "Two extra mini crib sheet packs keep the Newton sleep setup covered through laundry cycles.",
      notes: "Purchased two packs. Checkout estimate uses 2 x $39.99 plus 8.625% San Francisco sales tax.",
      url: "https://www.newtonbaby.com/products/newton-mini-sheets"
    },
    {
      id: "babybjorn-bouncer-toy-bundle",
      name: "BabyBjorn Bouncer Bliss - Nordstrom Rack",
      category: "Bouncer",
      priority: "Must",
      price: 159.97,
      checkoutPrice: 174,
      purchased: false,
      image:
        "https://n.nordstrommedia.com/it/7c950a49-0d1b-47a0-b61d-b2303e278db8.jpeg?w=780&h=1170&crop=pad&dpr=2",
      why: "Nordstrom Rack deal on the BabyBjorn Bouncer Bliss in Powder Pink; skip the separate toy bars for now.",
      notes: "Checkout estimate covers the $159.97 Rack bouncer plus 8.625% San Francisco sales tax. Listing qualifies for free shipping over $89, but confirm there is no surcharge at checkout. Rack listing says jersey, but inspect on arrival because one recent review reported receiving mesh instead.",
      url: "https://www.nordstromrack.com/s/babybjorn-bouncer-bliss-convertible-jersey-baby-bouncer/5481599?color=powder+pink&size=one+size"
    },
    {
      id: "nuna-trvl-lx-pipa-urbn-travel-system",
      name: "Nuna TRVL lx + PIPA urbn Travel System",
      category: "Travel System",
      priority: "Must",
      price: 800,
      checkoutPrice: 869,
      purchased: true,
      image:
        "https://nunababy.com/media/catalog/product/T/R/TRVLlx_cedar_PIPAurbn_cedar_LA_US_5489__1100x1100_web_a1f3.jpg?canvas=730%3A730&fit=bounds&height=730&optimize=high&width=730",
      why: "Purchased stroller + baseless infant car seat setup for Waymo/Uber/taxi and everyday travel.",
      notes: "Purchased. Checkout estimate uses your $800 pre-tax price plus 8.625% San Francisco sales tax. Nuna lists PIPA urbn as baseless with pipaFIX rigid latch or vehicle seat belt install, and TRVL lx as a one-hand-fold compact stroller from birth to 50 lb.",
      url: "https://nunababy.com/usa/pipa-urbn-trvl-lx-travel-system",
      links: [
        {
          label: "Nuna TRVL lx + PIPA urbn travel system",
          url: "https://nunababy.com/usa/pipa-urbn-trvl-lx-travel-system"
        },
        {
          label: "Waymo child seat policy",
          url: "https://support.google.com/waymo/answer/9059053?hl=en"
        },
        {
          label: "NHTSA car seat guidance",
          url: "https://www.nhtsa.gov/vehicle-safety/car-seats-and-booster-seats"
        }
      ]
    },
    {
      id: "tripp-trapp",
      name: "Stokke Tripp Trapp",
      category: "High Chair",
      priority: "Must",
      price: 299,
      purchased: false,
      image:
        "https://www.stokke.com/dw/image/v2/AAQF_PRD/on/demandware.static/-/Library-Sites-StokkeSharedLibrary/default/dwf423b209/cms_assets/tt_hero-image_mobile_jpg__size-xl.webp?sfrm=jpg&sw=1280&q=60",
      why: "High quality and long lifespan; grows with your child for years.",
      notes: "Higher upfront cost, but strong long-term value.",
      url: "https://www.stokke.com/USA/en-us/high-chairs/tripp-trapp/"
    },
    {
      id: "my-brest-friend-super-deluxe-platinum",
      name: "My Brest Friend Super Deluxe Nursing Pillow - Platinum",
      category: "Feeding Support",
      priority: "Conditional",
      price: 60.29,
      purchased: false,
      image:
        "https://target.scene7.com/is/image/Target//GUEST_3f7b4a8b-e3da-426c-9824-e6c248c0abdc?wid=800&qlt=85",
      why: "Firm wraparound support, an adjustable waist strap, and a backrest make this the stronger choice for maintaining a stable feeding position.",
      notes: "In the Target cart, quantity 1; current cart price is $60.29 as of July 28, 2026. Use only for awake, supervised feeding support—never as an infant sleep surface.",
      url: "https://www.target.com/p/my-brest-friend-super-deluxe-nursing-pillow---platinum--no-aasa/-/A-82618840"
    }
  ],
  addOns: [
    {
      id: "halo-cotton-swaddle-birds-small",
      name: "HALO SleepSack Swaddle Cotton 1.5 TOG - Birds, Small",
      category: "Sleep",
      priority: "Must",
      price: 34.99,
      checkoutPrice: 38,
      purchased: true,
      image:
        "https://images.ctfassets.net/50gzycvace50/6b0428f2265ae83dec5f3583b27c26e2a2d83d7a6b354cbb179b256a6b3fc97e/3a31bec7edfc442b7463b8d3ec825608/6b0428f2265ae83dec5f3583b27c26e2a2d83d7a6b354cbb179b256a6b3fc97e.png?bg=rgb%3Afafafa&fl=progressive&fm=jpg&h=1240&w=1240",
      why: "Purchased cotton swaddle for the 3-6 month window, with arms-in or arms-out use and a bottom-opening zipper for diaper changes.",
      notes: "Purchased in Birds, Small. Babylist lists size Small as 13-18 lb, 100% cotton interlock, machine washable, and 1.5 TOG. Stop swaddling once baby shows signs of rolling or breaking out.",
      url: "https://www.babylist.com/gp/halo-sleepsack-swaddle-cotton/2204/2317974"
    },
    {
      id: "momcozy-wipe-warmer",
      name: "Momcozy Baby Wipe Warmer",
      category: "Diapering",
      priority: "Must",
      price: 31.9,
      checkoutPrice: 35,
      purchased: true,
      image:
        "https://momcozy.com/cdn/shop/files/11_28dbc3d8-843f-4934-91f8-5a14e37429da.jpg?v=1779354329",
      why: "Purchased wipe warmer with multiple temperature modes and night light for diaper changes.",
      notes: "Purchased from Walmart at $31.90. Checkout estimate includes 8.625% San Francisco sales tax. Huggies is tracked separately under the newborn diaper card.",
      url: "https://momcozy.com/products/momcozy-large-capacity-baby-wipe-warmer"
    },
    {
      id: "clean-butt-bundle",
      name: "Aquaphor + Desitin Diaper Rash Care",
      category: "Diapering",
      priority: "Must",
      price: 25,
      checkoutPrice: 27,
      purchased: true,
      image: "https://www.aquaphorus.com/-/media/project/beiersdorf/aquaphor/us/aquaphor/products/baby-care/baby-healing-ointment/072140633781-eucerin-aquaphor-baby-healing-ointment-14oz-front.png",
      why: "Purchased core diaper-rash setup: Aquaphor as the daily moisture barrier and Desitin Maximum Strength for stronger zinc oxide protection.",
      notes: "Purchased Aquaphor Baby Healing Ointment and Desitin Maximum Strength Baby Diaper Rash Paste. Checkout estimate uses a $25 combined retail placeholder plus 8.625% San Francisco sales tax; replace with receipt total if different.",
      url: "https://www.aquaphorus.com/products/body-care/baby-healing-ointment-advanced-therapy",
      links: [
        {
          label: "Aquaphor Baby Healing Ointment",
          url: "https://www.aquaphorus.com/products/body-care/baby-healing-ointment-advanced-therapy"
        },
        {
          label: "Desitin Maximum Strength",
          url: "https://www.desitin.com/diaper-rash-products/maximum-strength-original-zinc-oxide-paste"
        }
      ]
    },
    {
      id: "up-up-diaper-cream-brush",
      name: "up&up Diaper Cream Brush",
      category: "Diapering",
      priority: "Nice",
      price: 4.49,
      purchased: false,
      image:
        "https://target.scene7.com/is/image/Target//GUEST_28743cbe-59f0-43ac-ba04-d256379c08c6?wid=800&qlt=85",
      why: "A washable silicone applicator keeps thick barrier cream off hands and helps spread an even layer during diaper changes.",
      notes: "In the Target cart, quantity 1; current cart price is $4.49 as of July 28, 2026. Wash and dry it after use and do not share it between children with active rashes.",
      url: "https://www.target.com/p/diaper-cream-brush---up-up---no-aasa/-/A-92623290"
    },
    {
      id: "tide-pods-free-gentle-152",
      name: "Tide Pods Free & Gentle Laundry Detergent - 152 Count",
      category: "Laundry",
      priority: "Must",
      price: 31.99,
      checkoutPrice: 35,
      purchased: true,
      image: "https://bfasset.costco-static.com/U447IH35/as/m9z4w3bt37gtsfv6pjw89h/4000415444-847__1?auto=webp&format=jpg&width=1200&height=1200&fit=bounds",
      why: "Purchased fragrance-free, dye-free laundry pods for baby clothes, cloths, towels, and family laundry.",
      notes: "Purchased from Costco: Tide Pods Laundry Detergent Pods, Free & Gentle, 152-count. Checkout estimate uses a $31.99 Costco placeholder plus 8.625% San Francisco sales tax; replace with receipt total if different.",
      url: "https://www.costco.com/p/-/tide-pods-laundry-detergent-pods-free-gentle-152-count/4000415444?sp=grs&langId=-1"
    },
  ],
  parentWellness: [
    {
      id: "oura-ring-5",
      name: "Oura Ring 5",
      category: "Parent Wellness",
      priority: "Nice",
      price: 399,
      checkoutPrice: 433,
      purchased: true,
      image: "https://ouraring.com/assets/icons/opengraph-400x400.png",
      why: "Sleep, readiness, stress, heart-rate, and recovery tracking for parents during the fragmented newborn months.",
      notes: "Purchased: Oura Ring 5. Estimated California checkout total includes 8.625% San Francisco sales tax; membership, if billed separately, is not included.",
      url: "https://ouraring.com/"
    },
    {
      id: "eight-sleep-pod-5-core",
      name: "Eight Sleep Pod 5 Core",
      category: "Parent Wellness",
      priority: "Nice",
      price: 2887,
      checkoutPrice: 3136,
      purchased: true,
      image:
        "https://res.cloudinary.com/eightsleep/image/upload/c_fill,w_1200,h_630,f_jpg,q_auto/v1747148102/pod-cover_1_q3rtmy.png",
      why: "Dual-zone cooling/heating and sleep tracking to protect parent sleep quality during night feeds and split schedules.",
      notes: "Purchased with Enhanced subscription. Estimated California checkout total includes first-year Enhanced and 8.625% San Francisco sales tax.",
      url: "https://www.eightsleep.com/us/product/pod/"
    },
    {
      id: "parent-swimming-pack",
      name: "Parent Swimming Pack: Swim Cap + Wetsuit + Thermal Shoes",
      category: "Parent Wellness",
      priority: "Nice",
      price: 66.49,
      checkoutPrice: 72,
      purchased: true,
      image: "https://m.media-amazon.com/images/I/31wtEmGCMyL._AC_.jpg",
      why: "Purchased parent swim setup for low-impact exercise and recovery: swim cap, shorty wetsuit, and thermal diving shoes.",
      notes: "Includes VIRSIDI long-hair silicone swim cap set ($11.99), MWTA Black 2/2mm neoprene shorty spring wetsuit ($44.50), and $10 thermal diving shoes. Checkout estimate uses $66.49 pre-tax plus 8.625% California/San Francisco sales tax, rounded to $72; replace with receipt total if different.",
      url: "https://www.amazon.com/dp/B0FMY2H6Y3?psc=1&smid=AE162ROC22DGU&ref_=chk_typ_imgToDp",
      links: [
        {
          label: "Amazon - VIRSIDI swim cap set",
          url: "https://www.amazon.com/dp/B0FMY2H6Y3?psc=1&smid=AE162ROC22DGU&ref_=chk_typ_imgToDp"
        },
        {
          label: "Walmart - MWTA 2/2mm shorty spring wetsuit",
          url: "https://www.walmart.com/ip/MWTA-Black-2-2mm-Back-Zip-Size-2-Neoprene-Shorty-Spring-Wetsuit-with-Key-Pocket-For-Women/18775764842"
        }
      ]
    }
  ],
  cautions: [
    {
      id: "infrared-postpartum-heat-lamp",
      name: "150W Infrared Heat Lamp for Postpartum Recovery",
      category: "Postpartum Safety",
      priority: "Skip",
      price: 0,
      purchased: false,
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
      why: "Skip the social-media heat-lamp setup: it is not a standard U.S. postpartum recovery recommendation and creates avoidable burn risk near healing tissue.",
      notes: "Do not aim an infrared lamp at the perineum, breasts, or a C-section incision. If heat is part of your clinician's plan for cramps or general comfort, use a regular heating pad with a cover, low setting, timer, and awake supervision.",
      url: "https://www.acog.org/womens-health/faqs/postpartum-pain-management",
      links: [
        {
          label: "ACOG postpartum pain guidance",
          url: "https://www.acog.org/womens-health/faqs/postpartum-pain-management"
        },
        {
          label: "FDA product classification: infrared lamp",
          url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpcd/classification.cfm?id=ILY"
        }
      ]
    },
    {
      id: "ergonomic-innovations-donut-pillow",
      name: "Ergonomic Innovations QHL Original Donut Pillow",
      category: "Postpartum Seating",
      priority: "Skip",
      price: 0,
      priceLabel: "Recent $40; verify",
      purchased: false,
      image: "https://m.media-amazon.com/images/I/818L8LVrtkL._AC_SL1500_.jpg",
      why: "The exact screenshot cushion has strong consumer ratings, but a ring cushion is not the best default for recovery after a vaginal birth.",
      notes: "This is the medium-firm 17.5 x 14 x 2.75 in memory-foam model rated for up to 240 lb. Several hospital postpartum guides advise against ring cushions because they can increase pressure or interfere with blood flow around a healing perineum. Use it only if your OB, midwife, or pelvic-health physical therapist recommends it for your specific coccyx or hemorrhoid symptoms; otherwise favor side-lying, frequent position changes, or a flat pressure-relieving cushion.",
      url: "https://ergonomicinnovations.com/ergonomic-innovations-donut-cushion/",
      links: [
        {
          label: "Exact Ergonomic Innovations cushion",
          url: "https://ergonomicinnovations.com/ergonomic-innovations-donut-cushion/"
        },
        {
          label: "Oxford University Hospitals postpartum recovery guidance",
          url: "https://www.ouh.nhs.uk/media/uq3fs4fr/100782recovery.pdf"
        },
        {
          label: "ACOG postpartum pain guidance",
          url: "https://www.acog.org/womens-health/faqs/postpartum-pain-management"
        }
      ]
    },
    {
      id: "boppy-lounger",
      name: "Boppy Newborn Lounger",
      category: "Safety",
      priority: "Skip",
      price: 0,
      purchased: false,
      image: "https://www.cpsc.gov/s3fs-public/1-90447AM_0.png?VersionId=OTw6ebTfJOje4Jz.0Ekm6PzXq3TgZvnB",
      why: "Not a safe sleep surface and has major recall history.",
      notes: "CPSC recall began September 23, 2021. Avoid buying secondhand.",
      url: "https://www.cpsc.gov/Recalls/2021/The-Boppy-Company-Recalls-Over-3-Million-Original-Newborn-Loungers-Boppy-Preferred-Newborn-Loungers-and-Pottery-Barn-Kids-Boppy-Newborn-Loungers-After-8-Infant-Deaths-Suffocation-Risk"
    },
    {
      id: "heavy-auto-strollers",
      name: "Heavy AI/Auto Strollers",
      category: "Practicality",
      priority: "Optional",
      price: 3800,
      purchased: false,
      image:
        "https://static1.squarespace.com/static/5f0a4b7c357a1604c25e23ea/t/69d73d4a6892561c57b5bc15/1777595890823/Woman+walking+along+beach+with+dog+and+holding+a+coffee+while+walking+hands+free+with+a+gluxkind+rosa+stroller.jpeg?format=1500w",
      why: "Motor features can help hills, but weight and bulk hurt portability.",
      notes: "For walk-everywhere life, lightweight usually wins.",
      url: "https://gluxkind.com/rosa-smart-stroller"
    }
  ],
  freeBenefits: [
    {
      id: "golden-state-start-diapers",
      name: "Golden State Start - 400 Free Diapers",
      category: "Diapers",
      status: "Automatic",
      why: "California is rolling out 400 free Baby2Baby diapers for newborns born at participating hospitals.",
      notes: "No income limit, application, or paperwork for families. Diapers are provided around hospital discharge; first-year rollout prioritizes hospitals serving many Medi-Cal patients.",
      url: "https://baby2baby.org/goldenstatestart/"
    },
    {
      id: "paid-family-leave",
      name: "Paid Family Leave Bonding Pay",
      category: "Income",
      status: "Apply",
      why: "Eligible California workers can receive short-term wage replacement while bonding with a new child.",
      notes: "EDD lists up to 8 weeks in a 12-month period, with benefit payments based on prior wages. PFL pays benefits but does not by itself protect your job.",
      url: "https://edd.ca.gov/paidfamilyleave/"
    }
  ]
};

items.addOns.push(
  {
    id: "cradlewise-extra-mattress-cover",
    name: "Cradlewise Extra Mattress Cover",
    category: "Sleep",
    priority: "Must",
    price: 65,
    checkoutPrice: 71,
    purchased: true,
    image: "https://assets.cradlewise.com/images/index/meta-image-cng-new.jpg",
    why: "Purchased extra mattress cover for faster cleanup and crib reset after leaks or spit-up.",
    notes: "Purchased. Checkout estimate uses a $65 accessory estimate plus 8.625% San Francisco sales tax. Cradlewise notes to use only its mattress cover for fit and safety.",
    url: "https://cradlewise.com/product/mattress-cover/"
  },
  {
    id: "baby-clothes-swaddle-inventory",
    name: "Baby Clothes + Swaddle Inventory",
    category: "Clothes / Swaddles",
    priority: "Must",
    price: 1500,
    checkoutPrice: 1500,
    purchased: true,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80",
    why: "Purchased clothing, cloths, towels, swaddles, sleep sacks, and fitted sheets inventory.",
    notes: "Purchased: $1,500 spent. Open inventory for exact counts by type and size.",
    inventoryLabel: "Open inventory",
    inventory: [
      {
        heading: "Cloth / Care",
        lines: [
          "Burp cloth: 30",
          "Bibs: 7",
          "Shower towel: 7",
          "Diaper changing pad: 2",
          "Face towel: 5",
          "Pillow: 1"
        ]
      },
      {
        heading: "Newborn",
        lines: [
          "Long zipper: 9 pieces",
          "Short: 2 pieces",
          "Top: 5 shirts (0-1 month)"
        ]
      },
      {
        heading: "0-3 Months",
        lines: [
          "No legs button clip: 2",
          "Button with legs: 2",
          "Zipper with legs: 5"
        ]
      },
      {
        heading: "3 Months",
        lines: [
          "Zipper with legs: 8",
          "No legs button clip: 13",
          "Long button: 2"
        ]
      },
      {
        heading: "3-6 Months",
        lines: [
          "No legs button clip: 3",
          "Button long: 2",
          "Zipper with legs: 3"
        ]
      },
      {
        heading: "6 Months",
        lines: [
          "Zipper with legs: 6",
          "Half half outfit, top + bottom: 2 sets",
          "No legs button clip: 1"
        ]
      },
      {
        heading: "6-9 Months",
        lines: [
          "Button long: 4",
          "Zipper with legs: 4"
        ]
      },
      {
        heading: "9 Months",
        lines: [
          "Zipper with legs: 4"
        ]
      },
      {
        heading: "Sleep Gear",
        lines: [
          "Love to Dream swaddles: 3, arms-up newborn swaddles",
          "HALO arms-free / arms-up sleep sack, 0-3M: 1, transition / arms-free option",
          "HALO arms-free / arms-up sleep sack, 3-6M: 1, transition / arms-free option for later",
          "HALO SleepSack Swaddle, 0-3M: 1, arms-down / wrapped swaddle option",
          "Other sleep sacks / wearable blankets: 3, general sleep sack / wearable blanket",
          "Total sleep sacks / swaddles / wearable blankets: 9, more than enough"
        ]
      },
      {
        heading: "Crib / Cradlewise",
        lines: [
          "Crib / Cradlewise fitted sheets: 3 total"
        ]
      }
    ]
  },
  {
    id: "pacifier-starter-variety",
    name: "Philips Avent Soothie Pacifiers 0-3M - 4 Pack",
    category: "Sleep",
    priority: "Must",
    price: 11.89,
    checkoutPrice: 13,
    purchased: true,
    image: "https://philips.scene7.com/is/image/philipsconsumer/60d1fe5579ed4bb69be9b17700d14848?wid=960&hei=960&fit=constrain",
    why: "Purchased newborn pacifier set with the one-piece silicone design commonly used for 0-3 month babies.",
    notes: "Purchased from Walmart: Philips Avent Soothie Baby Pacifiers, green 4-pack, model SCF190/41. No clips or strings in sleep space.",
    url: "https://www.walmart.com/search?q=Philips%20Avent%20Soothie%20Baby%20Pacifiers%200-3%20Months%20Green%204%20Pack%20SCF190%2F41"
  },
  {
    id: "costco-huggies-plus-newborn-diapers",
    name: "Huggies Plus Diapers Size Newborn - 148 Count",
    category: "Diapers",
    priority: "Must",
    price: 0,
    priceLabel: "Purchased - price TBD",
    purchased: true,
    image:
      "https://bfasset.costco-static.com/U447IH35/as/s4pvbk6gjkkc9gknfhwcxcv/4201011902-847__1?auto=webp&canvas=1024%2C1024&fit=bounds&format=jpg&height=1024&width=1024",
    why: "Purchased newborn diaper box: 148 Huggies Plus Little Snugglers diapers, tracked once here instead of duplicated under wipes.",
    notes: "Costco item 2009060. Product page lists newborn size, 148 count, online-only, UPS Ground included in quoted price, and diapers made without phthalates, parabens, lotions, elemental chlorine, or natural rubber latex. Exact checkout price still needs to be entered because the public Costco page did not expose a reliable price.",
    url: "https://www.costco.com/p/-/huggies-plus-diapers-size-newborn/4201011902"
  },
  {
    id: "keekaroo-peanut-changer",
    name: "Keekaroo Peanut Changer - Vanilla",
    category: "Diapering",
    priority: "Must",
    price: 149.95,
    checkoutPrice: 163,
    purchased: true,
    image:
      "https://images.ctfassets.net/50gzycvace50/834ab06a1fd45e483c5a3b55b21dc87683ee4c0cb2bb9decaf75283c3b4e5f40/09275d8faafd895387c421c6309d0a93/834ab06a1fd45e483c5a3b55b21dc87683ee4c0cb2bb9decaf75283c3b4e5f40.png?bg=rgb%3Afafafa&fl=progressive&fm=jpg&h=1240&w=1240",
    why: "Purchased wipeable changing pad for use on existing furniture instead of a dedicated changing table.",
    notes: "Purchased from Keekaroo Brand Products via Walmart: Peanut Changer in Vanilla, fully impermeable shell over foam. Checkout estimate includes 8.625% San Francisco sales tax.",
    url: "https://www.walmart.com/search?q=Keekaroo%20Peanut%20Changer%20Vanilla"
  },
  {
    id: "amazon-b0dws9xw57-portable-changing-table",
    name: "Portable Folding Baby Changing Table with Waste Basket + 2 Drawers",
    category: "Diapering",
    priority: "Must",
    price: 0,
    priceLabel: "Purchased - price TBD",
    purchased: true,
    image: "https://m.media-amazon.com/images/I/411IEBjqRWL._AC_.jpg",
    why: "Purchased portable diaper changing station with waterproof changing pad, lockable wheels, waste basket, two foldable drawers, and adjustable height.",
    notes: "Replaces the previous wheeled changing-table candidate. Amazon product page lists a heavy-duty metal frame, waterproof pad, guardrails, safety strap, 3-level height adjustment, lockable wheels, side storage, two drawers, and foldable compact storage. Amazon did not expose a featured-offer price publicly, so enter the receipt total later.",
    url: "https://www.amazon.com/Changing-Versatile-Portable-Waterproof-Adjustable/dp/B0DWS9XW57"
  },
  {
    id: "angelcare-baby-bath-support-grey",
    name: "The First Years Sure Comfort Newborn to Toddler Tub - White",
    category: "Bath / Changing",
    priority: "Must",
    price: 19.99,
    checkoutPrice: 22,
    purchased: true,
    image:
      "https://i5.walmartimages.com/seo/The-First-Years-Sure-Comfort-Newborn-to-Toddler-Tub-White_b5e176d6-1f1f-4dc4-8893-a2961f5d2743.4ee7e2dd09f78bf92a2330237a8783a5.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573",
    why: "Purchased simple newborn-to-toddler bath tub with included sling for early baths.",
    notes: "Purchased from Walmart in white. Checkout estimate uses the $19.99 product price plus 8.625% San Francisco sales tax.",
    url: "https://www.walmart.com/ip/911326907"
  },
  {
    id: "ergobaby-embrace-newborn-carrier",
    name: "Ergobaby Embrace Newborn Baby Carrier",
    category: "Carrier",
    priority: "Must",
    price: 99,
    checkoutPrice: 108,
    purchased: true,
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80",
    why: "Purchased newborn-specific soft structured carrier for the first 0-12 months and quick hands-free outings.",
    notes: "Purchased from Amazon. Checkout estimate uses Ergobaby's $99 official price plus 8.625% San Francisco sales tax because Amazon did not expose a current offer price publicly. Product range is 7-25 lb; check airway, hip position, and fit every time.",
    url: "https://www.amazon.com/dp/B08Z1L1M18?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
    links: [
      {
        label: "Amazon - Ergobaby Embrace",
        url: "https://www.amazon.com/dp/B08Z1L1M18?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
      },
      {
        label: "Ergobaby Embrace official page",
        url: "https://ergobaby.com/the-embrace-newborn-carrier"
      }
    ]
  },
  {
    id: "noodle-boo-newborn-2-in-1-wash",
    name: "Noodle & Boo Newborn 2-in-1 Hair & Body Wash - 16 fl oz",
    category: "Bath",
    priority: "Must",
    price: 0,
    priceLabel: "Purchased - price TBD",
    purchased: true,
    image: "https://m.media-amazon.com/images/I/31npemPK-IS._AC_.jpg",
    why: "Purchased tear-free newborn shampoo/body wash for baths.",
    notes: "Purchased from Amazon. Amazon did not expose a reliable featured-offer price publicly, so spend is TBD until the receipt total is entered.",
    url: "https://www.amazon.com/dp/B00IDSJX7M?lv=shuf&channelId=500&plpRedirect=mhFallback&th=1",
    links: [
      {
        label: "Amazon - Noodle & Boo 2-in-1 Newborn Wash",
        url: "https://www.amazon.com/dp/B00IDSJX7M?lv=shuf&channelId=500&plpRedirect=mhFallback&th=1"
      },
      {
        label: "Noodle & Boo newborn care collection",
        url: "https://www.noodleandboo.com/collections/newborn-care"
      }
    ]
  },
  {
    id: "infant-health-sick-day-kit",
    name: "Infant Sick-Day Basics: Snotsucker + Thermometer + Tylenol",
    category: "Health",
    priority: "Must",
    price: 32,
    checkoutPrice: 32,
    purchased: true,
    image: "https://frida.com/cdn/shop/files/HERO_783ba058-03a4-4ce5-a996-d28de2c30fd0_600x.jpg?v=1720804759",
    why: "Purchased the core sick-day basics: snotsucker, thermometer, and infant Tylenol.",
    notes: "Purchased total: $32. Ask the pediatrician before dosing infant acetaminophen/Tylenol, especially for newborns under 12 weeks.",
    url: "https://frida.com/products/nosefrida-the-snotsucker-saline-kit",
    links: [
      {
        label: "Frida Baby NoseFrida Snotsucker",
        url: "https://frida.com/products/nosefrida-the-snotsucker-saline-kit"
      },
      {
        label: "FridaBaby Thermometer",
        url: "https://frida.com/products/3-in-1-true-temp-thermometer"
      },
      {
        label: "Infants' Tylenol dosing safety",
        url: "https://www.tylenol.com/products/infants-tylenol-oral-suspension"
      },
      {
        label: "AAP medicine safety",
        url: "https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/default.aspx"
      }
    ]
  },
  {
    id: "newborn-play-development-starter",
    name: "Newborn Play + Book Starter",
    category: "Play",
    priority: "Must",
    price: 235,
    purchased: false,
    image: "https://cdn.shopify.com/s/files/1/2386/2119/files/03Newborns3Q-1445_FullFrame_Retouched_MB_V1_1.png?v=1707846206",
    why: "The tracker adds a play gym, high-contrast cards/books, board books, and one soft rattle/crinkle toy.",
    notes: "One developmental station plus a small book/card shelf prevents toy clutter.",
    url: "https://lovevery.com/products/the-play-gym",
    links: [
      {
        label: "Lovevery Play Gym",
        url: "https://lovevery.com/products/the-play-gym"
      },
      {
        label: "Wee Gallery art cards",
        url: "https://weegallery.com/collections/art-cards"
      },
      {
        label: "Manhattan Toy Winkel",
        url: "https://www.manhattantoy.com/products/winkel"
      }
    ]
  },
  {
    id: "later-solids-teething-bundle",
    name: "Later Solids + Teething Bundle",
    category: "Feeding",
    priority: "Nice",
    price: 75,
    purchased: false,
    image: "https://mushie.com/cdn/shop/files/mushie_-_social_graph.png?v=1773012168",
    why: "The tracker marks silicone bibs, teethers, and a small toy bin for the 3-6 month window.",
    notes: "Buy later near solids/teething. This is intentionally not a newborn-stage purchase.",
    url: "https://mushie.com/products/silicone-bib",
    links: [
      {
        label: "Mushie silicone bibs",
        url: "https://mushie.com/products/silicone-bib"
      },
      {
        label: "Comotomo teether",
        url: "https://comotomo.com/products/teether"
      }
    ]
  }
);

items.parentWellness.push(
  {
    id: "amazon-sitz-bath-soak-10oz",
    name: "Sitz Bath Soak for Postpartum Care & Hemorrhoids - 10 oz",
    category: "Vaginal Recovery",
    priority: "Conditional",
    price: 14.95,
    checkoutPrice: 16.24,
    purchased: true,
    image: "https://m.media-amazon.com/images/I/71k-tGU-mNL._SS284_.jpg",
    why: "Purchased for an optional warm sitz bath to help with postpartum perineal or hemorrhoid discomfort.",
    notes: "Purchased from Amazon for $16.24 including tax, with free shipping. Ask your OB before using bath additives after delivery; plain warm water is the simpler default if skin is irritated or sensitive.",
    url: "https://www.amazon.com/dp/B07HY7R9J4"
  },
  {
    id: "lansinoh-organic-nipple-butter-2oz",
    name: "Lansinoh Organic Nipple Butter - 2 oz",
    category: "Feeding Recovery",
    priority: "Conditional",
    price: 12.25,
    checkoutPrice: 13.31,
    purchased: true,
    image: "https://m.media-amazon.com/images/I/71B2iO07S4L._SS284_.jpg",
    why: "Purchased plant-based nipple balm for moisturizing and soothing dry skin during nursing or pumping.",
    notes: "Purchased from Amazon for $13.31 including tax, with free shipping. Use only if nursing or pumping, and stop if it causes irritation.",
    url: "https://www.amazon.com/dp/B07X53WM1H"
  },
  {
    id: "frida-labor-delivery-postpartum-recovery-kit",
    name: "Frida Mom Labor & Delivery + Postpartum Recovery Kit",
    category: "Vaginal Recovery",
    priority: "Must",
    price: 63,
    purchased: false,
    image:
      "https://target.scene7.com/is/image/Target//GUEST_48964878-3763-4094-8a80-7b9778aada28?wid=800&qlt=85",
    why: "The kit establishes the core vaginal-birth recovery station: peri rinsing, early cold therapy, disposable underwear, witch-hazel liners, healing foam, gown, socks, and a caddy.",
    notes: "In the Target cart, quantity 1; current cart price is $63.00 as of July 28, 2026. It includes 1 peri bottle, 4 disposable underwear, 4 instant ice maxi pads, 24 witch-hazel liners, 5 oz healing foam, 1 gown, and 1 pair of socks. The four underwear are only a starter quantity.",
    url: "https://www.target.com/p/frida-mom-labor-and-delivery---postpartum-recovery-kit---postpartum-must-haves---babyshower-gift-for-mom--no-aasa/-/A-77295089",
    links: [
      {
        label: "Target - Frida Mom Labor & Delivery + Postpartum Recovery Kit",
        url: "https://www.target.com/p/frida-mom-labor-and-delivery---postpartum-recovery-kit---postpartum-must-haves---babyshower-gift-for-mom--no-aasa/-/A-77295089"
      },
      {
        label: "ACOG postpartum pain guidance",
        url: "https://www.acog.org/womens-health/faqs/postpartum-pain-management"
      }
    ]
  },
  {
    id: "frida-instant-ice-maxi-pads",
    name: "Frida Mom Instant Ice Maxi Pads - 8 Count",
    category: "Vaginal Recovery",
    priority: "Must",
    price: 17.09,
    purchased: false,
    image:
      "https://target.scene7.com/is/image/Target//GUEST_57d352d4-5531-4e84-9997-a490bf2fa0b3?wid=800&qlt=85",
    why: "The 2-in-1 pads combine an absorbent maxi pad with instant cold therapy for early perineal swelling and soreness.",
    notes: "In the Target cart, quantity 1; current cart price is $17.09 as of July 28, 2026. Together with the four in the recovery kit, this gives 12 ice pads—adequate for short 10–20 minute cold sessions during the first 24–72 hours. Regular maternity pads are still needed afterward.",
    url: "https://www.target.com/p/frida-mom-instant-ice-maxi-pad---8ct--no-aasa/-/A-76199077",
    links: [
      {
        label: "Target - Frida Mom Instant Ice Maxi Pads",
        url: "https://www.target.com/p/frida-mom-instant-ice-maxi-pad---8ct--no-aasa/-/A-76199077"
      },
      {
        label: "ACOG postpartum pain guidance",
        url: "https://www.acog.org/womens-health/faqs/postpartum-pain-management"
      }
    ]
  },
  {
    id: "frida-witch-hazel-cooling-liners-24",
    name: "Frida Mom Witch Hazel Cooling Pad Liners - 24 Count",
    category: "Vaginal Recovery",
    priority: "Conditional",
    price: 8.99,
    purchased: false,
    image:
      "https://target.scene7.com/is/image/Target//GUEST_f144c671-c946-4f19-9386-e206659060d3?wid=800&qlt=85",
    why: "Full-length cooling liners can cover a pad more evenly than small round pads and provide an easy refill for the recovery bathroom.",
    notes: "In the Target cart, quantity 1; current cart price is $8.99 as of July 28, 2026. With the 24 liners in the kit, this gives 48 Frida liners; the two Tucks packs add 80 more witch-hazel pads, so no additional witch-hazel product is needed.",
    url: "https://www.target.com/p/frida-mom-perineal-witch-hazel-cooling-pad-liners-genital-irritation-treatment---24ct--no-aasa/-/A-76199078"
  },
  {
    id: "frida-upside-down-pain-relief-spray",
    name: "Frida Mom Upside Down Pain Relief Spray - 3.5 oz",
    category: "Vaginal Recovery",
    priority: "Conditional",
    price: 8.9,
    purchased: false,
    image:
      "https://target.scene7.com/is/image/Target//GUEST_d85571c3-d838-498c-a33e-e2181cd869f5?wid=800&qlt=85",
    why: "The upside-down can is convenient for temporary external numbing relief without difficult positioning during early recovery.",
    notes: "In the Target cart, quantity 1; current cart price is $8.90 as of July 28, 2026. Use externally and follow the label and discharge plan; ask the OB before applying it to stitches or broken skin. The kit's healing foam is a separate soothing product, so no second spray is needed.",
    url: "https://www.target.com/p/frida-mom-upside-down-pain-relief-spray-hospital-strength-for-instant-relief-and-healing---3-5-oz--no-aasa/-/A-94647169",
    links: [
      {
        label: "Target - Frida Mom Upside Down Pain Relief Spray",
        url: "https://www.target.com/p/frida-mom-upside-down-pain-relief-spray-hospital-strength-for-instant-relief-and-healing---3-5-oz--no-aasa/-/A-94647169"
      },
      {
        label: "ACOG postpartum pain guidance",
        url: "https://www.acog.org/womens-health/faqs/postpartum-pain-management"
      }
    ]
  },
  {
    id: "lansinoh-sitz-bath-salts",
    name: "Lansinoh Sitz Bath Salts",
    category: "Vaginal Recovery",
    priority: "Conditional",
    price: 15.99,
    checkoutPrice: 17,
    purchased: false,
    image: "https://lansinoh.com/cdn/shop/files/44_1100x.jpg?v=1711669568",
    why: "The pictured salts are an optional add-on for a warm sitz bath, which can soothe perineal soreness after a vaginal birth.",
    notes: "Plain warm water is sufficient and is the simpler default. These salts contain lavender oil and other botanicals, so ask your OB first and skip them if you have sensitive skin, irritation, or instructions to avoid bath additives.",
    url: "https://lansinoh.com/products/sitz-bath-salts",
    links: [
      {
        label: "Lansinoh Sitz Bath Salts",
        url: "https://lansinoh.com/products/sitz-bath-salts"
      },
      {
        label: "ACOG postpartum pain guidance",
        url: "https://www.acog.org/womens-health/faqs/postpartum-pain-management"
      }
    ]
  },
  {
    id: "tucks-postpartum-hemorrhoid-care",
    name: "Tucks Medicated Cooling Pads - 2 x 40 Count",
    category: "Hemorrhoid Care",
    priority: "Conditional",
    price: 8.98,
    purchased: false,
    image:
      "https://target.scene7.com/is/image/Target//GUEST_1791af6c-3bf3-419f-a986-68223d4fae4a?wid=800&qlt=85",
    why: "Small witch-hazel pads are convenient for external cooling and hemorrhoid discomfort after delivery.",
    notes: "In the Target cart, quantity 2; current combined cart price is $8.98 as of July 28, 2026, for 80 pads total. Use externally and do not flush. Together with the Frida liners, the cart has 128 witch-hazel pads/liners, so this category is fully stocked.",
    url: "https://www.target.com/p/tucks-medicated-pads-set---40pc--for-groin-area--includes-instructions--feminine-care--no-aasa/-/A-93550537",
    links: [
      {
        label: "Target - Tucks Medicated Pads, 40 count",
        url: "https://www.target.com/p/tucks-medicated-pads-set---40pc--for-groin-area--includes-instructions--feminine-care--no-aasa/-/A-93550537"
      },
      {
        label: "Tucks official directions and warnings",
        url: "https://tucks.com/product/tucks-medicated-cooling-pads/"
      }
    ]
  },
  {
    id: "postpartum-pads-underwear-refill",
    name: "Postpartum Pads x36 + Disposable Underwear Refill",
    category: "Bleeding Care",
    priority: "Must",
    price: 27.87,
    checkoutPrice: 31,
    purchased: false,
    image: "https://frida.com/cdn/shop/files/FM_RecoveryEssentialsKit_Thumbnail_700x.jpg?v=1714489405",
    why: "Ice pads are for the first 24–72 hours; two 18-count packs of long maternity pads and one 8-pack of soft disposable underwear cover the longer bleeding phase much more realistically.",
    notes: "This is the most important cart gap. The kit has only four underwear and no regular maternity-pad supply. Estimate uses 2 x $7.99 pads plus $11.89 underwear before tax. Use external pads rather than tampons or menstrual cups while healing, and seek urgent care for unusually heavy bleeding.",
    url: "https://www.target.com/p/-/A-86847731",
    links: [
      {
        label: "Frida Mom postpartum pads - 18 count",
        url: "https://www.target.com/p/-/A-86847731"
      },
      {
        label: "Frida Mom disposable underwear - 8 count",
        url: "https://www.target.com/p/-/A-76199076"
      },
      {
        label: "ACOG postpartum warning signs",
        url: "https://www.acog.org/giving/programs/quality-and-safety/resources"
      }
    ]
  },
  {
    id: "colace-2-in-1-postpartum",
    name: "Colace Bowel-Plan Options: Regular Strength or 2-in-1",
    category: "Bowel Care",
    priority: "Conditional",
    price: 19.2,
    checkoutPrice: 21,
    purchased: false,
    image: "https://colacecapsules.com/wp-content/uploads/2024/04/colace_2in1-trimmed-1.png",
    why: "U.S.-based REDnote recovery lists more often show regular-strength docusate 100 mg, while the pictured 2-in-1 combines docusate 50 mg with 8.6 mg sennosides, a stimulant laxative.",
    notes: "These are not interchangeable. Buy only the exact product and dose listed in the hospital or OB bowel plan, especially if breastfeeding or taking other medicines. The 2-in-1 label warns against use longer than one week unless directed and says to stop for rectal bleeding or no bowel movement.",
    url: "https://colacecapsules.com/Products/Colace-2-in-1/",
    links: [
      {
        label: "Colace Regular Strength product page",
        url: "https://colacecapsules.com/Products/Colace-Regular-Strength/"
      },
      {
        label: "Pictured Colace 2-in-1 product page",
        url: "https://colacecapsules.com/Products/Colace-2-in-1/"
      },
      {
        label: "DailyMed U.S. drug label",
        url: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=9fce5c4b-1e2e-47ef-13e5-c3bd5320d41b&version=8"
      },
      {
        label: "ACOG constipation guidance",
        url: "https://www.acog.org/womens-health/faqs/postpartum-pain-management"
      }
    ]
  },
  {
    id: "c-section-recovery-kit-conditional",
    name: "C-Section Recovery Kit - Only If Needed",
    category: "C-Section Recovery",
    priority: "Conditional",
    price: 99.99,
    checkoutPrice: 109,
    purchased: false,
    image: "https://frida.com/cdn/shop/files/social-sharing-image.png?v=1736467122",
    why: "High-waist disposable underwear, a peri bottle, wipes, abdominal support, and scar patches are packaged for post-operative comfort.",
    notes: "Do not buy this in addition to the vaginal-birth kit unless a C-section is planned or becomes likely. Confirm binder and scar-patch timing with your OB; keep the incision clean and dry and wear loose clothing.",
    url: "https://frida.com/products/c-section-recovery-kit",
    links: [
      {
        label: "Frida Mom C-section recovery kit",
        url: "https://frida.com/products/c-section-recovery-kit"
      },
      {
        label: "NHS C-section recovery guidance",
        url: "https://www.nhs.uk/tests-and-treatments/caesarean-section/recovery/"
      }
    ]
  },
  {
    id: "lansinoh-hot-cold-breast-therapy-2pk",
    name: "Lansinoh Hot & Cold Breast Therapy Packs - 2 Pack",
    category: "Feeding Recovery",
    priority: "Conditional",
    price: 10.79,
    purchased: false,
    image:
      "https://target.scene7.com/is/image/Target//GUEST_492919a4-5946-4585-b1ee-2073bbfb6aae?wid=800&qlt=85",
    why: "The contoured reusable packs can be chilled to soothe engorgement or briefly warmed before feeding or pumping for comfort.",
    notes: "In the Target cart, quantity 1; current cart price is $10.79 as of July 28, 2026. For swelling, favor cold use with a cover; avoid prolonged heat and deep massage. Fever, a worsening red area, severe pain, or flu-like symptoms need prompt clinical advice.",
    url: "https://www.target.com/p/lansinoh-hot---cold-breast-therapy-packs-for-breastfeeding---pumping---2pk--contoured-fit--6-inch-diameter--no-aasa/-/A-14386190",
    links: [
      {
        label: "Target - Lansinoh Hot & Cold Breast Therapy Packs",
        url: "https://www.target.com/p/lansinoh-hot---cold-breast-therapy-packs-for-breastfeeding---pumping---2pk--contoured-fit--6-inch-diameter--no-aasa/-/A-14386190"
      },
      {
        label: "Academy of Breastfeeding Medicine mastitis protocol",
        url: "https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf"
      }
    ]
  },
  {
    id: "legendairy-sunflower-lecithin",
    name: "Legendairy Milk Sunflower Lecithin - 60 Softgels",
    category: "Feeding Recovery",
    priority: "Conditional",
    price: 12.41,
    purchased: false,
    image:
      "https://target.scene7.com/is/image/Target//GUEST_c7463541-405b-4878-80a9-d99c4b84627f?wid=800&qlt=85",
    why: "This supplement is sometimes suggested for recurrent plugged ducts, but it is not a routine postpartum must-have.",
    notes: "In the Target cart, quantity 1; current cart price is $12.41 as of July 28, 2026. Keep it available but do not start it automatically. LactMed's July 2026 review says no scientifically valid clinical studies establish the safety and effectiveness of high-dose lecithin supplementation in nursing parents or infants.",
    url: "https://www.target.com/p/legendairy-milk-sunflower-lecithin---60ct--dietary-supplements--sugar-free--gluten-free--1200mg-softgel--no-aasa/-/A-83751626",
    links: [
      {
        label: "Target - Legendairy Milk Sunflower Lecithin, 60 count",
        url: "https://www.target.com/p/legendairy-milk-sunflower-lecithin---60ct--dietary-supplements--sugar-free--gluten-free--1200mg-softgel--no-aasa/-/A-83751626"
      },
      {
        label: "NIH LactMed: Lecithin",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK501772/"
      },
      {
        label: "Academy of Breastfeeding Medicine mastitis protocol",
        url: "https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf"
      }
    ]
  },
  {
    id: "lansinoh-stay-dry-nursing-pads-100",
    name: "Lansinoh Stay Dry Disposable Nursing Pads - 100 Count",
    category: "Feeding Recovery",
    priority: "Conditional",
    price: 10.34,
    purchased: false,
    image:
      "https://target.scene7.com/is/image/Target//GUEST_da85208c-e6cb-47c8-ac42-ae87d5a042e3?wid=800&qlt=85",
    why: "A full 100-count starter supply provides practical leak coverage while milk supply and feeding routines settle.",
    notes: "In the Target cart, quantity 1; current cart price is $10.34 as of July 28, 2026. This is an appropriate starter quantity if nursing or pumping; change pads when damp and stop if the material irritates the skin.",
    url: "https://www.target.com/p/lansinoh-stay-dry-disposable-nursing-pads-for-breastfeeding--leakproof---100ct--bpa-free--leakproof-lining--4-5-inch-diameter--no-aasa/-/A-14009931"
  },
  {
    id: "lansinoh-lanolin-nipple-cream-1-41oz",
    name: "Lansinoh Lanolin Nipple Cream - 1.41 oz",
    category: "Feeding Recovery",
    priority: "Conditional",
    price: 8.54,
    purchased: false,
    image:
      "https://target.scene7.com/is/image/Target//GUEST_b3137bad-3e4b-4e14-b068-04f345bfd072?wid=800&qlt=85",
    why: "Purified lanolin is a durable barrier option for dry or sore nipples during nursing or pumping.",
    notes: "In the Target cart, quantity 1; current cart price is $8.54 as of July 28, 2026. Together with the purchased 2 oz Lansinoh Organic Nipple Butter, the total amount is adequate; choose the product your skin tolerates rather than layering both by default.",
    url: "https://www.target.com/p/lansinoh-lanolin-nipple-cream-for-breastfeeding---1-41oz--no-aasa/-/A-92544"
  },
  {
    id: "nursing-bras-pads-bundle",
    name: "Supportive Wire-Free Nursing Bras / Tanks - 2 to 3",
    category: "Feeding Recovery",
    priority: "Conditional",
    price: 200,
    purchased: false,
    image: "https://www.kindredbravely.com/cdn/shop/files/sublime-hands-free-pumping-nursing-bra-evryday-lounge-jogger-black-Ionna-k5-21536-1500x1875-3808281.png?v=1766515155&width=1200",
    why: "Two or three soft, supportive, wire-free bras or tanks make frequent feeding or pumping easier while postpartum size changes settle.",
    notes: "Still needed if nursing or pumping. Start with flexible sizing and avoid tight bands that compress breast tissue; the separate 100-count Lansinoh pad supply already covers leaks.",
    url: "https://www.kindredbravely.com/collections/nursing-bras",
    links: [
      {
        label: "Kindred Bravely nursing bras",
        url: "https://www.kindredbravely.com/collections/nursing-bras"
      },
      {
        label: "Bodily nursing bras",
        url: "https://itsbodily.com/collections/breastfeeding"
      }
    ]
  },
  {
    id: "freestyle-libre-3-rx-cgm",
    name: "FreeStyle Libre 3 Sensor (Rx CGM - Transition to 3 Plus)",
    category: "Maternal Health",
    priority: "Conditional",
    price: 0,
    priceLabel: "Rx / coverage varies",
    purchased: false,
    image: "https://www.freestyle.abbott/content/dam/adc/freestyle/countries/us-en/images/rebranding/fsl3-product/FSL3-Mobile-Hero.png",
    why: "A continuous glucose monitor can support clinician-directed diabetes or gestational-diabetes care, but it is not a routine postpartum-recovery purchase.",
    notes: "The screenshot shows the prescription-only 14-day Libre 3 sensor. Abbott is discontinuing Libre 3 and says users need a new prescription for the 15-day Libre 3 Plus, so ask your clinician which system and postpartum glucose plan are appropriate before buying. The screenshot's $99.99 price is not verified and coverage varies. FDA also announced a correction for certain Libre 3 and 3 Plus sensors that may report falsely low readings; check affected serial numbers and confirm readings that do not match symptoms with a blood glucose meter.",
    url: "https://www.freestyle.abbott/us-en/transition.html"
  },
  {
    id: "kirkland-womens-protective-underwear-92",
    name: "Kirkland Signature Women's Protective Underwear - S/M, 92 Count",
    category: "Bladder-Leak Backup",
    priority: "Optional",
    price: 0,
    priceLabel: "CA$44 / Canada only",
    purchased: false,
    image: "https://bfasset.costco-static.com/U447IH35/as/rmrpmqjvpjbfxrgvbhjpzfh/100776718-894_smallmedium_1?auto=webp&canvas=1024%2C1024&fit=bounds&format=jpg&height=1024&width=1024",
    why: "Highly absorbent adult briefs can be an overflow or bladder-leak backup, but they are not the primary choice for monitoring normal postpartum bleeding.",
    notes: "This is the exact Costco Canada item 5357952: S/M, 92 count, for a listed 31-37 in waist and/or 115-190 lb. The screenshot shows a mixed 3.7/5 rating from 71 reviews. No current U.S. Costco listing was found, and 92 briefs is more than most uncomplicated short-term recoveries need. Confirm fit before buying and use maternity pads or postpartum underwear for lochia so bleeding remains easier to monitor.",
    url: "https://www.costco.ca/p/-/kirkland-signature-womens-protective-underwear/100776718"
  },
  {
    id: "postpartum-recovery-station",
    name: "Bedside Recovery Station: Cart + Heating Pad",
    category: "Daily Comfort",
    priority: "Must",
    price: 40.99,
    checkoutPrice: 45,
    purchased: false,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
    why: "A small rolling cart keeps a large water bottle, one-hand snacks, burp cloths, feeding supplies, and a long phone cable within reach; a heating pad can help with cramping when your clinician says it is appropriate.",
    notes: "Estimate uses the $16 Brightroom cart and $24.99 up&up XL heating pad, before tax. Reuse a bottle and charger you own. Never sleep on a heating pad, and store all medicines securely away from children.",
    url: "https://www.target.com/p/-/A-94948929",
    links: [
      {
        label: "Brightroom 3-tier utility cart",
        url: "https://www.target.com/p/-/A-94948929"
      },
      {
        label: "Target postpartum heating-pad options",
        url: "https://www.target.com/s/heating%2Bpad%2Bpostpartum"
      },
      {
        label: "ACOG postpartum pain guidance",
        url: "https://www.acog.org/womens-health/faqs/postpartum-pain-management"
      }
    ]
  }
);

items.freeBenefits.push(
  {
    id: "postpartum-care-safety-plan",
    name: "Postpartum Medication + Warning-Sign Plan",
    category: "Postpartum Health",
    status: "Plan",
    why: "Before discharge, write down the pain-control and bowel-care plan, who to call day or night, follow-up dates, and urgent maternal warning signs.",
    notes: "Buy medicines only from the hospital/OB discharge plan. Save the OB, Labor & Delivery, lactation, and nearest emergency numbers in both parents' phones; review the warning signs together.",
    url: "https://www.acog.org/womens-health/health-tools/my-postpartum-care-checklist"
  },
  {
    id: "infant-cpr-choking-class",
    name: "Infant CPR / Choking Class",
    category: "Safety",
    status: "Book",
    why: "The tracker marks infant CPR and choking training as a P0 before-birth action.",
    notes: "Use Red Cross San Francisco or another local infant CPR provider that fits your schedule.",
    url: "https://www.redcross.org/local/california/take-a-class/cpr-san-francisco-ca"
  },
  {
    id: "ucsf-car-seat-fitting",
    name: "Car Seat Installation Check",
    category: "Safety",
    status: "Book",
    why: "The tracker calls for a car seat fitting before delivery, especially for Waymo/taxi baseless installation.",
    notes: "UCSF CHiPPS and CHP are the local options to check first.",
    url: "https://emergency.ucsf.edu/collaborations/ucsf-benioff-childrens-hospital-san-francisco-child-passenger-and-pedestrian-safety-chipps-program"
  },
  {
    id: "lactation-consultant-booking",
    name: "Lactation Consultant",
    category: "Support",
    status: "Book",
    why: "The tracker adds a local International Board Certified Lactation Consultant before birth.",
    notes: "Have a contact ready even if feeding goes smoothly; fit and latch issues are easier to solve quickly.",
    url: "https://www.carolinekerherve.com/"
  },
  {
    id: "postpartum-night-support-shortlist",
    name: "Postpartum Doula / Night Nurse Shortlist",
    category: "Support",
    status: "Book",
    why: "The tracker adds postpartum or night support as a P0 planning item.",
    notes: "Use this as a shortlist starting point; confirm availability, newborn experience, references, and overnight scope.",
    url: "https://eastbaypostpartum.com/"
  },
  {
    id: "baby-admin-checklist",
    name: "Baby Admin Checklist",
    category: "Admin",
    status: "Do",
    why: "The tracker includes pediatrician selection, insurance enrollment, leave paperwork, birth certificate/SSN, urgent-care plan, and gift/returns tracking.",
    notes: "Keep this outside the purchase budget; it is a before-birth execution list, not gear.",
    url: "https://www.usa.gov/birth-certificate"
  }
);

const stateKey = "babyRegistryChecked.v1";
const selected = new Set(loadState());
const renderedCards = [];
const legacySelectionMigrations = [
  {
    from: ["waterwipes-12-pack", "wipe-warmer-machine"],
    to: "momcozy-wipe-warmer"
  },
  {
    from: ["boppy-nursing"],
    to: "my-brest-friend-super-deluxe-platinum"
  },
  {
    from: ["postpartum-bathroom-basics"],
    to: "frida-labor-delivery-postpartum-recovery-kit"
  },
  {
    from: ["dermoplast-postpartum-spray"],
    to: "frida-upside-down-pain-relief-spray"
  },
  {
    from: ["avent-hot-cold-breast-pads"],
    to: "lansinoh-hot-cold-breast-therapy-2pk"
  }
];

function loadState() {
  try {
    const raw = localStorage.getItem(stateKey);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify(Array.from(selected)));
}

function migrateLegacySelections() {
  let changed = false;

  legacySelectionMigrations.forEach(({ from, to }) => {
    const hadLegacySelection = from.some((id) => selected.has(id));
    from.forEach((id) => selected.delete(id));
    if (hadLegacySelection) {
      selected.add(to);
      changed = true;
    }
  });

  if (changed) {
    saveState();
  }
}

const babyGroupTargets = {
  sleep: "sleepEssentials",
  play: "playEssentials",
  eat: "eatEssentials",
  poop: "poopEssentials",
  travel: "travelEssentials"
};

const babyGroupByItemId = {
  "cradlewise-crib": "sleep",
  "newton-nest-convertible-crib": "sleep",
  "newton-mini-sheets-two-pack": "sleep",
  "halo-cotton-swaddle-birds-small": "sleep",
  "cradlewise-extra-mattress-cover": "sleep",
  "baby-clothes-swaddle-inventory": "sleep",
  "pacifier-starter-variety": "sleep",

  "babybjorn-bouncer-toy-bundle": "play",
  "newborn-play-development-starter": "play",

  "tripp-trapp": "eat",
  "my-brest-friend-super-deluxe-platinum": "eat",
  "later-solids-teething-bundle": "eat",

  "momcozy-wipe-warmer": "poop",
  "clean-butt-bundle": "poop",
  "up-up-diaper-cream-brush": "poop",
  "tide-pods-free-gentle-152": "poop",
  "costco-huggies-plus-newborn-diapers": "poop",
  "keekaroo-peanut-changer": "poop",
  "amazon-b0dws9xw57-portable-changing-table": "poop",
  "angelcare-baby-bath-support-grey": "poop",
  "noodle-boo-newborn-2-in-1-wash": "poop",
  "infant-health-sick-day-kit": "poop",

  "nuna-trvl-lx-pipa-urbn-travel-system": "travel",
  "ergobaby-embrace-newborn-carrier": "travel"
};

function babyEssentialsTargetForItem(item) {
  const group = babyGroupByItemId[item.id] || "poop";
  return babyGroupTargets[group];
}

const departmentProgress = {
  sleep: {
    targetId: "sleepEssentials",
    labelId: "sleepProgressLabel",
    navId: "sleepNavProgress",
    barId: "sleepProgressBar"
  },
  play: {
    targetId: "playEssentials",
    labelId: "playProgressLabel",
    navId: "playNavProgress",
    barId: "playProgressBar"
  },
  eat: {
    targetId: "eatEssentials",
    labelId: "eatProgressLabel",
    navId: "eatNavProgress",
    barId: "eatProgressBar"
  },
  poop: {
    targetId: "poopEssentials",
    labelId: "poopProgressLabel",
    navId: "poopNavProgress",
    barId: "poopProgressBar"
  },
  travel: {
    targetId: "travelEssentials",
    labelId: "travelProgressLabel",
    navId: "travelNavProgress",
    barId: "travelProgressBar"
  },
  parentCare: {
    targetId: "parentCareEssentials",
    labelId: "parentCareProgressLabel",
    navId: "parentCareNavProgress",
    barId: "parentCareProgressBar"
  }
};

function refreshDepartmentProgress() {
  Object.values(departmentProgress).forEach(({ targetId, labelId, navId, barId }) => {
    const cards = Array.from(document.querySelectorAll(`#${targetId} .item-card`));
    const total = cards.length;
    const complete = cards.filter((card) => {
      const itemId = card.dataset.itemId;
      return card.classList.contains("purchased") || (itemId && selected.has(itemId));
    }).length;
    const progressText = `${complete}/${total}`;
    const progressPercent = total ? Math.round((complete / total) * 100) : 0;
    const label = document.getElementById(labelId);
    const nav = document.getElementById(navId);
    const bar = document.getElementById(barId);

    if (label) {
      label.textContent = progressText;
    }
    if (nav) {
      nav.textContent = progressText;
    }
    if (bar) {
      bar.style.width = `${progressPercent}%`;
    }
  });
}

function fmtPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(price);
}

function estimatedCheckoutPrice(item) {
  if (Number.isFinite(item.checkoutPrice)) {
    return item.checkoutPrice;
  }

  return Math.round(item.price * (1 + californiaCheckoutTaxRate));
}

function isPurchased(item) {
  return Boolean(item.purchased);
}

function renderItems(sectionName, targetId, caution = false, group = "baby") {
  const template = document.getElementById("itemTemplate");
  const priorityRank = { Must: 0, Conditional: 1, Nice: 2, Optional: 3, Skip: 4 };
  const sectionItems = sectionName === "parentWellness"
    ? [...items[sectionName]].sort(
      (a, b) => (priorityRank[a.priority] ?? 99) - (priorityRank[b.priority] ?? 99)
    )
    : items[sectionName];

  sectionItems.forEach((item, index) => {
    const resolvedTargetId = typeof targetId === "function" ? targetId(item) : targetId;
    const target = document.getElementById(resolvedTargetId);

    if (!target) {
      return;
    }

    const clone = template.content.cloneNode(true);
    const card = clone.querySelector(".item-card");

    if (caution) {
      card.classList.add("caution");
    }

    if (isPurchased(item)) {
      card.classList.add("purchased");
      selected.add(item.id);
    }

    const image = clone.querySelector(".item-image");
    image.src = item.image || fallbackImage;
    image.alt = item.name;
    image.onerror = () => {
      image.src = fallbackImage;
    };

    clone.querySelector(".category").textContent = item.category;
    const priority = clone.querySelector(".item-priority");
    priority.textContent = item.priority || (caution ? "Skip" : "");
    priority.dataset.priority = (item.priority || "").toLowerCase();

    clone.querySelector("h3").textContent = item.name;
    clone.querySelector(".why").textContent = item.why;
    clone.querySelector(".notes").textContent = item.notes;
    clone.querySelector(".price").textContent = item.price > 0
      ? fmtPrice(estimatedCheckoutPrice(item))
      : item.priceLabel || "-";

    const itemLinks = Array.isArray(item.links) && item.links.length > 0
      ? item.links
      : [{ label: item.name, url: item.url }];
    const isBundle = itemLinks.length > 1;
    const primaryLink = clone.querySelector(".primary-link");
    if (item.url) {
      primaryLink.href = item.url;
    } else {
      primaryLink.classList.add("is-hidden");
    }

    const linksDetails = clone.querySelector(".item-links");
    const linksSummary = clone.querySelector(".item-links .link");
    const linksList = clone.querySelector(".item-links-list");
    const inventoryDetails = clone.querySelector(".inventory-details");
    const inventorySummary = clone.querySelector(".inventory-details .link");
    const inventoryContent = clone.querySelector(".inventory-content");

    linksSummary.textContent = `Open item links (${itemLinks.length})`;

    itemLinks.forEach((entry) => {
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = entry.url;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = entry.label;
      li.appendChild(anchor);
      linksList.appendChild(li);
    });

    if (Array.isArray(item.inventory) && item.inventory.length > 0) {
      inventorySummary.textContent = item.inventoryLabel || "Open inventory";
      item.inventory.forEach((section) => {
        const groupEl = document.createElement("section");
        groupEl.className = "inventory-group";

        const headingEl = document.createElement("h4");
        headingEl.textContent = section.heading;
        groupEl.appendChild(headingEl);

        const listEl = document.createElement("ul");
        section.lines.forEach((line) => {
          const itemEl = document.createElement("li");
          itemEl.textContent = line;
          listEl.appendChild(itemEl);
        });
        groupEl.appendChild(listEl);
        inventoryContent.appendChild(groupEl);
      });
      inventoryDetails.classList.remove("is-hidden");
    }

    const bundleCheckoutBtn = clone.querySelector(".bundle-checkout-btn");
    if (!isBundle || caution) {
      linksDetails.classList.add("is-hidden");
      bundleCheckoutBtn.classList.add("is-hidden");
    } else {
      primaryLink.textContent = "Open main item";
      linksDetails.classList.remove("is-hidden");
      bundleCheckoutBtn.classList.remove("is-hidden");
      bundleCheckoutBtn.addEventListener("click", () => {
        itemLinks.forEach((entry) => {
          const opened = window.open(entry.url, "_blank", "noopener,noreferrer");
          if (opened) {
            opened.opener = null;
          }
        });
      });
    }

    if (caution) {
      primaryLink.classList.add("is-hidden");
      linksDetails.classList.add("is-hidden");
      inventoryDetails.classList.add("is-hidden");
      bundleCheckoutBtn.classList.add("is-hidden");
    } else {
      primaryLink.classList.toggle("is-hidden", !item.url);
    }

    const checkbox = clone.querySelector(".item-check");
    const checkLabel = clone.querySelector(".check-label");

    checkbox.checked = selected.has(item.id);
    checkbox.disabled = caution || isPurchased(item);

    if (isPurchased(item)) {
      checkLabel.textContent = "Purchased";
    }

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        selected.add(item.id);
      } else {
        selected.delete(item.id);
      }
      saveState();
      refreshSummary();
    });

    card.style.animationDelay = `${index * 70}ms`;
    card.dataset.itemId = item.id;
    card.dataset.group = group;

    renderedCards.push({ card, item, caution, group });
    target.appendChild(clone);
  });
}

function refreshSummary() {
  const allTrackable = [...items.corePicks, ...items.addOns, ...items.parentWellness];

  allTrackable.forEach((item) => {
    if (isPurchased(item)) {
      selected.add(item.id);
    }
  });

  const selectedItems = allTrackable.filter((item) => selected.has(item.id));

  const selectedCount = selectedItems.length;
  const selectedBudget = selectedItems.reduce((sum, item) => {
    return sum + estimatedCheckoutPrice(item);
  }, 0);

  document.getElementById("selectedCount").textContent = String(selectedCount);
  document.getElementById("selectedBudget").textContent = fmtPrice(selectedBudget);
  refreshDepartmentProgress();
}

function renderBenefits(sectionName, targetId) {
  const target = document.getElementById(targetId);
  const template = document.getElementById("benefitTemplate");

  items[sectionName].forEach((benefit, index) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector(".benefit-card");

    clone.querySelector(".category").textContent = benefit.category;
    clone.querySelector(".benefit-status").textContent = benefit.status;
    clone.querySelector("h3").textContent = benefit.name;
    clone.querySelector(".why").textContent = benefit.why;
    clone.querySelector(".notes").textContent = benefit.notes;

    const link = clone.querySelector(".primary-link");
    link.href = benefit.url;
    link.textContent = "Check benefit";

    card.style.animationDelay = `${index * 70}ms`;
    target.appendChild(clone);
  });
}

renderItems("corePicks", babyEssentialsTargetForItem);
renderItems("addOns", babyEssentialsTargetForItem);
renderItems("parentWellness", "parentCareEssentials");
renderItems("cautions", "cautions", true, "caution");
renderBenefits("freeBenefits", "freeBenefits");
migrateLegacySelections();
saveState();
refreshSummary();

const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyBtn.textContent = "Link Copied";
    setTimeout(() => {
      copyBtn.textContent = "Copy Page Link";
    }, 1600);
  } catch {
    copyBtn.textContent = "Copy failed";
    setTimeout(() => {
      copyBtn.textContent = "Copy Page Link";
    }, 1600);
  }
});

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  selected.clear();
  [...items.corePicks, ...items.addOns, ...(items.formulaFeeding || []), ...items.parentWellness].forEach((item) => {
    if (isPurchased(item)) {
      selected.add(item.id);
    }
  });

  saveState();

  document.querySelectorAll(".item-check").forEach((checkbox) => {
    const card = checkbox.closest(".item-card");
    if (checkbox.disabled && card && card.classList.contains("purchased")) {
      checkbox.checked = true;
      return;
    }
    checkbox.checked = false;
  });

  refreshSummary();
});

document.querySelectorAll(".view-tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".view-tab-btn").forEach((node) => {
      node.classList.remove("is-active");
    });
    btn.classList.add("is-active");

    const targetViewId = btn.dataset.view;
    document.querySelectorAll(".view-panel").forEach((panel) => {
      panel.classList.toggle("is-active", panel.id === targetViewId);
    });
  });
});
