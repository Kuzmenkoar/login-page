import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './today-rates.scss';
import { todayRatesRequest } from './today-rates.actions';
import { USD, GBP, JPY, MXN, EUR, CAD } from '../../constants/currency';
import { moduleName as todayRates } from './today-rates.reducer';
import TodayRatesList from './today-rates.list';

const currencySet = [USD, EUR, GBP, CAD, MXN, JPY];

class TodayRates extends Component {
  componentDidMount() {
    this.props.todayRatesRequest(USD);
  }

  handleChange = (e) => {
    this.props.todayRatesRequest(e.target.value);
  };

  render() {
    const { base } = this.props;

    return (
      <div className="today-rates">
        <AppBar position="static">
          <span>Today's rates</span>
          <Select value={base} onChange={this.handleChange}>
            {currencySet.map((el) => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </AppBar>

        <TodayRatesList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  base: state[todayRates].base,
});

const mapDispatchToProps = {
  todayRatesRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodayRates);
