import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';

import './today-rates.scss';
import { moduleName as currencyConverter } from '../currency-container/currency-converter/currency-converter.reducer';
import TodayRatesList from './today-rates.list';

const TodayRates = ({ source }) => {
  return (
    <div className="today-rates">
      <AppBar position="static">
        <div className="today-rates__header">
          <span>Today's rates</span>
          <span>1 {source} =</span>
        </div>
      </AppBar>
      <TodayRatesList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  source: state[currencyConverter].source,
});

export default connect(mapStateToProps)(TodayRates);
