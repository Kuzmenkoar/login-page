import React from 'react';

import './spinner.scss';

const Spinner = ({ centered, minHeight = 0, message, size = 'small' }) => (
  <span
    className={`spinner ${centered ? 'spinner--centered' : ''}`}
    style={{ minHeight }}
  >
    <span className={`spinner__animation spinner__animation--${size}`} />
    {message && <span className="spinner__message">{message}</span>}
  </span>
);

export default Spinner;
