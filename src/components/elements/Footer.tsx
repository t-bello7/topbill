import { FC } from 'react';
import { MobileNav } from '../molecules';

const Footer: FC = () => (
  <footer className="fixed w-full bg-white dark:bg-darkBackgroundColor md:static md:bg-primaryColor">
    <MobileNav />
    <div className="hidden bg-secondaryColor py-5 md:block">
      <p className="text-center text-white ">
        2023 Check - Biggest Marketplace for Nigerian Students. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
