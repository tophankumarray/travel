import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black h-96 py-16 md:py-28">
      <div className="container mx-auto px-4 md:px-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-10 md:mb-0">
            <h1 className="text-white font-bold text-2xl mb-4">Travel</h1>
            <p className="text-white text-opacity-75">
              Choose your favourite destination.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <div className="mt-10">
          <div className="mb-4">
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div className="mb-4">
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
          </div>
          <div className="mb-4">
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
