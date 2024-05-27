import React from 'react';

import { Spinner } from '@assets/icons';
import { ButtonWrapper } from '@components/index';
import { theme } from '@utils/globalConstants';

import { IconButtonProps } from '../types';

const IconOnlyButton: React.FC<IconButtonProps> = ({
  size = 56,
  icon: Icon,
  solid = false,
  color,
  isLink = false,
  externalLink = '',
  isNavbarLink = false,
  isDisabled = false,
  isLoading = false,
  searchParams,
  pathName = '/',
  buttonType = 'submit',
  ariaControlId = '',
  ariaExpanded = false,
  srOnlyText = buttonType,
  clickHandler,
}) => {
  const { colors } = theme;

  const renderIcon = (color: string) => {
    if (solid) return Icon && <Icon width={size} height={size} outlineColor={color} fillColor={color} />;
    return Icon && <Icon width={size} height={size} outlineColor={color} fillColor={colors.transparent} />;
  };

  const renderDefault = () => (
    <div className="flex items-center justify-center group-hover:hidden group-focus:hidden group-active:hidden">
      {renderIcon(color || colors.primary.DEFAULT)}
    </div>
  );

  const renderHover = () => (
    <div className="hidden items-center justify-center group-hover:flex group-focus:hidden group-active:hidden">
      {renderIcon(color || colors.primary.dark3)}
    </div>
  );

  const renderFocus = () => (
    <div className="hidden items-center justify-center group-hover:hidden group-focus:flex group-active:hidden">
      {renderIcon(color || colors.info.dark)}
    </div>
  );

  const renderActive = () => (
    <div className="hidden items-center justify-center group-hover:hidden group-focus:hidden group-active:flex">
      {renderIcon(color || colors.primary.dark5)}
    </div>
  );

  const renderLoading = () => (
    <div style={{ width: size, height: size }} className="flex items-center justify-center pointer-events-none">
      <Spinner />
    </div>
  );

  const renderDisabled = () => (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center opacity-50 pointer-events-none"
    >
      {renderIcon(color || colors.primary.DEFAULT)}
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
      isDisabled={isDisabled}
      isLoading={isLoading}
      externalLink={externalLink}
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
      <span className="sr-only">{srOnlyText}</span>
    </ButtonWrapper>
  );
};

export default IconOnlyButton;
