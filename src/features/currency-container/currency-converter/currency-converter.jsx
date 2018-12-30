import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { currencyConverterRequest } from './currency-converter.actions';
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
    const { to } = this.props;

    this.props.currencyConverterRequest(e.target.value, to);
  };

  handleChangeTo = (e) => {
    const { from } = this.props;

    this.props.currencyConverterRequest(from, e.target.value);
  };

  render() {
    const {
      from,
      to,
      rate,
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
      <div>
        <Input
          value={this.state.amount.toFixed(2)}
          onChange={this.handleAmountChange}
        />
        <Select value={from} onChange={this.handleChangeFrom}>
          {currencyEnum.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
        <br />
        <Input
          value={isFetching ? '' : (this.state.amount * rate).toFixed(2)}
          onChange={this.handleAmountChange}
        />
        <Select value={to} onChange={this.handleChangeTo}>
          {currencyEnum.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
        <br />
        rate is {rate.toFixed(4)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  from: state[currencyConverter].from,
  to: state[currencyConverter].to,
  rate: state[currencyConverter].rate,
  currencyEnum: state[currencyConverter].currencyEnum,
  isFetching: state[currencyConverter].isFetching,
  errorMessage: state[currencyConverter].errorMessage,
});

const mapDispatchToProps = {
  currencyConverterRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyConverter);
