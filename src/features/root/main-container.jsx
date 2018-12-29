import React, { Component } from 'react';

import './main-container.scss';
import {Checkbox} from '../../components/checkbox'
import data from './trading-hours.json'

class MainContainer extends Component {
  state = {
    viewData: data,
    openOnly: false,
  };

  handleChange = () => {
    this.setState((prevState) => ({
      openOnly: !prevState.openOnly,
      viewData: !prevState.openOnly ? prevState.viewData.filter((el) => el.tradingHours.some((session) => session.from < +new Date() && session.to > +new Date())) : data
    }))
  }

  render() {


    return <div className="table">

      {this.state.viewData.map((el) => (
        <div key={el.instrumentId} className="table__row">
          <div className="table__id-column">{el.instrumentID}</div>
          <div className="table__name">{el.name}</div>
          <div className="table__is-open">
            <Checkbox
              disabled
              defaultValue={el.tradingHours.some((session) => session.from < +new Date() && session.to > +new Date())}
            />
          </div>
        </div>))
      }

      <Checkbox
        title="Open only"
        value={this.state.openOnly}
        onChange={this.handleChange}
        controlledOutside
      />


    </div>
  }
}

export default MainContainer;
