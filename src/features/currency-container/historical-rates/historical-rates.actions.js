import {
  HISTORICAL_RATES_REJECT,
  HISTORICAL_RATES_REQUEST,
  HISTORICAL_RATES_SUCCESS,
} from './historical-rates.constants';

export const historicalRatesRequest = (period, source, target) => ({
  type: HISTORICAL_RATES_REQUEST,
  source,
  target,
  period,
});

export const historicalRatesSuccess = (rates) => ({
  type: HISTORICAL_RATES_SUCCESS,
  rates,
});

export const historicalRatesReject = (message) => ({
  type: HISTORICAL_RATES_REJECT,
  message,
});
