const FETCH_LEAGUES = 'store/home/FETCH_LEAGUES';
const SEARCH_LEAGUES = 'store/home/SEARCH_LEAGUES';
const LOAD_LEAGUE = 'store/home/SEARCH_LEAGUES';
const initialState = {
  standingPage: [],
  homePage: [],
};

const fetchLeagues = (leagues) => ({
  type: FETCH_LEAGUES,
  payload: leagues,
});

export const loadLeague = (league) => ({
  type: LOAD_LEAGUE,
  payload: league,
});

export const searchLeagues = (leagueName) => ({
  type: SEARCH_LEAGUES,
  payload: leagueName,
});

export const getLeagues = () => async (dispatch) => {
  const leagues = await fetch('https://api-football-standings.azharimm.site/leagues');
  const data = await leagues.json();
  dispatch(fetchLeagues(data.data));
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEAGUES:
      return {
        ...state,
        homePage: action.payload.map((league) => (
          {
            leagueName: league.name,
            leagueLogo: league.logos.light,
            id: league.id,
            leagueAbbr: league.abbr,
          }
        )),
      };
    // case SEARCH_LEAGUES:
    //   return state.filter((league) => league.leagueName.contains(action.payload));
    case LOAD_LEAGUE:
      return {
        ...state,
        standingPage: state.homePage.filter((league) => league.id === action.payload),
      };
    default:
      return state;
  }
};

export default homeReducer;
