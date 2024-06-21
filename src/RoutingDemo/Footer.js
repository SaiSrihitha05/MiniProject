import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>Your brief and captivating description about your blog or website can go here. Keep it engaging!</p>
          </div>
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/articles">Articles</a></li>
              <li><a href="/categories">Categories</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
