import { FieldInputProps, FormikProps } from 'formik';
import { HTMLInputTypeAttribute } from 'react';

import { IconProps } from '@assets/icons/types';
import { ComponentSize } from '@utils/globalTypes';

export type InputProps = {
  className?: string;
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: string;
  isFocusedOnLoad?: boolean;
  label: string;
  size?: Omit<ComponentSize, ComponentSize.MEDIUM>;
  icon?: React.FC<IconProps>;
  isDisabled?: boolean;
  isRequired?: boolean;
  isSuccess?: boolean;
  clickHandler?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  [restProps: string]: any;
};
