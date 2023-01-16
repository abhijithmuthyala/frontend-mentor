import {
  resetInputs,
  clearErrors,
  getValidityChecker,
  debounce,
} from "./utils";

const ERROR_CLASS = "error";

const billInputEl = document.querySelector("#bill");
const tipInputEl = document.querySelector("#tip-percent");
const peopleInputEl = document.querySelector("#num-people");
const inputEls = [billInputEl, tipInputEl, peopleInputEl];

const tipsContainer = document.querySelector(".tip-inputs-list");

const tipPerPersonEl = document.querySelector(".amount--tip");
const totalPerPersonEl = document.querySelector(".amount--total");

const resetButton = document.querySelector(".btn-reset");

const {
  billInputHandler,
  tipBtnHandler,
  personsInputHandler,
  tipInputHandler,
  deactivateTipBtns,
} = getFormHandlers();

init();
initHandlers();

function init() {
  resetInputs(inputEls);
  resetBills();
}

function initHandlers() {
  billInputEl.addEventListener("input", debounce(billInputHandler));
  tipInputEl.addEventListener("input", debounce(tipInputHandler));
  peopleInputEl.addEventListener("input", debounce(personsInputHandler));
  tipsContainer.addEventListener("click", debounce(tipBtnHandler));

  resetButton.addEventListener("click", reset);
}

function getFormHandlers() {
  let bill = 0;
  let tipPercent = 0;
  let persons = 0;

  let tipPerPerson = 0;
  let totalPerPerson = 0;

  const VALID_BILL_RANGE = [0, 10000];
  const VALID_TIP_RANGE = [5, 100];
  const VALID_NUM_PEOPLE_RANGE = [1, 100];

  const isBillValid = getValidityChecker(...VALID_BILL_RANGE);
  const isTipValid = getValidityChecker(...VALID_TIP_RANGE);
  const isNumPeopleValid = getValidityChecker(...VALID_NUM_PEOPLE_RANGE);

  const { tipBtnHandler, tipInputHandler, deactivateTipBtns } =
    getTipHandlers();

  return {
    billInputHandler,
    tipBtnHandler,
    tipInputHandler,
    personsInputHandler,
    deactivateTipBtns,
  };

  function getTipHandlers() {
    let prevBtn = null;
    const tipPercentages = [5, 10, 15, 25, 50];
    const tipBtns = [...document.querySelectorAll(".btn-tip")];

    return {
      tipBtnHandler,
      tipInputHandler,
      deactivateTipBtns,
    };

    function tipBtnHandler(e) {
      e.stopPropagation();

      // unselect the currently active btn when the container itself is clicked
      if (e.target === tipsContainer) return deactivateTipBtns();

      const clickedBtn = e.target.closest(".btn-tip");
      if (!clickedBtn) return;

      prevBtn?.classList.remove("selected");
      if (prevBtn !== clickedBtn) {
        clickedBtn.classList.add("selected");
        prevBtn = clickedBtn;
      } else {
        prevBtn = null;
      }
      tipInputEl.value = "";
      removeError(tipInputEl);

      tipPercent =
        tipPercentages[tipBtns.findIndex((btn) => btn === clickedBtn)];

      if (
        isBillValid(bill) &&
        isTipValid(tipPercent) &&
        isNumPeopleValid(persons)
      ) {
        evaluateAndRenderBill();
      }
    }

    function tipInputHandler(e) {
      e.stopPropagation();

      deactivateTipBtns();
      tipPercent = parseInt(e.target.value);

      if (!isTipValid(tipPercent)) {
        return handleInvalidInput(tipInputEl);
      }

      removeError(tipInputEl);
      evaluateAndRenderBill();
    }

    function deactivateTipBtns() {
      prevBtn?.classList.remove("selected");
      prevBtn = null;
      tipPercent = 0;
    }
  }

  function billInputHandler(e) {
    bill = parseFloat(e.target.value);

    if (!isBillValid(bill)) {
      return handleInvalidInput(billInputEl);
    }

    removeError(billInputEl);
    evaluateAndRenderBill();
  }

  function personsInputHandler(e) {
    persons = parseInt(e.target.value);

    if (!isNumPeopleValid(persons)) {
      return handleInvalidInput(peopleInputEl);
    }

    removeError(peopleInputEl);
    evaluateAndRenderBill();
  }

  function evaluateBill() {
    const tipProportion = tipPercent / 100;
    tipPerPerson = (bill * tipProportion) / persons;
    totalPerPerson = (bill * (1 + tipProportion)) / persons;
  }

  function renderBill() {
    tipPerPersonEl.textContent = "$" + tipPerPerson.toFixed(2);
    totalPerPersonEl.textContent = "$" + totalPerPerson.toFixed(2);
  }

  function evaluateAndRenderBill() {
    if (
      !(
        isBillValid(bill) &&
        isTipValid(tipPercent) &&
        isNumPeopleValid(persons)
      )
    ) {
      resetBills();
      return;
    }

    evaluateBill();
    renderBill();
  }
}

function handleInvalidInput(inputEl) {
  addError(inputEl);
  resetBills();
  inputEl.focus();
  return;
}

function reset() {
  init();
  deactivateTipBtns();
  clearErrors(inputEls, ERROR_CLASS);

  billInputEl.focus();
}

function resetBills() {
  tipPerPersonEl.textContent = totalPerPersonEl.textContent = "$0.00";
}

function addError(inputEl) {
  inputEl.classList.add(ERROR_CLASS);
}

function removeError(inputEl) {
  inputEl.classList.remove(ERROR_CLASS);
}
