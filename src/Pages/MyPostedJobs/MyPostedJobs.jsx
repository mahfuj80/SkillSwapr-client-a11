import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useEffect } from 'react';

const MyPostedJobs = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const [myJobs, setMyJobs] = useState([]);
  const email = user?.email;
  console.log(email);
  useEffect(() => {
    axios.get(`/jobs/${email}`).then((res) => setMyJobs(res?.data));
  }, [axios, email]);
  return (
    <div>
      <h1>This is My Posted Job Page {myJobs?.length}</h1>
    </div>
  );
};

export default MyPostedJobs;
