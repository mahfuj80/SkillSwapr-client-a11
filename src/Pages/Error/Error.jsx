import { Link } from 'react-router-dom';
import errorImage from '../../assets/images/404.gif';

const Error = () => {
  return (
    <div>
      <div className="h-full py-10 w-full flex items-center justify-center bg-slate-100">
        <div className="text-center w-fit mx-auto bg-[#13192a] p-10 rounded-lg space-y-3">
          <img
            className="h-[300px] w-full rounded-lg"
            src={errorImage}
            alt="Error_Image"
          />
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
