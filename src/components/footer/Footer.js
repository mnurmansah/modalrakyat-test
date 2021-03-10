import React from 'react';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <hr />
    <section className="ft-main">
      <div className="ft-main-item">
        <h2 className="ft-title">Motor</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">News</a></li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">About</h2>
        <ul>
          <li><a href="#">Latest News</a></li>
          <li><a href="#">Press Releases</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Help</h2>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Online Support</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Twitter</h2>
        <ul>
          <li>
            <a href="#">@bestwebsoft </a>
            velit, vitae tincidunt
          </li>
          <li>orci. Proin vitae auctor lectus.</li>
          <li><a href="#">http://bestwebsoft.com</a></li>
          <li>posted 2 days ago</li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Contact Info</h2>
        <ul>
          <li><a href="#">Furce nec gravida risus.</a></li>
          <li><a href="#">Pellentesque eros magna, lobortis</a></li>
          <br />
          <li>
            P.:
            <a href="#">(555) 366 - 00 - 00</a>
          </li>
          <li>
            E.:
            <a href="#">sales@bestwebsoft.com</a>
          </li>
        </ul>
      </div>
    </section>
    <hr />
  </div>
);

export default Footer;
