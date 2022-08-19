import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  dataSelector,
  hiddenTickersSelector,
} from '../../store/selectors/selectors';
import {
  startStocks,
  getData,
  stopStocks,
} from '../../socket-interactions/socket-interactions';
import {
  hideTickerAction,
  enableTickerAction,
} from '../../store/actions/actions';
import StockTable from './StockTable';

function StockTableContainer() {
  const dispatch = useDispatch();

  const [companiesData] = useSelector(dataSelector);
  const hiddenTickers = useSelector(hiddenTickersSelector);

  useEffect(() => {
    startStocks();
    dispatch(getData());
  }, [dispatch]);

  function handleDelete(ticker) {
    dispatch(hideTickerAction(ticker));
  }

  function handleEnable(ticker) {
    dispatch(enableTickerAction(ticker));
  }

  return (
    <StockTable
      companiesData={companiesData}
      hiddenTickers={hiddenTickers}
      onStart={startStocks}
      onStop={stopStocks}
      handleEnable={handleEnable}
      handleDelete={handleDelete}
    />
  );
}

export default StockTableContainer;
