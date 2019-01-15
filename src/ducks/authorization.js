import { Record } from 'immutable';
import { all, put, takeEvery } from 'redux-saga/effects';

import api from '../api/axios';
import history from '../history';

export const moduleName = 'authorization';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

const ReducerRecord = Record({
  user: null,
  isLoading: false,
  error: null,
});

export default function reducer(state = new ReducerRecord(), action) {
  const { type } = action;

  switch (type) {
    case SIGN_IN_REQUEST:
      return state.set('isLoading', true);
    case SIGN_IN_SUCCESS:
      return state.set('isLoading', false).set('user', action.user);
    case SIGN_IN_ERROR:
      return state.set('isLoading', false);

    case SIGN_UP_REQUEST:
      return state.set('isLoading', true);
    case SIGN_UP_SUCCESS:
      return state.set('isLoading', false);
    case SIGN_UP_ERROR:
      return state.set('isLoading', false);

    default:
      return state;
  }
}

export const signInRequest = (data) => ({
  type: SIGN_IN_REQUEST,
  data,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  user,
});

export const signInReject = () => ({
  type: SIGN_IN_ERROR,
});

export const signUpRequest = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

export const signUpSuccess = () => ({
  type: SIGN_IN_SUCCESS,
});

export const signUpReject = () => ({
  type: SIGN_UP_ERROR,
});

const signInApi = (data) => api.post('login', data);

const signInSaga = function*({ data }) {
  try {
    const response = yield signInApi(data);
    yield put(signInSuccess(response));
    yield history.push('./contacts');
  } catch (e) {
    yield put(signInReject());
  }
};

const signUpApi = (data) =>
  api.post('6vf77z4hd5', { ...data, invite: 'rtASDLastuev77' });

const signUpSaga = function*({ data }) {
  try {
    const response = yield signUpApi(data);
    yield put(signUpSuccess(response));
    yield history.push('./signIn');
  } catch (e) {
    yield put(signUpReject());
  }
};

export const saga = function*() {
  yield all([
    takeEvery(SIGN_UP_REQUEST, signUpSaga),
    takeEvery(SIGN_IN_REQUEST, signInSaga),
  ]);
};
