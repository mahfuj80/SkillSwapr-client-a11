import { PropTypes } from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-fit mx-auto text-4xl text-center font-bold py-36 ">
        Loading... <br />
        <span className="loading loading-dots loading-xl"></span>
        <span className="loading loading-dots loading-xl"></span>
        <span className="loading loading-dots loading-xl"></span>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={'/login'} state={location.pathname}></Navigate>;
};

PrivetRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoutes;
