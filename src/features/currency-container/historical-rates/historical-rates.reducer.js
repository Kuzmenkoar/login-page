import {
  HISTORICAL_RATES_REJECT,
  HISTORICAL_RATES_REQUEST,
  HISTORICAL_RATES_SUCCESS,
} from './historical-rates.constants';

const initialState = {
  period: '1',
  rates: [],
  isFetching: true,
  errorMessage: '',
};

export const moduleName = 'historicalRates';

const sortByDate = (a, b) => {
  return new Date(a.date) - new Date(b.date);
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case HISTORICAL_RATES_REQUEST:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        period: action.period,
      };
    case HISTORICAL_RATES_SUCCESS:
      return {
        ...state,
        rates: Object.keys(action.rates)
          .map((el) => {
            const rate = Object.values(action.rates[el])[0].toFixed(4);

            return { date: el, rate };
          })
          .sort(sortByDate),
        isFetching: false,
        errorMessage: '',
      };
    case HISTORICAL_RATES_REJECT:
      return { ...state, errorMessage: action.message, isFetching: false };

    default:
      return state;
  }
};

export default reducer;
