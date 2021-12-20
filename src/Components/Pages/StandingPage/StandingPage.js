import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { getStanding, getStandingByYear } from '../../../Redux/StandingPage/Standing';
import StandingDetails from './StandingDetails';
import StandingHeader from './StandingHeader';
import { getLeagues } from '../../../Redux/HomePage/Home';

const StandingPage = () => {
  let league = useSelector((state) => state.home);
  league = league.filter((league) => league.selected === true);
  const { id, leagueLogo } = league[0];

  const myStanding = useSelector((state) => state.standing);

  const { leagueName, season, leagueStanding } = myStanding;

  const dispatch = useDispatch();
  const changeYear = (id, number) => dispatch(getStandingByYear(id, number));

  const loadLeague = () => dispatch(getLeagues());

  useEffect(() => {
    dispatch(getStanding(id));
  }, []);
  return (
    <div className="standing-page d-flex j-center a-center f-col">
      <StandingHeader year={changeYear} id={id} />
      <Link className="standing-link d-flex" to="/" onClick={loadLeague}><FaArrowCircleLeft /></Link>
      <div className="standing-header d-flex a-center j-center">
        <h2>{leagueName}</h2>
        <img src={leagueLogo} alt="logo" />
        <p>
          League Season:
          {season}
        </p>
      </div>
      <table className="table">
        <thead className="t-head">
          <tr className="tr">
            <th>team</th>
            <th>wins</th>
            <th>Loss</th>
            <th>Draws</th>
            <th>Games</th>
            <th>GF</th>
            <th>GA</th>
            <th>points</th>
            <th>rank</th>
            <th>GD</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {leagueStanding.map((item) => (
            <StandingDetails
              key={item.id}
              teamName={item.clubName}
              teamStat={item.stats}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingPage;
