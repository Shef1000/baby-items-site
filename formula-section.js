const movedFormulaItemIds = new Set([
  "baby-brezza-bottle-washer-pro",
  "baby-brezza-formula-pro-advanced"
]);
const firstThreeMonthFormulaBudgetId = "first-three-month-ready-to-feed-budget";

items.formulaFeeding = [
  {
    id: firstThreeMonthFormulaBudgetId,
    name: "First 3-Month Ready-to-Feed Formula Budget",
    category: "Formula Budget",
    priority: "Must",
    price: 0,
    checkoutPrice: 1450,
    purchased: false,
    image:
      "https://i5.walmartimages.com/seo/Similac-360-Total-Care-Ready-to-Feed-Baby-Formula-2-fl-oz-Bottle-Pack-of-12_fd1fead5-5e68-40c3-bf66-b03ad82a40c8.377b2b01545f6327920a6230d35ab43e.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573",
    why: "Planning budget for the first 90 days if ready-to-feed formula becomes the main overnight/rest setup.",
    notes: "Estimate assumes roughly 2,200 fl oz over 90 days at about $0.60/oz, plus buffer. Actual cost changes with breastfeeding mix, baby intake, brand, and pediatrician guidance.",
    url: "https://www.similac.com/products/baby-formula/360-total-care-ready-to-feed/2fl-oz-8pack.html",
    links: [
      {
        label: "Similac 360 Total Care Ready-to-Feed",
        url: "https://www.similac.com/products/baby-formula/360-total-care-ready-to-feed/2fl-oz-8pack.html"
      },
      {
        label: "Enfamil NeuroPro Ready-to-Feed",
        url: "https://www.enfamil.com/products/enfamil-neuropro-infant-formula/liquid-2-fl-oz-bottle-6-pack/"
      }
    ]
  },
  {
    id: "ready-to-feed-disposable-nipples",
    name: "Sterile Disposable Nipples for Ready-to-Feed Bottles",
    category: "Formula",
    priority: "Must",
    price: 35,
    purchased: false,
    image:
      "https://i5.walmartimages.com/seo/Enfamil-Standard-Flow-Soft-Nipples-Latex-Free-BPA-Free-12-Count_3676b1e3-42e7-426b-9cca-acf1d8ef565e_1.c9c44cf2abb35ce6e2d56305fb01f390.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573",
    why: "Lets helpers open a 2 oz bottle, attach a nipple, feed, and avoid bottle washing during overnight feeds.",
    notes: "Match nipple compatibility to the ready-to-feed bottle brand. Buy roughly one sterile nipple per planned RTF bottle.",
    url: "https://www.enfamil.com/products/enfamil-standard-flow-soft-nipples/"
  },
  {
    id: "dr-browns-options-narrow-glass-4oz",
    name: "Dr. Brown's Options+ Narrow Glass 4 oz Bottles",
    category: "Bottle Feeding",
    priority: "Must",
    price: 40,
    purchased: false,
    image:
      "https://drbrownsbaby.com/cdn/shop/files/SB41001_Product_OptionsPLUS_GLASS_Narrow_4oz_120ml_1-pack.jpg?v=1750791091&width=1080",
    why: "Premium glass newborn bottle system with a strong anti-colic vent design and easy-to-find replacement nipples.",
    notes: "Use as the main washable bottle system. Start with 6 bottles plus newborn/slow-flow nipples and a few preemie nipples if flow is too fast.",
    url: "https://www.drbrownsbaby.com/product/dr-browns-options-glass-baby-bottle/"
  },
  {
    id: "evenflo-balance-glass-bottles",
    name: "Evenflo Balance+ Wide-Neck Glass Bottles",
    category: "Bottle Feeding",
    priority: "Nice",
    price: 30,
    purchased: false,
    image:
      "https://www.evenflofeeding.com/cdn/shop/files/ISO-WIDE-GLASS-PRODUCT-3PK.png?v=1769815856",
    why: "Good second bottle shape for combo feeding if baby rejects the main Dr. Brown's narrow nipple.",
    notes: "Buy only 2-4 as a test set. Do not buy many bottle brands before seeing what baby accepts.",
    url: "https://www.evenflofeeding.com/products/balance-bottles-glass-wide-neck"
  },
  {
    id: "lansinoh-glass-bottles",
    name: "Lansinoh Glass Baby Bottles",
    category: "Bottle Feeding",
    priority: "Nice",
    price: 50,
    purchased: false,
    image:
      "https://lansinoh.com/cdn/shop/files/US_March2026_GlassBottleWN3_PDP_flowguide-M_1100x.png?v=1774014101",
    why: "Another breastfeeding-friendly glass bottle option with a soft nipple profile.",
    notes: "Use as an optional alternate to Evenflo. Choose one backup glass bottle system, not both, unless testing latch preferences.",
    url: "https://lansinoh.com/products/glass-feeding-baby-5oz"
  },
  {
    id: "wabi-baby-uv-sterilizer-dryer",
    name: "Wabi Baby UV Sterilizer Dryer",
    category: "Bottle Cleaning",
    priority: "Nice",
    price: 259,
    purchased: false,
    image:
      "https://www.wabibaby.com/cdn/shop/files/wa9900-wh-front_full_e2773ceb-6136-4fbf-a3d3-3d40eb09e0a4.png?v=1689438066&width=1500",
    why: "Premium drying and sterilizing cabinet for bottles, nipples, pacifiers, and pump parts.",
    notes: "Optional if using the Baby Brezza Bottle Washer Pro, but useful as a clean drying/storage station.",
    url: "https://www.wabibaby.com/products/uvc"
  },
  {
    id: "baby-brezza-bottle-washer-pro",
    name: "Baby Brezza Bottle Washer Pro",
    category: "Bottle Cleaning",
    priority: "Nice",
    price: 239.99,
    purchased: false,
    image:
      "https://babybrezza.com/cdn/shop/files/BWP_classic.webp?v=1770152040",
    why: "Countertop machine that washes, sterilizes, and dries bottles, pump parts, sippy cups, and accessories.",
    notes: "Moved from Core Picks into Formula / Ready-to-Feed because it mainly supports bottle-feeding cleanup and night-shift labor reduction.",
    url: "https://babybrezza.com/products/bottle-washer-pro"
  },
  {
    id: "baby-brezza-formula-pro-advanced",
    name: "Baby Brezza Formula Pro Advanced",
    category: "Formula Prep",
    priority: "Nice",
    price: 183.99,
    purchased: false,
    image:
      "https://babybrezza.com/cdn/shop/files/FPA_Carousel_01_classic.webp?v=1758552426",
    why: "Automatically mixes warm formula bottles with adjustable ounce and temperature settings.",
    notes: "Moved from Core Picks into Formula / Ready-to-Feed. More useful for powder formula later; ready-to-feed is still simpler for the newborn stage.",
    url: "https://babybrezza.com/products/formula-pro-advanced"
  }
];

