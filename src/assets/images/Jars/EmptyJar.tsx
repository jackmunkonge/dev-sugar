import * as React from 'react';

import { CustomImageProps } from '../types';

const EmptyJar: React.FC<CustomImageProps> = ({ width = 128, height = 160 }) => (
  <svg width={width} height={height} viewBox="0 0 128 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#empty_jar)">
      <g clip-path="url(#empty_jar)">
        <rect x="112" y="8" width="8" height="8" fill="#806D4F" />
        <rect x="112" y="16" width="8" height="8" fill="#806D4F" />
        <rect x="104" y="16" width="8" height="8" fill="#806D4F" />
        <rect x="96" y="16" width="8" height="8" fill="#806D4F" />
        <rect x="88" y="16" width="8" height="8" fill="#806D4F" />
        <rect x="80" y="16" width="8" height="8" fill="#A08964" />
        <rect x="72" y="16" width="8" height="8" fill="#A08964" />
        <rect x="64" y="16" width="8" height="8" fill="#A08964" />
        <rect x="56" y="16" width="8" height="8" fill="#A08964" />
        <rect x="48" y="16" width="8" height="8" fill="#A08964" />
        <rect x="40" y="16" width="8" height="8" fill="#B89E76" />
        <rect x="32" y="16" width="8" height="8" fill="#B89E76" />
        <rect x="24" y="16" width="8" height="8" fill="#B89E76" />
        <rect x="16" y="16" width="8" height="8" fill="#B89E76" />
        <rect x="8" y="16" width="8" height="8" fill="#B89E76" />
        <rect x="8" y="8" width="8" height="8" fill="#B89E76" />
        <rect x="104" width="8" height="8" fill="#A08964" />
        <rect x="96" width="8" height="8" fill="#A08964" />
        <rect x="88" width="8" height="8" fill="#A08964" />
        <rect x="80" width="8" height="8" fill="#A08964" />
        <rect x="72" width="8" height="8" fill="#A08964" />
        <rect x="64" width="8" height="8" fill="#A08964" />
        <rect x="56" width="8" height="8" fill="#A08964" />
        <rect x="48" width="8" height="8" fill="#A08964" />
        <rect x="40" width="8" height="8" fill="#B89E76" />
        <rect x="32" width="8" height="8" fill="#B89E76" />
        <rect x="24" width="8" height="8" fill="#B89E76" />
        <rect x="16" width="8" height="8" fill="#B89E76" />
        <rect x="104" y="8" width="8" height="8" fill="#F5C373" />
        <rect x="96" y="8" width="8" height="8" fill="#F5C373" />
        <rect x="88" y="8" width="8" height="8" fill="#F5C373" />
        <rect x="80" y="8" width="8" height="8" fill="#F1C98A" />
        <rect x="72" y="8" width="8" height="8" fill="#F1C98A" />
        <rect x="64" y="8" width="8" height="8" fill="#F1C98A" />
        <rect x="56" y="8" width="8" height="8" fill="#F1C98A" />
        <rect x="48" y="8" width="8" height="8" fill="#F1C98A" />
        <rect x="40" y="8" width="8" height="8" fill="#EBCEA1" />
        <rect x="32" y="8" width="8" height="8" fill="#EBCEA1" />
        <rect x="24" y="8" width="8" height="8" fill="#EBCEA1" />
        <rect x="16" y="8" width="8" height="8" fill="#EBCEA1" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 24V32H8V40H0V144H8V152H16V160H112V152H120V144H128V40H120V32H112V24H104V32H112V40H120V144H112V152H16V144H8V40H16V32H24V24H16Z"
          fill="#9EA5A4"
          fillOpacity="0.3"
        />
        <rect x="104" y="24" width="8" height="8" fill="#9EA5A4" fillOpacity="0.4" />
        <rect x="112" y="32" width="8" height="8" fill="#9EA5A4" fillOpacity="0.4" />
        <rect x="120" y="40" width="8" height="40" fill="#9EA5A4" fillOpacity="0.4" />
        <path d="M72 32V24H96V40H104V48H112V80H88V40H80V32H72Z" fill="#C4C4C4" fillOpacity="0.4" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112 92H104V108H96V116H32V108H24V92H16V136H24V144H104V136H112V92Z"
          fill="#C4C4C4"
          fillOpacity="0.4"
        />
        <path d="M104 24H24V32H16V40H8V144H16V152H112V144H120V40H112V32H104V24Z" fill="#C6CFCE" fillOpacity="0.1" />
      </g>
    </g>
    <defs>
      <clipPath id="empty_jar">
        <rect width={width} height={height} fill="white" />
      </clipPath>
      <clipPath id="empty_jar">
        <rect width={width} height={height} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default EmptyJar;
