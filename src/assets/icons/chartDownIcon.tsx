import { FC } from 'react';
import { IconInterface } from '../../utils';

const ChartDownIcon: FC<IconInterface> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 -3 16 16"
  >
    <path
      className={color}
      fill="#758CA3"
      fillRule="evenodd"
      d="M12.6 8 9 4.4 6.7 6.7a1 1 0 0 1-1.4 0l-5-5A1 1 0 0 1 1.7.3L6 4.6l2.3-2.3a1 1 0 0 1 1.4 0L14 6.6V4a1 1 0 1 1 2 0v5c0 .6-.4 1-1 1h-5a1 1 0 1 1 0-2h2.6z"
      clipRule="evenodd"
    />
  </svg>
);

export default ChartDownIcon;
