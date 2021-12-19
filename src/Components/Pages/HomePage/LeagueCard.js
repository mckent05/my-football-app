import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';
import { loadLeague } from '../../../Redux/HomePage/Home';

const LeagueCard = ({
  name, logo, id,
}) => {
  const dispatch = useDispatch();

  const loadStanding = (id) => dispatch(loadLeague(id));
  return (
    <article className="league-card d-flex a-center j-center">
      <Link to={`/StandingPage/${name}`} onClick={() => loadStanding(id)}>
        <div className="card-header d-flex j-center a-center">
          <h1>
            {name}
            {' '}
          </h1>
          <button type="button" aria-label="arrow-btn">
            {' '}
            <FaArrowCircleRight />
            {' '}
          </button>
        </div>
        <img src={logo} alt="league-logo" />
      </Link>
    </article>
  );
};

LeagueCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default LeagueCard;
