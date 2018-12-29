import { USD } from '../../constants/currency';
import {
  TODAY_RATES_REJECT,
  TODAY_RATES_REQUEST,
  TODAY_RATES_SUCCESS,
} from './today-rates.constants';

const initialState = {
  base: USD,
  rates: {},
  isFetching: true,
  errorMessage: '',
};

export const moduleName = 'todayRates';

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case TODAY_RATES_REQUEST:
      return {
        ...state,
        isFetching: true,
        base: action.base,
        errorMessage: '',
      };
    case TODAY_RATES_SUCCESS:
      return {
        ...state,
        rates: action.rates,
        isFetching: false,
        errorMessage: '',
      };
    case TODAY_RATES_REJECT:
      return { ...state, errorMessage: action.message, isFetching: false };

    default:
      return state;
  }
};

export default reducer;
