'use client';

import { ErrorMessage, Field } from 'formik';

import { Caption } from '@components/Typography';

import { Input, PinInput } from '..';
import { FieldControllerProps } from './types';

const FieldController: React.FC<FieldControllerProps> = ({
  className = '',
  name,
  label,
  value,
  controlType,
  ...restProps
}) => {
  switch (controlType) {
    case 'input':
      return (
        <>
          <Field id={name} name={name} label={label} value={value} component={Input} {...restProps} />
          <ErrorMessage name={name}>{(msg) => <Caption className="mt-1 text-error">{msg}</Caption>}</ErrorMessage>
        </>
      );
    case 'pin':
      return (
        <>
          <Field id={name} name={name} component={PinInput} {...restProps} />
          <ErrorMessage name={name}>{(msg) => <Caption className="mt-1 text-error">{msg}</Caption>}</ErrorMessage>
        </>
      );
    default:
      return null;
  }
};

export default FieldController;
