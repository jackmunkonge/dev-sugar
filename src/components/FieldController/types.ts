export type FieldControllerProps = {
  className?: string;
  name: string;
  label?: string;
  value: any;
  controlType: ControlType;
  [restProps: string]: any;
};

// Types
export type ControlType = 'input' | 'pin';
