import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header, Footer } from '../elements';

const Layout: FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="font-nunitoSans dark:bg-darkBackgroundColor dark:text-white">
      <Header />
      <hr className="my-2 bg-backgroundColor" />
      <main
        className={`container mx-auto ${
          pathname === '/' ? 'mt-[10vh]' : 'mt-[16vh]'
        } max-w-[90%] space-y-5 text-textColor dark:text-white`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
