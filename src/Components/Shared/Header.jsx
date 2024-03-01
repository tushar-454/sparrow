import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import useAuth from '../../Hook/useAuth';
import Logo from '../Header/Logo';
import NavItems from '../Header/NavItems';
import LinkBtn from '../UI/LinkBtn';
import Container from './Container';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { userInfo } = useAuth();
  return (
    <header className='bg-apple-400'>
      <Container>
        {/* header wrapper */}
        <div className='relative flex items-center justify-between'>
          {/* logo  */}
          <Logo />
          {/* nav show button */}
          {userInfo && (
            <div className='absolute right-0 top-4 block md:hidden'>
              <HiOutlineMenu
                onClick={() => setShowNav(true)}
                className='text-6xl text-white cursor-pointer'
              />
            </div>
          )}
          {/* show menu or create an account button based on user login status */}
          {userInfo ? (
            <>
              {/* nav items with logged in user info */}
              <NavItems showNav={showNav} showNavFunc={setShowNav} />
            </>
          ) : (
            <>
              {/* create an account button */}
              <LinkBtn to={'/register'}>Create an Account</LinkBtn>
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
