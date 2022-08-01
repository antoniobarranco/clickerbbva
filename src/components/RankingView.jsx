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

RankingView.defaultProps = {
  showLimit: undefined,
};

RankingView.propTypes = {
  showLimit: PropTypes.number,
};

export default RankingView;
