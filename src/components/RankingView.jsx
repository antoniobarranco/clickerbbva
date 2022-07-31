import React from 'react';
import PropTypes from 'prop-types';

function RankingView({ showLimit }) {
  return (
    <>
      <div>RankingView</div>
      <p>To be done...</p>
      <p>
        Showing
        {' '}
        {showLimit}
      </p>
    </>
  );
}

RankingView.propTypes = {
  showLimit: PropTypes.number.isRequired,
};

export default RankingView;
