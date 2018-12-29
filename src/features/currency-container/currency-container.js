import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import './currency-container.scss';
import CurrencyConverter from './currency-converter/currency-converter';

class CurrencyContainer extends Component {
  state = {
    tab: 0,
  };

  handleChange = (event, value) => {
    this.setState({ tab: value });
  };

  render() {
    return (
      <div className="currency-container">
        <AppBar position="static">
          <Tabs value={this.state.tab} onChange={this.handleChange}>
            <Tab label="Currency converter" />
            <Tab label="Histrorical rates" />
          </Tabs>
        </AppBar>
        {this.state.tab === 0 && <CurrencyConverter />}
        {this.state.tab === 1 && 'Item Two'}
      </div>
    );
  }
}

export default CurrencyContainer;
