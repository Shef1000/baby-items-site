const fallbackImage =
  "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=900&q=80";

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
      id: "babyletto-crib",
      name: "Babyletto Hudson 3-in-1 Crib",
      category: "Sleep",
      priority: "Must",
      price: 499,
      purchased: false,
      image: "https://babyletto.com/cdn/shop/files/babyletto_pogo_NL_hi-res_4178_2.jpg?v=1771529894",
      why: "Solid second crib option with long use and non-smart simplicity.",
      notes: "Great as the primary nursery crib alongside your purchased Cradlewise.",
      url: "https://babyletto.com/products/hudson-3-in-1-convertible-crib"
    },
    {
      id: "newton-mattress",
      name: "Newton Breathable Crib Mattress",
      category: "Sleep",
      priority: "Must",
      price: 299,
      purchased: false,
      image: "https://www.newtonbaby.com/cdn/shop/products/600x600-Mattress---Original-WHT.jpg?v=1634649623",
      why: "Fully washable breathable design with strong parent preference for crib airflow.",
      notes: "Pair with a fitted crib sheet and follow standard safe-sleep setup.",
      url: "https://www.newtonbaby.com/products/newton-crib-mattress"
    },
    {
      id: "ergobaby-evolve",
      name: "Ergobaby Evolve 3-in-1 Bouncer",
      category: "Bouncer",
      priority: "Must",
      price: 199,
      purchased: false,
      image:
        "https://ergobaby.com/cdn/shop/files/EVLBNCLTGRY_ergobaby_bouncer_evolve_ltgry_1.webp?v=1776781038&width=1200",
      why: "Useful from newborn stage into toddler mode. Durable and fold-flat.",
      notes: "Range is roughly 5.5-29 lb across modes.",
      url: "https://www.ergobaby.com/products/3-in-1-evolve-bouncer"
    },
    {
      id: "joolz-aer",
      name: "Joolz Aer+",
      category: "Stroller",
      priority: "Must",
      price: 449,
      purchased: false,
      image:
        "https://www.joolz.com/dw/image/v2/BDLK_PRD/on/demandware.static/-/Sites-joolz-master/default/dw6fe14555/zoom_1200x1800/WP/310117_joolz_Aerplus_navyblue_sp_01.png?sw=650&sh=650&sm=fit",
      why: "Excellent for city walking + travel: very light, compact fold, one-hand use.",
      notes: "Add newborn setup if needed in early months.",
      url: "https://www.joolz.com/us/en/lightweight-stroller/440101.html"
    },
    {
      id: "nuna-pipa-rx",
      name: "Nuna PIPA rx Infant Car Seat",
      category: "Transport",
      priority: "Must",
      price: 550,
      purchased: false,
      image:
        "https://nunababy.com/media/catalog/product/N/u/Nuna_PIPARX_Caviar_Angle_US_web_8daa.png?optimize=high&fit=bounds&height=265&width=265&canvas=265:265&format=jpeg",
      why: "Lightweight infant car seat to pair with stroller and rideshare/taxi use.",
      notes: "Good split setup: lightweight stroller plus separate car seat.",
      url: "https://nunababy.com/usa/pipa-rx-infant-car-seat-with-relx-base"
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
    }
  ],
  addOns: [
    {
      id: "diaper-backpack",
      name: "Saint Laurent Le 5 A 7 (Luxury Carry)",
      category: "Daily Carry",
      priority: "Must",
      price: 3600,
      purchased: false,
      image: "https://saint-laurent.dam.kering.com/m/2bd8c50907587c56/eCom-713938AAAUQ1000_A.jpg?v=4",
      why: "Luxury carry option with enough room for bottles, diapers, and essentials.",
      notes: "Official first-party luxury option (not second-hand).",
      url: "https://www.ysl.com/en-us/pr/shopping-saint-laurent-le-5-a-7-supple-in-grained-leather-713938AAAUQ1000.html"
    },
    {
      id: "burberry-diaper-bag",
      name: "Burberry Norwich Check Diaper Bag",
      category: "Daily Carry",
      priority: "Nice",
      price: 1590,
      purchased: false,
      image: "https://media.neimanmarcus.com/f_auto%2Cq_auto%3Alow%2Car_4%3A5%2Cc_fill%2Cdpr_2.0%2Cw_790/01/nm_5044086_100296_a",
      why: "Second luxury bag option with dedicated diaper-bag layout.",
      notes: "Official retailer product page as requested.",
      url: "https://www.neimanmarcus.com/p/burberry-norwich-check-diaper-bag-prod281770060?childItemId=NMK2FDR_24"
    },
    {
      id: "portable-changing-pad",
      name: "Portable Changing Pad",
      category: "Outings",
      priority: "Must",
      price: 30,
      purchased: false,
      image:
        "https://www.skiphop.com/on/demandware.static/-/Sites-skiphop-master/default/dwd61c73c7/images/large/202207_01.jpg",
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
      name: "Tubby Todd + Aquaphor Clean Butt Bundle",
      category: "Diapering",
      priority: "Must",
      price: 54,
      purchased: false,
      image: "https://tubbytodd.com/cdn/shop/files/AOO-Hero-Image_NEAseal_8oz.jpg?v=1764199484",
      why: "Great combo for gentle cleanups plus a strong moisture barrier at every diaper change.",
      notes: "Budget includes 1 Tubby Todd All Over Ointment + Aquaphor x3.",
      url: "https://tubbytodd.com/products/all-over-ointment",
      links: [
        {
          label: "Tubby Todd All Over Ointment",
          url: "https://tubbytodd.com/products/all-over-ointment"
        },
        {
          label: "Aquaphor Baby Healing Ointment",
          url: "https://www.aquaphorus.com/products/body-care/baby-healing-ointment-advanced-therapy"
        }
      ]
    },
    {
      id: "simba-sterilizer",
      name: "Simba UDI H1 Sterilizer",
      category: "Feeding",
      priority: "Must",
      price: 180,
      purchased: false,
      image: "https://www.simba.com.tw/wp-content/uploads/2022/08/S606F.jpg",
      why: "High-capacity steam dry sterilizer for daily bottle and pump-part cleaning.",
      notes: "Official Simba product page and image.",
      url: "https://www.simba.com.tw/product/s606f/"
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
  momsList: [
    {
      id: "nyssa-postpartum-kit",
      name: "Nyssa Essential Postpartum Kit",
      category: "Mom Recovery",
      priority: "Must",
      price: 150,
      purchased: false,
      image: "https://nyssacare.com/cdn/shop/files/EPK_-_Black_Needs_Re-organizing_55e6d4a5-ca42-4326-a001-7273ca84b2fc_1200x1200.png?v=1775660489",
      why: "Best premium one-box recovery setup: underwear, bralette, peri bottle, pads, and reusable heat/cold therapy.",
      notes: "Best for vaginal or C-section recovery. Higher price is justified if you want reusable, targeted relief instead of only disposables.",
      url: "https://nyssacare.com/products/go-fourth-deluxe-postpartum-recovery-kit"
    },
    {
      id: "nyssa-fourthwear-underwear",
      name: "Nyssa FourthWear Recovery Underwear",
      category: "Mom Recovery",
      priority: "Must",
      price: 39,
      purchased: false,
      image: "https://nyssacare.com/cdn/shop/products/FWu_front_withIHpack_1800x2160_new_1200x1200.jpg?v=1730609390",
      why: "The single most useful upgrade over hospital mesh: soft underwear with 360-degree pockets for ice or heat.",
      notes: "Best for moms who want hands-free perineal, lower-back, or C-section-area comfort. Buy extra pairs if laundry will be slow.",
      url: "https://nyssacare.com/products/fourthwear-underwear"
    },
    {
      id: "lansinoh-recovery-essentials",
      name: "Lansinoh Postpartum Recovery Essentials",
      category: "Mom Recovery",
      priority: "Must",
      price: 40,
      purchased: false,
      image: "https://lansinoh.com/cdn/shop/files/48_b0e33700-39a7-44f4-b6c3-98865de84dfd.jpg?v=1712681046",
      why: "A clean, practical bathroom-recovery kit with a wash bottle, herbal spray, and hot/cold therapy.",
      notes: "Best value companion to the Nyssa kit. Not the fanciest item, but it covers the high-frequency bathroom routine.",
      url: "https://lansinoh.com/products/postpartum-recovery-essentials"
    },
    {
      id: "belly-bandit-upsie-belly",
      name: "Belly Bandit Upsie Belly Support Belt",
      category: "Mom Recovery",
      priority: "Must",
      price: 60,
      purchased: false,
      image: "https://bellybandit.com/cdn/shop/files/belly-bandit-upsie-belly-black-2400X3680-03_1024x1024.jpg?v=1740502197",
      why: "High-utility maternity support for back, hip, and belly strain before birth.",
      notes: "Best for third-trimester walking, errands, and nesting days. Product page shows 4.75 rating and includes a hot/cold gel pack.",
      url: "https://bellybandit.com/products/upsie-belly"
    },
    {
      id: "silverettes",
      name: "Silverette Nursing Cups",
      category: "Mom Feeding",
      priority: "Must",
      price: 70,
      purchased: true,
      image:
        "https://silveretteusa.com/cdn/shop/files/37c1b22d59e214d67f59cf957ad479377e3e253f_1.jpg?v=1764866452",
      why: "Reusable silver nursing cups for sore-nipple protection during the hardest early breastfeeding window.",
      notes: "Best for breastfeeding moms. Product page shows 4.7 rating from 204 reviews; skip if formula-feeding from day one.",
      url: "https://silveretteusa.com/products/silverette-nursing-cups"
    },
    {
      id: "bodily-do-anything-bra",
      name: "Bodily Do Anything Bra",
      category: "Mom Feeding",
      priority: "Must",
      price: 58,
      purchased: false,
      image: "https://itsbodily.com/cdn/shop/products/The-Do-Anything-Bra-hands-free-pump-bra-nursing-bra-best-pump-bra-luxury-soft-non-toxic-3.jpg?v=1762463838&width=1946",
      why: "Premium nursing and pumping bra that feels like real clothing instead of bulky pump gear.",
      notes: "Best for moms who will nurse and pump. Bodily shows 4.3 stars from about 1.5k reviews; Forbes also picked it as a top nursing bra.",
      url: "https://itsbodily.com/products/the-do-anything-bra?variant=39712002080865"
    },
    {
      id: "kindred-bravely-sublime-bra",
      name: "Kindred Bravely Sublime Pumping & Nursing Bra",
      category: "Mom Feeding",
      priority: "Must",
      price: 55,
      purchased: false,
      image: "https://www.kindredbravely.com/cdn/shop/files/sublime-hands-free-pumping-nursing-bra-evryday-lounge-jogger-black-Ionna-k5-21536-1500x1875-3808281.png?v=1766515155&width=1946",
      why: "More structured, size-inclusive pumping bra with strong review volume and hands-free flange support.",
      notes: "Best for larger cup sizes or anyone who wants more support than the Bodily bra. Kindred page shows 4.7k+ reviews.",
      url: "https://www.kindredbravely.com/products/hands-free-pumping-nursing-bra-black"
    },
    {
      id: "earthmama-nipple-butter",
      name: "Earth Mama Organic Nipple Butter",
      category: "Mom Feeding",
      priority: "Must",
      price: 14,
      purchased: false,
      image: "https://earthmamaorganics.com/cdn/shop/files/10-232_NippleButter_2oz_front-14jar-11_w2e_shadow_web.jpg?v=1760726291",
      why: "Small, inexpensive item that gets used constantly when nipples are tender from nursing or pumping.",
      notes: "Best paired with Silverette cups. Cheap enough to keep even on a premium list because use frequency is high.",
      url: "https://earthmamaorganics.com/products/organic-nipple-butter"
    },
    {
      id: "earthmama-perineal-spray",
      name: "Earth Mama Herbal Perineal Spray",
      category: "Mom Recovery",
      priority: "Must",
      price: 16,
      purchased: false,
      image: "https://earthmamaorganics.com/cdn/shop/files/10-254_PerinealSpray_4oz_front-14_shadow_web.jpg?v=1725655571",
      why: "Fast-use spray for tender bathroom trips when a full soak is unrealistic.",
      notes: "Best for vaginal delivery recovery. Keep near the toilet with pads and peri bottle.",
      url: "https://earthmamaorganics.com/products/herbal-perineal-spray"
    },
    {
      id: "earthmama-sitz-bath",
      name: "Earth Mama Organic Herbal Sitz Bath",
      category: "Mom Recovery",
      priority: "Must",
      price: 15,
      purchased: false,
      image: "https://earthmamaorganics.com/cdn/shop/files/10-254_SitzBath_6ct_front_shadow_web.jpg?v=1764184000",
      why: "Low-cost perineal recovery add-on for sitz baths or pad-soaks after birth.",
      notes: "Best for moms expecting vaginal soreness. Confirm with your clinician if you have stitches or C-section limits.",
      url: "https://earthmamaorganics.com/products/organic-herbal-sitz-bath"
    },
    {
      id: "elvie-pump-double",
      name: "Elvie Wearable Breast Pump - Double",
      category: "Mom Feeding",
      priority: "Nice",
      price: 385,
      purchased: false,
      image: "https://elvie.com/cdn/shop/files/IMD_UK_Pump-Double_Web_Hero_1200x1200_V2.jpg?v=1767622983&width=1024",
      why: "Premium freedom item for pumping during work calls, errands, chores, or toddler care.",
      notes: "Best as a convenience or secondary pump. Babylist shows 3.8 stars from 1.6k+ reviews, so buy for mobility, not universal output.",
      url: "https://www.babylist.com/gp/elvie-hands-free-wearable-electric-breast-pump/15262/243311"
    },
    {
      id: "baby-brezza-bottle-washer-pro",
      name: "Baby Brezza Bottle Washer Pro",
      category: "Mom Time Saver",
      priority: "Must",
      price: 300,
      purchased: false,
      image: "https://babybrezza.com/cdn/shop/files/BWP_classic.webp?v=1770152040",
      why: "The premium time-saver if bottles or pump parts will be daily life: washes, sterilizes, and dries.",
      notes: "Best for pumping or bottle-feeding families. Babylist shows 4.5 stars from 7k+ reviews; caveat is counter space and detergent tablets.",
      url: "https://www.babylist.com/gp/baby-brezza-bottle-washer-pro/44961/2200477"
    },
    {
      id: "tushy-classic-bidet",
      name: "TUSHY Classic 3.0 Bidet",
      category: "Mom Recovery",
      priority: "Nice",
      price: 129,
      purchased: false,
      image: "https://hellotushy.com/cdn/shop/files/TUSHY_Classic_3.0_White_Bamboo_Knob.jpg?v=1777921099",
      why: "Bathroom comfort upgrade for postpartum cleanup when wiping is uncomfortable.",
      notes: "Best if installation is easy in your bathroom. Not a medical item, but high daily utility during recovery.",
      url: "https://hellotushy.com/products/classic-affordable-bidet"
    },
    {
      id: "cozy-earth-bamboo-pajamas",
      name: "Cozy Earth Bamboo Pajama Set",
      category: "Mom Comfort",
      priority: "Nice",
      price: 148,
      purchased: false,
      image: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/25572687_fpx.tif",
      why: "Premium recovery uniform: breathable, soft, and polished enough for visitors or hospital photos.",
      notes: "Best for hot sleepers and long recovery days. Reviews praise softness and temperature regulation; skip if you prefer nursing-specific clips.",
      url: "https://www.macys.com/shop/product/cozy-earth-womens-long-sleeve-stretch-knit-viscose-from-bamboo-pajama-set?ID=16775269"
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
  ]
};

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
    clone.querySelector(".price").textContent = item.price > 0 ? fmtPrice(item.price) : "-";

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
  const allTrackable = [...items.corePicks, ...items.addOns, ...items.momsList];

  allTrackable.forEach((item) => {
    if (isPurchased(item)) {
      selected.add(item.id);
    }
  });

  const selectedItems = allTrackable.filter((item) => selected.has(item.id));

  const selectedCount = selectedItems.length;
  const selectedBudget = selectedItems.reduce((sum, item) => sum + item.price, 0);

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

renderItems("corePicks", "corePicks");
renderItems("addOns", "addOns");
renderItems("momsList", "momsList", false, "mom");
renderItems("cautions", "cautions", true, "caution");
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
  [...items.corePicks, ...items.addOns, ...items.momsList].forEach((item) => {
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
