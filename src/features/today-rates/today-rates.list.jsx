import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';

import Spinner from '../../components/spinner';
import ErrorMessage from '../../components/error-message';
import { moduleName as currencyConverter } from '../currency-container/currency-converter/currency-converter.reducer';

const TodayRatesList = ({
  errorMessage,
  currencyEnum,
  rates,
  todayRateView,
}) => {
  if (!currencyEnum.length) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <List style={{ paddingRight: '10px' }}>
      {todayRateView.map((el) => (
        <ListItem key={el}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: '#fff' }}>
              <div
                className={`currency-flag currency-flag-${el.toLowerCase()}`}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={el} />
          <ListItemSecondaryAction>
            {rates[el].toFixed(4)}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  rates: state[currencyConverter].rates,
  todayRateView: state[currencyConverter].todayRateView,
  errorMessage: state[currencyConverter].errorMessage,
  currencyEnum: state[currencyConverter].currencyEnum,
});

export default connect(mapStateToProps)(TodayRatesList);
