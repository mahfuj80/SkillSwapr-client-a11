import About from './About';
import Faq from './Faq/Faq';
import Jobs from './Jobs/Jobs';
import Slider from './Slider';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Slider></Slider>
      <Jobs></Jobs>
      <About></About>
      <Faq></Faq>
    </div>
  );
};

export default Home;
