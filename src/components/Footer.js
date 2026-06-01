import React from 'react';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="position-relative"
      style={{
        backgroundColor: '#2c3138',
        color: '#ffffff',
        fontFamily: '"Source Sans Pro", sans-serif',
      }}
    >
      <div className="container-fluid px-lg-5 px-md-4 px-3 py-5">

        {/* TOP FOOTER */}
        <div className="row g-5 mb-5">

          {/* BRAND */}
          <div className="col-lg-4 col-md-6">
            <h4
              style={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src="/assets/img/jprhosting.jpg"
                alt="JPRHosting"
                style={{
                  width: 'clamp(180px, 30vw, 320px)',
                  height: 'auto'
                }}
              />
            </h4>

            {/* <p
              style={{
                fontSize: 'clamp(18px,2vw,24px)',
                fontWeight: '500',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}
            >
              NASDAQ-listed since year 1999
            </p> */}

            {/* <p
              style={{
                fontSize: 'clamp(18px,2vw,24px)',
                fontWeight: '500',
                lineHeight: '1.5'
              }}
            >
              Fortune India 500 company
            </p> */}
          </div>

          {/* EXPLORE */}
          <div className="col-lg-2 col-md-6 col-6">
            <h3
              style={{
                fontSize: '22px',
                fontWeight: '600',
                marginBottom: '25px',
                color: '#c2d44e'
              }}
            >
              Explore
            </h3>

            {[
              'Cloud',
              'Digital Services',
              'Data Centers',
              'Network Services',
              'Integration Services',
              'Security',
              'Marketplace'
            ].map((item, index) => (
              <a
                key={index}
                href="/"
                className="d-block text-decoration-none mb-3"
                style={{
                  color: '#fff',
                  fontSize: '15px',
                  opacity: '0.9',
                  transition: '0.3s'
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* ABOUT */}
          <div className="col-lg-2 col-md-6 col-6">
            <h3
              style={{
                fontSize: '22px',
                fontWeight: '600',
                marginBottom: '25px',
                color: '#c2d44e'
              }}
            >
              About
            </h3>

            {[
              'Careers',
              'JPRHosting in the News',
              'Investors',
              'About Us',
              'Insights'
            ].map((item, index) => (
              <a
                key={index}
                href="/"
                className="d-block text-decoration-none mb-3"
                style={{
                  color: '#fff',
                  fontSize: '15px',
                  opacity: '0.9',
                  transition: '0.3s'
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CONNECT */}
          <div className="col-lg-4 col-md-6">
            <h3
              style={{
                fontSize: '22px',
                fontWeight: '600',
                marginBottom: '25px',
                color: '#c2d44e'
              }}
            >
              Connect
            </h3>

            <div className="d-flex align-items-start gap-3 mb-4">
              <FaPaperPlane
                size={16}
                style={{ color: '#c2d44e', marginTop: '3px' }}
              />

              <span style={{ fontSize: '15px' }}>
                Contact
              </span>
            </div>

            <div className="d-flex align-items-start gap-3 mb-4">
              <FaEnvelope
                size={16}
                style={{ color: '#c2d44e', marginTop: '3px' }}
              />

              <span
                style={{
                  fontSize: '15px',
                  wordBreak: 'break-word'
                }}
              >
               Info@jprhosting.in ,Sales@jprhosting.in
              </span>
            </div>

            <div className="d-flex align-items-start gap-3">
              <FaPhoneAlt
                size={16}
                style={{ color: '#c2d44e', marginTop: '3px' }}
              />

              <span style={{ fontSize: '15px' }}>
                Customer care 7073010846
              </span>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div
          className="d-flex justify-content-center flex-wrap gap-3 py-4"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          {[
            <FaLinkedinIn />,
            <FaXTwitter />,
            <FaFacebookF />,
            <FaYoutube />
          ].map((icon, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center"
              style={{
                width: '45px',
                height: '45px',
                backgroundColor: '#3e444d',
                borderRadius: '50%',
                fontSize: '18px',
                color: '#fff',
                cursor: 'pointer',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  '#c2d44e';

                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  '#3e444d';

                e.currentTarget.style.color = '#fff';
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="pt-4">
          <div className="row align-items-center g-3">

            <div className="col-lg-9 col-md-8">
              <p
                className="mb-0 text-center text-md-start"
                style={{
                  fontSize: '13px',
                  opacity: '0.7',
                  lineHeight: '1.7'
                }}
              >
                {/* {currentYear} */}
                <p>&copy; 2011- JPRHosting. All Rights Reserved.</p>
              </p>
            </div>



          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;