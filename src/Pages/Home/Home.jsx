import { Helmet } from 'react-helmet-async';
import About from './About/About';
import Faq from './Faq/Faq';
import Jobs from './Jobs/Jobs';
import Slider from './Slider/Slider';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>SkillSwapr | Home</title>
      </Helmet>
      <Slider></Slider>
      <Jobs></Jobs>
      <About></About>
      <Faq></Faq>
    </div>
  );
};

export default Home;
