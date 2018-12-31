import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';

import {
  currencyConverterRequest,
  currencyConverterChangeTarget,
} from './currency-converter.actions';
import { moduleName as currencyConverter } from './currency-converter.reducer';
import { USD } from '../../../constants/currency';
import Spinner from '../../../components/spinner';
import ErrorMessage from '../../../components/error-message';

class CurrencyConverter extends Component {
  state = {
    amount: 1000,
  };

  componentDidMount() {
    const { currencyEnum } = this.props;

    if (!currencyEnum.length) {
      this.props.currencyConverterRequest(USD);
    }
  }

  handleAmountChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleChangeFrom = (e) => {
    this.props.currencyConverterRequest(e.target.value);
  };

  handleChangeTo = (e) => {
    this.props.currencyConverterChangeTarget(e.target.value);
  };

  render() {
    const {
      source,
      target,
      rates,
      currencyEnum,
      isFetching,
      errorMessage,
    } = this.props;

    if (!currencyEnum.length) {
      return <Spinner />;
    }

    if (errorMessage) {
      return <ErrorMessage message={errorMessage} />;
    }

    return (
      <Grid container spacing={24} style={{ height: '100%' }}>
        <Grid container direction="column" justify="center">
          <Grid
            container
            spacing={24}
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={3}>
              <TextField
                value={this.state.amount.toFixed(2)}
                onChange={this.handleAmountChange}
                label="From"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                value={source}
                onChange={this.handleChangeFrom}
                input={
                  <OutlinedInput
                    labelWidth={0}
                    name="age"
                    id="outlined-age-simple"
                    style={{ minWidth: '250px', marginTop: '8px' }}
                  />
                }
              >
                {currencyEnum.map((el) => (
                  <MenuItem key={el} value={el}>
                    <Grid container direction="row" alignItems="center">
                      <div
                        className={`currency-flag currency-flag-${el.toLowerCase()}`}
                        style={{ marginRight: '15px' }}
                      />{' '}
                      {el}
                    </Grid>
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={24}
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={3}>
              <TextField
                value={
                  isFetching
                    ? ''
                    : (this.state.amount * rates[target]).toFixed(2)
                }
                onChange={this.handleAmountChange}
                label="To"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                value={target}
                onChange={this.handleChangeTo}
                input={
                  <OutlinedInput
                    labelWidth={0}
                    name="age"
                    id="outlined-age-simple"
                    style={{ minWidth: '250px', marginTop: '8px' }}
                  />
                }
              >
                {currencyEnum.map((el) => (
                  <MenuItem key={el} value={el}>
                    <Grid container direction="row" alignItems="center">
                      <div
                        className={`currency-flag currency-flag-${el.toLowerCase()}`}
                        style={{ marginRight: '15px' }}
                      />{' '}
                      {el}
                    </Grid>
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="column" style={{ marginLeft: '40px' }}>
          <span>Your rate:</span>
          <span style={{ fontWeight: 600 }}>
            {source} 1 = {target} {isFetching ? '' : rates[target].toFixed(4)}
          </span>
          <span>Last updated {new Date().toDateString()}</span>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  source: state[currencyConverter].source,
  target: state[currencyConverter].target,
  rates: state[currencyConverter].rates,
  currencyEnum: state[currencyConverter].currencyEnum,
  isFetching: state[currencyConverter].isFetching,
  errorMessage: state[currencyConverter].errorMessage,
});

const mapDispatchToProps = {
  currencyConverterRequest,
  currencyConverterChangeTarget,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyConverter);
