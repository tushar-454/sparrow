import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.webp';

const Logo = () => {
  return (
    <div className='h-24 w-24'>
      <Link to={'/'}>
        <img src={logo} alt='logo' className='h-full w-full rounded-full' />
      </Link>
    </div>
  );
};

export default Logo;
