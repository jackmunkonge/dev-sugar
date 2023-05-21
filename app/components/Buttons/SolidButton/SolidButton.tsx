import clsx from "clsx";
import React, { FC } from "react";
import { theme } from "tailwind.config";

import { BUTTON_ICON_SIZE_LARGE, BUTTON_ICON_SIZE_MEDIUM, BUTTON_ICON_SIZE_SMALL } from "@app/assets/icons/consts";
import { Button1, Button2, Title6 } from "@app/components/Typography";
import { ComponentSize } from "@app/utils/globalTypes";
import { ButtonWrapper } from "@app/utils/ui/utils";

import LoadingSpinner from "../Components/LoadingSpinner";
import { ButtonProps, ButtonTextProps } from "../types";

// TODO: Create breadcrumb component with all text sizes
const SolidButton: React.FC<ButtonProps> = ({
  text,
  size = ComponentSize.LARGE,
  leadIcon,
  trailIcon,
  externalLink = "",
  isFullWidth = false,
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
  const { SMALL, MEDIUM, LARGE } = ComponentSize;
  const { colors } = theme;

  const Text: FC<ButtonTextProps> = ({ children, color }) => {
    let text = <Title6 color={color}>{children}</Title6>;
    if (size === ComponentSize.SMALL) text = <Button2 color={color}>{children}</Button2>;
    if (size === ComponentSize.MEDIUM) text = <Button1 color={color}>{children}</Button1>;

    return (
      <div className={clsx(
        'w-full text-ellipsis overflow-hidden whitespace-nowrap',
        'text-background',
      )}>
        {text}
      </div>
    );
  };

  const ButtonLeft: FC<any> = ({
    fullLowlightColor,
    outlineColor,
    highlightColor,
    lowlightColor,
    fillColor,
  }) => {
    return (
      <div className="flex flex-row items-center">
        <div className={clsx('w-1 h-4', outlineColor)} />

        <div>
          <div className={clsx('w-1 h-3', outlineColor)} />
          <div className={clsx('w-1 h-4', highlightColor)} />
          <div className={clsx('w-1 h-3', outlineColor)} />
        </div>

        <div>
          <div className={clsx('w-1 h-1', outlineColor)} />
          <div className={clsx('w-1 h-3', highlightColor)} />
          <div className={clsx('w-1 h-4', fillColor)} />
          <div className={clsx('w-1 h-2', fullLowlightColor)} />
          <div className={clsx('w-1 h-1', lowlightColor)} />
          <div className={clsx('w-1 h-1', outlineColor)} />
        </div>

        <div>
          <div className={clsx('w-2 h-1', outlineColor)} />
          <div className={clsx('w-2 h-1', highlightColor)} />
          <div className={clsx('w-2 h-10', fillColor)} />
          <div className={clsx('w-2 h-1', lowlightColor)} />
          <div className={clsx('w-2 h-1', outlineColor)} />
        </div>
      </div>
    );
  };

  const ButtonMiddle: FC<any> = ({
    children,
    outlineColor,
    highlightColor,
    lowlightColor,
    fillColor,
  }) => (
    <div className={clsx(
      "flex flex-col w-full",
    )}>
      <div className={clsx('w-full h-1', outlineColor)} />
      <div className={clsx('w-full h-1', highlightColor)} />
      <div className={clsx('w-full h-12 flex items-center justify-center', fillColor)}>
        {children}
      </div>
      <div className={clsx('w-full h-1', lowlightColor)} />
      <div className={clsx('w-full h-1', outlineColor)} />
    </div>
  );

  const ButtonRight: FC<any> = ({
    fullHighlightColor,
    fullLowlightColor,
    outlineColor,
    lowlightColor,
    fillColor,
  }) => {
    return (
      <div className="flex flex-row items-center">
        <div>
          <div className={clsx('w-2 h-1', outlineColor)} />
          <div className={clsx('w-2 h-1', fullHighlightColor)} />
          <div className={clsx('w-2 h-10', fillColor)} />
          <div className={clsx('w-2 h-1', lowlightColor)} />
          <div className={clsx('w-2 h-1', outlineColor)} />
        </div>

        <div>
          <div className={clsx('w-1 h-1', outlineColor)} />
          <div className={clsx('w-1 h-3', fullHighlightColor)} />
          <div className={clsx('w-1 h-4', fillColor)} />
          <div className={clsx('w-1 h-2', fullLowlightColor)} />
          <div className={clsx('w-1 h-1', lowlightColor)} />
          <div className={clsx('w-1 h-1', outlineColor)} />
        </div>

        <div>
          <div className={clsx('w-1 h-3', outlineColor)} />
          <div className={clsx('w-1 h-4', fullHighlightColor)} />
          <div className={clsx('w-1 h-3', outlineColor)} />
        </div>

        <div className={clsx('w-1 h-4', outlineColor)} />
      </div>
    );
  };

  const ButtonIcon: FC<any> = ({ color, icon: Icon }) => {
    let iconSize;
    if (size === SMALL) iconSize = BUTTON_ICON_SIZE_SMALL;
    if (size === MEDIUM) iconSize = BUTTON_ICON_SIZE_MEDIUM;
    if (size === LARGE) iconSize = BUTTON_ICON_SIZE_LARGE;
    return <Icon width={iconSize} height={iconSize} outlineColor={color} fillColor={colors.transparent} />;
  };

  const Content: FC<any> = () => {
    return (
      <div className="flex flex-row items-center justify-center">
        {leadIcon && <ButtonIcon color={colors.background} icon={leadIcon} />}
        <Text color={colors.background}>{text}</Text>
        {trailIcon && <ButtonIcon color={colors.background} icon={trailIcon} />}
      </div>
    );
  };

  const Button = ({
    fullHighlightColor = 'bg-primary group-hover:bg-primary-light2 group-focus:bg-primary-dark1 group-active:bg-primary-dark3',
    fullLowlightColor = 'bg-primary group-hover:bg-primary-light2 group-focus:bg-primary-dark1 group-active:bg-primary-dark3',
    outlineColor = 'bg-primary-dark5 group-hover:bg-primary-dark3 group-focus:bg-primary-light5 group-active:bg-primary-dark5',
    highlightColor = 'bg-primary-light2 group-hover:bg-primary-light4 group-focus:bg-primary-dark1 group-active:bg-primary-dark1',
    lowlightColor = 'bg-primary-dark2 group-hover:bg-primary group-focus:bg-primary-dark1 group-active:bg-primary-dark3',
    fillColor = 'bg-primary group-hover:bg-primary-light2 group-focus:bg-primary group-active:bg-primary-dark3',
  }: any) => (
    <div className={clsx(
      'flex flex-row h-16',
      isFullWidth ? 'w-full' : 'w-[200px]',
    )}>
      <ButtonLeft
        fullLowlightColor={fullLowlightColor}
        outlineColor={outlineColor}
        highlightColor={highlightColor}
        lowlightColor={lowlightColor}
        fillColor={fillColor}
      />
      <ButtonMiddle
        outlineColor={outlineColor}
        highlightColor={highlightColor}
        lowlightColor={lowlightColor}
        fillColor={fillColor}
      >
        {isLoading && !isDisabled && <LoadingSpinner />}
        {!isLoading && <Content color={colors.background} />}
      </ButtonMiddle>
      <ButtonRight
        fullHighlightColor={fullHighlightColor}
        fullLowlightColor={fullLowlightColor}
        outlineColor={outlineColor}
        lowlightColor={lowlightColor}
        fillColor={fillColor}
      />
    </div>
  );

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

export default SolidButton;
