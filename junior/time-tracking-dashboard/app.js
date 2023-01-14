import ellipsisIcon from "./images/icon-ellipsis.svg";

const STAT_TYPES = ["daily", "weekly", "monthly"];
let reportsData = null;

const statsTypeBtnContainer = document.querySelector(".track-options");
let activeStatTypeBtn = statsTypeBtnContainer.querySelector(".active");

statsTypeBtnContainer.addEventListener("click", updateStats);

init();

async function init() {
  reportsData = await getReportsData();
  renderReports();
}

async function getReportsData() {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

function renderReports() {
  const reportsContainer = document.querySelector(".reports-box");
  const reportArticles = reportsData.reduce(
    (acc, reportData) => acc + getReportTemplate(reportData),
    ""
  );

  reportsContainer.innerHTML = "";
  reportsContainer.insertAdjacentHTML("afterbegin", reportArticles);
}

function updateStats(e) {
  const targetBtn = e.target.closest(".btn-track-option");
  if (!targetBtn || targetBtn === activeStatTypeBtn) return;

  const { statType } = targetBtn.dataset;
  if (!STAT_TYPES.includes(statType)) return; // trust issues

  const statsContainers = document.querySelectorAll(".report-stats");
  statsContainers.forEach((statContainer, i) => {
    statContainer.innerHTML = "";
    const statTemplate = getTimeStatsTemplate(
      reportsData[i].timeframes,
      statType
    );
    statContainer.innerHTML = statTemplate;
  });

  activeStatTypeBtn.classList.toggle("active");
  targetBtn.classList.toggle("active");

  // a11y
  activeStatTypeBtn.setAttribute("aria-pressed", "false");
  targetBtn.setAttribute("aria-pressed", "true");

  activeStatTypeBtn = targetBtn;
}

function getReportTemplate(reportData) {
  const { title, timeframes } = reportData;
  const statsTemplate = getTimeStatsTemplate(timeframes);

  const template =
    // prettier-ignore
    `
    <div class="article-report-box article-report-box--${title.toLowerCase().replace(" ", "-")} card">
      <article class="article-report card">
        <header class="header-report">
          <h3 class="header-report__title">${title}</h3>
          <button class="btn-ellipsis" aria-label="More ${title} statistics">
            <img
              src=${ellipsisIcon}
              class="btn-ellipsis__icon"
              alt=""
            />
          </button>
        </header>
        <div class="report-stats">
          ${statsTemplate}
        </div>
      </article>
    </div>
  `;

  return template;
}

function getTimeStatsTemplate(timeframes, statType = "daily") {
  const { current, previous } = timeframes[statType];
  const statTypeTextMap = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };

  const template =
    // prettier-ignore
    `
    <span class="report-stats__current">${current}hrs</span>
    <span class="report-stats__previous">${statTypeTextMap[statType]} - ${previous}hrs</span>
    `;

  return template;
}
