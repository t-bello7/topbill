import { FC } from 'react';
import { IconInterface } from '../../utils';

const ReportIcon: FC<IconInterface> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 1000 1000"
  >
    <path
      className={color}
      d="M168.6 12a97.7 97.7 0 0 0-62.1 52L99 80l-.7 414c-.4 277.4.2 417.4 1.7 424a95.1 95.1 0 0 0 52.3 63.8l15.7 7.6 325.8.6c217.4.4 329-.2 335.5-1.6a96.7 96.7 0 0 0 70.2-69.3c1.5-5.9 2.3-105 2.3-281 0-261.6-.2-272.3-3.9-280C893 347.8 560.6 15 552 11.9c-7-2.7-372.3-2.5-383.4.2zm317 190.3c0 143.3.3 145.1 11.6 164.8a104 104 0 0 0 42.7 38.2l15.8 7.5 142.7.6 142.5.6v249.5c0 189.2-.6 250.7-2.5 254.7-5.2 11.8 14.9 11.2-338.5 11.2s-333.3.6-338.6-11.2c-3.9-8.1-3.5-830.2.4-837.1 5.9-10.6 1.2-10.2 168.3-10.4h155.7v131.6zm201 150.2c-135.2.4-133.8.6-138-11-1.2-3-2-55.2-2-129.3V88l131.9 132 132 131.9-123.9.6z"
    />
    <path className={color} d="M298.9 543.7v30.5h402v-60.9h-402v30.4z" />
    <path className={color} d="M298.9 675.6v30.5h402v-60.9h-402v30.4z" />
    <path className={color} d="M298.9 803.5V834h190.8V773H299v30.4z" />
  </svg>
);

export default ReportIcon;
