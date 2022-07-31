import React from 'react';
import PropTypes from 'prop-types';

function GameViewScore({ score }) {
  return (
    <div className="d-grid gap-2 col-6 my-5 mx-auto">
      <h1 className="display-1 text-center"><pre><span className="badge bg-secondary">{score}</span></pre></h1>
    </div>
  );
}

GameViewScore.propTypes = {
  score: PropTypes.string.isRequired,
};

export default GameViewScore;
