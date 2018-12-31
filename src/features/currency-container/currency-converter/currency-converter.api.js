import api from '../../../api/axios';

export const currencyConverterApi = (base) => api.get(`latest?base=${base}`);
