import "./logo.css";
import prand from "./Logo.png"
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
    <Link to="/MovielixReactApp">
      <img src={prand} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
