import { FC } from 'react';
import {
  TwitterIcon,
  MobileIcon,
  InstagramIcon,
  FacebookIcon,
  MarkerIcon,
} from '../../assets/icons';

const DesktopNav: FC = () => (
  <div className="container mx-auto hidden max-w-[90%] space-y-6 py-10 text-backgroundColor200 md:block">
    <h2> Campus Hub </h2>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <h3 className="mb-5 font-rubik text-lg font-bold capitalize">
          Contact Us
        </h3>
        <ul className="space-y-2">
          <li className="flex gap-2.5">
            <span className="rounded-full border p-1">
              <MobileIcon color="fill-white" />
            </span>
            {' '}
            090124127667
          </li>
          <li className="flex gap-2.5">
            <span className="rounded-full border p-1">
              <MarkerIcon color="fill-white" />
            </span>
            {' '}
            location
          </li>
          <li>hello@campushub.ng</li>
        </ul>
      </div>
      <div>
        <h3 className="mb-5 font-rubik text-lg font-bold capitalize">
          Follow our social media
        </h3>
        <ul className="space-y-2">
          <li className="flex gap-2.5">
            <span className="rounded-full border p-1">
              <FacebookIcon color="fill-white" />
            </span>
            {' '}
            Facebook
          </li>
          <li className="flex gap-2.5">
            <span className="rounded-full border p-1">
              <InstagramIcon color="fill-white" />
            </span>
            {' '}
            Instagram
          </li>
          <li className="flex gap-2.5">
            <span className="rounded-full border p-1">
              <TwitterIcon color="fill-white" />
              {' '}
            </span>
            {' '}
            Twitter
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-5 font-rubik text-lg font-bold capitalize">
          Useful Links
        </h3>
        <div className="grid grid-cols-2">
          <ul className="space-y-2">
            <li> About Us</li>
            <li> Privacy Policy</li>
            <li> Terms of Use</li>
          </ul>
          <ul className="space-y-2">
            <li> Safety Tips </li>
            <li> Contact Us</li>
            <li> FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default DesktopNav;
