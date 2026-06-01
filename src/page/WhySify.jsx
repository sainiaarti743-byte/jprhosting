import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhySify = () => {

  // FEATURES
  const features = [
    {
      title: "Cloud@Core",
      desc:
        "Full-spectrum of digital transformation services, today and for the future"
    },

    {
      title: "Converged ICT",
      desc:
        "Integrated value through data centers, cloud, network, and digital services"
    },

    {
      title: "Engagement models",
      desc:
        "Component, subscription, usage, and business outcome aligned"
    },

    {
      title: "Industry-vertical-aligned",
      desc:
        "10,000+ businesses across BFSI, Manufacturing, Retail, Healthcare, Pharma, and Digital-native born companies trust JPRHosting"
    },

    {
      title: "Transformation-driven practice",
      desc:
        "Strong services and project management portfolio on top of infrastructure investments"
    },

    {
      title: "Digital ambition",
      desc:
        "Service delivery models enabling customers to move from traditional IT to digital IT"
    }
  ];

  return (
    <>
      <section className="why-sify-section">

        <div className="container-fluid px-lg-5 px-md-4 px-3">

          {/* HEADING */}
          <div className="row">
            <div className="col-12">

              <h2 className="why-title">
                Why customers choose{' '}
                <span>JPRHosting</span>
              </h2>

              <p className="why-subtitle">
                Enabling the digital ICT ecosystem
              </p>

            </div>
          </div>

          {/* GRID */}
          <div className="row g-0 why-grid">

            {features.map((item, index) => (
              <div
                className="
                  col-12
                  col-md-6
                  col-lg-4
                "
                key={index}
              >
                <div className="feature-box">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CUSTOM CSS */}
      <style>{`

        .why-sify-section{
          padding: 85px 0;
          background-color: #000022;
          background-image: url("https://www.sifytechnologies.com/wp-content/uploads/2023/11/why-sify-bg.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          font-family: "Source Sans Pro", sans-serif;
          color: #fff;
          overflow: hidden;
          position: relative;
        }

        /* DARK OVERLAY */

        .why-sify-section::before{
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,20,0.65);
          z-index: 1;
        }

        .why-sify-section .container-fluid{
          position: relative;
          z-index: 2;
        }

        /* ===================== */
        /* HEADING */
        /* ===================== */

        .why-title{
          font-size: clamp(32px,4vw,46px);
          font-weight: 400;
          margin-bottom: 12px;
          line-height: 1.2;
          color: #fff;
        }

        .why-title span{
          color: #ccff00;
          font-weight: 700;
        }

        .why-subtitle{
          font-size: 24px;
          opacity: 0.9;
          margin-bottom: 45px;
          line-height: 1.5;
          color: #fff;
        }

        /* ===================== */
        /* GRID */
        /* ===================== */

        .why-grid{
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.08);
        }

        .feature-box{
          padding: 40px;
          background: rgba(0,0,34,0.7);
          min-height: 240px;
          height: 100%;
          border: 1px solid rgba(255,255,255,0.08);
          transition: 0.3s ease;
          backdrop-filter: blur(2px);
        }

        .feature-box:hover{
          background: rgba(0,0,50,0.92);
          transform: translateY(-5px);
        }

        .feature-box h3{
          color: #ccff00;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 18px;
          line-height: 1.4;
        }

        .feature-box p{
          font-size: 15px;
          line-height: 1.8;
          color: #d0d0d0;
          margin: 0;
        }

        /* ===================== */
        /* RESPONSIVE */
        /* ===================== */

        @media (max-width: 1199px){

          .why-sify-section{
            padding: 75px 0;
          }

          .feature-box{
            padding: 35px;
          }

        }

        @media (max-width: 991px){

          .why-sify-section{
            padding: 65px 0;
          }

          .why-subtitle{
            font-size: 20px;
            margin-bottom: 35px;
          }

          .feature-box{
            min-height: 220px;
          }

          .feature-box h3{
            font-size: 22px;
          }

        }

        @media (max-width: 767px){

          .why-sify-section{
            padding: 55px 0;
          }

          .why-title{
            font-size: 30px;
          }

          .why-subtitle{
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 30px;
          }

          .feature-box{
            padding: 28px;
            min-height: auto;
          }

          .feature-box h3{
            font-size: 20px;
            margin-bottom: 14px;
          }

          .feature-box p{
            font-size: 14px;
            line-height: 1.7;
          }

        }

        @media (max-width: 575px){

          .why-sify-section{
            padding: 50px 0;
          }

          .feature-box{
            padding: 24px;
          }

          .feature-box h3{
            font-size: 18px;
          }

        }

      `}</style>
    </>
  );
};

export default WhySify;