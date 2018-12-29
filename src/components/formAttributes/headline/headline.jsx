import React from 'react';

import './headline.scss';

const Headline = ({ headline, required, disabled, className }) => (
  <div
    title={headline}
    className={`headline ${required ? 'headline--required' : ''} ${
      disabled ? 'headline--disabled' : ''
    } ${className || ''}`}
  >
    {headline}
  </div>
);

export default Headline;
