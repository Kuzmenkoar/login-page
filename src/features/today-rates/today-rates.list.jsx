import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './today-rates.scss';
import { moduleName as todayRates } from './today-rates.reducer';
import Spinner from '../../components/spinner';
import ErrorMessage from '../../components/error-message';
import { moduleName as currencyConverter } from '../currency-container/currency-converter/currency-converter.reducer';
import { ILS } from '../../constants/currency';

const TodayRatesList = ({
  isFetching,
  errorMessage,
  rates,
  shouldPutIls,
  ilsRate,
}) => {
  if (isFetching) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <List>
      {shouldPutIls && (
        <ListItem>
          <ListItemText primary={ILS + ' : ' + ilsRate.toFixed(4)} />
        </ListItem>
      )}
      {Object.keys(rates).map((el) => (
        <ListItem key={el}>
          <ListItemText primary={el + ' : ' + rates[el].toFixed(4)} />
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state[todayRates].isFetching,
  rates: state[todayRates].rates,
  errorMessage: state[todayRates].errorMessage,
  ilsRate: state[currencyConverter].ilsRate,
  shouldPutIls:
    state[currencyConverter].to !== ILS &&
    state[currencyConverter].from !== ILS,
});

export default connect(mapStateToProps)(TodayRatesList);
