import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';

const Login = () => {
  const { googleSignIn, githubSignIn, loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate(location?.state ? location.state : '/');
      return;
    }
  }, [navigate, user, location]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    loginUser(email, password)
      .then(() => {
        // Signed in
        Swal.fire('Logged In', 'You Successfully Logged In', 'success');
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire('Something Went Wrong!!', `${errorMessage}`, 'error');
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        // Signed in
        Swal.fire('Logged In', 'You Successfully Logged In', 'success');
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire('Something Went Wrong!!', `${errorMessage}`, 'error');
      });
  };

  const handleGithub = () => {
    githubSignIn()
      .then(() => {
        // Signed in
        Swal.fire('Logged In', 'You Successfully Logged In', 'success');
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire('Something Went Wrong!!', `${errorMessage}`, 'error');
      });
  };
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-100 lg:py-20 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="w-fit mx-auto" src={logo} alt="logo" />
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <p className="py-6 text-center">
              Provide Valid Email and Password That you previously <br /> used
              for REgistration. For login. Or, Login with your Github/Google
              Instant.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <button className="label-text-alt link link-hover">
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <p className="mb-2">
                  New Here Please
                  <Link className="text-green-600 underline" to={'/register'}>
                    Register
                  </Link>
                </p>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                ></input>
              </div>
            </form>
            <div className="px-8 pb-8 text-center flex gap-2 flex-col">
              <p className="text-xl font-bold mb-3">Sign in with</p>
              <div className="flex gap-4 items-center justify-center">
                <button className="btn btn-primary">
                  <FaGoogle
                    onClick={handleGoogle}
                    className="text-2xl text-white"
                  ></FaGoogle>
                </button>
                <button className="btn btn-primary">
                  <FaGithub
                    onClick={handleGithub}
                    className="text-2xl text-white"
                  ></FaGithub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
