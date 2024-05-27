import * as React from 'react';

import { CustomImageProps } from './types';

const JarSticker: React.FC<CustomImageProps> = ({ width = 104, height = 72 }) => (
  <svg width={width} height={height} viewBox="0 0 104 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#jar_sticker)">
      <path d="M8 0V4H4V8H0V64H4V68H8V72H96V68H100V64H104V8H100V4H96V0H8Z" fill="#F7F6EF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0V4H4V8H0V64H4V68H8V72H96V68H100V64H104V8H100V4H96V0H8ZM96 4V8H100V64H96V68H8V64H4V8H8V4H96Z"
        fill="#EAE3CC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8V12H8V60H12V64H92V60H96V12H92V8H12ZM12 56H16V60H88V56H92V16H88V12H16V16H12V56Z"
        fill="#C8705C"
      />
    </g>
    <defs>
      <clipPath id="jar_sticker">
        <rect width={width} height={height} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default JarSticker;
