import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrustedPartner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // CARDS DATA
  const cards = [
    {
      title:
        "The world’s most widely distributed postal system",
      description:
        "trusts JPRHosting’s managed network services to offer 24×7 country-wide postal, banking, logistics, and insurance services.",
      image:
        "/assets/img/28Trusted_-partnerships_img1.jpg",
      highlights: [
        "widely distributed postal system",
        "managed network services"
      ]
    },

    {
      title: "A top FMCG company",
      description:
        "in India with 25 mother brands uses JPRHosting’s Retail Intelligence Solution for their forward supply chain to service 7 million+ retailers across the country.",
      image:
        "/assets/img/28Trusted_-partnerships_img2.jpg",
      highlights: [
        "top FMCG company",
        "Retail Intelligence"
      ]
    },

    {
      title:
        "JPRHosting’s integration service enhanced the digital experience",
      description:
        "in the treatment of cancer by making patient information and radiation device availability visible from anywhere.",
      image:
        "/assets/img/28Trusted_-partnerships_img3.jpg",
      highlights: [
        "digital experience",
        "patient information",
        "device availability visible"
      ]
    },

    {
      title: "Global Banking Leader",
      description:
        "uses JPRHosting's secure cloud infrastructure to manage millions of transactions daily with zero downtime.",
      image:
        "/assets/img/28Trusted_-partnerships_img1.jpg",
      highlights: [
        "Global Banking Leader",
        "secure cloud infrastructure"
      ]
    }
  ];

  // RESPONSIVE CARD COUNT
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 992) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, cardsToShow]);

  // NEXT
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= cards.length - cardsToShow
        ? 0
        : prev + 1
    );
  };

  // PREV
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? cards.length - cardsToShow
        : prev - 1
    );
  };

  // HIGHLIGHT TEXT
  const textHelper = (text, highlights) => {
    const regex = new RegExp(
      `(${highlights.join('|')})`,
      'gi'
    );

    return text.split(regex).map((part, i) =>
      highlights.some(
        (h) => h.toLowerCase() === part.toLowerCase()
      ) ? (
        <strong key={i}>{part}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <section className="trusted-section">
        <div className="container-fluid px-lg-5 px-md-4 px-3">

          {/* TITLE */}
          <div className="row">
            <div className="col-12">
              <h2 className="trusted-title">
                Your trusted digital infrastructure partner
              </h2>
            </div>
          </div>

          {/* SLIDER */}
          <div className="slider-main position-relative">

            <div className="overflow-hidden">

              <div
                className="slider-wrapper"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / cardsToShow)
                  }%)`
                }}
              >
                {cards.map((card, index) => (
                  <div
                    className="slider-card"
                    key={index}
                    style={{
                      width: `calc(${100 / cardsToShow}% - 20px)`
                    }}
                  >
                    <div className="card-inner">

                      {/* TEXT */}
                      <div className="card-content">
                        <p>
                          {textHelper(
                            card.title,
                            card.highlights
                          )}{' '}
                          {card.description}
                        </p>
                      </div>

                      {/* IMAGE */}
                      <div className="card-image">
                        <img
                          src={card.image}
                          alt="Partner"
                          className="img-fluid"
                        />
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* ARROWS */}
            <button
              className="slider-arrow left-arrow"
              onClick={prevSlide}
            >
              ❮
            </button>

            <button
              className="slider-arrow right-arrow"
              onClick={nextSlide}
            >
              ❯
            </button>

          </div>
        </div>
      </section>

      {/* CUSTOM CSS */}
      <style>{`

        .trusted-section{
          padding: 80px 0;
          background: #f9f9f9;
          overflow: hidden;
          font-family: "Source Sans Pro", sans-serif;
        }

        .trusted-title{
          font-size: clamp(30px,4vw,42px);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 50px;
          line-height: 1.3;
        }

        .slider-main{
          position: relative;
        }

        .slider-wrapper{
          display: flex;
          gap: 30px;
          transition: transform 0.6s ease-in-out;
          will-change: transform;
        }

        .slider-card{
          flex-shrink: 0;
        }

        .card-inner{
          background: #fff;
          border-top: 4px solid #ccff00;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: 0.3s ease;
        }

        .card-inner:hover{
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .card-content{
          padding: 30px;
          flex-grow: 1;
        }

        .card-content p{
          font-size: 18px;
          line-height: 1.8;
          color: #333;
          margin: 0;
        }

        .card-content strong{
          font-weight: 800;
          color: #000;
        }

        .card-image{
          height: 220px;
          overflow: hidden;
        }

        .card-image img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s ease;
        }

        .card-inner:hover .card-image img{
          transform: scale(1.05);
        }

        /* ARROWS */

        .slider-arrow{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #ddd;
          background: #fff;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: 0.3s ease;
        }

        .slider-arrow:hover{
          background: #ccff00;
          border-color: #ccff00;
        }

        .left-arrow{
          left: -20px;
        }

        .right-arrow{
          right: -20px;
        }

        /* ===================== */
        /* RESPONSIVE */
        /* ===================== */

        @media (max-width: 1199px){

          .trusted-section{
            padding: 70px 0;
          }

        }

        @media (max-width: 991px){

          .trusted-section{
            padding: 60px 0;
          }

          .trusted-title{
            margin-bottom: 40px;
          }

          .card-content{
            padding: 25px;
          }

          .card-content p{
            font-size: 16px;
          }

          .card-image{
            height: 200px;
          }

        }

        @media (max-width: 767px){

          .trusted-section{
            padding: 50px 0;
          }

          .slider-wrapper{
            gap: 20px;
          }

          .card-content{
            padding: 22px;
          }

          .card-content p{
            font-size: 15px;
            line-height: 1.7;
          }

          .card-image{
            height: 220px;
          }

          .slider-arrow{
            width: 42px;
            height: 42px;
            font-size: 18px;
          }

          .left-arrow{
            left: 5px;
          }

          .right-arrow{
            right: 5px;
          }

        }

        @media (max-width: 575px){

          .trusted-title{
            font-size: 28px;
            margin-bottom: 35px;
          }

          .card-image{
            height: 200px;
          }

        }

      `}</style>
    </>
  );
};

export default TrustedPartner;