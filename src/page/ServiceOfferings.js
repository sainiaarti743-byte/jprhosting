import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// ICONS
import {
  LuNetwork,
  LuShieldCheck,
  LuSettings2,
  LuMousePointerClick
} from "react-icons/lu";

import {
  FaServer,
  FaCloud
} from "react-icons/fa";

const ServiceOfferings = () => {

  // SERVICES
  const services = [
    {
      name: 'AI data center',
      icon: <LuNetwork />
    },

    {
      name: 'Dedicated web server',
      icon: <FaServer />
    },

    {
      name: 'VPN Hosting',
      icon: <FaCloud />
    },

    {
      name: 'Cloud server',
      icon: <LuShieldCheck />
    },

    {
      name: 'Managed Services',
      icon: <LuSettings2 />
    },

    {
      name: 'Digital Services',
      icon: <LuMousePointerClick />
    }
  ];

  return (
    <>
      <section className="service-section">

        <div className="container-fluid px-lg-5 px-md-4 px-3">

          {/* HEADING */}
          <div className="row">
            <div className="col-12">

              <h2 className="service-title">
                Our service offerings
              </h2>

              <p className="service-subtitle">
                Delivering integrated value through assets,
                services, and partnership models
              </p>

            </div>
          </div>

          {/* SERVICES GRID */}
          <div className="row g-4 mt-4">

            {services.map((service, index) => (
              <div
                className="
                  col-6
                  col-sm-4
                  col-md-4
                  col-lg-2
                "
                key={index}
              >
                <div className="service-card">

                  {/* ICON */}
                  <div className="icon-wrapper">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                  </div>

                  {/* NAME */}
                  <h5 className="service-name">
                    {service.name}
                  </h5>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CUSTOM CSS */}
      <style>{`

        .service-section{
          padding: 80px 0;
          background: #ffffff;
          font-family: "Source Sans Pro", sans-serif;
          overflow: hidden;
        }

        /* ==================== */
        /* TITLE */
        /* ==================== */

        .service-title{
          font-size: clamp(30px,4vw,42px);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .service-subtitle{
          font-size: 18px;
          color: #555;
          margin: 0;
          line-height: 1.7;
        }

        /* ==================== */
        /* CARD */
        /* ==================== */

        .service-card{
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 18px;
          cursor: pointer;
          transition: 0.3s ease;
          height: 100%;
        }

        /* ICON WRAPPER */

        .icon-wrapper{
          width: 95px;
          height: 95px;
          border: 1px solid #e0e0e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
          background: transparent;
        }

        .service-icon{
          font-size: 40px;
          color: #444;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
        }

        /* NAME */

        .service-name{
          font-size: 14px;
          font-weight: 700;
          color: #333;
          text-transform: uppercase;
          line-height: 1.6;
          margin: 0;
        }

        /* ==================== */
        /* HOVER EFFECT */
        /* ==================== */

        .service-card:hover .icon-wrapper{
          border-color: #ccff00;
          background: #000033;
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }

        .service-card:hover .service-icon{
          color: #ccff00;
        }

        /* ==================== */
        /* RESPONSIVE */
        /* ==================== */

        @media (max-width: 1199px){

          .service-section{
            padding: 70px 0;
          }

        }

        @media (max-width: 991px){

          .service-section{
            padding: 60px 0;
          }

          .service-subtitle{
            font-size: 17px;
          }

          .icon-wrapper{
            width: 90px;
            height: 90px;
          }

        }

        @media (max-width: 767px){

          .service-section{
            padding: 50px 0;
          }

          .service-title{
            font-size: 30px;
          }

          .service-subtitle{
            font-size: 15px;
            line-height: 1.8;
          }

          .service-card{
            gap: 15px;
          }

          .icon-wrapper{
            width: 82px;
            height: 82px;
          }

          .service-icon{
            font-size: 34px;
          }

          .service-name{
            font-size: 13px;
          }

        }

        @media (max-width: 575px){

          .service-section{
            padding: 45px 0;
          }

          .row.g-4{
            --bs-gutter-y: 1.5rem;
          }

          .icon-wrapper{
            width: 78px;
            height: 78px;
          }

          .service-icon{
            font-size: 30px;
          }

          .service-name{
            font-size: 12px;
          }

        }

      `}</style>
    </>
  );
};

export default ServiceOfferings;