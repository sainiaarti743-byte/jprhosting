import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from "react-icons/fa";

const CustomerStories = () => {

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [cardsToShow, setCardsToShow] =
    useState(3);

  // STORIES DATA
  const stories = [
    {
      title:
        "Integrated and end-to-end Managed Services",

      desc:
        "Scheduled Indian bank finds a unified technology integrator and managed services provider in JPRHosting, delivering strong cap...",

      image:
        "/assets/img/CaseStudies_3.jpg",

      bgColor: "#f2f2f2"
    },

    {
      title:
        "New revenue streams and improved patient care through...",

      desc:
        "Leading healthcare provider achieves 33% costs reduction by deploying healthcare app on JPRHosting Cloud Project Objective...",

      image:
        "/assets/img/CaseStudies_5.jpg",

      bgColor: "#f9faf2"
    },

    {
      title:
        "Logistics major transforms to digital IT",

      desc:
        "App modernization through microservices-based containerization with full CI/CD implementation using AWS...",

      image:
        "/assets/img/CaseStudies_7.jpg",

      bgColor: "#f2f2f2"
    },

    {
      title:
        "E-commerce scaling with Cloud",

      desc:
        "Retail giant scales their operations during peak season using JPRHosting's elastic cloud solutions...",

      image:
        "/assets/img/integration-services-1.jpg",

      bgColor: "#f2f2f2"
    }
  ];

  // RESPONSIVE
  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth < 768) {
        setCardsToShow(1);
      }

      else if (window.innerWidth < 992) {
        setCardsToShow(2);
      }

      else {
        setCardsToShow(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () =>
      window.removeEventListener(
        'resize',
        handleResize
      );

  }, []);

  // MAX INDEX
  const maxIndex =
    stories.length - cardsToShow;

  // AUTO SLIDE
  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(timer);

  }, [maxIndex]);

  return (
    <>
      <section className="customer-section">

        <div className="container-fluid px-lg-5 px-md-4 px-3">

          {/* TITLE */}
          <div className="row">
            <div className="col-12">

              <h2 className="customer-title">
                Customer success stories
              </h2>

            </div>
          </div>

          {/* SLIDER */}
          <div className="slider-container">

            <div className="overflow-hidden">

              <div
                className="customer-slider"
                style={{
                  transform: `translateX(-${
                    currentIndex *
                    (100 / cardsToShow)
                  }%)`
                }}
              >

                {stories.map((story, index) => (

                  <div
                    key={index}
                    className="customer-slide"
                    style={{
                      width: `calc(${
                        100 / cardsToShow
                      }% - 20px)`
                    }}
                  >

                    <div
                      className="story-card"
                      style={{
                        backgroundColor:
                          story.bgColor
                      }}
                    >

                      {/* IMAGE */}
                      <div className="story-image">

                        <img
                          src={story.image}
                          alt="Story"
                          className="img-fluid"
                        />

                      </div>

                      {/* CONTENT */}
                      <div className="story-content">

                        <h3>
                          {story.title}
                        </h3>

                        <p>
                          {story.desc}
                        </p>

                        <div className="read-more">

                          <span>
                            Read more
                          </span>

                          <FaArrowRight size={12} />

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* DOTS */}
          <div className="slider-dots">

            {Array.from({
              length:
                stories.length -
                cardsToShow +
                1
            }).map((_, i) => (

              <div
                key={i}
                onClick={() =>
                  setCurrentIndex(i)
                }
                className={
                  i === currentIndex
                    ? 'dot active'
                    : 'dot'
                }
              >
                {i === currentIndex && (
                  <span></span>
                )}
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* CSS */}
      <style>{`

        .customer-section{
          padding: 85px 0;
          background: #ffffff;
          font-family: "Source Sans Pro", sans-serif;
          overflow: hidden;
        }

        /* ===================== */
        /* TITLE */
        /* ===================== */

        .customer-title{
          font-size: clamp(30px,4vw,42px);
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 45px;
          line-height: 1.2;
        }

        /* ===================== */
        /* SLIDER */
        /* ===================== */

        .slider-container{
          overflow: hidden;
        }

        .customer-slider{
          display: flex;
          gap: 30px;
          transition: transform 0.6s ease-in-out;
          will-change: transform;
        }

        .customer-slide{
          flex-shrink: 0;
        }

        /* CARD */

        .story-card{
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: 0.3s ease;
        }

        .story-card:hover{
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        /* IMAGE */

        .story-image{
          height: 240px;
          overflow: hidden;
        }

        .story-image img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s ease;
        }

        .story-card:hover img{
          transform: scale(1.05);
        }

        /* CONTENT */

        .story-content{
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .story-content h3{
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 18px;
          line-height: 1.4;
        }

        .story-content p{
          font-size: 14px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 25px;
          flex-grow: 1;
        }

        /* READ MORE */

        .read-more{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          color: #333;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .read-more span{
          font-size: 14px;
        }

        .story-card:hover .read-more{
          color: #000;
          transform: translateX(4px);
        }

        /* ===================== */
        /* DOTS */
        /* ===================== */

        .slider-dots{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 45px;
        }

        .dot{
          width: 13px;
          height: 13px;
          border-radius: 50%;
          border: 1px solid #999;
          background: #ddd;
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
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #333;
        }

        /* ===================== */
        /* RESPONSIVE */
        /* ===================== */

        @media (max-width: 1199px){

          .customer-section{
            padding: 75px 0;
          }

        }

        @media (max-width: 991px){

          .customer-section{
            padding: 65px 0;
          }

          .story-content{
            padding: 25px;
          }

          .story-content h3{
            font-size: 22px;
          }

        }

        @media (max-width: 767px){

          .customer-section{
            padding: 55px 0;
          }

          .customer-title{
            font-size: 30px;
            margin-bottom: 35px;
          }

          .customer-slider{
            gap: 20px;
          }

          .story-image{
            height: 220px;
          }

          .story-content{
            padding: 22px;
          }

          .story-content h3{
            font-size: 20px;
            margin-bottom: 15px;
          }

          .story-content p{
            font-size: 13px;
            line-height: 1.7;
          }

          .slider-dots{
            margin-top: 35px;
          }

        }

        @media (max-width: 575px){

          .customer-section{
            padding: 50px 0;
          }

          .story-image{
            height: 200px;
          }

          .story-content{
            padding: 20px;
          }

          .story-content h3{
            font-size: 18px;
          }

          .story-content p{
            font-size: 12px;
          }

        }

      `}</style>
    </>
  );
};

export default CustomerStories;