import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authorizationReducer, {
  moduleName as authorization,
} from '../ducks/authorization';

export default combineReducers({
  form,
  [authorization]: authorizationReducer,
});
