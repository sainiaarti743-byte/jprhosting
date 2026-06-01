import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndustryRecognitions = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // DATA
  const recognitions = [
    {
      image: "/assets/img/gartner.png",
      text:
        "Recognition in Market Guide for Public Cloud Managed and Professional Services Providers APAC 2021"
    },

    {
      image: "/assets/img/IDC.png",
      text:
        "Recognition in Market Guide for Security Testing & Consulting Services in India 2021"
    },

    {
      image: "/assets/img/global-services.jpg",
      text:
        "The Economic Times Iconic Brands 2020 for Hybrid Multi-Cloud"
    },

    {
      image: "/assets/img/IDC.png",
      text:
        "Recognition in Market Guide for Top Data Center Service Providers 2018"
    },

    {
      image: "/assets/img/IDC.png",
      text:
        "Leader in Gartner Magic Quadrant for Network Services Global 2022"
    }
  ];

  // RESPONSIVE ITEMS
  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth < 576) {
        setItemsPerPage(1);
      }

      else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      }

      else if (window.innerWidth < 992) {
        setItemsPerPage(3);
      }

      else {
        setItemsPerPage(4);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () =>
      window.removeEventListener('resize', handleResize);

  }, []);

  // MAX INDEX
  const maxIndex =
    recognitions.length - itemsPerPage;

  // NEXT
  const nextSlide = () => {

    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // PREV
  const prevSlide = () => {

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex);
    }
  };

  // AUTO SLIDE
  useEffect(() => {

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);

  }, [currentIndex, itemsPerPage]);

  return (
    <>
      <section className="industry-section">

        <div className="container-fluid px-lg-5 px-md-4 px-3">

          {/* HEADING */}
          <div className="row">
            <div className="col-12">

              <h2 className="industry-title">
                Industry recognitions
              </h2>

            </div>
          </div>

          {/* SLIDER */}
          <div className="industry-slider-wrapper position-relative">

            <div className="overflow-hidden">

              <div
                className="industry-slider"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerPage)
                  }%)`
                }}
              >

                {recognitions.map((item, index) => (

                  <div
                    className="industry-item"
                    key={index}
                    style={{
                      width: `${100 / itemsPerPage}%`
                    }}
                  >

                    <div className="industry-card">

                      {/* IMAGE */}
                      <div className="logo-wrapper">

                        <img
                          src={item.image}
                          alt="Recognition Logo"
                          className="img-fluid"
                        />

                      </div>

                      {/* TEXT */}
                      <p>
                        {item.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* ARROWS */}
            <button
              className="industry-arrow left-arrow"
              onClick={prevSlide}
            >
              ❮
            </button>

            <button
              className="industry-arrow right-arrow"
              onClick={nextSlide}
            >
              ❯
            </button>

          </div>

        </div>
      </section>

      {/* CSS */}
      <style>{`

        .industry-section{
          padding: 80px 0;
          background: #ffffff;
          font-family: "Source Sans Pro", sans-serif;
          overflow: hidden;
          position: relative;
        }

        /* ===================== */
        /* TITLE */
        /* ===================== */

        .industry-title{
          font-size: clamp(30px,4vw,42px);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 50px;
          line-height: 1.2;
        }

        /* ===================== */
        /* SLIDER */
        /* ===================== */

        .industry-slider-wrapper{
          position: relative;
        }

        .industry-slider{
          display: flex;
          transition: transform 0.6s ease-in-out;
          will-change: transform;
        }

        .industry-item{
          flex-shrink: 0;
          padding: 0 15px;
          box-sizing: border-box;
        }

        /* CARD */

        .industry-card{
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          padding: 25px 20px;
          transition: 0.3s ease;
        }

        .industry-card:hover{
          transform: translateY(-5px);
        }

        /* IMAGE */

        .logo-wrapper{
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }

        .logo-wrapper img{
          max-height: 45px;
          max-width: 180px;
          object-fit: contain;
          width: auto;
        }

        /* TEXT */

        .industry-card p{
          font-size: 14px;
          line-height: 1.7;
          color: #000;
          font-weight: 600;
          margin: 0;
        }

        /* ===================== */
        /* ARROWS */
        /* ===================== */

        .industry-arrow{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 20px;
          color: #999;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          transition: 0.3s ease;
          z-index: 10;
        }

        .industry-arrow:hover{
          background: #ccff00;
          color: #000;
          border-color: #ccff00;
        }

        .left-arrow{
          left: -10px;
        }

        .right-arrow{
          right: -10px;
        }

        /* ===================== */
        /* RESPONSIVE */
        /* ===================== */

        @media (max-width: 1199px){

          .industry-section{
            padding: 70px 0;
          }

        }

        @media (max-width: 991px){

          .industry-section{
            padding: 60px 0;
          }

          .industry-title{
            margin-bottom: 40px;
          }

        }

        @media (max-width: 767px){

          .industry-section{
            padding: 50px 0;
          }

          .industry-title{
            font-size: 30px;
            margin-bottom: 35px;
          }

          .industry-item{
            padding: 0 10px;
          }

          .industry-card{
            padding: 20px 15px;
          }

          .industry-card p{
            font-size: 13px;
            line-height: 1.6;
          }

          .industry-arrow{
            width: 42px;
            height: 42px;
            font-size: 18px;
          }

          .left-arrow{
            left: 0;
          }

          .right-arrow{
            right: 0;
          }

        }

        @media (max-width: 575px){

          .industry-section{
            padding: 45px 0;
          }

          .industry-card{
            padding: 15px 10px;
          }

          .logo-wrapper{
            margin-bottom: 20px;
          }

          .logo-wrapper img{
            max-width: 140px;
            max-height: 40px;
          }

          .industry-card p{
            font-size: 12px;
          }

        }

      `}</style>
    </>
  );
};

export default IndustryRecognitions;