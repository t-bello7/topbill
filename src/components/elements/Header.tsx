import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomInput, Button } from '../atoms';
import { SearchIcon, BackButtonIcon } from '../../assets/icons';
import { Navbar } from '../molecules';

const Header: FC = () => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate(-1);
  };
  return (
    <header className="fixed top-0 z-10 mx-auto w-full space-y-4 bg-white px-4 py-5 dark:bg-darkBackgroundColor dark:text-white">
      <div className="flex items-center justify-between">
        {pathname === '/' ? (
          <h2 className="font-roboto"> Campus Hub </h2>
        ) : (
          <>
            <Button
              onClick={handleNavigateBack}
              variant="icon"
              Icon={
                <BackButtonIcon color="fill-primaryColor dark:fill-white" />
              }
              className="rounded-lg border-none md:hidden"
              styleType="primary"
            />
            <span className="capitalize md:hidden">{state?.pageName}</span>
            <h2 className="hidden font-roboto md:block"> Campus Hub </h2>
          </>
        )}
        <Navbar />
      </div>
      {pathname === '/' ? (
        <CustomInput
          inputType="inputIcon"
          placeholder="Search"
          Icon={<SearchIcon color="fill-primaryColor dark:fill-white" />}
          className="dark:bg-backgroundColor400 md:hidden dark:[&_.ant-input]:bg-backgroundColor400 dark:[&_.ant-input]:text-white dark:[&_.ant-input]:placeholder-backgroundColor300"
        />
      ) : (
        ''
      )}
    </header>
  );
};

export default Header;
