import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../../../components/spinner';
import ErrorMessage from '../../../components/error-message';
import { moduleName as historicalRates } from './historical-rates.reducer';

const HistoricalRatesGraph = ({ isFetching, errorMessage, rates }) => {
  if (isFetching) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return 'GRAPH';
};

const mapStateToProps = (state) => ({
  isFetching: state[historicalRates].isFetching,
  rates: state[historicalRates].rates,
  errorMessage: state[historicalRates].errorMessage,
});

export default connect(mapStateToProps)(HistoricalRatesGraph);
