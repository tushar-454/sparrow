import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.webp';
const Logo = ({ center = false }) => {
  return (
    <div className={`h-24 w-24 ${center && 'flex w-auto justify-center'}`}>
      <Link to={'/'}>
        <img src={logo} alt='logo' className='h-full w-full rounded-full' />
      </Link>
    </div>
  );
};
Logo.propTypes = {
  center: PropTypes.bool,
};
export default Logo;
