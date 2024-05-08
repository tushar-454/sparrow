import applestore from '../../Assets/applestore.svg';
import playstore from '../../Assets/playstore.svg';
import Logo from '../Header/Logo';
import Container from '../Shared/Container';
import BottomFooter from './BottomFooter';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className='bg-[#1E1E1E] text-white'>
      <Container>
        <div className='flex flex-col-reverse items-center justify-between gap-5 py-5 md:flex-row'>
          <div className='flex w-full flex-col items-center space-y-2 md:w-1/2 md:items-start md:space-y-4 lg:w-1/3'>
            <Logo />
            <p className='text-center'>
              Sparrow provides fast, secure and convenient money transfer via
              web to the people of Bangladesh
            </p>

            <h2 className='text-xl font-bold'>Download Sparrow App</h2>
            <div className='flex gap-3'>
              <a href='#'>
                <img src={playstore} alt='playstore' />
              </a>
              <a href='#'>
                <img src={applestore} alt='appstore' />
              </a>
            </div>
          </div>
          <FooterLinks />
        </div>
        <BottomFooter />
      </Container>
    </footer>
  );
};

export default Footer;
