import React from 'react';
import PropTypes from 'prop-types';

const StandingHeader = ({ id, year }) => {
  const seasons = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

  return (
    <div className="standing-page-header d-flex j-center a-center">
      <div>
        <h2>Steve&apos;s Football App</h2>
      </div>
      <div className="d-flex j-center a-center season-select">
        <p>Please select season:</p>
        <select onChange={(e) => year(id, e.target.value)}>
          {seasons.map((season) => (
            <option key={season} value={season}>
              {' '}
              {season}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

StandingHeader.propTypes = {
  year: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default StandingHeader;
