'use client';

import clsx from 'clsx';
import { useFormikContext } from 'formik';
import React, { useRef } from 'react';
import { twMerge } from 'tailwind.config';

import { Cross } from '@assets/icons';
import { theme } from '@utils/globalConstants';
import { ComponentSize } from '@utils/globalTypes';

import { IconOnlyButton } from '../Buttons';
import { Caption } from '../Typography';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  className = '',
  field,
  form,
  type = 'text',
  placeholder = 'Type here...',
  autoComplete = 'off',
  isFocusedOnLoad = false,
  label,
  size = ComponentSize.LARGE,
  icon: Icon,
  isDisabled = false,
  isRequired = false,
  isSuccess = false,
  clickHandler: inputClickHandler,
  ...restProps
}) => {
  const { name } = field;
  const { touched, errors } = form;
  const { SMALL } = ComponentSize;

  const { setFieldValue, handleChange, handleBlur } = useFormikContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const getIconColor = () => {
    if (!isSuccess && touched[name] && errors[name]) {
      return theme.colors.error.DEFAULT;
    }
    if (isSuccess) {
      return theme.colors.success.DEFAULT;
    }
    return null;
  };

  const renderDefault = () => {
    return (
      <div className={twMerge(clsx(isDisabled && 'opacity-50'), className)}>
        {/* Field label */}
        <label htmlFor={name} className={clsx('block', size === SMALL && '-mb-2')}>
          <Caption
            className={clsx(
              !isSuccess && 'text-label',
              isSuccess && 'text-success',
              !isSuccess && touched[name] && errors[name] && 'text-error',
            )}
          >
            {label}
          </Caption>
        </label>
        <div className="relative group">
          {/* Text input */}
          <input
            ref={inputRef}
            className={clsx(
              'bg-transparent',
              !isSuccess &&
                (!touched[name] || !errors[name]) &&
                'border-primary text-primary caret-line selection:bg-line selection:bg-opacity-50 placeholder:text-line focus:border-primary-dark5 focus:text-primary-dark5',
              isSuccess &&
                'border-success text-success caret-success-light3 selection:bg-success-light3 selection:bg-opacity-50 placeholder:text-success-light3 focus:border-success-dark3 focus:text-success-dark3',
              !isSuccess &&
                touched[name] &&
                errors[name] &&
                'border-error text-error caret-error-light3 selection:bg-error-light3 selection:bg-opacity-50 placeholder:text-error-light3 focus:border-error-dark3 focus:text-error-dark3',
              size !== SMALL && 'text-body1 pr-4',
              size === SMALL && 'text-body2 pr-3',
              size !== SMALL && Icon && 'text-body1 pr-4 pl-7',
              size === SMALL && Icon && 'text-body2 pr-3 pl-6',
              'font-body border-b-4 w-full not-italic disabled:cursor-not-allowed',
            )}
            id={name}
            required={isRequired}
            autoFocus={isFocusedOnLoad}
            name={name}
            placeholder={placeholder}
            type={type}
            autoComplete={autoComplete}
            onClick={inputClickHandler}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isDisabled}
            {...restProps}
          />
          {/* Clear input button */}
          <div className="group-focus-within:flex absolute inset-y-0 right-0 hidden items-center pl-1">
            <IconOnlyButton
              size={size === SMALL ? 8 : 12}
              icon={Cross}
              solid
              color={getIconColor()}
              buttonType="button"
              ariaControlId={name}
              srOnlyText="Clear input"
              isDisabled={isDisabled}
              clickHandler={() => {
                setFieldValue(name, '', false);
                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
            />
          </div>
          {/* Left icon */}
          {Icon && (
            <div className={clsx(size !== SMALL && 'pb-1', 'flex absolute inset-y-0 left-0 items-center')}>
              <Icon
                width={size === SMALL ? 20 : 24}
                height={size === SMALL ? 20 : 24}
                isSelected={false}
                outlineColor={getIconColor()}
                fillColor={theme.colors.transparent}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return renderDefault();
};

export default Input;
