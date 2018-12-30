import { all, put, call, takeEvery } from 'redux-saga/effects';

import { HISTORICAL_RATES_REQUEST } from './historical-rates.constants';
import { historicalRatesApi } from './historical-rates.api';
import {
  historicalRatesReject,
  historicalRatesSuccess,
} from './historical-rates.actions';

export const historicalRatesSaga = function*({ period }) {
  try {
    const response = yield call(historicalRatesApi, period);
    const { rates } = response.data;

    yield put(historicalRatesSuccess(rates));
  } catch (e) {
    yield put(historicalRatesReject('SERVER ERROR'));
  }
};

export default function*() {
  yield all([takeEvery(HISTORICAL_RATES_REQUEST, historicalRatesSaga)]);
}
