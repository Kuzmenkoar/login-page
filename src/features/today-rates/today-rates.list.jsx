import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import './today-rates.scss';
import { moduleName as todayRates } from './today-rates.reducer';

const TodayRatesList = ({ isFetching, errorMessage, rates }) => {
  if (isFetching) {
    return (
      <div className="today-rates__spinner">
        <CircularProgress />
      </div>
    );
  }

  if (errorMessage) {
    return <div className="today-rates__error-message">{errorMessage}</div>;
  }

  return (
    <List>
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
});

export default connect(mapStateToProps)(TodayRatesList);
