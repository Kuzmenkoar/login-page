import React, { Component, Fragment } from 'react';

import './main-container.scss';
import Header from '../../components/header/header';
import CurrencyContainer from '../currency-container/currency-container';
import TodayRates from '../today-rates/today-rates';

class MainContainer extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-container">
          <CurrencyContainer />
          <TodayRates />
        </div>
      </Fragment>
    );
  }
}

export default MainContainer;
