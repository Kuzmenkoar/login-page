import React, { Component } from 'react';

import './checkbox.scss';
import { ENTER_KEY } from '../../constants/key-codes';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue || false,
    };
  }

  handleEnterPress = (event) => {
    if (event.keyCode === ENTER_KEY) {
      this.handleChange(event);
    }
  };

  handleChange = (event) => {
    const result = this.props.onChange(event);

    if (!this.props.controlledOutside && (result || result === undefined)) {
      this.setState((prevState) => ({ value: !prevState.value }));
    }
  };

  render() {
    const {
      id,
      title,
      name,
      disabled,
      controlledOutside,
      value,
    } = this.props;

    return (
      <section className="checkbox-container">
        <label
          htmlFor={id}
          className={`checkbox ${disabled ? 'checkbox--disabled' : ''}`}
        >
          <div className="checkbox__title">{title}</div>
          <input
            name={name}
            id={id}
            onKeyPress={this.handleEnterPress}
            type="checkbox"
            disabled={disabled}
            checked={controlledOutside ? value : this.state.value}
            className="checkbox__input"
            onChange={this.handleChange}
          />

          <div className="checkbox__indicator" />
        </label>
      </section>
    );
  }
}

export default Checkbox;
