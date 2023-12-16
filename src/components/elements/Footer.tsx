import { FC } from 'react';
import { MobileNav, DesktopNav } from '../molecules';

const Footer: FC = () => (
  <footer className="fixed bottom-0 w-full bg-white md:static dark:bg-darkBackgroundColor md:bg-primaryColor">
    <MobileNav />
    <DesktopNav />
    <div className="hidden bg-secondaryColor py-5 md:block">
      <p className="text-center text-white ">
        2022 Varsityhub - Biggest Marketplace for Nigerian Students. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
