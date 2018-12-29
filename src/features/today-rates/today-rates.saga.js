import { all, put, call, takeEvery } from 'redux-saga/effects';

import { TODAY_RATES_REQUEST } from './today-rates.constants';
import { todayRatesApi } from './today-rates.api';
import { USD, CAD, EUR, MXN, JPY, GBP } from '../../constants/currency';
import { todayRatesReject, todayRatesSuccess } from './today-rates.actions';

const allCurrency = { USD, CAD, EUR, GBP, JPY, MXN };

export const todayRatesSaga = function*({ base }) {
  const allCurrencyCopy = { ...allCurrency };
  delete allCurrencyCopy[base];
  const symbols = Object.values(allCurrencyCopy).join();

  try {
    const response = yield call(todayRatesApi, base, symbols);
    const { rates } = response.data;

    yield put(todayRatesSuccess(rates));
  } catch (e) {
    yield put(todayRatesReject('SERVER ERROR'));
  }
};

export default function*() {
  yield all([takeEvery(TODAY_RATES_REQUEST, todayRatesSaga)]);
}
