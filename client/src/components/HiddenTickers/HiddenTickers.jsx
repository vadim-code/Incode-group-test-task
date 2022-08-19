import React from 'react';
import './styles.css';

function HiddenTickers({ hiddenTickers, onEnable }) {
  return (
    <section>
      <h3>Click on ticker to enable</h3>
      <div className="tickers">
        {hiddenTickers.map((t) => (
          <span className="hidden_ticker" key={t} onClick={() => onEnable(t)}>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

export default HiddenTickers;
