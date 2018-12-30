import {
  CURRENCY_CONVERTER_REJECT,
  CURRENCY_CONVERTER_REQUEST,
  CURRENCY_CONVERTER_SUCCESS,
} from './currency-converter.constants';

export const currencyConverterRequest = (from, to) => ({
  type: CURRENCY_CONVERTER_REQUEST,
  from,
  to,
});

export const currencyConverterSuccess = (rates) => ({
  type: CURRENCY_CONVERTER_SUCCESS,
  rates,
});

export const currencyConverterReject = (message) => ({
  type: CURRENCY_CONVERTER_REJECT,
  message,
});
