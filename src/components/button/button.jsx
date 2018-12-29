import React, { Component } from 'react';

import './button.scss';
import { ENTER_KEY, SPACE_KEY } from '../../constants/key-codes';

class Button extends Component {
  handleKeyDown = (event) => {
    const { keyCode } = event;
    const { onKeyAction, onClick } = this.props;

    if (keyCode === ENTER_KEY || keyCode === SPACE_KEY) {
      if (onKeyAction) {
        onKeyAction();
      } else {
        onClick();
      }
    }
  };

  render() {
    const { onClick, title, className, disabled, label, children } = this.props;

    return (
      <div
        role="button"
        onClick={onClick}
        onKeyDown={this.handleKeyDown}
        tabIndex={0}
        title={title}
        className={`btn ${className || ''} ${disabled ? 'btn--disabled' : ''}`}
      >
        {label || children}
      </div>
    );
  }
}

export default Button;
