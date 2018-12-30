import api from '../../../api/axios';

export const currencyConverterApi = (base, symbol) =>
  api.get(`latest?base=${base}${symbol ? `&symbols=${symbol}` : ''}`);
