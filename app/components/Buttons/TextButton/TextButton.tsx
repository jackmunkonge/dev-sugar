import { Link } from "@remix-run/react";
import React from "react";
import { theme } from "tailwind.config";

import { ICON_SIZE_LARGE, ICON_SIZE_MEDIUM, ICON_SIZE_SMALL } from "@app/assets/icons/consts";
import { Button1, Button2, H6 } from "@app/components/Typography";
import { ComponentSize, ComponentState } from "@app/utils/globalTypes";

import { ButtonIconPosition, ButtonProps } from "../types";

type TextProps = {
  children: React.ReactNode;
  color: string;
};

type ButtonActionWrapperProps = {
  children: React.ReactNode;
};

const TextButton: React.FC<ButtonProps> = ({
  text,
  size = ComponentSize.LARGE,
  icon: Icon,
  iconPosition = ButtonIconPosition.RIGHT,
  state = ComponentState.DEFAULT,
  isLink = false,
  searchParams = "",
  pathName = "/",
  buttonType = "submit",
  ariaControlId = "",
  ariaExpanded = false,
}) => {
  const { LEFT, RIGHT } = ButtonIconPosition;
  const { DEFAULT, HOVER, FOCUS, ACTIVE, LOADING, DISABLED } = ComponentState;
  const { SMALL, MEDIUM, LARGE } = ComponentSize;
  const { colors } = theme;

  const ButtonActionWrapper: React.FC<ButtonActionWrapperProps> = ({ children }) => {
    if (isLink) {
      return <Link to={{ pathname: pathName, search: searchParams.toString() }}>{children}</Link>;
    }
    if (buttonType === "button") {
      return (
        <button type={buttonType} aria-controls={ariaControlId} aria-expanded={ariaExpanded}>
          {children}
        </button>
      );
    }
    return <button type={buttonType}>{children}</button>;
  };

  const Text: React.FC<TextProps> = ({ children, color }) => {
    if (size === ComponentSize.SMALL) {
      return <Button2 color={color}>{children}</Button2>;
    } else if (size === ComponentSize.MEDIUM) {
      return <Button1 color={color}>{children}</Button1>;
    }
    return <H6 color={color}>{children}</H6>;
  };

  const renderIcon = (color: string) => {
    let iconSize;
    if (size === SMALL) iconSize = ICON_SIZE_SMALL;
    if (size === MEDIUM) iconSize = ICON_SIZE_MEDIUM;
    if (size === LARGE) iconSize = ICON_SIZE_LARGE;
    return Icon && <Icon width={iconSize} height={iconSize} outlineColor={color} fillColor={colors.transparent} />;
  };

  const renderDefault = () => (
    <div className="flex items-center justify-center">
      {iconPosition === LEFT && renderIcon(colors.primary.DEFAULT)}
      <Text color={colors.primary.DEFAULT}>{text}</Text>
      {iconPosition === RIGHT && renderIcon(colors.primary.DEFAULT)}
    </div>
  );

  const renderHover = () => (
    <div className="flex items-center justify-center">
      {iconPosition === LEFT && renderIcon(colors.primary.dark3)}
      <Text color={colors.primary.dark3}>{text}</Text>
      {iconPosition === RIGHT && renderIcon(colors.primary.dark3)}
    </div>
  );

  const renderFocus = () => (
    <div className="flex items-center justify-center">
      {iconPosition === LEFT && renderIcon(colors.info.dark)}
      <Text color={colors.info.dark}>{text}</Text>
      {iconPosition === RIGHT && renderIcon(colors.info.dark)}
    </div>
  );

  const renderActive = () => (
    <div className="flex items-center justify-center">
      {iconPosition === LEFT && renderIcon(colors.primary.dark5)}
      <Text color={colors.primary.dark5}>{text}</Text>
      {iconPosition === RIGHT && renderIcon(colors.primary.dark5)}
    </div>
  );

  const renderLoading = () => (
    <div className="flex items-center justify-center">
      <Text color={colors.primary.dark5}>loading...</Text>
    </div>
  );

  const renderDisabled = () => (
    <div className="flex items-center justify-center opacity-50">
      {iconPosition === LEFT && renderIcon(colors.primary.DEFAULT)}
      <Text color={colors.primary.DEFAULT}>{text}</Text>
      {iconPosition === RIGHT && renderIcon(colors.primary.DEFAULT)}
    </div>
  );

  if (state === LOADING || state === DISABLED) {
    return (
      <>
        {state === LOADING && renderLoading()}
        {state === DISABLED && renderDisabled()}
      </>
    );
  }

  return (
    <ButtonActionWrapper>
      {state === DEFAULT && renderDefault()}
      {state === HOVER && renderHover()}
      {state === FOCUS && renderFocus()}
      {state === ACTIVE && renderActive()}
    </ButtonActionWrapper>
  );
};

export default TextButton;
