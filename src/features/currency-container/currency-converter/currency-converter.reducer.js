import { USD, ILS } from '../../../constants/currency';
import {
  CURRENCY_CONVERTER_REJECT,
  CURRENCY_CONVERTER_REQUEST,
  CURRENCY_CONVERTER_SUCCESS,
} from './currency-converter.constants';

const initialState = {
  from: USD,
  to: ILS,
  rate: 0,
  currencyEnum: [],
  isFetching: true,
  errorMessage: '',
  ilsRate: 0,
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
        from: action.from,
        to: action.to,
      };
    case CURRENCY_CONVERTER_SUCCESS:
      if (state.currencyEnum.length) {
        return {
          ...state,
          rate: action.rates[state.to],
          isFetching: false,
          errorMessage: '',
        };
      }

      return {
        ...state,
        to: ILS,
        currencyEnum: Object.keys(action.rates),
        rate: action.rates[ILS],
        isFetching: false,
        errorMessage: '',
        ilsRate: action.rates[ILS],
      };
    case CURRENCY_CONVERTER_REJECT:
      return { ...state, errorMessage: action.message, isFetching: false };

    default:
      return state;
  }
};

export default reducer;
