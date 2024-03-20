import clsx from 'clsx';
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
  leadIcon,
  trailIcon,
  externalLink = '',
  isLink = false,
  isNavbarLink = false,
  isDisabled = false,
  isLoading = false,
  isFullWidth = false,
  searchParams,
  pathName = '/',
  buttonType = 'submit',
  ariaControlId = '',
  ariaExpanded = false,
  clickHandler,
}) => {
  const { SMALL, MEDIUM, LARGE } = ComponentSize;
  const { colors } = theme;
  const buttonWidth = size === SMALL ? 'w-[120px]' : 'w-[200px]';
  let buttonHeight = 'h-16';
  if (size === MEDIUM) buttonHeight = 'h-[56px]';
  if (size === SMALL) buttonHeight = 'h-[40px]';

  const commonClass = clsx(isFullWidth ? 'w-full' : buttonWidth, buttonHeight);

  const Text: React.FC<ButtonTextProps> = ({ className = '', children }) => {
    let text = <Headline6 className={className}>{children}</Headline6>;
    if (size === ComponentSize.SMALL) {
      text = <Button2 className={className}>{children}</Button2>;
    } else if (size === ComponentSize.MEDIUM) {
      text = <Button1 className={className}>{children}</Button1>;
    }

    return (
      <div className={clsx('flex w-full items-center justify-center overflow-hidden whitespace-nowrap')}>{text}</div>
    );
  };

  const ButtonIcon: React.FC<any> = ({ color, icon: Icon }) => {
    let iconSize;
    if (size === SMALL) iconSize = BUTTON_ICON_SIZE_SMALL;
    if (size === MEDIUM) iconSize = BUTTON_ICON_SIZE_MEDIUM;
    if (size === LARGE) iconSize = BUTTON_ICON_SIZE_LARGE;
    return <Icon width={iconSize} height={iconSize} outlineColor={color} fillColor={colors.transparent} />;
  };

  const renderDefault = () => (
    <div
      className={clsx(
        'flex items-center justify-center group-hover:hidden group-focus:hidden group-active:hidden',
        commonClass,
      )}
    >
      {leadIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={leadIcon} />}
      <Text className="text-primary">{text}</Text>
      {trailIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={trailIcon} />}
    </div>
  );

  const renderHover = () => (
    <div
      className={clsx(
        'hidden items-center justify-center group-hover:flex group-focus:hidden group-active:hidden',
        commonClass,
      )}
    >
      {leadIcon && <ButtonIcon color={colors.primary.dark3} icon={leadIcon} />}
      <Text className="text-primary-dark3">{text}</Text>
      {trailIcon && <ButtonIcon color={colors.primary.dark3} icon={trailIcon} />}
    </div>
  );

  const renderFocus = () => (
    <div
      className={clsx(
        'hidden items-center justify-center group-hover:hidden group-focus:flex group-active:hidden',
        commonClass,
      )}
    >
      {leadIcon && <ButtonIcon color={colors.info.DEFAULT} icon={leadIcon} />}
      <Text className="text-info">{text}</Text>
      {trailIcon && <ButtonIcon color={colors.info.DEFAULT} icon={trailIcon} />}
    </div>
  );

  const renderActive = () => (
    <div
      className={clsx(
        'hidden items-center justify-center group-hover:hidden group-focus:hidden group-active:flex',
        commonClass,
      )}
    >
      {leadIcon && <ButtonIcon color={colors.primary.dark5} icon={leadIcon} />}
      <Text className="text-primary-dark5">{text}</Text>
      {trailIcon && <ButtonIcon color={colors.primary.dark5} icon={trailIcon} />}
    </div>
  );

  const renderLoading = () => (
    <div className={clsx('flex items-center justify-center', commonClass)}>
      <Text className="text-primary-dark5">loading...</Text>
    </div>
  );

  const renderDisabled = () => (
    <div className={clsx('flex items-center justify-center opacity-50', commonClass)}>
      {leadIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={leadIcon} />}
      <Text className="text-primary">{text}</Text>
      {trailIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={trailIcon} />}
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
      isFullWidth={isFullWidth}
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
