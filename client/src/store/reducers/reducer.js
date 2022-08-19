import { GET_DATA, HIDE_TICKER, ENABLE_TICKER } from '../actions/actions';

const initialState = {
  data: [],
  hiddenTickers: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === GET_DATA) {
    return {
      ...state,
      data: [action.data],
    };
  }
  if (action.type === HIDE_TICKER) {
    return {
      ...state,
      hiddenTickers: [...state.hiddenTickers, action.ticker],
    };
  }
  if (action.type === ENABLE_TICKER) {
    return {
      ...state,
      hiddenTickers: state.hiddenTickers.filter((t) => t !== action.ticker),
    };
  }

  return state;
};
