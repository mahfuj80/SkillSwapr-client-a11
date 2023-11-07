import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import { useQuery } from '@tanstack/react-query';

const Jobs = () => {
  const axios = useAxiosSecure();
  const [allJobs, setAllJobs] = useState({});
  const [category, setCategory] = useState('');

  // const {
  //   isLoading,
  //   isError,
  //   data: allJobs,
  // } = useQuery({
  //   queryKey: ['jobDetails', category, axios],
  //   queryFn: async () => {
  //     const res = await axios.get(`/jobs?category=${category}`);
  //     return res;
  //   },
  // });
  useEffect(() => {
    axios.get(`/jobs?category=${category}`).then((res) => setAllJobs(res));
  }, [category, axios]);
  // if (isLoading) {
  //   return (
  //     <div className="w-fit mx-auto text-4xl text-center font-bold py-36 ">
  //       Loading... <br />
  //       <span className="loading loading-dots loading-xl"></span>
  //       <span className="loading loading-dots loading-xl"></span>
  //       <span className="loading loading-dots loading-xl"></span>
  //       <span className="loading loading-dots loading-xl"></span>
  //     </div>
  //   );
  // }
  // if (isError) {
  //   return (
  //     <div className="w-fit mx-auto text-4xl text-center font-bold py-36 ">
  //       Error: {'Something went wrong'}
  //     </div>
  //   );
  // }

  return (
    <section className="pt-20 lg:pt-[50px] lg:pb-[90px] px-8 md:px-14">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              JOBS
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Looking For Jobs? Find Here
            </h2>
            <p className="text-base text-body-color">
              Searching for Job Opportunities? Discover Them Here! In Need of a
              Job? Explore Opportunities Right Here!
            </p>
          </div>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory('')}>All Jobs</Tab>
          <Tab onClick={() => setCategory('web-development')}>
            Web Development
          </Tab>
          <Tab onClick={() => setCategory('graphics-design')}>
            Graphics Design
          </Tab>
          <Tab onClick={() => setCategory('digital-marketing')}>
            Digital Marketing
          </Tab>
        </TabList>

        <TabPanel>
          {allJobs?.data?.length < 1 ? (
            <div className="w-fit mx-auto text-4xl text-center font-bold py-32 ">
              No Jobs Found
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto">
              {allJobs?.data?.map((job) => (
                <div
                  key={job?._id}
                  className="card bg-base-100 shadow-xl border-gray-300 border"
                >
                  <div className="card-body">
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
                      <Link to={`/job-details/${job?._id}`}>
                        <button className="btn btn-primary">Bid Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {allJobs?.data?.length < 1 ? (
            <div className="w-fit mx-auto text-4xl text-center font-bold py-32 ">
              No Jobs Found
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto">
              {allJobs?.data?.map((job) => (
                <div
                  key={job?._id}
                  className="card bg-base-100 shadow-xl border-gray-300 border"
                >
                  <div className="card-body">
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
                      <Link to={`/job-details/${job?._id}`}>
                        <button className="btn btn-primary">Bid Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {allJobs?.data?.length < 1 ? (
            <div className="w-fit mx-auto text-4xl text-center font-bold py-32 ">
              No Jobs Found
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto">
              {allJobs?.data?.map((job) => (
                <div
                  key={job?._id}
                  className="card bg-base-100 shadow-xl border-gray-300 border"
                >
                  <div className="card-body">
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
                      <Link to={`/job-details/${job?._id}`}>
                        <button className="btn btn-primary">Bid Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {allJobs?.data?.length < 1 ? (
            <div className="w-fit mx-auto text-4xl text-center font-bold py-32 ">
              No Jobs Found
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto">
              {allJobs?.data?.map((job) => (
                <div
                  key={job?._id}
                  className="card bg-base-100 shadow-xl border-gray-300 border"
                >
                  <div className="card-body">
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
                      <Link to={`/job-details/${job?._id}`}>
                        <button className="btn btn-primary">Bid Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </section>
  );
};

// if (allJobs?.data?.length < 1) {
//   return (
//     <>
//       <div className="w-fit mx-auto text-4xl text-center font-bold py-32 ">
//         No Jobs Found
//       </div>
//     </>
//   );
// }

export default Jobs;
