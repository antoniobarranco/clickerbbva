import React from 'react';
import PropTypes from 'prop-types';

function BreadCrumbs({ Text, handleExit }) {
  return (
    <nav className="navbar navbar-dark bg-primary bg-opacity-75">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1" data-testid="BreadCrumbsText">
          {Text}
        </span>

        {handleExit && (
        <div className="d-flex">
          <button className="btn btn-outline-light" type="button" onClick={handleExit}>
            <i className="bi bi-box-arrow-in-right" />
            {' '}
            Close
          </button>
        </div>
        )}

      </div>
    </nav>

  );
}

BreadCrumbs.defaultProps = {
  handleExit: undefined,
};

BreadCrumbs.propTypes = {
  Text: PropTypes.string.isRequired,
  handleExit: PropTypes.func,
};

export default BreadCrumbs;
