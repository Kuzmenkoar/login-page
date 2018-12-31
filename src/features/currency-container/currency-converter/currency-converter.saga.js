import { all, put, call, takeEvery } from 'redux-saga/effects';

import { currencyConverterApi } from './currency-converter.api';
import {
  currencyConverterReject,
  currencyConverterSuccess,
} from './currency-converter.actions';
import { CURRENCY_CONVERTER_REQUEST } from './currency-converter.constants';

export const currencyConverterSaga = function*({ source }) {
  try {
    const response = yield call(currencyConverterApi, source);
    const { rates } = response.data;

    yield put(currencyConverterSuccess(rates));
  } catch (e) {
    yield put(currencyConverterReject('SERVER ERROR'));
  }
};

export default function*() {
  yield all([takeEvery(CURRENCY_CONVERTER_REQUEST, currencyConverterSaga)]);
}
