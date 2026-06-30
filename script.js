const fallbackImage =
  "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=900&q=80";
const californiaCheckoutTaxRate = 0.08625;

const items = {
  corePicks: [
    {
      id: "wildbird-aerial",
      name: "WildBird Aerial Buckle Carrier",
      category: "Carrier",
      priority: "Must",
      price: 168,
      purchased: false,
      image:
        "https://wildbird.co/cdn/shop/files/1.desert-lark-aerial-carrier-1.jpg?v=1764005453",
      why: "Comfortable structured carrier with strong build quality for daily wear.",
      notes: "ASTM tested for 7-45 lb. For tiny newborns, follow fit/airway guidance carefully.",
      url: "https://wildbird.co/collections/aerial-buckle-carrier/products/desert-lark-aerial-carrier"
    },
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
      notes: "Keep this as the crib candidate. Product listing includes free sheets, so no separate Newton mattress or sheet card is needed.",
      url: "https://www.newtonbaby.com/products/newton-nest-crib?variant=46241386070213"
    },
    {
      id: "babybjorn-bouncer-toy-bundle",
      name: "BabyBjorn Bouncer Balance Soft + Toys Bundle",
      category: "Bouncer",
      priority: "Must",
      price: 360,
      purchased: false,
      image:
        "https://a.storyblok.com/f/187315/1800x2728/f25ee3d4e9/us-005270-bouncer-balance-soft-lightsage-gray-woven-jersey-product-babybjorn-01-1.png",
      why: "Ergonomic natural-rocking bouncer in Light Sage/Gray woven jersey, paired with BabyBjorn toy bars for play.",
      notes: "Checkout estimate covers the bouncer plus two toy bars. Bouncer supports 8-29 lb and converts from bouncer to child chair.",
      url: "https://www.babybjorn.com/products/baby-bouncers/bouncer-balance-soft/light-sage-gray-woven-jersey-light-gray/",
      links: [
        {
          label: "Bouncer Balance Soft - Light Sage/Gray",
          url: "https://www.babybjorn.com/products/baby-bouncers/bouncer-balance-soft/light-sage-gray-woven-jersey-light-gray/"
        },
        {
          label: "Toy for Bouncer - Googly eyes Pastel",
          url: "https://www.babybjorn.com/products/baby-bouncers/accessories-baby-bouncer/toy-for-bouncer-googly-eyes/pastel/"
        },
        {
          label: "Toy for Bouncer - Soft friends Neutrals",
          url: "https://www.babybjorn.com/products/baby-bouncers/accessories-baby-bouncer/toy-for-bouncer-soft-friends/neutrals/"
        }
      ]
    },
    {
      id: "nuna-pipa-aire-rx",
      name: "Nuna PIPA aire rx Infant Car Seat",
      category: "Transport",
      priority: "Must",
      price: 650,
      purchased: false,
      image:
        "https://nunababy.com/media/catalog/product/cache/2d69aa1ed9d1466f19a0c14a2e1484ec/p/i/pipa_aire_rx_caviar_iso_web.jpg",
      why: "Best fit for Waymo/Uber/taxi use because it can install with a standard vehicle seat belt and no base.",
      notes: "Displayed checkout estimate uses the $650 planning price plus 8.625% San Francisco sales tax. Waymo requires you to bring and install your own child seat for children under 8; for Uber, plan to bring this rear-facing infant seat rather than relying on a driver-provided seat.",
      url: "https://nunababy.com/usa/pipa-aire-rx",
      links: [
        {
          label: "Nuna PIPA aire rx",
          url: "https://nunababy.com/usa/pipa-aire-rx"
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
      id: "boppy-nursing",
      name: "Boppy Nursing Pillow",
      category: "Feeding",
      priority: "Nice",
      price: 45,
      purchased: false,
      image:
        "https://www.boppy.com/cdn/shop/files/boppy-nursing-pillow-luxe00066352210490-5912279.webp?v=1776861435&width=800",
      why: "Practical for feeding support and postpartum comfort.",
      notes: "Supervised feeding use only, never for sleep.",
      url: "https://www.boppy.com/products/original-support"
    },
    {
      id: "baby-brezza-bottle-washer-pro",
      name: "Baby Brezza Bottle Washer Pro",
      category: "Feeding",
      priority: "Nice",
      price: 239.99,
      purchased: false,
      image:
        "https://babybrezza.com/cdn/shop/files/BWP_classic.webp?v=1770152040",
      why: "Countertop machine that washes, sterilizes, and dries bottles, pump parts, sippy cups, and accessories.",
      notes: "Checkout estimate uses the current Baby Brezza sale price plus 8.625% San Francisco sales tax. Includes 60 detergent tablets; use Baby Brezza detergent tablets as directed.",
      url: "https://babybrezza.com/products/bottle-washer-pro"
    },
    {
      id: "baby-brezza-formula-pro-advanced",
      name: "Baby Brezza Formula Pro Advanced",
      category: "Feeding",
      priority: "Nice",
      price: 183.99,
      purchased: false,
      image:
        "https://babybrezza.com/cdn/shop/files/FPA_Carousel_01_classic.webp?v=1758552426",
      why: "Automatically mixes warm formula bottles with adjustable ounce and temperature settings.",
      notes: "Checkout estimate uses the current Baby Brezza sale price plus 8.625% San Francisco sales tax. Confirm formula setting before use and clean the funnel after every 4 bottles.",
      url: "https://babybrezza.com/products/formula-pro-advanced"
    }
  ],
  addOns: [
    {
      id: "portable-changing-pad",
      name: "Portable Changing Pad",
      category: "Outings",
      priority: "Must",
      price: 30,
      purchased: false,
      image:
        "https://www.dagnedover.com/cdn/shop/files/dagne-2025-Baby_Indi_Onyx_S_anglewipe-2048x2048-f60149e1-e113-472e-9690-4fbdc912b44f.jpg?v=1751472669&width=1200",
      why: "Compact and practical for frequent outing changes.",
      notes: "A foldable wipeable pad is enough.",
      url: "https://www.skiphop.com/skiphop-diaper-bags/V_202410.html"
    },
    {
      id: "sleep-sacks",
      name: "Sleep Sacks (2-3)",
      category: "Sleep",
      priority: "Must",
      price: 105,
      purchased: false,
      image: "https://www.halosleep.com/cdn/shop/files/OG_Image_1200x630.jpg?v=1738939808",
      why: "Safer and more practical than loose blankets.",
      notes: "Choose TOG levels based on room temperature.",
      url: "https://www.halosleep.com/sleepsack"
    },
    {
      id: "waterwipes-warmer-bundle",
      name: "WaterWipes + Wipe Warmer Bundle",
      category: "Diapering",
      priority: "Must",
      price: 72,
      purchased: false,
      image:
        "https://cdn.shopify.com/s/files/1/0790/4172/4704/files/10049_base_9b128329-dfb8-4beb-8ba8-2de30ee77b4b.jpg?v=1707192624",
      why: "Keeps wipes stocked and ready for quick, smoother diaper changes.",
      notes: "Bundle includes WaterWipes (12-pack) + wipe warmer machine.",
      url: "https://www.waterwipes.com/us/en/products/original-baby-wipes",
      links: [
        {
          label: "WaterWipes (12-pack)",
          url: "https://www.waterwipes.com/us/en/products/original-baby-wipes"
        },
        {
          label: "Munchkin Warm Glow Wipe Warmer",
          url: "https://www.munchkin.com/warm-glow-wipe-warmer"
        }
      ]
    },
    {
      id: "clean-butt-bundle",
      name: "Tubby Todd + Aquaphor + Desitin Clean Butt Bundle",
      category: "Diapering",
      priority: "Must",
      price: 64,
      purchased: false,
      image: "https://tubbytodd.com/cdn/shop/files/AOO-Hero-Image_NEAseal_8oz.jpg?v=1764199484",
      why: "Great combo for gentle cleanups plus a strong moisture barrier at every diaper change.",
      notes: "Updated from Baby Gear Tracker. Budget includes 1 Tubby Todd All Over Ointment, Aquaphor, and one stronger zinc option.",
      url: "https://tubbytodd.com/products/all-over-ointment",
      links: [
        {
          label: "Tubby Todd All Over Ointment",
          url: "https://tubbytodd.com/products/all-over-ointment"
        },
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
      id: "ollie-swaddle-2pack",
      name: "The Ollie Swaddle x2",
      category: "Sleep",
      priority: "Must",
      price: 138,
      purchased: false,
      image: "https://theollieworld.com/cdn/shop/files/The_Ollie_Swaddle_Stone_01_1200x1200.jpg?v=1766869637",
      why: "Easy fit and quick diaper access; two gives one in use + one in laundry.",
      notes: "Counted as quantity two in the budget total.",
      url: "https://theollieworld.com/products/the-ollie-swaddle"
    }
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
    }
  ],
  cautions: [
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
    id: "cradlewise-extra-linens-bundle",
    name: "Cradlewise Extra Sheets + Mattress Cover",
    category: "Sleep",
    priority: "Must",
    price: 215,
    purchased: false,
    image: "https://assets.cradlewise.com/images/index/meta-image-cng-new.jpg",
    why: "The tracker calls for three extra fitted sheets and one extra mattress cover so overnight changes do not stall.",
    notes: "Added from Baby Gear Tracker. Use Cradlewise-specific linens for correct fit.",
    url: "https://cradlewise.com/product/fitted-sheet/",
    links: [
      {
        label: "Cradlewise fitted sheet",
        url: "https://cradlewise.com/product/fitted-sheet/"
      },
      {
        label: "Cradlewise mattress cover",
        url: "https://cradlewise.com/product/mattress-cover/"
      }
    ]
  },
  {
    id: "pacifier-starter-variety",
    name: "Pacifier Starter Variety",
    category: "Sleep",
    priority: "Must",
    price: 30,
    purchased: false,
    image: "https://philips.scene7.com/is/image/philipsconsumer/60d1fe5579ed4bb69be9b17700d14848?wid=960&hei=960&fit=constrain",
    why: "The tracker calls for a small variety before birth because newborn pacifier preference is unpredictable.",
    notes: "Start with Philips Avent Soothie plus one BIBS or MAM newborn option. No clips or strings in sleep space.",
    url: "https://www.usa.philips.com/c-p/SCF190_41/soothie-pacifier",
    links: [
      {
        label: "Philips Avent Soothie",
        url: "https://www.usa.philips.com/c-p/SCF190_41/soothie-pacifier"
      },
      {
        label: "BIBS pacifiers",
        url: "https://bibsworld.com/collections/pacifiers"
      },
      {
        label: "AAP safe sleep",
        url: "https://www.aap.org/en/patient-care/safe-sleep/"
      }
    ]
  },
  {
    id: "nursery-drawer-organizers",
    name: "Drawer Dividers + Small Storage Bins",
    category: "Organization",
    priority: "Must",
    price: 55,
    purchased: false,
    image: "https://images.ctfassets.net/50gzycvace50/d59a01d7e312fbe767fec0a4818936410d1094d3a4c70acc53074741ea1ab3c2/7e539e9d2e706cc27bf3953914540ecf/d59a01d7e312fbe767fec0a4818936410d1094d3a4c70acc53074741ea1ab3c2.png?fl=progressive&fm=jpg&bg=rgb:fafafa&w=1240&h=1240",
    why: "The tracker marks storage bins and drawer dividers as P0 because they prevent duplicate buying and make size rotation easier.",
    notes: "Use vertical drawer organizers; skip freestanding nursery furniture unless it becomes necessary.",
    url: "https://www.ikea.com/us/en/p/skubb-box-set-of-6-white-00428549/",
    links: [
      {
        label: "IKEA SKUBB boxes",
        url: "https://www.ikea.com/us/en/p/skubb-box-set-of-6-white-00428549/"
      },
      {
        label: "OXO drawer organizer options",
        url: "https://www.oxo.com/shop/kitchenware/organization.html"
      }
    ]
  },
  {
    id: "coterie-diaper-wipes-starter",
    name: "Coterie Newborn + Size 1 Diaper/Wipes Starter",
    category: "Diapering",
    priority: "Must",
    price: 185,
    purchased: false,
    image: "https://cdn.sanity.io/images/e4q6bkl9/production/0a6d3ce27e3373f2d2b52d13c5c151b263d7fa25-1240x1240.png?rect=0,295,1240,651&w=1200&h=630",
    why: "The tracker calls for one newborn pack, one size 1 backup, and unscented wipes before delivery.",
    notes: "Do not stockpile. Start small because babies size out quickly and fit varies.",
    url: "https://www.coterie.com/products/the-diaper",
    links: [
      {
        label: "Coterie diapers",
        url: "https://www.coterie.com/products/the-diaper"
      },
      {
        label: "Coterie wipes",
        url: "https://www.coterie.com/products/the-wipe"
      }
    ]
  },
  {
    id: "keekaroo-peanut-changer",
    name: "Keekaroo Peanut Wipeable Changing Pad",
    category: "Diapering",
    priority: "Must",
    price: 150,
    purchased: false,
    image: "https://www.keekaroo.com/media/catalog/product/cache/7800bb778a954cb4c97ef3c76a1a4610/k/r/kr_grey_with_baby.png",
    why: "The tracker recommends a wipeable changing pad on existing furniture instead of a dedicated changing table.",
    notes: "Space-saving setup for 88 Howard: existing dresser or counter plus wipeable pad.",
    url: "https://www.keekaroo.com/peanut-changer.html"
  },
  {
    id: "diaper-caddy-cleanup-bundle",
    name: "Diaper Caddy + Changing Cleanup Bundle",
    category: "Diapering",
    priority: "Must",
    price: 55,
    purchased: false,
    image: "https://www.oxo.com/media/catalog/product/cache/42f6b21d4e9bb5235c64b47a93880671/6/3/63112600_oxo_tot_diaper_caddy_with_changing_mat_01.jpg",
    why: "The tracker calls for one mobile caddy, hand sanitizer, and cleanup supplies before delivery.",
    notes: "One basket only; avoid multiple stations unless the apartment layout demands it.",
    url: "https://www.oxo.com/tot-diaper-caddy-with-changing-mat.html",
    links: [
      {
        label: "OXO Tot diaper caddy",
        url: "https://www.oxo.com/tot-diaper-caddy-with-changing-mat.html"
      },
      {
        label: "Babyganics hand sanitizer",
        url: "https://babyganics.com/products/alcohol-free-foaming-hand-sanitizer/"
      }
    ]
  },
  {
    id: "walmart-akaber-2-in-1-bath-changing-table",
    name: "Akaber 2-in-1 Baby Changing Table with Bathtub",
    category: "Bath / Changing",
    priority: "Must",
    price: 89.99,
    checkoutPrice: 128,
    purchased: false,
    image: "https://i5.walmartimages.com/seo/2-in-1-Baby-Changing-Table-with-Bathtub-Akaber-Newborn-Foldable-Portable-Diaper-Station-Adjustable-Height-with-Wheels-Waterproof-Pad-Storage-Rack_d2e9398f-2356-4774-82f3-94929b980772.68fe9fd3fa45d244e6b97d44ada175a8.jpeg",
    why: "Walmart Akaber combo station with a removable anti-slip bathtub, changing table, adjustable height, lockable wheels, waterproof pad, and storage rack.",
    notes: "Displayed checkout estimate uses the current $89.99 Walmart sale price, $29.99 shipping to 94105, and 8.625% San Francisco sales tax on the item. This overlaps with separate bath and changing-pad purchases, so keep it only if the combo station fits the apartment layout.",
    url: "https://www.walmart.com/ip/2-in-1-Baby-Changing-Table-with-Bathtub-Akaber-Newborn-Foldable-Portable-Diaper-Station-Adjustable-Height-with-Wheels-Waterproof-Pad-Storage-Rack/17293067799?wmlspartner=wlpa&selectedSellerId=102741195&selectedOfferId=60F9BBAB865932FE92EBD2F3DC10AD88&conditionGroupCode=1"
  },
  {
    id: "angelcare-baby-bath-support-grey",
    name: "Angelcare Baby Bath Support - Grey",
    category: "Bath / Changing",
    priority: "Nice",
    price: 19.78,
    checkoutPrice: 21.49,
    purchased: false,
    image: "https://m.media-amazon.com/images/I/61x79D9WpNL._SL1500_.jpg",
    why: "Lightweight newborn bath insert for hands-free support inside a tub, useful if the larger bath/changing station feels bulky for daily use.",
    notes: "Amazon listing shows the grey bath support for babies under 6 months or 20 lb, with a quick-drain mesh seat and hang loop. Checkout estimate includes 8.625% San Francisco sales tax; shipping depends on Prime/order size.",
    url: "https://www.amazon.com/dp/B01M6YVW7B"
  },
  {
    id: "newborn-soft-carrier",
    name: "Newborn Soft Carrier",
    category: "Carrier",
    priority: "Must",
    price: 85,
    purchased: false,
    image: "https://sollybaby.com/cdn/shop/files/Untitled_design.png?v=1676401822",
    why: "The tracker adds a soft newborn carrier because it often fits tiny newborns better than a structured carrier.",
    notes: "Use for elevators, lobby trips, errands, and hands-free walks. Check airway and fit every time.",
    url: "https://sollybaby.com/products/wrap",
    links: [
      {
        label: "Solly Wrap",
        url: "https://sollybaby.com/products/wrap"
      },
      {
        label: "Ergobaby Embrace",
        url: "https://ergobaby.com/baby-carrier/embrace"
      }
    ]
  },
  {
    id: "johnsons-baby-care-essentials-gift-set",
    name: "Johnson's Baby Care Essentials Gift Set",
    category: "Bath",
    priority: "Must",
    price: 20,
    purchased: false,
    image: "https://images.ctfassets.net/3vnc73o2e0fb/79B9wyp2M21iIC12j3UYW6/babe0d0be5d2ada7e5c156beb44e62ed/JNB_USA_US_381371197569_771197561_622705_Care_Essentials_Gift_Set_00000.webp?fm=webp&w=1920",
    why: "Replaces the laundry starter bundle with a simple newborn bath/skin-care bundle.",
    notes: "Official set includes Head-to-Toe wash and shampoo, baby body lotion, and Desitin diaper rash paste in travel sizes. Displayed checkout estimate uses a $20 retail placeholder plus 8.625% San Francisco sales tax because Johnson's official product page does not sell direct.",
    url: "https://www.johnsonsbaby.com/baby-products/baby-care-essentials-gift-set",
    links: [
      {
        label: "Johnson's Baby Care Essentials Gift Set",
        url: "https://www.johnsonsbaby.com/baby-products/baby-care-essentials-gift-set"
      }
    ]
  },
  {
    id: "infant-health-sick-day-kit",
    name: "Infant Health + Sick-Day Kit",
    category: "Health",
    priority: "Must",
    price: 95,
    purchased: false,
    image: "https://frida.com/cdn/shop/files/HERO_783ba058-03a4-4ce5-a996-d28de2c30fd0_600x.jpg?v=1720804759",
    why: "The tracker adds a thermometer, saline/aspirator, infant acetaminophen, vitamin D drops, syringe, and petroleum jelly before delivery.",
    notes: "Ask the pediatrician before dosing infant acetaminophen. Keep this together for late-night sick-day use.",
    url: "https://frida.com/products/nosefrida-the-snotsucker-saline-kit",
    links: [
      {
        label: "Frida Baby NoseFrida Saline Kit",
        url: "https://frida.com/products/nosefrida-the-snotsucker-saline-kit"
      },
      {
        label: "FridaBaby 3-in-1 thermometer",
        url: "https://frida.com/products/3-in-1-true-temp-thermometer"
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
    id: "frida-mom-postpartum-kit",
    name: "Frida Mom Postpartum Recovery Kit",
    category: "Parent Wellness",
    priority: "Must",
    price: 100,
    purchased: false,
    image: "https://frida.com/cdn/shop/files/social-sharing-image.png?v=1736467122",
    why: "The tracker adds a postpartum recovery kit before delivery so bathroom supplies are ready at home.",
    notes: "Complements hospital supplies; keep the kit in the primary bathroom before due date.",
    url: "https://frida.com/products/postpartum-recovery-essentials-kit"
  },
  {
    id: "nursing-bras-pads-bundle",
    name: "Nursing Bras / Tanks + Pads Bundle",
    category: "Parent Wellness",
    priority: "Must",
    price: 220,
    purchased: false,
    image: "https://www.kindredbravely.com/cdn/shop/files/sublime-hands-free-pumping-nursing-bra-evryday-lounge-jogger-black-Ionna-k5-21536-1500x1875-3808281.png?v=1766515155&width=1200",
    why: "The tracker adds nursing bras or tanks plus disposable or washable nursing pads before delivery.",
    notes: "Start with a few comfortable sizes; adjust after supply and postpartum fit settle.",
    url: "https://www.kindredbravely.com/collections/nursing-bras",
    links: [
      {
        label: "Kindred Bravely nursing bras",
        url: "https://www.kindredbravely.com/collections/nursing-bras"
      },
      {
        label: "Bodily nursing bras",
        url: "https://itsbodily.com/collections/breastfeeding"
      },
      {
        label: "Lansinoh nursing pads",
        url: "https://lansinoh.com/products/stay-dry-disposable-nursing-pads"
      }
    ]
  },
  {
    id: "feeding-night-station-cart",
    name: "Feeding / Night Station Cart",
    category: "Parent Wellness",
    priority: "Must",
    price: 80,
    purchased: false,
    image: "https://www.ikea.com/global/assets/range-categorisation/images/side-tables-10717.jpeg",
    why: "The tracker calls for a shared night-feeding station so diapers, burp cloths, pump parts, snacks, and water are in one place.",
    notes: "Use one rolling cart or caddy only; avoid duplicating stations unless the apartment layout requires it.",
    url: "https://www.ikea.com/us/en/p/raskog-utility-cart-white-20382932/"
  }
);

items.freeBenefits.push(
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
const legacyWipeBundleIds = ["waterwipes-12-pack", "wipe-warmer-machine"];
const wipeBundleId = "waterwipes-warmer-bundle";

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
  let shouldSelectBundle = false;

  legacyWipeBundleIds.forEach((id) => {
    if (selected.has(id)) {
      selected.delete(id);
      shouldSelectBundle = true;
    }
  });

  if (shouldSelectBundle) {
    selected.add(wipeBundleId);
    saveState();
  }
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
  const target = document.getElementById(targetId);
  const template = document.getElementById("itemTemplate");

  items[sectionName].forEach((item, index) => {
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

    const priorityEl = clone.querySelector(".priority");
    priorityEl.textContent = isPurchased(item) ? "Purchased" : item.priority;
    if (item.priority === "Must") {
      priorityEl.classList.add("must");
    }
    if (isPurchased(item)) {
      priorityEl.classList.add("purchased");
    }

    clone.querySelector("h3").textContent = item.name;
    clone.querySelector(".why").textContent = item.why;
    clone.querySelector(".notes").textContent = item.notes;
    clone.querySelector(".price").textContent = item.price > 0
      ? fmtPrice(estimatedCheckoutPrice(item))
      : "-";

    const itemLinks = Array.isArray(item.links) && item.links.length > 0
      ? item.links
      : [{ label: item.name, url: item.url }];
    const isBundle = itemLinks.length > 1;
    const primaryLink = clone.querySelector(".primary-link");
    primaryLink.href = item.url;

    const linksDetails = clone.querySelector(".item-links");
    const linksSummary = clone.querySelector(".item-links .link");
    const linksList = clone.querySelector(".item-links-list");

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
      bundleCheckoutBtn.classList.add("is-hidden");
    } else {
      primaryLink.classList.remove("is-hidden");
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
    card.dataset.priority = item.priority;
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

  const mustItems = allTrackable.filter((item) => item.priority === "Must");
  const mustRemaining = mustItems.filter((item) => !selected.has(item.id)).length;

  document.getElementById("selectedCount").textContent = String(selectedCount);
  document.getElementById("selectedBudget").textContent = fmtPrice(selectedBudget);
  document.getElementById("mustRemaining").textContent = String(mustRemaining);
}

function setFilter(filterValue) {
  renderedCards.forEach(({ card, item, caution, group }) => {
    if (group !== "baby") {
      return;
    }

    if (filterValue === "all") {
      card.classList.remove("is-hidden");
      return;
    }

    if (caution || isPurchased(item)) {
      card.classList.add("is-hidden");
      return;
    }

    const shouldShow = item.priority === filterValue;
    card.classList.toggle("is-hidden", !shouldShow);
  });
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

renderItems("corePicks", "corePicks");
renderItems("addOns", "corePicks");
renderItems("parentWellness", "parentWellness");
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
  [...items.corePicks, ...items.addOns, ...items.parentWellness].forEach((item) => {
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

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((node) => {
      node.classList.remove("is-active");
    });
    btn.classList.add("is-active");
    setFilter(btn.dataset.filter);
  });
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
