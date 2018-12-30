import { all } from 'redux-saga/effects';
import todayRatesSaga from '../features/today-rates/today-rates.saga';
import historicalRatesSaga from '../features/currency-container/historical-rates/historical-rates.saga';
import currencyConverterSaga from '../features/currency-container/currency-converter/currency-converter.saga';

export default function* rootSaga() {
  yield all([todayRatesSaga(), historicalRatesSaga(), currencyConverterSaga()]);
}
