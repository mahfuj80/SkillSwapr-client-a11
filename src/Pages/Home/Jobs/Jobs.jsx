import axios from 'axios';
import { useEffect, useState } from 'react';

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);

  //   get all jobs by filter and conditions
  useEffect(() => {
    axios
      .get('http://localhost:5000/jobs')
      .then((res) => setAllJobs(res?.data));
  }, []);
  return (
    <div>
      <h1>There will be all jobs: {allJobs?.length}</h1>
    </div>
  );
};

export default Jobs;