items.formulaFeeding.push(
  {
    id: "oxo-bottle-cleaning-starter",
    name: "OXO Bottle Cleaning Starter",
    category: "Bottle Cleaning",
    priority: "Must",
    price: 65,
    purchased: false,
    image:
      "https://www.oxo.com/media/catalog/product/cache/42f6b21d4e9bb5235c64b47a93880671/6/2/62123900_oxo_tot_space_saving_drying_rack_gray_01.jpg",
    why: "The tracker adds a bottle brush, vertical drying rack, dishwasher basket, and compact sterilization method before delivery.",
    notes: "Small-counter setup: OXO vertical rack plus brush and dishwasher basket; use microwave steam bags or dishwasher sanitize instead of adding another appliance unless bottle volume demands it.",
    url: "https://www.oxo.com/space-saving-drying-rack.html",
    links: [
      {
        label: "OXO Tot Space Saving Drying Rack",
        url: "https://www.oxo.com/space-saving-drying-rack.html"
      },
      {
        label: "OXO Tot Bottle Brush",
        url: "https://www.oxo.com/tot-bottle-brush-with-nipple-cleaner-and-stand.html"
      },
      {
        label: "OXO Tot Dishwasher Basket",
        url: "https://www.oxo.com/tot-dishwasher-basket.html"
      },
      {
        label: "Dr. Brown's sterilizer bags",
        url: "https://www.drbrownsbaby.com/product/dr-browns-microwave-steam-sterilizer-bags/"
      }
    ]
  },
  {
    id: "spectra-s1-primary-pump",
    name: "Spectra S1 Plus Primary Pump",
    category: "Pumping",
    priority: "Must",
    price: 216,
    purchased: false,
    image:
      "https://www.spectrababyusa.com/wp-content/uploads/2018/08/S1Plus-1.jpg",
    why: "The tracker recommends a reliable rechargeable primary pump before deciding on wearables.",
    notes: "Order through insurance when possible. Keep wearable pumps as a later decision after supply and flange size are known.",
    url: "https://www.spectrababyusa.com/products/spectra-s1-plus-premier-rechargeable-double-electric-breast-pump"
  },
  {
    id: "pump-parts-flanges-milk-bags",
    name: "Pump Parts, Fitted Flanges + Milk Bags",
    category: "Pumping",
    priority: "Nice",
    price: 95,
    purchased: false,
    image:
      "https://lansinoh.com/cdn/shop/products/BreastmilkStorageBags_100count_1100x.png?v=1664909147",
    why: "The tracker adds pump parts, correct flange sizing, and one starter box of milk storage bags in the first month.",
    notes: "Buy flanges after sizing. Keep two full pump-part sets only if pumping daily.",
    url: "https://www.spectrababyusa.com/collections/spectra-accessories",
    links: [
      {
        label: "Spectra accessories",
        url: "https://www.spectrababyusa.com/collections/spectra-accessories"
      },
      {
        label: "Maymom compatible parts",
        url: "https://www.maymom.com/"
      },
      {
        label: "Lansinoh milk storage bags",
        url: "https://lansinoh.com/products/breastmilk-storage-bags"
      }
    ]
  },
  {
    id: "my-brest-friend-deluxe",
    name: "My Brest Friend Deluxe Nursing Pillow",
    category: "Feeding Support",
    priority: "Must",
    price: 55,
    purchased: false,
    image:
      "https://www.mybrestfriend.com/cdn/shop/files/Deluxe-Nursing-Pillow-Evening-Grey.jpg?v=1743022159",
    why: "The tracker prefers My Brest Friend for early feeding ergonomics; keep Boppy as the softer alternate.",
    notes: "Choose one main nursing pillow after considering chair/sofa setup.",
    url: "https://www.mybrestfriend.com/products/deluxe-nursing-pillow"
  },
  {
    id: "nipple-care-starter",
    name: "Silverette + Nipple Balm Starter",
    category: "Feeding Support",
    priority: "Must",
    price: 75,
    purchased: false,
    image:
      "https://silveretteusa.com/cdn/shop/files/SilveretteNursingCups_1200x1200.jpg?v=1705506602",
    why: "The tracker adds nipple care before birth for early breastfeeding discomfort and recovery.",
    notes: "Use as needed and ask a lactation consultant for pain, latch, or supply issues.",
    url: "https://silveretteusa.com/products/silverette-nursing-cups",
    links: [
      {
        label: "Silverette nursing cups",
        url: "https://silveretteusa.com/products/silverette-nursing-cups"
      },
      {
        label: "Earth Mama nipple butter",
        url: "https://earthmamaorganics.com/products/organic-nipple-butter"
      }
    ]
  }
);

