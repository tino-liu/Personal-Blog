import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    // Left
    <div className="not-found-wrapper">
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo/blacklogo.png" alt="brand" />
            </Link>
          </div>
          <div className="copyright">
            <p>
              &copy; 2021 <br /> Tino Liu
            </p>
          </div>
        </div>
      </div>
      // Right
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_error">
                <div className="tokyo_tm_error_inner">
                  <h1>404!</h1>
                  <h3>Page not found</h3>
                  <p>There is no such page! Turn back!</p>
                  <Link to="/" className="ib-button">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
  );
};

export default NotFound;
