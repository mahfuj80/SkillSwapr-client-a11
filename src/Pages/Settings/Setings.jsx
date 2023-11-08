import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Settings Page is Under Processing...
            </h1>
            <p className="py-6">
              Please wait some days to get setting facility. I am trying to give
              here many facility. So please be patience....
            </p>
            <Link to={'/'}>
              <button className="btn btn-primary">Go To Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
