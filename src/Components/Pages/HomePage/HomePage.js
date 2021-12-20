import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeagueCard from './LeagueCard';
import HomeHeader from './HomeHeader';
import './home.css';
import { getLeagues, searchLeagues } from '../../../Redux/HomePage/Home';

const HomePage = () => {
  const allLeagues = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const searchLeague = (value) => {
    setSearch(value);
    if (value !== '') {
      dispatch(searchLeagues(value));
    } else {
      dispatch(getLeagues());
    }
  };
  return (
    <div className="home">
      <HomeHeader length={allLeagues.length} />
      <input type="text" className="search" placeholder="search league" value={search} onInput={(e) => searchLeague(e.target.value)} />
      <div className="home-page d-flex j-center a-center">
        { allLeagues.map((league) => (
          <LeagueCard
            key={league.id}
            name={league.leagueName}
            logo={league.leagueLogo}
            abbr={league.leagueAbbr}
            id={league.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
