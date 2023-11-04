import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-slate-100">
        <div className="text-center w-fit mx-auto bg-[#13192a] p-10 rounded-lg space-y-3">
          <h2 className="text-7xl font-bold text-white">404</h2>
          <h3 className="text-white text-4xl font-bold">
            Something Went Wrong!!!
          </h3>
          <p className="text-white pb-4">
            The Page you locking for it may be deleted
          </p>
          <Link to={'/'}>
            <button className="btn bg-white text-black font-bold">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
