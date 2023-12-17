import { FC } from 'react';
import { IconInterface } from '../../utils';

const PeopleIcon: FC<IconInterface> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 24 24"
  >
    <g className={color} fill="#212121">
      <path d="M9.5 11.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
      <path d="M3 11.6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
      <path d="M6.3 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
      <path d="M12.8 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
      <path d="M16 11.6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
      <path d="M8 16.3c0-.5.3-.8.8-.8h6.4a.7.7 0 0 1 .8.8v1.4a1.9 1.9 0 0 1 0 .2v.4l-.5 1.1c-.6.9-1.7 1.6-3.5 1.6-1.9 0-3-.7-3.5-1.6a3.3 3.3 0 0 1-.5-1.6v-1.6Z" />
      <path d="m7.2 15.5-.2.8v1.5a2.6 2.6 0 0 0 0 .2 4.1 4.1 0 0 0 .7 2c-.5.3-1.3.5-2.2.5-1.9 0-3-.7-3.5-1.6a3.3 3.3 0 0 1-.5-1.6v-1c0-.5.3-.8.8-.8h4.9Z" />
      <path d="M16.3 20c.5.3 1.3.5 2.2.5 1.8 0 3-.7 3.5-1.6a3.3 3.3 0 0 0 .5-1.6v-1a.8.8 0 0 0-.8-.8h-4.9l.2.8v1.5a2.2 2.2 0 0 1 0 .2 4.2 4.2 0 0 1-.7 2Z" />
    </g>
  </svg>
);

export default PeopleIcon;
