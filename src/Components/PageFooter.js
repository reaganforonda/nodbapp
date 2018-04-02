import React from "react";
import "./CSS/reset.css";
import "./CSS/footer.css";


function PageFooter() {
  return (
    <footer>
      <div className="footer-section">
        <h3>ABOUT</h3>
        <p>Created by Reagan Foronda for <a className='standard-link' href='http://www.devmounta.in' target='blank'>DevMountain</a> WebDev Cohort 35</p>

        <div className="contact-section">
          <form action="https://www.linkedin.com/in/forondareagan/" target='blank'>
            <button type="submit" className="social-button linkedIn-button">
              <i className=" social-icon fab fa-linkedin fa-3x" />
              LinkedIn
            </button>
          </form>

          <form action="https://github.com/reaganforonda" target='blank'> 
            <button type="submit" className="social-button github-button">
              <i className="social-icon fab fa-github fa-3x" />
              GitHub
            </button>
          </form>

          <form action="https://twitter.com/ForondaReagan" target='blank'>
            <button type="submit" className="social-button twitter-button">
              <i className="social-icon fab fa-twitter fa-3x" />
              Twitter
            </button>
          </form>
        </div>
        <p className='copyr'>&copy; Year of the Dog</p>

      </div>
    </footer>
  );
}

export default PageFooter;
