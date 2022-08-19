import React from 'react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiFillDelete,
} from 'react-icons/ai';
import './styles.css';

function CompanyStockRow(props) {
  const { changePercent, change, ticker, price, onDelete } = props;

  const isGrowing = Math.abs(price) - Math.abs(change) > 0;

  function renderChangePercent() {
    if (isGrowing) {
      return (
        <div className="cell">
          <span className="growing">
            {changePercent ?? '-'}
            <AiOutlineArrowUp className="arrow" />
          </span>
        </div>
      );
    }
    return (
      <div className="cell">
        <span className="falling">
          {changePercent ?? '-'}
          <AiOutlineArrowDown className="arrow" />
        </span>
      </div>
    );
  }

  return (
    <div className="row-container">
      <div className="cell">
        <span className="ticker company-name-cell">{ticker ?? '-'}</span>
      </div>
      {renderChangePercent()}
      <div className="cell">
        <span className="price">{`$ ${price ?? '-'}`}</span>
      </div>
      <span className="delete_button" onClick={() => onDelete(ticker)}>
        <AiFillDelete />
      </span>
    </div>
  );
}

export default CompanyStockRow;
