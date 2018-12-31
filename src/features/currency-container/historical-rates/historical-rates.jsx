import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './historical-rates.scss';
import { historicalRatesRequest } from './historical-rates.actions';
import { moduleName as historicalRates } from './historical-rates.reducer';
import { moduleName as currencyConverter } from '../currency-converter/currency-converter.reducer';
import HistoricalRatesGraph from './historical-rates.graph';

class HistoricalRates extends Component {
  componentDidMount() {
    const { period, source, target } = this.props;

    this.props.historicalRatesRequest(period, source, target);
  }

  handleChange = (e, value) => {
    const { source, target } = this.props;

    this.props.historicalRatesRequest(value, source, target);
  };

  render() {
    const { period } = this.props;

    return (
      <div className="historical-rates">
        <Tabs value={period} onChange={this.handleChange}>
          <Tab value="1" label="Last mouth" />
          <Tab value="3" label="Last 3 mouths" />
          <Tab value="6" label="Last 6 mouths" />
          <Tab value="12" label="Last 12 mouths" />
        </Tabs>
        <HistoricalRatesGraph />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rates: state[historicalRates].rates,
  period: state[historicalRates].period,
  source: state[currencyConverter].source,
  target: state[currencyConverter].target,
});

const mapDispatchToProps = {
  historicalRatesRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoricalRates);
