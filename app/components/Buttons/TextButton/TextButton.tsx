import React from "react";
import { theme } from "tailwind.config";

import { BUTTON_ICON_SIZE_LARGE, BUTTON_ICON_SIZE_MEDIUM, BUTTON_ICON_SIZE_SMALL } from "@app/assets/icons/consts";
import { Button1, Button2, Title6 } from "@app/components/Typography";
import { ComponentIconPosition, ComponentSize } from "@app/utils/globalTypes";
import { ButtonWrapper } from "@app/utils/ui/utils";

import { ButtonProps, ButtonTextProps } from "../types";

// TODO: Create breadcrumb component with all text sizes
const TextButton: React.FC<ButtonProps> = ({
  text,
  size = ComponentSize.LARGE,
  icon: Icon,
  iconPosition = ComponentIconPosition.RIGHT,
  externalLink = "",
  isLink = false,
  isNavbarLink = false,
  isDisabled = false,
  isLoading = false,
  searchParams,
  pathName = "/",
  buttonType = "submit",
  ariaControlId = "",
  ariaExpanded = false,
  clickHandler,
}) => {
  const { LEFT, RIGHT } = ComponentIconPosition;
  const { SMALL, MEDIUM, LARGE } = ComponentSize;
  const { colors } = theme;

  const Text: React.FC<ButtonTextProps> = ({ children, color }) => {
    if (size === ComponentSize.SMALL) {
      return <Button2 color={color}>{children}</Button2>;
    } else if (size === ComponentSize.MEDIUM) {
      return <Button1 color={color}>{children}</Button1>;
    }
    return <Title6 color={color}>{children}</Title6>;
  };

  const renderIcon = (color: string) => {
    let iconSize;
    if (size === SMALL) iconSize = BUTTON_ICON_SIZE_SMALL;
    if (size === MEDIUM) iconSize = BUTTON_ICON_SIZE_MEDIUM;
    if (size === LARGE) iconSize = BUTTON_ICON_SIZE_LARGE;
    return Icon && <Icon width={iconSize} height={iconSize} outlineColor={color} fillColor={colors.transparent} />;
  };

  const renderDefault = () => (
    <div className="flex items-center justify-center group-hover:hidden group-focus:hidden group-active:hidden">
      {iconPosition === LEFT && renderIcon(colors.primary.DEFAULT)}
      <Text color={colors.primary.DEFAULT}>{text}</Text>
      {iconPosition === RIGHT && renderIcon(colors.primary.DEFAULT)}
    </div>
  );

  const renderHover = () => (
    <div className="hidden items-center justify-center group-hover:flex group-focus:hidden group-active:hidden">
      {iconPosition === LEFT && renderIcon(colors.primary.dark3)}
      <Text color={colors.primary.dark3}>{text}</Text>
      {iconPosition === RIGHT && renderIcon(colors.primary.dark3)}
    </div>
  );

  const renderFocus = () => (
    <div className="hidden items-center justify-center group-focus:flex group-active:hidden group-hover:hidden">
      {iconPosition === LEFT && renderIcon(colors.info.dark)}
      <Text color={colors.info.dark}>{text}</Text>
      {iconPosition === RIGHT && renderIcon(colors.info.dark)}
    </div>
  );

  const renderActive = () => (
    <div className="hidden items-center justify-center group-active:flex group-focus:hidden group-hover:hidden">
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

  if (isLoading) {
    return <>{renderLoading()}</>;
  }

  if (isDisabled) {
    return <>{renderDisabled()}</>;
  }

  return (
    <ButtonWrapper
      isNavbarLink={isNavbarLink}
      externalLink={externalLink}
      isLink={isLink}
      searchParams={searchParams}
      pathName={pathName}
      buttonType={buttonType}
      ariaControlId={ariaControlId}
      ariaExpanded={ariaExpanded}
      clickHandler={clickHandler}
    >
      {renderDefault()}
      {renderHover()}
      {renderFocus()}
      {renderActive()}
    </ButtonWrapper>
  );
};

export default TextButton;
