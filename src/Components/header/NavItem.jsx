import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItem = ({ navitem, showNavFunc }) => {
  return (
    <li onClick={() => showNavFunc(false)} className='w-full md:w-auto'>
      <Link
        to={navitem.path ?? '/'}
        className={`block w-full rounded-full bg-gradient-to-l from-apple-500 to-apple-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:from-apple-600 hover:to-apple-800 md:inline-block md:w-auto`}
      >
        {navitem.name ?? 'Nav Item'}
      </Link>
    </li>
  );
};
NavItem.propTypes = {
  navitem: PropTypes.object.isRequired,
  showNavFunc: PropTypes.func.isRequired,
};
export default NavItem;
