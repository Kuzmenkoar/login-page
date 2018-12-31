import { all } from 'redux-saga/effects';
import historicalRatesSaga from '../features/currency-container/historical-rates/historical-rates.saga';
import currencyConverterSaga from '../features/currency-container/currency-converter/currency-converter.saga';

export default function* rootSaga() {
  yield all([historicalRatesSaga(), currencyConverterSaga()]);
}
