setupPriceInputElement();

function setupPriceInputElement() {
  const priceInputEl = document.querySelector(".price-input");
  const billBtn = document.querySelector(".btn-bill");
  const pageViewsEl = document.querySelector(".pageviews__number");
  const priceEl = document.querySelector(".per-month__amount");

  const range = {
    min: 1,
    max: 5,
    step: 1,
  };
  const planMap = new Map([
    [0, { pageviews: "10K", pricePerMonth: 8 }],
    [1, { pageviews: "50K", pricePerMonth: 12 }],
    [2, { pageviews: "100K", pricePerMonth: 16 }],
    [3, { pageviews: "500K", pricePerMonth: 24 }],
    [4, { pageviews: "1M", pricePerMonth: 36 }],
  ]);

  let discountPercent = 0;
  let planData = null;

  injectInputRange();
  priceInputHandler();

  priceInputEl.addEventListener("input", priceInputHandler);
  billBtn.addEventListener("click", togglePlan);

  function togglePlan() {
    const yearlyPlanDiscountPercent = 25;

    discountPercent = discountPercent === 0 ? yearlyPlanDiscountPercent : 0;
    billBtn.classList.toggle("toggled");
    renderPlanData();
  }

  function priceInputHandler() {
    const targetIndex = mapInputValue();
    planData = planMap.get(targetIndex);

    renderPlanData();
    updateSliderPosition(targetIndex);
  }

  function updateSliderPosition(targetIndex) {
    priceInputEl.style.setProperty(
      "--left-pos",
      `${(targetIndex / (planMap.size - 1)) * 100}%`
    );
    priceInputEl.style.setProperty(
      "--transform-x",
      `${
        (targetIndex === 0 && "0") ||
        (targetIndex === planMap.size - 1 && "-100%") ||
        "-50%"
      }`
    );
  }

  function renderPlanData() {
    let { pageviews, pricePerMonth } = planData;
    pricePerMonth = ((pricePerMonth * (100 - discountPercent)) / 100).toFixed(
      2
    );

    priceEl.textContent = `$${pricePerMonth}`;
    pageViewsEl.textContent = pageviews;
  }

  function mapInputValue() {
    const min = +priceInputEl.getAttribute("min");
    const max = +priceInputEl.getAttribute("max");
    const value = +priceInputEl.value;

    const alpha = (value - min) / (max - min);

    const mappedValue = range.min + alpha * (range.max - range.min);
    const steps = Math.floor((mappedValue - range.min) / range.step);
    return steps;
  }

  function injectInputRange() {
    Object.entries(range).forEach(([attr, value]) =>
      priceInputEl.setAttribute(attr, value)
    );
  }
}
