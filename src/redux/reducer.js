import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import todayRatesReducer, {
  moduleName as todayRates,
} from '../features/today-rates/today-rates.reducer';
import historicalRatesReducer, {
  moduleName as historicalRates,
} from '../features/currency-container/historical-rates/historical-rates.reducer';
import currencyConverterReducer, {
  moduleName as currencyConverter,
} from '../features/currency-container/currency-converter/currency-converter.reducer';

export default combineReducers({
  form,
  [todayRates]: todayRatesReducer,
  [historicalRates]: historicalRatesReducer,
  [currencyConverter]: currencyConverterReducer,
});
