import api from '../../../api/axios';

const getDateAndMonth = (currDate, period) => {
  const restMonth = currDate.getMonth() + 2 - period;

  if (restMonth > 0) {
    return `${currDate.getFullYear()}-${restMonth}`;
  }

  return `${currDate.getFullYear() - 1}-${12 + restMonth}`;
};

export const historicalRatesApi = (period) => {
  const currDate = new Date();
  const endDate = `${currDate.getFullYear()}-${currDate.getMonth() +
    1}-${currDate.getDate()}`;
  const startDate = `${getDateAndMonth(currDate, period)}-01`;

  return api.get(
    `history?start_at=${startDate}&end_at=${endDate}&symbols=ILS&base=USD`,
  );
};
