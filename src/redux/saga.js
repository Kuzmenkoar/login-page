import { all } from 'redux-saga/effects';
import { saga as autorizationSaga } from '../ducks/authorization';

export default function* rootSaga() {
  yield all([autorizationSaga()]);
}
