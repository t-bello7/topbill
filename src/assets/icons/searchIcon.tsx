import { FC } from 'react';
import { IconInterface } from '../../utils';

const SearchIcon: FC<IconInterface> = ({ color }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={color}
      id="Vector"
      d="M19.7663 18.5889L14.7962 13.6188C16.1506 11.9623 16.8165 9.84866 16.6562 7.71497C16.4959 5.58128 15.5216 3.59083 13.9349 2.15534C12.3482 0.719841 10.2704 -0.0508742 8.13136 0.00260835C5.99233 0.0560909 3.95568 0.929679 2.44268 2.44268C0.929679 3.95568 0.0560909 5.99233 0.00260835 8.13136C-0.0508742 10.2704 0.719841 12.3482 2.15534 13.9349C3.59083 15.5216 5.58128 16.4959 7.71497 16.6562C9.84866 16.8165 11.9623 16.1506 13.6188 14.7962L18.5889 19.7663C18.7459 19.9179 18.9563 20.0019 19.1746 20C19.3929 19.9981 19.6017 19.9105 19.7561 19.7561C19.9105 19.6017 19.9981 19.3929 20 19.1746C20.0019 18.9563 19.9179 18.7459 19.7663 18.5889ZM8.35314 15.0143C7.03568 15.0143 5.74781 14.6237 4.65238 13.8917C3.55695 13.1598 2.70317 12.1194 2.199 10.9023C1.69483 9.6851 1.56292 8.34575 1.81994 7.05361C2.07697 5.76146 2.71138 4.57455 3.64297 3.64297C4.57455 2.71138 5.76146 2.07697 7.05361 1.81994C8.34575 1.56292 9.6851 1.69483 10.9023 2.199C12.1194 2.70317 13.1598 3.55695 13.8917 4.65238C14.6237 5.74781 15.0143 7.03568 15.0143 8.35314C15.0124 10.1192 14.3099 11.8123 13.0611 13.0611C11.8123 14.3099 10.1192 15.0124 8.35314 15.0143Z"
    />
  </svg>
);

export default SearchIcon;
