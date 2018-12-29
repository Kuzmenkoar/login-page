import React from 'react';
import { Uploader } from './index';

const FormUploader = ({ input, ...rest }) => <Uploader {...input} {...rest} />;

export default FormUploader;
