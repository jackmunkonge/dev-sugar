import clsx from 'clsx';
import React from 'react';

import { Spinner } from '@assets/icons';
import { ButtonWrapper } from '@components/index';
import { theme } from '@utils/globalConstants';

import { IconButtonProps } from '../types';
import ButtonLeft from './Components/ButtonLeft';
import ButtonRight from './Components/ButtonRight';

const SolidIconButton: React.FC<IconButtonProps> = ({
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

  const renderIcon = () => Icon && <Icon outlineColor={colors.background} fillColor={colors.background} />;

  const renderLoading = () => (
    <div className="w-6 h-6 flex items-center justify-center">
      <Spinner outlineColor={theme.colors.background} />
    </div>
  );

  const Button = ({
    fullHighlightColor = 'bg-primary group-hover:bg-primary-light2 group-focus:bg-primary-dark1 group-active:bg-primary-dark3',
    fullLowlightColor = 'bg-primary group-hover:bg-primary-light2 group-focus:bg-primary-dark1 group-active:bg-primary-dark3',
    outlineColor = 'bg-primary-dark5 group-hover:bg-primary-dark3 group-focus:bg-primary-light5 group-active:bg-primary-dark5',
    highlightColor = 'bg-primary-light2 group-hover:bg-primary-light4 group-focus:bg-primary-dark1 group-active:bg-primary-dark1',
    lowlightColor = 'bg-primary-dark2 group-hover:bg-primary group-focus:bg-primary-dark1 group-active:bg-primary-dark3',
    fillColor = 'bg-primary group-hover:bg-primary-light2 group-focus:bg-primary group-active:bg-primary-dark3',
  }: any) => (
    <div className={clsx('relative flex flex-row h-14 w-14')}>
      <ButtonLeft
        fullLowlightColor={fullLowlightColor}
        outlineColor={outlineColor}
        highlightColor={highlightColor}
        lowlightColor={lowlightColor}
        fillColor={fillColor}
      />
      <div className="absolute inset-0 flex flex-row justify-center items-center">
        {isLoading && !isDisabled && renderLoading()}
        {!isLoading && renderIcon()}
      </div>
      <ButtonRight
        fullHighlightColor={fullHighlightColor}
        outlineColor={outlineColor}
        lowlightColor={lowlightColor}
        fillColor={fillColor}
      />
    </div>
  );

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

export default SolidIconButton;
