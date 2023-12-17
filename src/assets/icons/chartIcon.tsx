import { FC } from 'react';
import { IconInterface } from '../../utils';

const ChartIcon: FC<IconInterface> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60px"
    height="60px"
    fill="none"
    viewBox="0 0 24 24"
  >
    <g className={color} fill="#292D32">
      <path d="M22 22H2a.8.8 0 0 1-.8-.8c0-.4.4-.7.8-.7h20c.4 0 .8.3.8.8 0 .4-.4.7-.8.7Z" />
      <path d="M9.8 4v18h4.4V4c0-1.1-.4-2-1.8-2h-.8c-1.4 0-1.8.9-1.8 2Z" />
      <path
        d="M3 10v12h4V10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10Z"
        opacity=".4"
      />
      <path
        d="M17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2Z"
        opacity=".4"
      />
    </g>
  </svg>
);

export default ChartIcon;
