import { Link } from "react-router-dom";
import TopLogo from "./assets/toplogo.png";

function Navbar() {
  return (
    <nav className="nav">
      <img className="top-logo" src={TopLogo} />
      <ul>
        <li>
          <Link to="/dataquest">Dataquest</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/lastyear">Last Year</Link>
        </li>
        <li>
          <Link to="/sponsors">Sponsors</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
