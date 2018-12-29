import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import todayRatesReducer, {
  moduleName as todayRates,
} from '../features/today-rates/today-rates.reducer';

export default combineReducers({
  form,
  [todayRates]: todayRatesReducer,
});
