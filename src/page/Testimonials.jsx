import React, {
  useState,
  useEffect
} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonials = () => {

  // ACTIVE SLIDE
  const [activeSlide, setActiveSlide] =
    useState(0);

  // TESTIMONIALS DATA
  const testimonials = [
    {
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Max_Life_Insurance_logo.svg/1200px-Max_Life_Insurance_logo.svg.png",

      quote:
        "We chose JPRHosting as the DC and Cloud transformation partner primarily because of their capabilities in building Hybrid Cloud strategies and strong partnership with hyperscale cloud providers...",

      author:
        "Chief Technology Officer, Max Life Insurance"
    },

    {
      logo:
        "https://via.placeholder.com/150x50?text=Partner+2",

      quote:
        "JPRHosting's managed services have helped us scale our digital infrastructure with ease and high reliability.",

      author:
        "IT Director, Leading FMCG"
    }
  ];

  // NEXT SLIDE
  const nextSlide = () => {

    setActiveSlide((prev) =>
      prev === testimonials.length - 1
        ? 0
        : prev + 1
    );

  };

  // PREV SLIDE
  const prevSlide = () => {

    setActiveSlide((prev) =>
      prev === 0
        ? testimonials.length - 1
        : prev - 1
    );

  };

  // AUTO SLIDE
  useEffect(() => {

    const timer = setInterval(() => {

      nextSlide();

    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return (
    <>
      <section className="testimonial-section">

        <div className="container-fluid px-lg-5 px-md-4 px-3">

          {/* HEADER */}
          <div className="row">

            <div className="col-12">

              <h2 className="testimonial-title">
                Testimonials
              </h2>

              <p className="testimonial-subtitle">
                Delivering unique and compelling
                customer experiences – time and again
              </p>

            </div>

          </div>

          {/* CONTENT */}
          <div className="row align-items-center gy-5">

            {/* LEFT VIDEO */}
            <div className="col-lg-6">

              <div className="video-wrapper">

                <img
                  src="/assets/img/aidatacenter.png"
                  alt="Video"
                  className="img-fluid video-image"
                />

                {/* PLAY BUTTON */}
                <div className="play-button-wrapper">

                  <div className="play-button">

                    <div className="play-icon"></div>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6">

              <div className="testimonial-content">

                {/* ARROWS */}
                <button
                  onClick={prevSlide}
                  className="
                    nav-arrow
                    left-arrow
                  "
                >
                  ❮
                </button>

                <button
                  onClick={nextSlide}
                  className="
                    nav-arrow
                    right-arrow
                  "
                >
                  ❯
                </button>

                {/* CONTENT */}
                <div className="testimonial-inner">

                  <img
                    src={
                      testimonials[
                        activeSlide
                      ].logo
                    }
                    alt="Logo"
                    className="company-logo"
                  />

                  <p className="testimonial-quote">
                    "
                    {
                      testimonials[
                        activeSlide
                      ].quote
                    }
                    "
                  </p>

                  <p className="testimonial-author">
                    {
                      testimonials[
                        activeSlide
                      ].author
                    }
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* DOTS */}
          <div className="testimonial-dots">

            {testimonials.map((_, i) => (

              <div
                key={i}
                onClick={() =>
                  setActiveSlide(i)
                }
                className={
                  i === activeSlide
                    ? 'dot active'
                    : 'dot'
                }
              >
                {i === activeSlide && (
                  <span></span>
                )}
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* CSS */}
      <style>{`

        .testimonial-section{
          padding: 85px 0;
          background: #eeeeee;
          font-family: "Source Sans Pro", sans-serif;
          overflow: hidden;
        }

        /* ===================== */
        /* HEADER */
        /* ===================== */

        .testimonial-title{
          font-size: clamp(30px,4vw,42px);
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .testimonial-subtitle{
          font-size: 16px;
          color: #333;
          max-width: 420px;
          line-height: 1.8;
          margin-bottom: 50px;
        }

        /* ===================== */
        /* VIDEO */
        /* ===================== */

        .video-wrapper{
          position: relative;
          overflow: hidden;
          border-radius: 6px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.12);
        }

        .video-image{
          width: 100%;
          display: block;
          transition: 0.4s ease;
        }

        .video-wrapper:hover .video-image{
          transform: scale(1.03);
        }

        /* PLAY BUTTON */

        .play-button-wrapper{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
        }

        .play-button{
          width: 80px;
          height: 56px;
          background: red;
          border-radius: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s ease;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }

        .play-button:hover{
          transform: scale(1.08);
        }

        .play-icon{
          width: 0;
          height: 0;
          border-top: 11px solid transparent;
          border-bottom: 11px solid transparent;
          border-left: 22px solid #fff;
          margin-left: 4px;
        }

        /* ===================== */
        /* CONTENT */
        /* ===================== */

        .testimonial-content{
          position: relative;
          padding: 0 70px;
        }

        .testimonial-inner{
          min-height: 260px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          animation: fadeSlide 0.5s ease;
        }

        .company-logo{
          height: 60px;
          object-fit: contain;
          margin-bottom: 35px;
          max-width: 220px;
        }

        .testimonial-quote{
          font-size: 20px;
          line-height: 1.8;
          color: #333;
          margin-bottom: 25px;
          font-weight: 500;
        }

        .testimonial-author{
          font-size: 15px;
          color: #0056b3;
          font-weight: 600;
          margin: 0;
        }

        /* ===================== */
        /* ARROWS */
        /* ===================== */

        .nav-arrow{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 52px;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: #fff;
          color: #999;
          font-size: 20px;
          cursor: pointer;
          z-index: 5;
          transition: 0.3s ease;
        }

        .nav-arrow:hover{
          background: #ccff00;
          border-color: #ccff00;
          color: #000;
        }

        .left-arrow{
          left: 0;
        }

        .right-arrow{
          right: 0;
        }

        /* ===================== */
        /* DOTS */
        /* ===================== */

        .testimonial-dots{
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 55px;
        }

        .dot{
          width: 11px;
          height: 11px;
          border-radius: 50%;
          border: 1px solid #666;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .dot.active{
          background: transparent;
        }

        .dot.active span{
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #333;
        }

        /* ===================== */
        /* ANIMATION */
        /* ===================== */

        @keyframes fadeSlide{

          from{
            opacity: 0;
            transform: translateY(20px);
          }

          to{
            opacity: 1;
            transform: translateY(0);
          }

        }

        /* ===================== */
        /* RESPONSIVE */
        /* ===================== */

        @media (max-width: 1199px){

          .testimonial-section{
            padding: 75px 0;
          }

        }

        @media (max-width: 991px){

          .testimonial-section{
            padding: 65px 0;
          }

          .testimonial-content{
            padding: 0 60px;
          }

          .testimonial-quote{
            font-size: 18px;
          }

        }

        @media (max-width: 767px){

          .testimonial-section{
            padding: 55px 0;
          }

          .testimonial-title{
            font-size: 30px;
          }

          .testimonial-subtitle{
            font-size: 15px;
            margin-bottom: 40px;
          }

          .testimonial-content{
            padding: 0 50px;
          }

          .testimonial-inner{
            min-height: auto;
          }

          .company-logo{
            height: 50px;
            margin-bottom: 25px;
          }

          .testimonial-quote{
            font-size: 16px;
            line-height: 1.7;
          }

          .testimonial-author{
            font-size: 14px;
          }

          .nav-arrow{
            width: 42px;
            height: 46px;
            font-size: 18px;
          }

          .play-button{
            width: 70px;
            height: 50px;
          }

        }

        @media (max-width: 575px){

          .testimonial-section{
            padding: 50px 0;
          }

          .testimonial-content{
            padding: 0 40px;
          }

          .testimonial-quote{
            font-size: 15px;
          }

          .company-logo{
            height: 42px;
          }

          .nav-arrow{
            width: 38px;
            height: 42px;
            font-size: 16px;
          }

          .play-button{
            width: 62px;
            height: 45px;
          }

          .play-icon{
            border-top: 9px solid transparent;
            border-bottom: 9px solid transparent;
            border-left: 18px solid #fff;
          }

        }

      `}</style>
    </>
  );
};

export default Testimonials;