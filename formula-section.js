items.formulaFeeding = [
  {
    id: "similac-360-rtf-starter-stash",
    name: "Similac 360 Total Care Ready-to-Feed 2 oz Starter Stash",
    category: "Formula",
    priority: "Must",
    price: 72,
    purchased: false,
    image:
      "https://i5.walmartimages.com/seo/Similac-360-Total-Care-Ready-to-Feed-Baby-Formula-2-fl-oz-Bottle-Pack-of-12_fd1fead5-5e68-40c3-bf66-b03ad82a40c8.377b2b01545f6327920a6230d35ab43e.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573",
    why: "Sterile ready-to-feed formula is the simplest low-error option for newborn night shifts.",
    notes: "Plan for 48-72 two-ounce bottles to start. Pick Similac or Enfamil as the main brand after confirming with the hospital or pediatrician.",
    url: "https://www.similac.com/products/baby-formula/360-total-care-ready-to-feed/2fl-oz-8pack.html"
  },
  {
    id: "enfamil-neuropro-rtf-backup",
    name: "Enfamil NeuroPro Ready-to-Feed Backup Case",
    category: "Formula",
    priority: "Nice",
    price: 60,
    purchased: false,
    image:
      "https://i5.walmartimages.com/asr/eb46c3aa-3308-4690-9c44-5f5980a41c66.c4e210805aca405a3e613a48f3aa909d.jpeg?odnBg=FFFFFF&odnHeight=576&odnWidth=576",
    why: "Useful alternate hospital-common ready-to-feed option if baby does not start on Similac.",
    notes: "Do not overstock two brands before birth. Use this as the backup/alternate path, not a second primary formula.",
    url: "https://www.enfamil.com/products/enfamil-neuropro-infant-formula/liquid-2-fl-oz-bottle-6-pack/"
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
  }
];

function trackableItems() {
  return [...items.corePicks, ...items.addOns, ...items.formulaFeeding, ...items.parentWellness];
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
if (formulaTarget && formulaTarget.children.length === 0) {
  renderItems("formulaFeeding", "formulaFeeding");
}

saveState();
refreshSummary();
