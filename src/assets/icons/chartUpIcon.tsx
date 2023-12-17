import { FC } from 'react';
import { IconInterface } from '../../utils';

const ChartUpIcon: FC<IconInterface> = ({ color }) => (
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
      d="M12.6 2H10a1 1 0 1 1 0-2h5c.6 0 1 .4 1 1v5a1 1 0 1 1-2 0V3.4L9.7 7.7a1 1 0 0 1-1.4 0L6 5.4 1.7 9.7A1 1 0 0 1 .3 8.3l5-5a1 1 0 0 1 1.4 0L9 5.6 12.6 2z"
      clipRule="evenodd"
    />
  </svg>
);

export default ChartUpIcon;
