import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
const Nav = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    // Logged out
    Swal.fire('Logged Out', 'Log Out Success', 'success');
    navigate('/');
  };
  const navLinks = (
    <>
      <li className="font-bold">
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={'/add-job'}>Add Job</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={`/my-bids/${user?.email}`}>My Bids</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={'/my-posted-jobs'}>My Posted Job</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to={`/bid-requests/${user?.email}`}>Bid Requests</NavLink>
      </li>
    </>
  );

  const loginAndLogOutButton = (
    <>
      <li className="font-semibold btn">
        <button>
          <NavLink to={'/login'}>Login</NavLink>
        </button>
      </li>
      <li className="font-semibold btn">
        <button>
          <NavLink to={'/register'}>Sign Up</NavLink>
        </button>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-200 h-16 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={'/'}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-end">
          {user ? undefined : (
            <ul className="flex gap-3">{loginAndLogOutButton}</ul>
          )}
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="Profile_Image" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={'/profile'} className="justify-between">
                    {user?.displayName}
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/settings'}>Settings</Link>
                </li>
                <li>
                  {user && <button onClick={handleLogOut}>Log Out</button>}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
