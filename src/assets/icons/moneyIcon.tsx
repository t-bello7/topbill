import { FC } from 'react';
import { IconInterface } from '../../utils';

const MoneyIcon: FC<IconInterface> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      className={color}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5.8 6a2 2 0 0 1-1.3 3.5A2 2 0 0 1 3 8.8M5.8 6h12.4M5.8 6c-.9 0-1.3 0-1.7.2a2 2 0 0 0-.9.9c-.2.4-.2.8-.2 1.7m0 0v6.4m0 0a2 2 0 0 1 3.5 1.3 2 2 0 0 1-.7 1.5M3 15.2c0 .9 0 1.3.2 1.7.2.4.5.7.9.9.4.2.8.2 1.7.2m0 0h12.4m2.8-2.8a2 2 0 1 0-2.8 2.8m2.8-2.8V8.8m0 6.4c0 .9 0 1.3-.2 1.7a2 2 0 0 1-.9.9c-.4.2-.8.2-1.7.2M21 8.8a2 2 0 0 1-3.5-1.3c0-.6.3-1.1.7-1.5M21 8.8c0-.9 0-1.3-.2-1.7a2 2 0 0 0-.9-.9c-.4-.2-.8-.2-1.7-.2M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default MoneyIcon;
