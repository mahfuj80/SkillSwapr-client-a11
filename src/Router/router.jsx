import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import AddJobs from '../Pages/AddJobs/AddJobs';
import JobDetails from '../Pages/JobDetails/JobDetails';
import MyBids from '../Pages/MyBids/MyBids';
import MyPostedJobs from '../Pages/MyPostedJobs/MyPostedJobs';
import BidRequests from '../Pages/BidRequests/BidRequests';
import UpdateJob from '../Pages/UpdateJob/UpdateJob';
import PrivetRoutes from './PrivetRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Registration></Registration>,
      },
      {
        path: '/add-job',
        element: (
          <PrivetRoutes>
            <AddJobs></AddJobs>
          </PrivetRoutes>
        ),
      },
      {
        path: '/updateJob/:id',
        element: (
          <PrivetRoutes>
            <UpdateJob></UpdateJob>
          </PrivetRoutes>
        ),
      },
      {
        path: '/job-details/:id',
        element: (
          <PrivetRoutes>
            <JobDetails></JobDetails>
          </PrivetRoutes>
        ),
      },
      {
        path: '/my-bids',
        element: (
          <PrivetRoutes>
            <MyBids></MyBids>
          </PrivetRoutes>
        ),
      },
      {
        path: '/my-posted-jobs',
        element: (
          <PrivetRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivetRoutes>
        ),
      },
      {
        path: '/bid-requests',
        element: (
          <PrivetRoutes>
            <BidRequests></BidRequests>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

export default router;
