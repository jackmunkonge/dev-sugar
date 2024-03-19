'use client';

import clsx from 'clsx';
import { useFormikContext } from 'formik';
import React, { useRef } from 'react';
import { twMerge } from 'tailwind.config';

import { Cross } from '@assets/icons';
import { theme } from '@utils/globalConstants';
import { ComponentSize } from '@utils/globalTypes';

import { IconButton } from '../Buttons';
import { Caption } from '../Typography';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  className = '',
  field,
  form,
  type = 'text',
  placeholder = '',
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

  const { setFieldValue } = useFormikContext();
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

  // const { SMALL, LARGE } = ComponentSize;

  //   const Text: React.FC<TextProps> = ({ children, color }) => {
  //     if (size === ComponentSize.SMALL) {
  //       return <Button2 color={color}>{children}</Button2>;
  //     } else if (size === ComponentSize.MEDIUM) {
  //       return <Button1 color={color}>{children}</Button1>;
  //     }
  //     return <Title6 color={color}>{children}</Title6>;
  //   };

  // const renderIcon = (color: string) => {
  //   let iconSize;
  //   if (size === SMALL) iconSize = BUTTON_ICON_SIZE_SMALL;
  //   if (size === MEDIUM) iconSize = BUTTON_ICON_SIZE_MEDIUM;
  //   if (size === LARGE) iconSize = BUTTON_ICON_SIZE_LARGE;
  //   return Icon && <Icon width={iconSize} height={iconSize} outlineColor={color} fillColor={colors.transparent} />;
  // };

  const renderDefault = () => {
    // <div className="flex items-center justify-center group-hover:hidden group-focus:hidden group-active:hidden">
    //   {iconPosition === LEFT && renderIcon(colors.primary.DEFAULT)}
    //   <Text color={colors.primary.DEFAULT}>{text}</Text>
    //   {iconPosition === RIGHT && renderIcon(colors.primary.DEFAULT)}
    // </div>
    // const inputRef = useRef();

    // useEffect(() => {
    //   if (inputRef && inputRef.current && inputRef.current.value) {
    //     inputRef.current.value = value;
    //   }
    // }, [value]);

    return (
      <div className={twMerge(clsx(isDisabled && 'opacity-50'), className)}>
        {/* Field label */}
        <label htmlFor={name} className="block">
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
                'border-primary text-primary caret-line selection:bg-line selection:bg-opacity-50 placeholder:text-line focus:border-primary-dark5 focus:text-primary-dark5',
              isSuccess &&
                'border-success text-success caret-success-light3 selection:bg-success-light3 selection:bg-opacity-50 placeholder:text-success-light3 focus:border-success-dark3 focus:text-success-dark3',
              !isSuccess &&
                touched[name] &&
                errors[name] &&
                'border-error text-error caret-error-light3 selection:bg-error-light3 selection:bg-opacity-50 placeholder:text-error-light3 focus:border-error-dark3 focus:text-error-dark3',
              'font-body border-b-4 w-full pl-7 pr-4 text-body1 not-italic',
              'disabled:cursor-not-allowed',
            )}
            id={name}
            required={isRequired}
            autoFocus={isFocusedOnLoad}
            name={name}
            placeholder={placeholder}
            type={type}
            autoComplete={autoComplete}
            onClick={inputClickHandler}
            disabled={isDisabled}
            {...restProps}
          />
          {/* Clear input button */}
          <div className="group-focus-within:flex absolute inset-y-0 right-0 hidden items-center pl-1">
            <IconButton
              size={12}
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
            <div className="flex absolute inset-y-0 left-0 items-center pb-1">
              <Icon isSelected={false} outlineColor={getIconColor()} fillColor={theme.colors.transparent} />
            </div>
          )}
        </div>
      </div>
    );
  };

  return renderDefault();
};

export default Input;
