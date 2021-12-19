const LOAD_TABLE = 'store/standing/LOAD_TABLE';
const initialState = {
  leagueName: '',
  season: '',
  leagueStanding: [],
};
const fetchStanding = (standing) => ({
  type: LOAD_TABLE,
  payload: standing,
});

export const getStanding = (id) => async (dispatch) => {
  const standing = await fetch(`https://api-football-standings.azharimm.site/leagues/${id}/standings?season=2020&sort=asc`);
  const data = await standing.json();
  dispatch(fetchStanding(data.data));
};

export const getStandingByYear = (id, year) => async (dispatch) => {
  const standing = await fetch(`https://api-football-standings.azharimm.site/leagues/${id}/standings?season=${year}&sort=asc`);
  const data = await standing.json();
  dispatch(fetchStanding(data.data));
};

const fetchStats = (list) => {
  const myStat = list.map((stats) => (
    {
      name: stats.name,
      value: stats.value,
    }
  ));
  return myStat;
};

const standingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TABLE:
      return {
        ...state,
        leagueName: action.payload.name,
        season: action.payload.season,
        leagueStanding: action.payload.standings.map((standing) => (
          {
            id: standing.team.id,
            clubName: standing.team.displayName,
            stats: fetchStats(standing.stats.slice(0, 10)),
          }
        )),
      };
    default:
      return state;
  }
};

export default standingReducer;
