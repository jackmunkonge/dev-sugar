'use client';

import React from 'react';

import { Cross } from '@assets/icons';
import { ComponentSize } from '@utils/globalTypes';

import { IconButton } from '../Buttons';
import { Caption } from '../Typography';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  field: { name },
  form: { touched, errors },
  type = 'text',
  placeholder = '',
  autoComplete = 'off',
  isFocusedOnLoad = false,
  label,
  size = ComponentSize.LARGE,
  icon: Icon,
  isDisabled = false,
  isRequired = false,
  clickHandler: inputClickHandler,
  ...restProps
}) => {
  // const { SMALL, LARGE } = ComponentSize;
  // const { colors } = theme;

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
      <div>
        <label htmlFor={name} className="block">
          <Caption className="text-label">{label}</Caption>
        </label>
        <div className="relative">
          {/* Clear input button */}
          <span className="absolute inset-y-0 right-0 flex items-center pl-1">
            <IconButton
              size={12}
              icon={Cross}
              solid
              buttonType="button"
              ariaControlId={name}
              srOnlyText="Clear input"
              clickHandler={() => {}}
            />
          </span>
          <input
            className="font-body w-full border-b-4 border-primary bg-transparent pr-4 text-body1 not-italic text-primary caret-line selection:bg-line selection:bg-opacity-50 placeholder:text-line focus:border-primary-dark5 focus:text-primary-dark5"
            id={name}
            required={isRequired}
            autoFocus={isFocusedOnLoad}
            name={name}
            placeholder={placeholder}
            type={type}
            autoComplete={autoComplete}
            onClick={inputClickHandler}
            {...restProps}
          />
          {touched[name] && errors[name] && typeof errors[name] === 'string' && (
            <div className="pt-1" id="input-error">
              <Caption className="text-error">{errors[name]}</Caption>
            </div>
          )}
        </div>
      </div>
    );
  };

  // const renderHover = () => (
  //   <div className="hidden items-center justify-center group-hover:flex group-focus:hidden group-active:hidden">
  //     {iconPosition === LEFT && renderIcon(colors.primary.dark3)}
  //     <Text color={colors.primary.dark3}>{text}</Text>
  //     {iconPosition === RIGHT && renderIcon(colors.primary.dark3)}
  //   </div>
  // );

  // const renderFocus = () => (
  //   <div className="hidden items-center justify-center group-focus:flex group-active:hidden group-hover:hidden">
  //     {iconPosition === LEFT && renderIcon(colors.info.dark)}
  //     <Text color={colors.info.dark}>{text}</Text>
  //     {iconPosition === RIGHT && renderIcon(colors.info.dark)}
  //   </div>
  // );

  // const renderActive = () => (
  //   <div className="hidden items-center justify-center group-active:flex group-focus:hidden group-hover:hidden">
  //     {iconPosition === LEFT && renderIcon(colors.primary.dark5)}
  //     <Text color={colors.primary.dark5}>{text}</Text>
  //     {iconPosition === RIGHT && renderIcon(colors.primary.dark5)}
  //   </div>
  // );

  // const renderLoading = () => (
  //   <div className="flex items-center justify-center">
  //     <Text color={colors.primary.dark5}>loading...</Text>
  //   </div>
  // );

  // const renderDisabled = () => (
  //   <div className="flex items-center justify-center opacity-50">
  //     {iconPosition === LEFT && renderIcon(colors.primary.DEFAULT)}
  //     <Text color={colors.primary.DEFAULT}>{text}</Text>
  //     {iconPosition === RIGHT && renderIcon(colors.primary.DEFAULT)}
  //   </div>
  // );

  // if (isLoading) {
  //   return <>{renderLoading()}</>;
  // }

  // if (isDisabled) {
  //   return <>{renderDisabled()}</>;
  // }

  return <>{renderDefault()}</>;
};

export default Input;
