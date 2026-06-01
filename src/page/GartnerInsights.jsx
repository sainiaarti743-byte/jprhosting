import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  FaStar,
  FaRegThumbsUp
} from "react-icons/fa";

const GartnerInsights = () => {

  const reviews = [
    {
      category:
        "Data Center Outsourcing and Hybrid Infrastructure Managed Services",

      rating: "4.4",

      stars: 5,

      recommend: "100%",

      reviewText:
        '"JPRHosting Service and Delivery Performance Meets Expectations in Key Areas..."',

      date: "October 10, 2025"
    },

    {
      category:
        "Managed Network Services",

      rating: "4.5",

      stars: 5,

      recommend: null,

      reviewText: null,

      date: null
    },

    {
      category:
        "Managed Hybrid Cloud Asia Pacific",

      rating: "4.9",

      stars: 5,

      recommend: null,

      reviewText: null,

      date: null
    },

    {
      category:
        "Public Cloud Managed and Professional Services",

      rating: "4.4",

      stars: 5,

      recommend: "100%",

      reviewText: null,

      date: null
    }
  ];

  return (
    <>
      <section className="gartner-section">

        <div className="container-fluid px-lg-5 px-md-4 px-3">

          {/* HEADER */}
          <div className="row">

            <div className="col-12">

              <h2 className="gartner-title">
                Gartner Peer Insights
              </h2>

              <p className="gartner-subtitle">
                Consistently scoring high on customer
                ratings of our products and services
              </p>

            </div>

          </div>

          {/* CARDS */}
          <div className="row g-4 mt-2">

            {reviews.map((item, index) => (

              <div
                key={index}
                className="
                  col-xl-3
                  col-lg-4
                  col-md-6
                  col-12
                "
              >

                {/* CATEGORY TITLE */}
                <h3 className="category-title">
                  {item.category}
                </h3>

                {/* CARD */}
                <div className="gartner-card">

                  {/* LOGO */}
                  <div>

                    <span className="gartner-logo">
                      Gartner
                    </span>

                    <p className="gartner-peer">
                      Peer Insights™
                    </p>

                  </div>

                  {/* COMPANY */}
                  <div>

                    <h4 className="company-name">
                      JPRHosting Technologies
                    </h4>

                    <p className="company-category">
                      {item.category}
                    </p>

                  </div>

                  {/* RATING */}
                  <div className="rating-wrapper">

                    <span className="rating-number">
                      {item.rating}
                    </span>

                    <div className="stars">

                      {[...Array(5)].map(
                        (_, i) => (
                          <FaStar
                            key={i}
                            size={14}
                          />
                        )
                      )}

                    </div>

                  </div>

                  {/* RECOMMEND */}
                  {item.recommend && (

                    <div className="recommend-box">

                      <span className="recommend-percent">
                        {item.recommend}
                      </span>

                      <div className="recommend-text">

                        <FaRegThumbsUp />

                        <span>
                          Recommend
                        </span>

                      </div>

                    </div>

                  )}

                  {/* REVIEW */}
                  {item.reviewText && (

                    <div className="review-box">

                      <div className="mini-stars">

                        {[...Array(5)].map(
                          (_, i) => (
                            <FaStar
                              key={i}
                              size={10}
                            />
                          )
                        )}

                      </div>

                      <p className="review-text">
                        {item.reviewText}
                      </p>

                      <p className="review-date">
                        Reviewed {item.date}
                      </p>

                    </div>

                  )}

                  {/* LINK */}
                  <div className="read-more">

                    <a href="#">
                      Read more about
                      JPRHosting Technologies
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* CSS */}
      <style>{`

        .gartner-section{
          padding: 85px 0;
          background: #ffffff;
          font-family: "Source Sans Pro", sans-serif;
        }

        /* ===================== */
        /* HEADER */
        /* ===================== */

        .gartner-title{
          font-size: clamp(30px,4vw,42px);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .gartner-subtitle{
          font-size: 17px;
          color: #666;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        /* ===================== */
        /* CATEGORY */
        /* ===================== */

        .category-title{
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.4;
          min-height: 65px;
          margin-bottom: 18px;
        }

        /* ===================== */
        /* CARD */
        /* ===================== */

        .gartner-card{
          border: 1px solid #e5e5e5;
          padding: 24px;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          transition: 0.3s ease;
          background: #fff;
        }

        .gartner-card:hover{
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
        }

        /* ===================== */
        /* LOGO */
        /* ===================== */

        .gartner-logo{
          font-size: 13px;
          color: #0056b3;
          font-weight: 700;
        }

        .gartner-peer{
          font-size: 10px;
          color: #0056b3;
          margin-top: -2px;
          margin-bottom: 18px;
        }

        /* ===================== */
        /* COMPANY */
        /* ===================== */

        .company-name{
          font-size: 17px;
          font-weight: 700;
          color: #333;
          margin-bottom: 5px;
        }

        .company-category{
          font-size: 11px;
          color: #777;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        /* ===================== */
        /* RATING */
        /* ===================== */

        .rating-wrapper{
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .rating-number{
          font-size: 32px;
          font-weight: 700;
          color: #000;
          line-height: 1;
        }

        .stars{
          display: flex;
          gap: 3px;
          color: #ffcc00;
        }

        /* ===================== */
        /* RECOMMEND */
        /* ===================== */

        .recommend-box{
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }

        .recommend-percent{
          font-size: 20px;
          font-weight: 700;
          color: #000;
        }

        .recommend-text{
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: #999;
        }

        /* ===================== */
        /* REVIEW */
        /* ===================== */

        .review-box{
          border-top: 1px solid #eee;
          padding-top: 16px;
          margin-top: auto;
        }

        .mini-stars{
          display: flex;
          gap: 3px;
          color: #ffcc00;
          margin-bottom: 10px;
        }

        .review-text{
          font-size: 12px;
          font-style: italic;
          color: #555;
          line-height: 1.7;
          margin-bottom: 10px;
        }

        .review-date{
          font-size: 10px;
          color: #999;
          margin: 0;
        }

        /* ===================== */
        /* LINK */
        /* ===================== */

        .read-more{
          margin-top: auto;
          padding-top: 18px;
        }

        .read-more a{
          font-size: 12px;
          color: #0056b3;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .read-more a:hover{
          color: #003b7a;
        }

        /* ===================== */
        /* RESPONSIVE */
        /* ===================== */

        @media (max-width: 1199px){

          .gartner-section{
            padding: 75px 0;
          }

          .gartner-card{
            min-height: 400px;
          }

        }

        @media (max-width: 991px){

          .gartner-section{
            padding: 65px 0;
          }

          .gartner-card{
            min-height: 380px;
          }

          .category-title{
            min-height: auto;
          }

        }

        @media (max-width: 767px){

          .gartner-section{
            padding: 55px 0;
          }

          .gartner-title{
            font-size: 30px;
          }

          .gartner-subtitle{
            font-size: 15px;
          }

          .gartner-card{
            padding: 22px;
            min-height: auto;
          }

          .rating-number{
            font-size: 28px;
          }

          .category-title{
            font-size: 17px;
            margin-bottom: 15px;
          }

        }

        @media (max-width: 575px){

          .gartner-section{
            padding: 50px 0;
          }

          .gartner-card{
            padding: 20px;
          }

          .gartner-title{
            font-size: 28px;
          }

          .company-name{
            font-size: 16px;
          }

          .review-text{
            font-size: 11px;
          }

        }

      `}</style>
    </>
  );
};

export default GartnerInsights;