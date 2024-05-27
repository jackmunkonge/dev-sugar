import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind.config';

import { Spinner } from '@assets/icons';
import { ButtonWrapper } from '@components/index';
import { theme } from '@utils/globalConstants';

import { IconButtonProps } from '../types';
import ButtonLeft from './Components/ButtonLeft';
import ButtonRight from './Components/ButtonRight';

const OutlineIconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
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

  const renderIcon = (color: string) => Icon && <Icon outlineColor={color} fillColor={color} />;

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
    <div className="hidden items-center justify-center group-hover:hidden group-focus:flex group-active:hidden">
      {renderIcon(colors.info.dark)}
    </div>
  );

  const renderActive = () => (
    <div className="hidden items-center justify-center group-hover:hidden group-focus:hidden group-active:flex">
      {renderIcon(colors.primary.dark5)}
    </div>
  );

  const renderLoading = () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <Spinner outlineColor={colors.primary.dark5} />
    </div>
  );

  const Button = ({
    fullLowlightColor = 'bg-transparent group-hover:bg-primary group-hover:bg-opacity-10 group-focus:bg-primary-dark1 group-active:bg-primary group-active:bg-opacity-40',
    outlineColor = 'bg-primary group-hover:bg-primary-dark3 group-focus:bg-primary-light5 group-active:bg-primary-dark5',
    fillColor = 'bg-transparent group-hover:bg-primary group-hover:bg-opacity-10 group-focus:bg-transparent group-active:bg-primary group-active:bg-opacity-40',
  }: any) => {
    if (isLoading) outlineColor = twMerge(outlineColor, 'bg-primary-dark5');

    return (
      <div className={clsx('relative flex flex-row h-14 w-14')}>
        <ButtonLeft fullLowlightColor={fullLowlightColor} outlineColor={outlineColor} fillColor={fillColor} />
        <div className="absolute inset-0 flex flex-row justify-center items-center">
          {isLoading && !isDisabled && renderLoading()}
          {!isLoading && renderDefault()}
          {!isLoading && renderHover()}
          {!isLoading && renderFocus()}
          {!isLoading && renderActive()}
        </div>
        <ButtonRight fullLowlightColor={fullLowlightColor} outlineColor={outlineColor} fillColor={fillColor} />
      </div>
    );
  };

  return (
    <>
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
        <Button />
      </ButtonWrapper>
      <span className="sr-only">{srOnlyText}</span>
    </>
  );
};

export default OutlineIconButton;
