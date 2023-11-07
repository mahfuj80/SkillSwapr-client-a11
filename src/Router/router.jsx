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
        element: <AddJobs></AddJobs>,
      },
      {
        path: '/updateJob/:id',
        element: <UpdateJob></UpdateJob>,
      },
      {
        path: '/job-details/:id',
        element: <JobDetails></JobDetails>,
      },
      {
        path: '/my-bids',
        element: <MyBids></MyBids>,
      },
      {
        path: '/my-posted-jobs',
        element: <MyPostedJobs></MyPostedJobs>,
      },
      {
        path: '/bid-requests/:email',
        element: <BidRequests></BidRequests>,
      },
    ],
  },
]);

export default router;
