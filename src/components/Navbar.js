import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav>
      <ul>
        <Link 
         to="/"
        >
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <NavLink 
          to="/profile"
          // only works with nav link to get nav data and is active for styling
          className={(navData) => navData.isActive ? "link-active" : "" }
        >
          <li>Profile</li>
        </NavLink>
      </ul>
    </nav>
  </>
)

export default Navbar;