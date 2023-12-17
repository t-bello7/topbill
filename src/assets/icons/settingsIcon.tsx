import { FC } from 'react';
import { IconInterface } from '../../utils';

const SettingsIcon: FC<IconInterface> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
  >
    <g className={color} stroke="#1C274C" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path
        strokeLinecap="round"
        d="M3.7 10.6c.4.3.7.8.7 1.4 0 .6-.3 1-.7 1.4-.4.2-.6.3-.7.5a2 2 0 0 0-.4 1.5c0 .4.3.8.7 1.6l1 1.5c.5.3 1 .4 1.5.3.3 0 .5 0 .9-.3.4-.2 1-.2 1.5 0 .5.3.8.8.8 1.4 0 .4 0 .6.2.9.2.5.5.8 1 1 .4.2.9.2 1.8.2 1 0 1.4 0 1.8-.2a2 2 0 0 0 1-1l.2-.9c0-.6.3-1 .8-1.4.5-.2 1-.2 1.5 0l.9.3c.5.1 1 0 1.4-.3.4-.3.6-.7 1-1.5l.5-.9m-.8-2.7c-.4-.3-.7-.8-.7-1.4 0-.6.3-1 .7-1.4.4-.2.6-.3.7-.5.3-.4.5-1 .4-1.5a5 5 0 0 0-.7-1.6 5 5 0 0 0-1-1.5 2 2 0 0 0-1.5-.3c-.3 0-.5 0-.9.3-.4.2-1 .2-1.5 0-.5-.3-.8-.8-.8-1.4 0-.4 0-.6-.2-.9a2 2 0 0 0-1-1C13.4 2 12.9 2 12 2c-1 0-1.4 0-1.8.2a2 2 0 0 0-1 1l-.2.9c0 .6-.3 1-.8 1.4-.5.2-1 .2-1.5 0l-.9-.3c-.5-.1-1 0-1.4.3-.4.3-.6.7-1 1.5l-.5.9"
      />
    </g>
  </svg>
);

export default SettingsIcon;
