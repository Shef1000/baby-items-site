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
    id: "baby-brezza-bottle-washer-pro",
    name: "Baby Brezza Bottle Washer Pro",
    category: "Bottle Cleaning",
    priority: "Must",
    price: 239.99,
    checkoutPrice: 261,
    purchased: true,
    image:
      "https://babybrezza.com/cdn/shop/files/BWP_classic.webp?v=1770152040",
    why: "Countertop machine that washes, sterilizes, and dries bottles, pump parts, sippy cups, and accessories.",
    notes: "Purchased all-in-one bottle washer, sterilizer, and dryer. This replaces standalone UV sterilizers, separate drying cabinets, and duplicate bottle washer options. Checkout estimate uses the current Baby Brezza sale price plus 8.625% San Francisco sales tax. Includes 60 detergent tablets; use Baby Brezza detergent tablets as directed.",
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
    id: "eufy-s1-pro-lavie-massage-pump-bundle",
    name: "eufy S1 Pro Heated Pump + LaVie Massage Pads",
    category: "Pumping",
    priority: "Must",
    price: 419.98,
    purchased: false,
    image:
      "https://cdn.shopify.com/s/files/1/0504/7094/4954/files/2e5838e978c539a89958f42a59e3a0db.png?v=1782118674",
    why: "Primary pumping setup with heat plus massage support: eufy provides HeatFlow heated wearable pumping, and LaVie pads add warming vibration massage during pumping.",
    notes: "Displayed checkout estimate uses eufy S1 Pro at $349.99 plus LaVie warming massage pads at $69.99, before 8.625% San Francisco sales tax. Confirm flange size and ask a lactation consultant if pumping is painful or output drops.",
    url: "https://www.eufy.com/products/t8d04121",
    links: [
      {
        label: "eufy Wearable Breast Pump S1 Pro",
        url: "https://www.eufy.com/products/t8d04121"
      },
      {
        label: "LaVie Warming Lactation Massage Pads",
        url: "https://www.laviemom.com/collections/lactation-massagers/products/warming-lactation-massage-pads"
      }
    ]
  },
  {
    id: "pump-parts-flanges-milk-bags",
    name: "Pump Parts, Fitted Flanges + Milk Bags",
    category: "Pumping",
    priority: "Nice",
    price: 95,
    purchased: false,
    image:
      "https://lansinoh.com/cdn/shop/files/US_June2026_MSB_Plastic_BabyCenter_PDP_-01.jpg?v=1782415629",
    why: "The tracker adds pump parts, correct flange sizing, and one starter box of milk storage bags in the first month.",
    notes: "Buy flanges after sizing. Keep two full pump-part sets only if pumping daily.",
    url: "https://www.eufy.com/products/t8d04121",
    links: [
      {
        label: "eufy Breast Pump S1 Pro",
        url: "https://www.eufy.com/products/t8d04121"
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
    id: "nipple-care-starter",
    name: "Silverette + Nipple Balm Starter",
    category: "Feeding Support",
    priority: "Must",
    price: 75,
    purchased: true,
    image:
      "https://silveretteusa.com/cdn/shop/files/37c1b22d59e214d67f59cf957ad479377e3e253f_1.jpg?v=1764866452",
    why: "The tracker adds nipple care before birth for early breastfeeding discomfort and recovery.",
    notes: "Purchased. Use as needed and ask a lactation consultant for pain, latch, or supply issues.",
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
  const formulaTarget = document.getElementById("eatEssentials");
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
  document.getElementById("selectedCount").textContent = String(selectedCount);
  document.getElementById("selectedBudget").textContent = fmtPrice(selectedBudget);

  const totalListCost = document.getElementById("totalListCost");
  if (totalListCost) {
    totalListCost.textContent = fmtPrice(totalListBudget);
  }

  if (typeof refreshDepartmentProgress === "function") {
    refreshDepartmentProgress();
  }
};

const formulaTarget = document.getElementById("eatEssentials");
removeMovedCorePickCards();
renderFormulaBudgetSummary();
if (formulaTarget) {
  renderItems("formulaFeeding", "eatEssentials");
}

saveState();
refreshSummary();
