import { Link } from 'react-router-dom';

const NavItem = () => {
  return (
    <li className='w-full md:w-auto'>
      <Link
        to={'/'}
        className='block w-full rounded-full bg-gradient-to-l from-apple-500 to-apple-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:from-apple-600 hover:to-apple-800 md:inline-block md:w-auto'
      >
        Nav Item
      </Link>
    </li>
  );
};

export default NavItem;
