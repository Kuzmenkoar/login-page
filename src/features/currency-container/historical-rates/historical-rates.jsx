import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './historical-rates.scss';
import { historicalRatesRequest } from './historical-rates.actions';
import { moduleName as historicalRates } from './historical-rates.reducer';
import HistoricalRatesGraph from './historical-rates.graph';

class HistoricalRates extends Component {
  componentDidMount() {
    const { period } = this.props;

    this.props.historicalRatesRequest(period);
  }

  handleChange = (e, value) => {
    this.props.historicalRatesRequest(value);
  };

  render() {
    const { rates, period } = this.props;

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
});

const mapDispatchToProps = {
  historicalRatesRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoricalRates);
