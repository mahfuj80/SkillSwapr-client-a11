import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyBids = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const {
    isError,
    isLoading,
    data: myBids,
  } = useQuery({
    queryKey: ['myBids', user],
    queryFn: async () => {
      const res = await axios.get(`/bidedJobs/email@eee.com`);
      return res;
    },
  });
  // console.log(myBids);
  if (!user?.email) {
    return (
      <div className="w-fit text-center mx-auto text-4xl font-bold py-36 ">
        Add Your Email First <br />
        Otherwise You will get error
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-fit mx-auto text-4xl text-center font-bold py-36 ">
        Loading...
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

  return (
    <section className="container mx-auto">
      <div className=" pt-10 mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Bided Jobs
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Jobs That You Bid You will find here.
            </h2>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto pt-5 pb-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              {/* <th>Profile Image</th> */}
              <th>Profile Image</th>
              <th>Job Title</th>
              <th>Email</th>
              <th>Dead Line</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {myBids?.data?.map((job) => (
              <tr key={job?._id} className="hover:bg-gray-100">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={job?.buyerPhotoUrl}
                        alt="Profile Picture Avatar"
                      />
                    </div>
                  </div>
                </td>
                <td>{job?.jobTitle}</td>
                <td>{job?.buyerEmail}</td>
                <td>{job?.buyerDeadline}</td>
                <td>
                  {job?.status
                    ? job?.status === 'accepted'
                      ? 'In Progress'
                      : job?.status === 'canceled'
                      ? 'Canceled'
                      : 'Pending'
                    : 'Pending'}
                </td>
                <th>
                  {job?.status === 'accepted' ? (
                    <button className="btn btn-ghost btn-sm">Complete</button>
                  ) : (
                    ''
                  )}
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Profile Image</th>
              <th>Job Title</th>
              <th>Email</th>
              <th>Dead Line</th>
              <th>Status</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default MyBids;
