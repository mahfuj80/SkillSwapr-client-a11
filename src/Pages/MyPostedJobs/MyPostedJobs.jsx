import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useEffect } from 'react';

const MyPostedJobs = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const [myJobs, setMyJobs] = useState([]);
  const email = user?.email;
  useEffect(() => {
    axios.get(`/jobs/${email}`).then((res) => setMyJobs(res?.data));
  }, [axios, email]);
  console.log(myJobs);
  return (
    <section className="pt-20 lg:pt-[50px] lg:pb-[90px] px-8 md:px-14">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Your JOBS
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Jobs That You Posted
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto">
        {myJobs?.map((job) => (
          <div key={job?._id} className="card bg-neutral text-neutral-content ">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{job?.jobTitle}</h2>
              <p>
                <span className="font-semibold">Dead Line:</span>{' '}
                <span className="text-red-400">{job?.deadline}</span>
              </p>
              <p>
                <span className="font-semibold">Price Range:</span>{' '}
                {job?.minimumPrice}$ to {job?.maximumPrice}$
              </p>
              <p>{job?.description.slice(0, 59)}...</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyPostedJobs;
