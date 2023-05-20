import React, { useEffect, useRef } from "react";
import { theme } from "tailwind.config";

import { Cross } from "@app/assets/icons";
import { ComponentIconPosition, ComponentSize } from "@app/utils/globalTypes";

import { IconButton } from "../Buttons";
import { Caption } from "../Typography";
import { InputProps } from "./types";

// TODO: Make generic input (default and icon)
const Input: React.FC<InputProps> = ({
  id,
  name = id,
  type = "text",
  placeholder = "",
  autoComplete = "off",
  isFocusedOnLoad = false,
  error = "",
  ariaInvalid,
  label,
  value = "",
  size = ComponentSize.LARGE,
  icon: Icon,
  iconPosition = ComponentIconPosition.RIGHT,
  isDisabled = false,
  isRequired = false,
  clickHandler: inputClickHandler,
}) => {
  // const { LEFT, RIGHT } = ComponentIconPosition;
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
    const inputRef = useRef();

    useEffect(() => {
      if (inputRef && inputRef.current && inputRef.current.value) {
        inputRef.current.value = value;
      }
    }, [value]);

    return (
      <div>
        <label htmlFor={id} className="block">
          <Caption color={theme.colors.label}>{label}</Caption>
        </label>
        <div className="relative">
          {/* Clear input button */}
          <span className="absolute inset-y-0 right-0 flex items-center pl-1">
            <IconButton
              size={12}
              icon={Cross}
              solid
              buttonType="button"
              ariaControlId={id}
              srOnlyText="Clear input"
              clickHandler={() => (value = "")}
            />
          </span>
          <input
            ref={inputRef}
            id={id}
            required={isRequired}
            autoFocus={isFocusedOnLoad}
            name={name}
            value={value}
            placeholder={placeholder}
            type={type}
            autoComplete={autoComplete}
            aria-invalid={ariaInvalid}
            aria-describedby="input-error"
            className="w-full pr-4 selection:bg-line selection:bg-opacity-50 caret-line border-b-4 border-primary focus:border-primary-dark5 text-primary focus:text-primary-dark5 not-italic font-default text-body1 font-normal tracking-wide005 bg-transparent placeholder:text-line"
            onClick={inputClickHandler}
          />
          {error.length > 0 && (
            <div className="pt-1" id="input-error">
              <Caption color={theme.colors.error.DEFAULT}>{error}</Caption>
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
