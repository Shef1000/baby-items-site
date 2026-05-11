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
  const allTrackable = [...items.corePicks, ...items.addOns];

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
  [...items.corePicks, ...items.addOns].forEach((item) => {
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
