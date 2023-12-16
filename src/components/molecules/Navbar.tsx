import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDarkToggle } from '../hooks';
import { Button } from '../atoms';
import {
  ModeIcon,
  SearchIcon,
  NavIcon,
  UserIcon,
  SquarePlusIcon,
} from '../../assets/icons';

const Navbar: FC = () => {
  const { pathname } = useLocation();
  const [colorTheme, setTheme] = useDarkToggle();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'dark',
  );

  const toggleDarkMode = () => {
    setTheme(darkSide === true ? 'dark' : 'light');
    setDarkSide(!darkSide);
  };

  return (
    <div className="item-center flex gap-5">
      <Button
        variant="icon"
        Icon={<SearchIcon color="fill-primaryColor" />}
        className="hidden rounded-lg border-primaryColor p-2 md:block"
        styleType="primary"
      />
      <Button
        variant="icon"
        Icon={<NavIcon color="fill-primaryColor" />}
        className="hidden rounded-lg border-primaryColor p-2 md:block"
        styleType="primary"
      />
      <Button
        variant="iconButton"
        Icon={<SquarePlusIcon color="fill-primaryColor" />}
        text="Sell"
        className="hidden rounded-lg md:flex"
        styleType="primary"
      />
      {pathname === '/' ? (
        <Button
          variant="icon"
          Icon={<ModeIcon color="fill-primaryColor dark:fill-white" />}
          className="rounded-full dark:border-white"
          onClick={toggleDarkMode}
          styleType="primary"
        />
      ) : (
        <Button
          variant="icon"
          Icon={<SearchIcon color="fill-primaryColor" />}
          className="border-none"
          styleType="primary"
        />
      )}
      <div className="hidden items-center gap-3 md:flex">
        <Button
          variant="icon"
          Icon={<UserIcon color="fill-backgroundColor100exi" />}
          className="rounded-full bg-backgroundColor100"
        />
        <span>Jon Champion</span>
      </div>
    </div>
  );
};

export default Navbar;
