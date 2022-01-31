import React from 'react';
import PropTypes from 'prop-types';

const HomeHeader = ({ length }) => (
  <div className="standing-page-header home-page-header d-flex j-center a-center">
    <div className="app-name">
      <h2>Steve&apos;s Football App</h2>
    </div>
    <div className="d-flex j-center a-center season-select">
      <p>
        Leagues Displayed:
        {(length)}
      </p>
    </div>
  </div>
);

HomeHeader.propTypes = {
  length: PropTypes.number.isRequired,
};

export default HomeHeader;
