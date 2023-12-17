import { FC, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDarkToggle } from '../hooks';
import { Button } from '../atoms';
import {
  ModeIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from '../../assets/icons';

const navLinks = [
  {
    id: uuidv4(),
    name: 'invoices',
    url: '/invoices',
  },
  {
    id: uuidv4(),
    name: 'home',
    url: '/',
  },
  {
    id: uuidv4(),
    name: 'clients',
    url: '/clients',
  },
];
const Navbar: FC = () => {
  const { pathname } = useLocation();
  const [colorTheme, setTheme] = useDarkToggle();
  const [darkSide, setDarkSide] = useState(colorTheme === 'dark');
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setTheme(darkSide === true ? 'dark' : 'light');
    setDarkSide(!darkSide);
  };

  return (
    <div className="flex items-center gap-5">
      <ul className="flex items-center gap-6">
        {navLinks.map((item) => (
          <Link to={item.url} key={item.id}>
            <Button
              variant="iconButton"
              text={item.name}
              className="flex-col border-none bg-none [&>span]:text-xs [&>span]:capitalize [&>span]:text-backgroundColor300"
            />
          </Link>
        ))}
      </ul>

      <Button
        variant="icon"
        Icon={<SettingsIcon color="fill-primaryColor" />}
        onClick={() => navigate('/settings')}
        className="rounded-lg border-primaryColor p-2"
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
      <div className="flex items-center gap-3">
        <Button
          variant="icon"
          Icon={<UserIcon color="fill-backgroundColor100exi" />}
          className="rounded-full bg-backgroundColor100"
        />
        {/* <span>Jon Champion</span> */}
      </div>
    </div>
  );
};

export default Navbar;