function removeMovedCorePickCards() {
  renderedCards.forEach(({ card, item }) => {
    if (movedFormulaItemIds.has(item.id) && card.parentElement?.id === "corePicks") {
      card.remove();
    }
  });
}

function trackableItems() {
  const corePicksForBudget = items.corePicks.filter((item) => !movedFormulaItemIds.has(item.id));
  return [...corePicksForBudget, ...items.addOns, ...items.formulaFeeding, ...items.parentWellness];
}

function formulaBudgetBreakdown() {
  const formulaSupplyBudget = items.formulaFeeding
    .filter((item) => item.id === firstThreeMonthFormulaBudgetId)
    .reduce((sum, item) => sum + estimatedCheckoutPrice(item), 0);
  const setupBudget = items.formulaFeeding
    .filter((item) => item.id !== firstThreeMonthFormulaBudgetId)
    .reduce((sum, item) => sum + estimatedCheckoutPrice(item), 0);

  return {
    formulaSupplyBudget,
    setupBudget,
    totalBudget: formulaSupplyBudget + setupBudget
  };
}

function renderFormulaBudgetSummary() {
  const formulaTarget = document.getElementById("formulaFeeding");
  if (!formulaTarget || document.getElementById("formulaBudgetSummary")) {
    return;
  }

  const { formulaSupplyBudget, setupBudget, totalBudget } = formulaBudgetBreakdown();
  const budgetCard = document.createElement("article");
  budgetCard.id = "formulaBudgetSummary";
  budgetCard.className = "summary-card formula-budget-card";
  budgetCard.innerHTML = `
    <p class="summary-label">Formula / Ready-to-Feed First 3 Months</p>
    <p class="summary-value">${fmtPrice(totalBudget)}</p>
    <p class="price-note">Includes ${fmtPrice(formulaSupplyBudget)} for ready-to-feed formula plus ${fmtPrice(setupBudget)} for bottle-feeding and cleaning setup.</p>
  `;

  formulaTarget.parentElement.insertBefore(budgetCard, formulaTarget);
}

refreshSummary = function refreshSummaryWithFormula() {
  const allTrackable = trackableItems();

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
  const totalListBudget = allTrackable.reduce((sum, item) => {
    return sum + estimatedCheckoutPrice(item);
  }, 0);
  const mustItems = allTrackable.filter((item) => item.priority === "Must");
  const mustRemaining = mustItems.filter((item) => !selected.has(item.id)).length;

  document.getElementById("selectedCount").textContent = String(selectedCount);
  document.getElementById("selectedBudget").textContent = fmtPrice(selectedBudget);
  document.getElementById("mustRemaining").textContent = String(mustRemaining);

  const totalListCost = document.getElementById("totalListCost");
  if (totalListCost) {
    totalListCost.textContent = fmtPrice(totalListBudget);
  }
};

const formulaTarget = document.getElementById("formulaFeeding");
removeMovedCorePickCards();
renderFormulaBudgetSummary();
if (formulaTarget && formulaTarget.children.length === 0) {
  renderItems("formulaFeeding", "formulaFeeding");
}

saveState();
refreshSummary();
