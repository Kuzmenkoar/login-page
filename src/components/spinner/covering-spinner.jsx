import React from 'react';
import ReactDOM from 'react-dom';

import './covering-spinner.scss';
import { Spinner } from './index';

const CoveringSpinner = ({ text, children }) =>
  ReactDOM.createPortal(
    <div className="covering">
      <span className="covering__text">{text || children}</span>
      <Spinner size="large" />
    </div>,
    document.querySelector('body'),
  );

export default CoveringSpinner;
