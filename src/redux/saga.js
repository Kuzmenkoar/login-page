import { all } from 'redux-saga/effects';
import todayRatesSaga from '../features/today-rates/today-rates.saga';

export default function* rootSaga() {
  yield all([todayRatesSaga()]);
}
