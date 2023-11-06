import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);

  //   get all jobs by filter and conditions
  useEffect(() => {
    axios
      .get('http://localhost:5000/jobs')
      .then((res) => setAllJobs(res?.data));
  }, []);
  console.log(allJobs[0]);
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
          <Tab>All Jobs</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <Tab>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto">
              {allJobs.map((job) => (
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
                    <p>{job?.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Bid Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Jobs;
