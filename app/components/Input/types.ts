import { HTMLInputTypeAttribute } from "react";

import { IconProps } from "@app/assets/icons/types";
import { ComponentIconPosition, ComponentSize } from "@app/utils/globalTypes";

export type InputProps = {
  id: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  isFocusedOnLoad?: boolean;
  autoComplete?: string;
  placeholder?: string;
  label: string;
  value?: string;
  error?: string;
  ariaInvalid?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
  size?: Omit<ComponentSize, ComponentSize.MEDIUM>;
  icon?: React.FC<IconProps>;
  iconPosition?: ComponentIconPosition;
  isDisabled?: boolean;
  isRequired?: boolean;
  clickHandler?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};
