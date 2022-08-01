import React from 'react'
import PropTypes from 'prop-types';

import { formatNumericValue } from '../helpers/GameLogic';

const RankingViewRow = ({user, score}) => {
  return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {user}
      <span className="badge bg-secondary rounded-pill">{formatNumericValue(score)}</span>
    </li>
  )
}

RankingViewRow.propTypes = {
  user: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default RankingViewRow