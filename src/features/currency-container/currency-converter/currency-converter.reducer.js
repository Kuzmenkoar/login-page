import { USD, ILS, EUR, GBP, MXN, JPY, CAD } from '../../../constants/currency';
import {
  CURRENCY_CONVERTER_REJECT,
  CURRENCY_CONVERTER_REQUEST,
  CURRENCY_CONVERTER_SUCCESS,
  CURRENCY_CONVERTER_CHANGE_TARGET,
} from './currency-converter.constants';

const initialState = {
  source: USD,
  target: ILS,
  rates: {},
  currencyEnum: [],
  todayRateView: [EUR, GBP, CAD, MXN, JPY],
  isFetching: true,
  errorMessage: '',
};

export const moduleName = 'currencyConverter';

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case CURRENCY_CONVERTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        source: action.source,
      };
    case CURRENCY_CONVERTER_SUCCESS:
      return {
        ...state,
        currencyEnum: state.currencyEnum.length
          ? state.currencyEnum
          : Object.keys(action.rates),
        rates: action.rates,
        isFetching: false,
        errorMessage: '',
      };
    case CURRENCY_CONVERTER_CHANGE_TARGET:
      return {
        ...state,
        target: action.target,
        todayRateView: [state.target].concat(state.todayRateView.slice(0, 4)),
      };

    case CURRENCY_CONVERTER_REJECT:
      return { ...state, errorMessage: action.message, isFetching: false };

    default:
      return state;
  }
};

export default reducer;
