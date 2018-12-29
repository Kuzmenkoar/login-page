import React, { Component, createRef } from 'react';

import './uploader.scss';
import { Button } from '../button';
import { Headline } from '../formAttributes/headline';

class Uploader extends Component {
  input = createRef();

  handleKeyAction = () => {
    this.input.current.value = null;
    this.input.current.click();
  };

  handleOnClick = () => {
    this.input.current.value = null;
  };

  render() {
    const {
      multiple,
      onChange,
      children,
      label,
      disabled,
      className,
      headline,
      headlineRequired,
    } = this.props;

    return (
      <label
        className={`uploader ${
          disabled ? 'uploader--disabled' : ''
        } ${className || ''}`}
      >
        {headline && (
          <Headline
            headline={headline}
            required={headlineRequired}
            disabled={disabled}
          />
        )}
        <input
          ref={this.input}
          className="uploader__input"
          type="file"
          multiple={multiple}
          onChange={onChange}
          disabled={disabled}
          onClick={this.handleOnClick}
        />
        {label && (
          <Button
            className="btn--primary"
            title={label}
            label={label}
            disabled={disabled}
            onKeyAction={this.handleKeyAction}
          />
        )}
        {children}
      </label>
    );
  }
}

export default Uploader;
