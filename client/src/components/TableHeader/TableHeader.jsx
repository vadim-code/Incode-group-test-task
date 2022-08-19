import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import './styles.css';

function TableHeader({ isFromHighest, onPriceClick }) {
  function renderPriceButton() {
    if (isFromHighest) {
      return (
        <div className="header-cell">
          <span>Price</span>
          <div onClick={onPriceClick} className="btn-price from-high">
            <AiOutlineArrowUp />
          </div>
        </div>
      );
    }

    return (
      <div className="header-cell">
        <span>Price</span>
        <div onClick={onPriceClick} className="btn-price from-low">
          <AiOutlineArrowDown />
        </div>
      </div>
    );
  }

  return (
    <header className="header-container">
      <div className="header-cell">
        <span>Company</span>
      </div>
      <div className="header-cell">
        <span>Change %</span>
      </div>
      {renderPriceButton()}
    </header>
  );
}

export default TableHeader;
