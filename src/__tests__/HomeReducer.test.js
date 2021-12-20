import homeReducer, { fetchLeagues } from '../Redux/HomePage/Home';

describe('homeReducer Test', () => {
  const initialState = [];
  it('Returns an empty array with the initial state', () => {
    const state = homeReducer(initialState, fetchLeagues([]));
    expect(state).toEqual([]);
  });

  it('Returns an empty array with the initial state', () => {
    const state = homeReducer(initialState, fetchLeagues([
      {
        name: 'english premier league',
        logos: {
          light: 'mockLogo',
        },
        id: 2,
        abbr: 'prem',
      },
    ]));
    expect(state).toEqual([
      {
        leagueName: 'english premier league',
        leagueLogo: 'mockLogo',
        id: 2,
        leagueAbbr: 'prem',
        selected: false,
      },
    ]);
  });

  it('Returns an empty array with the initial state', () => {
    const state = homeReducer(initialState, fetchLeagues([
      {
        name: 'english premier league',
        logos: {
          light: 'mockLogo',
        },
        id: 2,
        abbr: 'prem',
      },
      {
        name: 'italian serie a',
        logos: {
          light: 'mockLogo1',
        },
        id: 1,
        abbr: 'serie a',
      },
    ]));
    expect(state).toEqual([
      {
        leagueName: 'english premier league',
        leagueLogo: 'mockLogo',
        id: 2,
        leagueAbbr: 'prem',
        selected: false,
      },
      {
        leagueName: 'italian serie a',
        leagueLogo: 'mockLogo1',
        id: 1,
        leagueAbbr: 'serie a',
        selected: false,
      },
    ]);
  });
});
