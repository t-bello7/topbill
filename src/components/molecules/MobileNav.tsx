import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Button } from '../atoms';
import {
  HomeIcon,
  MessageIcon,
  StarIcon,
  UserIcon,
  SquarePlusIcon,
} from '../../assets/icons';

const navLinks = [
  {
    id: uuidv4(),
    name: 'home',
    url: '/',
    icon: <HomeIcon color="fill-backgroundColor300" />,
  },
  {
    id: uuidv4(),
    name: 'saved',
    url: '/saved',
    icon: <StarIcon color="fill-backgroundColor300" />,
  },
  {
    id: uuidv4(),
    name: 'sell',
    url: '/sell',
    icon: <SquarePlusIcon color="fill-backgroundColor300" />,
  },
  {
    id: uuidv4(),
    name: 'message',
    url: '/message',
    icon: <MessageIcon color="fill-backgroundColor300" />,
  },
  {
    id: uuidv4(),
    name: 'profile',
    url: '/profile',
    icon: <UserIcon color="fill-backgroundColor300" />,
  },
];

const MobileNav = () => (
  <nav className="container mx-auto grid max-w-[95%] grid-cols-5 shadow-inner md:hidden ">
    {navLinks.map((item) => (
      <Link to={item.url} key={item.id}>
        <Button
          variant="iconButton"
          text={item.name}
          className="flex-col border-none bg-none [&>span]:text-xs [&>span]:capitalize [&>span]:text-backgroundColor300 "
          Icon={item.icon}
        />
      </Link>
    ))}
  </nav>
);

export default MobileNav;
