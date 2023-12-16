import { FC } from 'react';
import { IconInterface } from '../../utils';

const MobileIcon: FC<IconInterface> = ({ color }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="mobile-button" clipPath="url(#clip0_148_1885)">
      <path
        className={color}
        id="Vector"
        d="M7.5 12H4.5C3.1215 12 2 10.8785 2 9.5V2.5C2 1.1215 3.1215 0 4.5 0H7.5C8.8785 0 10 1.1215 10 2.5V9.5C10 10.8785 8.8785 12 7.5 12ZM4.5 1C3.673 1 3 1.673 3 2.5V9.5C3 10.327 3.673 11 4.5 11H7.5C8.327 11 9 10.327 9 9.5V2.5C9 1.673 8.327 1 7.5 1H4.5ZM7 9.5C7 9.224 6.776 9 6.5 9H5.5C5.224 9 5 9.224 5 9.5C5 9.776 5.224 10 5.5 10H6.5C6.776 10 7 9.776 7 9.5Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_148_1885">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default MobileIcon;
