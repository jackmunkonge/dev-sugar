'use client';

import PinInputComponent from 'react-pin-input';

import { theme } from '@utils/globalConstants';

import { PinInputProps } from './types';

const PinInput: React.FC<PinInputProps> = ({ className = '', focus = false }) => (
  <PinInputComponent
    length={6}
    initialValue=""
    secret={false}
    onChange={(value, index) => {}}
    onComplete={(value, index) => {}}
    type="numeric"
    inputMode="number"
    focus={focus}
    style={{ width: 'fit-content', marginLeft: '-4px' }}
    inputStyle={{
      margin: '0px 4px',
      borderTop: '0px',
      borderBottom: `4px solid ${theme.colors.primary.DEFAULT}`,
      borderLeft: '0px',
      borderRight: '0px',
      fontSize: '34px',
      lineHeight: '48px',
      letterSpacing: '0.0025em',
      fontWeight: '400',
    }}
    inputFocusStyle={{ borderColor: theme.colors.primary.light3 }}
    autoSelect={false}
  />
);

export default PinInput;
