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
    id: "philips-avent-glass-natural-response-bottles-six",
    name: "Philips Avent Glass Natural Response Bottles x6 + Nipples",
    category: "Bottle Feeding",
    priority: "Must",
    price: 60,
    checkoutPrice: 65,
    purchased: true,
    image:
      "https://images.philips.com/is/image/philipsconsumer/66ef8930dbe64ee78c09aca701489ad9?$pnglarge$",
    why: "Purchased six glass Philips Avent bottles with included nipples as the main washable bottle system.",
    notes: "Purchased six bottles with nipples. Philips lists the SCY910/01 glass Natural Response bottle as 4 oz / 120 ml with a slow-flow silicone nipple for 0-3 months, BPA-free glass and nipple materials, no-drip design, and an anti-colic valve. Checkout estimate uses a recent public retail signal of about $40 per 4-pack scaled to six bottles plus 8.625% San Francisco sales tax; replace with receipt total if different.",
    url: "https://www.usa.philips.com/c-p/SCY910_01/glass-natural-response-baby-bottle",
    links: [
      {
        label: "Philips Avent Glass Natural Response Baby Bottle",
        url: "https://www.usa.philips.com/c-p/SCY910_01/glass-natural-response-baby-bottle"
      }
    ]
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
    why: "Good second bottle shape for combo feeding if baby rejects the main Philips Avent Natural Response nipple.",
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
    id: "babybuddha-2-express-cups-primary",
    name: "BabyBuddha 2.0 + Express Cups Plus - Primary Hands-Free System",
    category: "Pumping",
    priority: "Must",
    price: 239.98,
    checkoutPrice: 260.68,
    purchased: false,
    image:
      "https://babybuddhaproducts.com/cdn/shop/files/BB2.0EZFitFlanges.png?v=1779266206&width=2048",
    why: "Extraction-first primary system: a compact rechargeable motor drives in-bra cups, giving stronger and more reliable milk removal than a fully integrated wearable for many experienced exclusive pumpers.",
    notes: "This is hands-free, but not tubeless: the Express Cups sit inside the bra and connect by tubing to the small wearable motor. Use it as the primary pump only if a comfort-and-output test confirms the fit. BabyBuddha suction can feel unusually strong, so begin with the gentler 2.0 stimulation pattern and the lowest comfortable vacuum; more suction is not better. Pain, pinching, swelling, nipple whitening, clogs, or falling output are stop-and-refit signals. Get an IBCLC flange fitting before ordering the cup size: on July 30 the 28/26mm cup was available, the 24/22mm cup was unavailable, and 17/19/21mm inserts were sold separately. If even low settings feel aggressive, the quality-first gentler alternative is Pumpables Genie Advanced with properly fitted in-bra cups. Official stores generally do not accept opened breast-pump returns, so fit planning matters before unsealing.",
    url: "https://babybuddhaproducts.com/products/babybuddha%C2%AE-2-0-primary-portable-breast-pump",
    links: [
      {
        label: "BabyBuddha 2.0 pump",
        url: "https://babybuddhaproducts.com/products/babybuddha%C2%AE-2-0-primary-portable-breast-pump"
      },
      {
        label: "BabyBuddha Express Cups Plus",
        url: "https://babybuddhaproducts.com/products/hands-free-collection-cups"
      },
      {
        label: "Gentler fallback: Pumpables Genie Advanced",
        url: "https://pumpables.co/products/genie-advanced"
      },
      {
        label: "Performance-focused BabyBuddha owner comparison",
        url: "https://www.reddit.com/r/ExclusivelyPumping/comments/1tboiji/eufy_s1_vs_baby_buddha/"
      }
    ]
  },
  {
    id: "eufy-s1-pro-lavie-massage-pump-bundle",
    name: "eufy S1 Pro Heated Wearable Pump - Walmart Tubeless System",
    category: "Pumping",
    priority: "Must",
    price: 349.99,
    checkoutPrice: 380.18,
    purchased: false,
    image:
      "https://i5.walmartimages.com/seo/Eufy-S1-Pro-Breast-pump_32598fa1-a94b-41bc-b376-867bca4c2c4f.089cb9a4e26992b1a77e1a08a5861c75.jpeg",
    why: "Best-proven fully in-bra, zero-tube companion after comparing current specifications with performance-focused Reddit and Rednote owner reports: strong milk removal for many users, built-in warming, useful app controls, and a charging case.",
    notes: "Use the $275 Walmart Life with Baby benefit here. Included Health directly confirmed that you may choose any breast pump sold and shipped by Walmart, and this exact Walmart SKU met that condition on July 30. The live price was $349.99 with free shipping; estimated San Francisco checkout is $380.18 including 8.625% tax, leaving about $105.18 out of pocket after the gift card. Split payment is allowed, unused benefit can be used on other eligible sold-and-shipped-by-Walmart items, and the card works online or in store. Recheck the seller at checkout because marketplace offers can change. Treat the S1 Pro as the truly tubeless companion until repeated matched sessions show that it empties you as well as the primary pump. The S2 Pro remains a watchlist item because early owner reports are mixed; Willow Go is the comfort/geometry fallback if eufy's cups do not fit. HeatFlow is built in, so do not add separate warming pads. The 5 oz cups are not position-proof: assemble every seal carefully, confirm alignment, and stay upright. Confirm flange size with an IBCLC; stop and get help if pumping is painful, causes clogs, or output drops.",
    url: "https://www.walmart.com/ip/13406214163",
    links: [
      {
        label: "eufy S1 Pro official details",
        url: "https://www.eufy.com/us/products/t8d04121"
      },
      {
        label: "Multi-pump controlled owner comparison",
        url: "https://www.reddit.com/r/ExclusivelyPumping/comments/1udrhi7/my_experience_with_the_eufy_s1_pro_spectra_s1/"
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
