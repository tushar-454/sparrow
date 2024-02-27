import PropType from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';

import navItemsData from '../../Database/navItemsData';
import NavItem from './NavItem';
import UserInfo from './UserInfo';

const NavItems = ({ showNav, showNavFunc }) => {
  return (
    <div
      className={`fixed top-0 z-50 flex h-screen w-72 flex-col-reverse items-end justify-end gap-4 border-l-4 border-apple-700 bg-apple-100 p-8 transition-all duration-500 md:static md:right-0 md:top-0 md:h-auto md:w-auto md:flex-row md:items-center md:justify-center md:border-none md:bg-transparent md:p-0 ${
        showNav ? '-right-0' : '-right-80'
      }`}
    >
      {/* nav show button */}
      <div className='absolute left-4 top-4 block md:hidden'>
        <IoCloseOutline
          onClick={() => showNavFunc(false)}
          className='hover:text-2 cursor-pointer rounded-full bg-apple-700 p-2 text-4xl text-white transition-all duration-300 ease-in-out hover:bg-apple-800'
        />
      </div>
      {/* nav items */}
      <nav className='w-full md:w-auto'>
        <ul className='flex w-full flex-col items-center justify-center gap-4 md:w-auto md:flex-row'>
          {navItemsData?.map((navitem, index) => (
            <NavItem key={index} navitem={navitem} showNavFunc={showNavFunc} />
          ))}
        </ul>
      </nav>
      {/* logged in user info */}
      <UserInfo />
    </div>
  );
};
NavItems.propTypes = {
  showNav: PropType.bool.isRequired,
  showNavFunc: PropType.func.isRequired,
};
export default NavItems;
