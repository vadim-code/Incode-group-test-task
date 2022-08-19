import React from 'react';
import { useState, useMemo } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import CompanyStockRow from '../CompanyStockRow/CompanyStockRow';
import HiddenTickers from '../HiddenTickers/HiddenTickers';
import Search from '../Search/Search';
import './styles.css';

function StockTable(props) {
  const {
    companiesData,
    handleDelete,
    hiddenTickers,
    handleEnable,
    onStart,
    onStop,
  } = props;

  const [isStartDisabled, setStartButtonDisable] = useState(true);
  const [isFromHighest, setFromHighest] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const stocksData = useMemo(
    () =>
      companiesData
        ?.filter(({ ticker }) => {
          return !hiddenTickers.includes(ticker);
        })
        .filter(({ ticker }) => {
          return ticker.toLowerCase().includes(searchValue.toLocaleLowerCase());
        }),
    [companiesData, hiddenTickers, searchValue]
  );

  function handleStart() {
    onStart();
    setStartButtonDisable(true);
  }

  function handleStop() {
    onStop();
    setStartButtonDisable(false);
  }

  function renderTable() {
    if (Array.isArray(stocksData) && stocksData.length > 0) {
      return (
        <>
          {stocksData
            .sort((a, b) => {
              if (isFromHighest) {
                return Number(b.price) - Number(a.price);
              }
              return Number(a.price) - Number(b.price);
            })
            .map((c) => {
              return (
                <CompanyStockRow
                  key={c.ticker}
                  changePercent={c.change_percent}
                  change={c.change}
                  ticker={c.ticker}
                  price={c.price}
                  onDelete={handleDelete}
                />
              );
            })}
        </>
      );
    }

    if (stocksData?.length === 0) {
      return (
        <h3 className="not-found">Try to search for other ticker or enable</h3>
      );
    }
  }

  return (
    <div className="stocks-container">
      <TableHeader
        isFromHighest={isFromHighest}
        onPriceClick={() => setFromHighest((prev) => !prev)}
      />
      <Search onSerchChange={setSearchValue} />
      {renderTable()}
      {hiddenTickers.length > 0 ? (
        <HiddenTickers hiddenTickers={hiddenTickers} onEnable={handleEnable} />
      ) : null}
      <div className="buttons-container">
        <button disabled={isStartDisabled} onClick={handleStart}>
          Start
        </button>
        <button
          className="button-stop"
          disabled={!isStartDisabled}
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default StockTable;
