import About from './About';
import Faq from './Faq/Faq';
import Slider from './Slider';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <h1 className="h-32">This is home</h1>
      <About></About>
      <Faq></Faq>
    </div>
  );
};

export default Home;
