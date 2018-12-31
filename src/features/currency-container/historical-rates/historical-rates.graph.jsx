import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from 'recharts';

import Spinner from '../../../components/spinner';
import ErrorMessage from '../../../components/error-message';
import { moduleName as historicalRates } from './historical-rates.reducer';
import { moduleName as currencyConverter } from '../currency-converter/currency-converter.reducer';

const HistoricalRatesGraph = ({
  isFetching,
  errorMessage,
  rates,
  source,
  target,
}) => {
  if (isFetching) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <Fragment>
      <div className="historical-rates__info">
        {source} vs {target}
      </div>

      <div className="historical-rates__graph">
        <ResponsiveContainer minHeight="195" minWidth="270">
          <AreaChart data={rates} margin={{ left: -20, bottom: -10, right: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="rate"
              stroke="#0088FE"
              strokeWidth="2"
              fillOpacity="1"
              fill="rgba(0, 136, 254, 0.3)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state[historicalRates].isFetching,
  rates: state[historicalRates].rates,
  source: state[currencyConverter].source,
  target: state[currencyConverter].target,
  errorMessage: state[historicalRates].errorMessage,
});

export default connect(mapStateToProps)(HistoricalRatesGraph);
