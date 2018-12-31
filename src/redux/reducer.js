import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import historicalRatesReducer, {
  moduleName as historicalRates,
} from '../features/currency-container/historical-rates/historical-rates.reducer';
import currencyConverterReducer, {
  moduleName as currencyConverter,
} from '../features/currency-container/currency-converter/currency-converter.reducer';

export default combineReducers({
  form,
  [historicalRates]: historicalRatesReducer,
  [currencyConverter]: currencyConverterReducer,
});
