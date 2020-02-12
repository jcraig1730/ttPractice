import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../state/State";

const Navbar = () => {
  const [{ user }, dispatch] = useGlobalState();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Free Food
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"} href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${user ? "d-none" : ""}`}
              to="/donors/signup"
              href="#"
            >
              Become a Food Donor
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${user ? "d-none" : ""}`}
              to="/charities/signup"
              href="#"
            >
              Become a Recipient
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/map" href="#">
              View Offers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${user ? "d-none" : ""}`}
              to="/signin"
              href="#"
            >
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${user ? "" : "d-none"}`}
              to="/donate"
              href="#"
            >
              Donate
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${user ? "" : "d-none"}`}
              to="/signout"
              href="#"
            >
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
