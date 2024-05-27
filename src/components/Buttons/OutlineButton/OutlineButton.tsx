import clsx from 'clsx';
import React, { FC } from 'react';
import { twMerge } from 'tailwind.config';

import { BUTTON_ICON_SIZE_LARGE, BUTTON_ICON_SIZE_MEDIUM, BUTTON_ICON_SIZE_SMALL } from '@assets/icons/constants';
import { Button1, Headline6 } from '@components/Typography';
import { ButtonWrapper } from '@components/index';
import { theme } from '@utils/globalConstants';
import { ComponentSize } from '@utils/globalTypes';

import { ButtonProps, ButtonTextProps } from '../types';
import ButtonLeft from './Components/ButtonLeft';
import ButtonMiddle from './Components/ButtonMiddle';
import ButtonRight from './Components/ButtonRight';
import LoadingSpinner from './Components/LoadingSpinner';

const OutlineButton: React.FC<ButtonProps> = ({
  text,
  size = ComponentSize.LARGE,
  leadIcon,
  trailIcon,
  externalLink = '',
  isFullWidth = false,
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

  const Text: FC<ButtonTextProps> = ({ className = '', children }) => {
    let text = <Button1 className={className}>{children}</Button1>;
    if (size === ComponentSize.LARGE) text = <Headline6 className={className}>{children}</Headline6>;

    return <div className={clsx('flex w-fit items-center overflow-hidden whitespace-nowrap')}>{text}</div>;
  };

  const ButtonIcon: FC<any> = ({ color, icon: Icon }) => {
    let iconSize;
    if (size === SMALL) iconSize = BUTTON_ICON_SIZE_SMALL;
    if (size === MEDIUM) iconSize = BUTTON_ICON_SIZE_MEDIUM;
    if (size === LARGE) iconSize = BUTTON_ICON_SIZE_LARGE;
    return <Icon width={iconSize} height={iconSize} outlineColor={color} fillColor={colors.transparent} />;
  };

  const Content: FC<any> = () => {
    let maxContentWidth = 'max-w-[160px]';
    if (size === MEDIUM) maxContentWidth = 'max-w-[168px]';
    if (size === SMALL) maxContentWidth = 'max-w-[96px]';

    const renderDefault = () => (
      <div
        className={clsx(
          'flex flex-row items-center justify-center group-hover:hidden group-focus:hidden group-active:hidden',
          maxContentWidth,
        )}
      >
        {leadIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={leadIcon} />}
        <Text className="text-primary group-hover:text-primary-dark3 group-active:text-primary-dark5 text-ellipsis overflow-hidden">
          {text}
        </Text>
        {trailIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={trailIcon} />}
      </div>
    );

    const renderHover = () => (
      <div
        className={clsx(
          'hidden items-center justify-center group-hover:flex flex-row group-focus:hidden group-active:hidden',
          maxContentWidth,
        )}
      >
        {leadIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={leadIcon} />}
        <Text className="text-ellipsis overflow-hidden text-primary group-hover:text-primary-dark3 group-active:text-primary-dark5">
          {text}
        </Text>
        {trailIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={trailIcon} />}
      </div>
    );

    const renderFocus = () => (
      <div
        className={clsx(
          'hidden flex-row items-center justify-center group-hover:hidden group-focus:flex group-active:hidden',
          maxContentWidth,
        )}
      >
        {leadIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={leadIcon} />}
        <Text className="text-ellipsis overflow-hidden text-primary group-hover:text-primary-dark3 group-active:text-primary-dark5">
          {text}
        </Text>
        {trailIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={trailIcon} />}
      </div>
    );

    const renderActive = () => (
      <div
        className={clsx(
          'hidden flex-row items-center justify-center group-hover:hidden group-focus:hidden group-active:flex',
          maxContentWidth,
        )}
      >
        {leadIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={leadIcon} />}
        <Text className="text-ellipsis overflow-hidden text-primary group-hover:text-primary-dark3 group-active:text-primary-dark5">
          {text}
        </Text>
        {trailIcon && <ButtonIcon color={colors.primary.DEFAULT} icon={trailIcon} />}
      </div>
    );

    return (
      <>
        {renderDefault()}
        {renderHover()}
        {renderFocus()}
        {renderActive()}
      </>
    );
  };

  const Button = ({
    fullLowlightColor = 'bg-transparent group-hover:bg-primary group-hover:bg-opacity-10 group-focus:bg-primary-dark1 group-active:bg-primary group-active:bg-opacity-40',
    outlineColor = 'bg-primary group-hover:bg-primary-dark3 group-focus:bg-primary-light5 group-active:bg-primary-dark5',
    fillColor = 'bg-transparent group-hover:bg-primary group-hover:bg-opacity-10 group-focus:bg-transparent group-active:bg-primary group-active:bg-opacity-40',
  }: any) => {
    const buttonWidth = size === SMALL ? 'w-[120px]' : 'w-[200px]';
    let buttonHeight = 'h-16';
    if (size === MEDIUM) buttonHeight = 'h-[56px]';
    if (size === SMALL) buttonHeight = 'h-[40px]';
    if (isLoading) outlineColor = twMerge(outlineColor, 'bg-primary-dark5');

    return (
      <div className={clsx('flex flex-row', isFullWidth ? 'w-full' : buttonWidth, buttonHeight)}>
        <ButtonLeft
          size={size}
          fullLowlightColor={fullLowlightColor}
          outlineColor={outlineColor}
          fillColor={fillColor}
        />
        <ButtonMiddle
          size={size}
          fullLowlightColor={fullLowlightColor}
          outlineColor={outlineColor}
          fillColor={fillColor}
        >
          {isLoading && !isDisabled && <LoadingSpinner />}
          {!isLoading && <Content />}
        </ButtonMiddle>
        <ButtonRight
          size={size}
          fullLowlightColor={fullLowlightColor}
          outlineColor={outlineColor}
          fillColor={fillColor}
        />
      </div>
    );
  };

  return (
    <ButtonWrapper
      isDisabled={isDisabled}
      isLoading={isLoading}
      isFullWidth={isFullWidth}
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
      <Button />
    </ButtonWrapper>
  );
};

export default OutlineButton;
