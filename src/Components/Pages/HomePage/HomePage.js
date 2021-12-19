import React from 'react';
import { useSelector } from 'react-redux';
import LeagueCard from './LeagueCard';
import './home.css';

const HomePage = () => {
  let allLeagues = useSelector((state) => state.home);
  allLeagues = allLeagues.homePage;
  return (
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
  );
};

export default HomePage;
