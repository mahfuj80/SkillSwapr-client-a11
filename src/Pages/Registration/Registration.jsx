import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import auth from '../../Firebase/Firebase';
import logo from '../../assets/logo.png';

const Registration = () => {
  const { user, createUser, updateProfile } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(location?.state ? location.state : '/');
      return;
    }
  }, [navigate, user]);
  const handleResister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const image = form.get('image');
    const email = form.get('email');
    const password = form.get('password');

    // Check password length
    if (password.length < 6) {
      Swal.fire({
        title: 'Error!',
        text: 'Password should be at least 6 characters long.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    // Check for capital letter
    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: 'Password should contain at least one capital letter.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    // Check for special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire({
        title: 'Error!',
        text: 'Password should contain at least one special character.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        })
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
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire('Something Went Wrong!!', `${errorMessage}`, 'error');
      });
  };
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-100 md:py-20 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="w-fit mx-auto" src={logo} alt="logo" />
            <h1 className="text-5xl font-bold text-center">Register Now!</h1>
            <p className="py-6 text-center">
              Please Provide Your Email And Password and Name For Registration.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleResister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  name="image"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  Already have an account{' '}
                  <Link className="text-green-600 underline" to={'/login'}>
                    Login
                  </Link>
                </p>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value={'Resister'}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
