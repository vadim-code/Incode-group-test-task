export const GET_DATA = 'GET_DATA';
export const HIDE_TICKER = 'HIDE_TICKER';
export const ENABLE_TICKER = 'ENABLE_TICKER';

export const getDataAction = (data) => ({ type: GET_DATA, data });
export const hideTickerAction = (ticker) => ({ type: HIDE_TICKER, ticker });
export const enableTickerAction = (ticker) => ({ type: ENABLE_TICKER, ticker });
