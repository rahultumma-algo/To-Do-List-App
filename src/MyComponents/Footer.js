import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    // Enable Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <footer className="bg-body-tertiary text-center fixed-bottom">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1 position-relative"
            style={{ backgroundColor: '#3b5998' }}
            href="#!"
            role="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1 position-relative"
            style={{ backgroundColor: '#55acee' }}
            href="#!"
            role="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1 position-relative"
            style={{ backgroundColor: '#dd4b39' }}
            href="#!"
            role="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Google"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1 position-relative"
            style={{ backgroundColor: '#ac2bac' }}
            href="#!"
            role="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1 position-relative"
            style={{ backgroundColor: '#0082ca' }}
            href="#!"
            role="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Github */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1 position-relative"
            style={{ backgroundColor: '#333333' }}
            href="#!"
            role="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Github"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-body" href="https://algobrainai.com">RahulTumma.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
