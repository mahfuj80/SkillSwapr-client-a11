import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const id = useParams();
  // console.log(id.id);
  const axios = useAxiosSecure();
  const getJobDetails = async () => {
    const jobDetails = await axios.get(`/jobDetails/${id.id}`);
    return jobDetails;
  };
  const {
    isLoading,
    isError,
    data: jobDetails,
    error,
  } = useQuery({
    queryKey: ['jobDetails'],
    queryFn: getJobDetails,
  });

  // console.log(jobDetails);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(jobDetails.data);
  return (
    <div>
      <div className="hero py-10 md:py-16 container mx-auto bg-base-300 rounded-lg">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl flex gap-4 items-center font-bold">
              <div className="avatar">
                <div className="w-24 mask mask-hexagon">
                  <img src={jobDetails?.data?.photoUrl} />
                </div>
              </div>
              {jobDetails?.data?.name}
            </h1>
            <p className="py-2 text-xl">
              <span className="font-semibold">Job Title:</span>{' '}
              <span>{jobDetails?.data?.jobTitle}</span>
            </p>
            <p className="py-2">
              <span className="font-semibold">Dead Line:</span>{' '}
              <span>{jobDetails?.data?.deadline}</span>
            </p>
            <p className="py-1">
              <span className="font-semibold">Price Range:</span>{' '}
              <span>{jobDetails?.data?.minimumPrice}$</span> to{' '}
              <span>{jobDetails?.data?.maximumPrice}$</span>
            </p>
            <p className="py-6">{jobDetails?.data?.description}</p>
            <button className="btn btn-primary">Place Your Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
