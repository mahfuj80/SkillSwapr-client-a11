import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Nav from '../Components/Nav/Nav';

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
