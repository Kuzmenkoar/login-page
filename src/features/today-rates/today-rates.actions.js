import {
  TODAY_RATES_REJECT,
  TODAY_RATES_REQUEST,
  TODAY_RATES_SUCCESS,
} from './today-rates.constants';

export const todayRatesRequest = (base) => ({
  type: TODAY_RATES_REQUEST,
  base,
});

export const todayRatesSuccess = (rates) => ({
  type: TODAY_RATES_SUCCESS,
  rates,
});

export const todayRatesReject = (message) => ({
  type: TODAY_RATES_REJECT,
  message,
});
