export default renderBars;

async function getExpensesData() {
  try {
    const dataSource = "./data.json";
    const res = await fetch(dataSource);
    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error("⚠️ Failed to fetch data.");
  }
}

async function renderBars() {
  try {
    const barsData = await getExpensesData();
    const maxHeight = Math.max(...barsData.map((bar) => bar.amount));

    barsData.forEach((barData, i) => renderBar(barData, maxHeight, i));
  } catch (err) {
    const barsContainer = document.querySelector(".bars-list");
    const errorElement = document.querySelector(".chart-error");

    barsContainer.innerHTML = "";
    errorElement.classList.remove("remove");
  }
}

function renderBar({ day, amount: height }, maxHeight, i) {
  const barContainers = document.querySelectorAll(".bar-svg-box");
  const barLabelElements = document.querySelectorAll(".bar-label");
  const barValueElements = document.querySelectorAll(".bar-value");

  const heightPercent = (height / maxHeight) * 100;
  const barTemplate = getBarTemplate(heightPercent);

  barContainers[i].insertAdjacentHTML("afterbegin", barTemplate);
  barLabelElements[i].textContent = day;
  barValueElements[i].textContent = `$${height}`;
  barValueElements[i].style.setProperty("--pos-y", `${heightPercent}%`);
}

function getBarTemplate(heightPercent) {
  const svg =
    // prettier-ignore
    `<svg height="${heightPercent}%" width="100%" class="bar-svg" xmlns="http://www.w3.org/2000/svg">
      <rect height="100%" width="100%" />
    </svg>
    `;

  return svg;
}
