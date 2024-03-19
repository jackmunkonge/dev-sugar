import React from 'react';

import { BUTTON_ICON_SIZE_LARGE, BUTTON_ICON_SIZE_MEDIUM, BUTTON_ICON_SIZE_SMALL } from '@assets/icons/constants';
import { Button1, Button2, Headline6 } from '@components/Typography';
import { theme } from '@utils/globalConstants';
import { ComponentSize } from '@utils/globalTypes';
import { ButtonWrapper } from '@utils/ui/utils';

import { ButtonProps, ButtonTextProps } from '../types';

// TODO: Create breadcrumb component with all text sizes
const TextButton: React.FC<ButtonProps> = ({
  text,
  size = ComponentSize.LARGE,
  leadIcon: LeadIcon,
  trailIcon: TrailIcon,
  externalLink = '',
  isLink = false,
  isNavbarLink = false,
  isDisabled = false,
  isLoading = false,
  searchParams,
  pathName = '/',
  buttonType = 'submit',
  ariaControlId = '',
  ariaExpanded = false,
  clickHandler,
}) => {
  const { SMALL, MEDIUM, LARGE } = ComponentSize;
  const { colors } = theme;

  const Text: React.FC<ButtonTextProps> = ({ className = '', children }) => {
    if (size === ComponentSize.SMALL) {
      return <Button2 className={className}>{children}</Button2>;
    } else if (size === ComponentSize.MEDIUM) {
      return <Button1 className={className}>{children}</Button1>;
    }
    return <Headline6 className={className}>{children}</Headline6>;
  };

  const renderLeadIcon = (color: string) => {
    let iconSize;
    if (size === SMALL) iconSize = BUTTON_ICON_SIZE_SMALL;
    if (size === MEDIUM) iconSize = BUTTON_ICON_SIZE_MEDIUM;
    if (size === LARGE) iconSize = BUTTON_ICON_SIZE_LARGE;
    return (
      LeadIcon && <LeadIcon width={iconSize} height={iconSize} outlineColor={color} fillColor={colors.transparent} />
    );
  };

  const renderTrailIcon = (color: string) => {
    let iconSize;
    if (size === SMALL) iconSize = BUTTON_ICON_SIZE_SMALL;
    if (size === MEDIUM) iconSize = BUTTON_ICON_SIZE_MEDIUM;
    if (size === LARGE) iconSize = BUTTON_ICON_SIZE_LARGE;
    return (
      TrailIcon && <TrailIcon width={iconSize} height={iconSize} outlineColor={color} fillColor={colors.transparent} />
    );
  };

  const renderDefault = () => (
    <div className="flex items-center justify-center group-hover:hidden group-focus:hidden group-active:hidden">
      {renderLeadIcon(colors.primary.DEFAULT)}
      <Text className="text-primary">{text}</Text>
      {renderTrailIcon(colors.primary.DEFAULT)}
    </div>
  );

  const renderHover = () => (
    <div className="hidden items-center justify-center group-hover:flex group-focus:hidden group-active:hidden">
      {renderLeadIcon(colors.primary.dark3)}
      <Text className="text-primary-dark3">{text}</Text>
      {renderTrailIcon(colors.primary.dark3)}
    </div>
  );

  const renderFocus = () => (
    <div className="hidden items-center justify-center group-hover:hidden group-focus:flex group-active:hidden">
      {renderLeadIcon(colors.info.DEFAULT)}
      <Text className="text-info">{text}</Text>
      {renderTrailIcon(colors.info.DEFAULT)}
    </div>
  );

  const renderActive = () => (
    <div className="hidden items-center justify-center group-hover:hidden group-focus:hidden group-active:flex">
      {renderLeadIcon(colors.primary.dark5)}
      <Text className="text-primary-dark5">{text}</Text>
      {renderTrailIcon(colors.primary.dark5)}
    </div>
  );

  const renderLoading = () => (
    <div className="flex items-center justify-center">
      <Text className="text-primary-dark5">loading...</Text>
    </div>
  );

  const renderDisabled = () => (
    <div className="flex items-center justify-center opacity-50">
      {renderLeadIcon(colors.primary.DEFAULT)}
      <Text className="text-primary">{text}</Text>
      {renderTrailIcon(colors.primary.DEFAULT)}
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
      isDisabled={isDisabled}
      isLoading={isLoading}
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
