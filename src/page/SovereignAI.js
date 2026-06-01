import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SovereignAI = () => {
  return (
    <>
      <section className="sovereign-section">
        <div className="container-fluid px-lg-5 px-md-4 px-3">
          <div className="row align-items-center g-5">

            {/* LEFT CONTENT */}
            <div className="col-12 col-lg-6">
              <div className="left-content">

                <h2 className="sovereign-title">
                  AI Data Infrastructure
                </h2>
                

                <p className="sovereign-text">
                  Keep your data secure, compliant, and under your control. Our Sovereign AI
                  data centers provide localized, high-performance infrastructure designed for
                  organizations that demand absolute data ownership. From secure cloud hosting
                  to dedicated AI clusters, we ensure your data infrastructure meets the highest
                  standards of governance, privacy, and operational excellence.
                </p>

                {/* DOT PATTERN */}
                <div className="dot-pattern">
                  {[...Array(50)].map((_, i) => (
                    <span key={i}></span>
                  ))}
                </div>

              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-12 col-lg-6">
              <div className="video-wrapper">

                {/* IMAGE */}
                <img
                  src="/assets/img/aidatacenter.png"
                  alt="Sovereign AI Video"
                  className="img-fluid sovereign-img"
                />

                {/* PLAY BUTTON */}
                <div className="play-btn">
                  <div className="play-icon"></div>
                </div>

                {/* BOTTOM BRANDING */}
                <div className="branding-content">
                  <p className="branding-title">
                    Tried. Tested. Trusted.
                  </p>

                  <p className="branding-subtitle">
                    For over 25 years
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOM CSS */}
      <style>{`

        .sovereign-section{
          padding: 90px 0;
          background: #ffffff;
          overflow: hidden;
          font-family: "Source Sans Pro", sans-serif;
        }

        .left-content{
          animation: fadeInLeft 1s ease;
        }

        .sovereign-title{
          font-size: clamp(34px,4vw,48px);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .sovereign-text{
          font-size: 17px;
          color: #444;
          line-height: 1.9;
          margin-bottom: 30px;
          max-width: 700px;
        }

        .dot-pattern{
          display: grid;
          grid-template-columns: repeat(10, 8px);
          gap: 12px;
          max-width: 220px;
        }

        .dot-pattern span{
          width: 6px;
          height: 6px;
          background: #d9d9d9;
          border-radius: 50%;
          display: block;
        }

        .video-wrapper{
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          animation: fadeInRight 1s ease;
        }

        .sovereign-img{
          width: 100%;
          display: block;
          object-fit: cover;
        }

        .play-btn{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: #ff0000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .play-btn:hover{
          transform: translate(-50%, -50%) scale(1.08);
        }

        .play-icon{
          width: 0;
          height: 0;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 26px solid #fff;
          margin-left: 5px;
        }

        .branding-content{
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          text-align: center;
          padding: 24px;
          background: linear-gradient(
            transparent,
            rgba(0,0,0,0.85)
          );
        }

        .branding-title{
          color: #ccff00;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 5px;
        }

        .branding-subtitle{
          color: #fff;
          font-size: 13px;
          margin: 0;
        }

        /* ========================= */
        /* RESPONSIVE */
        /* ========================= */

        @media (max-width: 1199px){

          .sovereign-section{
            padding: 80px 0;
          }

        }

        @media (max-width: 991px){

          .sovereign-section{
            padding: 70px 0;
          }

          .row{
            row-gap: 50px;
          }

          .sovereign-title{
            font-size: 38px;
          }

        }

        @media (max-width: 767px){

          .sovereign-section{
            padding: 60px 0;
          }

          .sovereign-title{
            font-size: 30px;
          }

          .sovereign-text{
            font-size: 15px;
            line-height: 1.8;
          }

          .play-btn{
            width: 65px;
            height: 65px;
          }

          .play-icon{
            border-top: 12px solid transparent;
            border-bottom: 12px solid transparent;
            border-left: 20px solid #fff;
          }

          .branding-content{
            padding: 18px;
          }

          .branding-title{
            font-size: 16px;
          }

          .branding-subtitle{
            font-size: 12px;
          }

        }

        @media (max-width: 575px){

          .sovereign-section{
            padding: 50px 0;
          }

          .dot-pattern{
            grid-template-columns: repeat(8, 8px);
          }

          .sovereign-img{
            height: 260px;
          }

        }

        /* ========================= */
        /* ANIMATIONS */
        /* ========================= */

        @keyframes fadeInLeft {

          from{
            opacity: 0;
            transform: translateX(-50px);
          }

          to{
            opacity: 1;
            transform: translateX(0);
          }

        }

        @keyframes fadeInRight {

          from{
            opacity: 0;
            transform: translateX(50px);
          }

          to{
            opacity: 1;
            transform: translateX(0);
          }

        }

      `}</style>
    </>
  );
};

export default SovereignAI;