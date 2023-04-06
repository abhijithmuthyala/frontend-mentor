let state = {
  day: null,
  month: null,
  year: null,
};

const actionTypeToStateMap = new Map([
  ["input/day", "day"],
  ["input/month", "month"],
  ["input/year", "year"],
]);

export function getState() {
  return { ...state };
}

function formStateReducer(state, action) {
  return {
    ...state,
    [actionTypeToStateMap.get(action.type)]:
      action.payload === "" ? null : +action.payload,
  };
}

export function dispatch(action) {
  state = formStateReducer(state, action);
}
