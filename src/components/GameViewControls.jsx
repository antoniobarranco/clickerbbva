import React from 'react';
import PropTypes from 'prop-types';

function GameViewControls({
  hitHandle, autoClickerHandle, megaClickerHandle, autoClickers,
  megaClickers, canBuyAutoClicker, canBuyMegaClicker,
}) {
  return (
    <div className="d-grid gap-2 col-6  my-5 mx-auto">
      <button type="button" className="btn btn-primary btn-lg" onClick={hitHandle}>Hit</button>
      <button type="button" aria-disabled={!canBuyAutoClicker} disabled={!canBuyAutoClicker} className="btn btn-warning btn-lg" onClick={autoClickerHandle}>
        <i className="bi bi-star" />
        {' '}
        Buy AutoClicker
        {' '}
        <span className="badge text-bg-light">
          x
          {autoClickers}
        </span>
      </button>
      <button type="button" aria-disabled={!canBuyMegaClicker} disabled={!canBuyMegaClicker} className="btn btn-danger btn-lg" onClick={megaClickerHandle}>
        <i className="bi bi-star-fill" />
        {' '}
        Buy MegaClicker
        {' '}
        <span className="badge text-bg-light">
          x
          {megaClickers}
        </span>
      </button>
    </div>
  );
}

GameViewControls.propTypes = {
  hitHandle: PropTypes.func.isRequired,
  autoClickerHandle: PropTypes.func.isRequired,
  megaClickerHandle: PropTypes.func.isRequired,
  autoClickers: PropTypes.number.isRequired,
  megaClickers: PropTypes.number.isRequired,
  canBuyAutoClicker: PropTypes.bool.isRequired,
  canBuyMegaClicker: PropTypes.bool.isRequired,
};

export default GameViewControls;
