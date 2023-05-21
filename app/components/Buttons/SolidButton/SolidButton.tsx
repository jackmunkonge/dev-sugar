import clsx from "clsx";
import React, { FC } from "react";
import { theme } from "tailwind.config";

import { Button1, Button2, Title6 } from "@app/components/Typography";
import { ComponentIconPosition, ComponentSize } from "@app/utils/globalTypes";
import { ButtonWrapper } from "@app/utils/ui/utils";

import { ButtonProps, ButtonTextProps } from "../types";

// TODO: Create breadcrumb component with all text sizes
const SolidButton: React.FC<ButtonProps> = ({
  text,
  size = ComponentSize.LARGE,
  icon: Icon,
  iconPosition = ComponentIconPosition.RIGHT,
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
  const { LEFT, RIGHT } = ComponentIconPosition;
  const { SMALL, MEDIUM, LARGE } = ComponentSize;
  const { colors } = theme;

  const Text: FC<ButtonTextProps> = ({ children, color }) => {
    if (size === ComponentSize.SMALL) {
      return <Button2 color={color}>{children}</Button2>;
    } else if (size === ComponentSize.MEDIUM) {
      return <Button1 color={color}>{children}</Button1>;
    }
    return <Title6 color={color}>{children}</Title6>;
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

//   const renderIcon = (color: string) => {
//     let iconSize;
//     if (size === SMALL) iconSize = BUTTON_ICON_SIZE_SMALL;
//     if (size === MEDIUM) iconSize = BUTTON_ICON_SIZE_MEDIUM;
//     if (size === LARGE) iconSize = BUTTON_ICON_SIZE_LARGE;
//     return Icon && <Icon width={iconSize} height={iconSize} outlineColor={color} fillColor={colors.transparent} />;
//   };

  // const renderLoading = () => (
  //   <div className="flex items-center justify-center">
  //     <Text color={colors.primary.dark5}>loading...</Text>
  //   </div>
  // );

  // const renderDisabled = () => (
  //   <div className="flex items-center justify-center opacity-50">
  //     {/* {iconPosition === LEFT && renderIcon(colors.primary.DEFAULT)} */}
  //     <Text color={colors.primary.DEFAULT}>{text}</Text>
  //     {/* {iconPosition === RIGHT && renderIcon(colors.primary.DEFAULT)} */}
  //   </div>
  // );

  const Button = ({
    isFullWidth = false,
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
        <div className={clsx(
          'w-full text-ellipsis overflow-hidden whitespace-nowrap',
          'text-background',
        )}>
          <Text color={colors.background}>{text}</Text>
        </div>
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

  // if (isLoading) {
  //   return <>{renderLoading()}</>;
  // }

  // if (isDisabled) {
  //   return <>{renderDisabled()}</>;
  // }

  return (
    <ButtonWrapper
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
      <Button isFullWidth={isFullWidth} />
    </ButtonWrapper>
  );
};

export default SolidButton;
