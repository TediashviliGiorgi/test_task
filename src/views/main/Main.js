import Navbar from '../../components/navBar/Navbar';
import heroImage from '../../components/images/heroImage.jpg'
import './Main.css';
import PricingSection from '../../components/pricingSection/PricingSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Footer from '../../components/footer/Footer';
const Main = () => {
  return (

    <div>
      <Navbar />
      <div className='hero'>
        <img src={heroImage} className='heroImage' />
        <div>
          <h1 className='heroTitle'>
            OPTIMAL SOLUTIONS FOR: <span>EVERYBODY</span>
          </h1>
        </div>
      </div>
      <AnimationOnScroll offset={100} delay={50} animateIn="animate__bounceIn">
        <PricingSection />
      </AnimationOnScroll>

      <Footer />
    </div>
  )
}

export default Main

