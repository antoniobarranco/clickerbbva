import React from 'react';
import PropTypes from 'prop-types';

function GameViewStats({
  clickersIncrement, autoClickerCost, megaClickerCost, timeInterval,
}) {
  return (
    <div className="d-grid gap-2 col-8  my-5 mx-auto">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center active">
          Game Stats
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Increment every
          {' '}
          {timeInterval}
          ms
          <span className="badge bg-primary rounded-pill">{clickersIncrement}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          AutoClickers cost
          {' '}
          <span className="badge bg-primary rounded-pill">{autoClickerCost}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          MegaClickers cost
          {' '}
          <span className="badge bg-primary rounded-pill">{megaClickerCost}</span>
        </li>
      </ul>
    </div>

  );
}

GameViewStats.propTypes = {
  clickersIncrement: PropTypes.number.isRequired,
  autoClickerCost: PropTypes.number.isRequired,
  megaClickerCost: PropTypes.number.isRequired,
  timeInterval: PropTypes.number.isRequired,
};

export default GameViewStats;
