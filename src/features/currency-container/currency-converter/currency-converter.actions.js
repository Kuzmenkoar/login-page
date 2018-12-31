import {
  CURRENCY_CONVERTER_CHANGE_TARGET,
  CURRENCY_CONVERTER_REJECT,
  CURRENCY_CONVERTER_REQUEST,
  CURRENCY_CONVERTER_SUCCESS,
} from './currency-converter.constants';

export const currencyConverterRequest = (source) => ({
  type: CURRENCY_CONVERTER_REQUEST,
  source,
});

export const currencyConverterSuccess = (rates) => ({
  type: CURRENCY_CONVERTER_SUCCESS,
  rates,
});

export const currencyConverterReject = (message) => ({
  type: CURRENCY_CONVERTER_REJECT,
  message,
});

export const currencyConverterChangeTarget = (target) => ({
  type: CURRENCY_CONVERTER_CHANGE_TARGET,
  target,
});
