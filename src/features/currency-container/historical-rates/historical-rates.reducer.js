import {
  HISTORICAL_RATES_REJECT,
  HISTORICAL_RATES_REQUEST,
  HISTORICAL_RATES_SUCCESS,
} from './historical-rates.constants';

const initialState = {
  period: '1',
  rates: {},
  isFetching: true,
  errorMessage: '',
};

export const moduleName = 'historicalRates';

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
        rates: action.rates,
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
