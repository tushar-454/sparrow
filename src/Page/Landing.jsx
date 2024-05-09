import AccountGuide from '../Components/AccountGuide/AccountGuide';
import BannerSliders from '../Components/BannerSliders/BannerSliders';
import Features from '../Components/Features/Features';
import Footer from '../Components/Footer/Footer';
import Container from '../Components/Shared/Container';
// import GradientText from '../Components/Shared/GradientText';

const Landing = () => {
  return (
    <main>
      <BannerSliders />
      <Container>
        <Features />
        <AccountGuide />
      </Container>
      <Footer />
    </main>
  );
};

export default Landing;
