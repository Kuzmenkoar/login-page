import api from '../../api/axios';

export const todayRatesApi = (base, symbols) =>
  api.get(`latest?base=${base}&symbols=${symbols}`);
