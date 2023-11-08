import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const JobDetails = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const id = useParams();
  const axios = useAxiosSecure();
  const getJobDetails = async () => {
    const jobDetails = await axios.get(`/jobDetails/${id.id}`);
    return jobDetails;
  };
  const {
    isLoading,
    isError,
    data: jobDetails,
  } = useQuery({
    queryKey: ['jobDetails'],
    queryFn: getJobDetails,
  });

  if (isLoading) {
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
  if (isError) {
    return (
      <div className="w-fit mx-auto text-4xl text-center font-bold py-36 ">
        Error: {'Something went wrong'}
      </div>
    );
  }

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const deadline = e.target.deadline.value;
    const buyerEmail = e.target.buyerEmail.value;
    const biddersEmail = e.target.biddersEmail.value;
    const bidedJob = {
      name: jobDetails?.data?.name,
      buyerEmail,
      biddersEmail,
      jobTitle: jobDetails?.data?.jobTitle,
      buyerDeadline: jobDetails?.data?.deadline,
      bidderDeadline: deadline,
      buyerPhotoUrl: jobDetails?.data?.photoUrl,
      biddersPhotoUrl: user?.photoURL,
      category: jobDetails?.data?.category,
      buyerMinimumPrice: jobDetails?.data?.minimumPrice,
      buyerMaximumPrice: jobDetails?.data?.maximumPrice,
      biddersPrice: parseInt(price),
    };

    axios
      .post('/bidedJob', bidedJob)
      .then((response) => {
        console.log(response?.data);
        Swal.fire('Success', 'Bid Success', 'success');
        navigate('/my-bids');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>SkillSwapr | Bid Request</title>
      </Helmet>
      <div className="hero py-10 md:py-16 container mx-auto bg-base-300 rounded-lg">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl flex gap-4 items-center font-bold">
              <div className="avatar">
                <div className="w-24 mask mask-hexagon">
                  <img src={jobDetails?.data?.photoUrl} alt="image" />
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
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              Place Your Bid
            </button>
          </div>
        </div>
      </div>

      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <div method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>
          </div>
          <form className="w-11/12 text-center" onSubmit={handleModalSubmit}>
            <label className="label ml-[12%]">
              <span className="label-text">Price</span>
            </label>
            <input
              required
              name="price"
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label ml-[12%]">
              <span className="label-text">Dead Line?</span>
            </label>
            <input
              required
              name="deadline"
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label ml-[12%]">
              <span className="label-text">Your Email</span>
            </label>
            <input
              defaultValue={user?.email}
              disabled
              name="biddersEmail"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label ml-[8%] md:ml-[12%]">
              <span className="label-text">Buyer Email</span>
            </label>
            <input
              defaultValue={jobDetails.data?.email}
              disabled
              name="buyerEmail"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              disabled={user?.email === jobDetails?.data?.email}
              className=" block mx-auto mt-5 btn btn-primary"
              type="submit"
              value="Bid on the project"
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
