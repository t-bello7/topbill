import { FC } from 'react';
import { IconInterface } from '../../utils';

const SquarePlusIcon: FC<IconInterface> = ({ color }) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2793_2619)">
      <path
        d="M16.625 0H4.375C1.96263 0 0 1.96263 0 4.375V16.625C0 19.0374 1.96263 21 4.375 21H16.625C19.0374 21 21 19.0374 21 16.625V4.375C21 1.96263 19.0374 0 16.625 0ZM14 11.375H11.375V14C11.375 14.4839 10.983 14.875 10.5 14.875C10.017 14.875 9.625 14.4839 9.625 14V11.375H7C6.517 11.375 6.125 10.9839 6.125 10.5C6.125 10.0161 6.517 9.625 7 9.625H9.625V7C9.625 6.51613 10.017 6.125 10.5 6.125C10.983 6.125 11.375 6.51613 11.375 7V9.625H14C14.483 9.625 14.875 10.0161 14.875 10.5C14.875 10.9839 14.483 11.375 14 11.375Z"
        className={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_2793_2619">
        <rect width="21" height="21" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SquarePlusIcon;
