import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="footer-info">
              <div className="footer-item">
                <div className="footer-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="footer-text">
                  <p>123 Main Street</p>
                  <p>Anytown, USA 12345</p>
                </div>
              </div>
              <div className="footer-item">
                <div className="footer-icon">
                  <FaEnvelope />
                </div>
                <div className="footer-text">
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="footer-item">
                <div className="footer-icon">
                  <FaPhone />
                </div>
                <div className="footer-text">
                  <p>555-555-1234</p>
                </div>
              </div>
              <div className="footer-item">
                <div className="footer-icon">
                  <FaUser />
                </div>
                <div className="footer-text">
                  <p>Contact Us</p>
                  <p>Monday - Friday: 9am - 5pm</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="footer-item">
              <h5>Terms and Conditions</h5>
              <p>By using this site, you agree to our Terms and Conditions.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="footer-item">
              <p>&copy; 2023 Example Company. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;