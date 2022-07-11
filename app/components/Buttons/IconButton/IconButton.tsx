import React from "react";
import { theme } from "tailwind.config";

import { Spinner } from "@app/assets/icons";
import { ButtonWrapper } from "@app/utils/ui/utils";

import { IconButtonProps } from "./types";

const IconButton: React.FC<IconButtonProps> = ({
  size = 56,
  icon: Icon,
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
  const { colors } = theme;

  const renderIcon = (color: string) => {
    return Icon && <Icon width={size} height={size} outlineColor={color} fillColor={colors.transparent} />;
  };

  const renderDefault = () => (
    <div className="flex items-center justify-center group-hover:hidden group-focus:hidden group-active:hidden">
      {renderIcon(colors.primary.DEFAULT)}
    </div>
  );

  const renderHover = () => (
    <div className="hidden items-center justify-center group-hover:flex group-focus:hidden group-active:hidden">
      {renderIcon(colors.primary.dark3)}
    </div>
  );

  const renderFocus = () => (
    <div className="hidden items-center justify-center group-focus:flex group-active:hidden group-hover:hidden">
      {renderIcon(colors.info.dark)}
    </div>
  );

  const renderActive = () => (
    <div className="hidden items-center justify-center group-active:flex group-focus:hidden group-hover:hidden">
      {renderIcon(colors.primary.dark5)}
    </div>
  );

  const renderLoading = () => (
    <div style={{ width: size, height: size }} className="flex items-center justify-center">
      <Spinner />
    </div>
  );

  const renderDisabled = () => (
    <div style={{ width: size, height: size }} className="flex items-center justify-center opacity-50">
      {renderIcon(colors.primary.DEFAULT)}
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

export default IconButton;
