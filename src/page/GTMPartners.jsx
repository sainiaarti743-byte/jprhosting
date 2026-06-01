import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GTMPartners = () => {

  const [activeTab, setActiveTab] =
    useState('Cloud');

  // PARTNER DATA
  const partnerData = {

    Cloud: [
      {
        name: 'AWS',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
      },

      {
        name: 'Google Cloud',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
      },

      {
        name: 'Microsoft Azure',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg'
      },

      {
        name: 'VMware',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg'
      },

      {
        name: 'HPE GreenLake',
        logo:
          'https://www.hpe.com/content/dam/hpe/images/logos/hpe-logo-green-lake.png'
      },

      {
        name: 'Hitachi',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/a/a2/Hitachi_logo.svg'
      },

      {
        name: 'Oracle Cloud',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg'
      }
    ],

    Digital: [
      {
        name: 'Thales',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/1/1d/Thales_Group_Logo.svg'
      },

      {
        name: 'Tenovos',
        logo:
          'https://tenovos.com/wp-content/uploads/2021/04/tenovos-logo.svg'
      },

      {
        name: 'Meta',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
      },

      {
        name: 'Nirmata',
        logo:
          'https://nirmata.com/wp-content/themes/nirmata/images/nirmata-logo.svg'
      },

      {
        name: 'Nvidia',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg'
      },

      {
        name: 'ThousandEyes',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/a/a7/ThousandEyes_Logo.svg'
      },

      {
        name: 'AppDynamics',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/0/05/AppDynamics_logo.svg'
      }
    ],

    Network: [],
    Infrastructure: [],
    Security: []
  };

  // TABS
  const tabs = [
    'Cloud',
    'Digital',
    'Network',
    'Infrastructure',
    'Security'
  ];

  return (
    <>
      <section className="gtm-section">

        <div className="container-fluid px-lg-5 px-md-4 px-3">

          <div className="row align-items-start g-5">

            {/* LEFT CONTENT */}
            <div className="col-lg-4">

              <div className="left-content">

                <h2 className="gtm-title">
                  Our GTM partners
                </h2>

                <p className="gtm-subtitle">
                  Our strategic partners help us deliver
                  unmatched business value and unique
                  experiences.
                </p>

                {/* DOTS */}
                <div className="dot-pattern">

                  {[...Array(30)].map((_, i) => (
                    <span key={i}></span>
                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-8">

              {/* TABS */}
              <div className="tabs-wrapper">

                {tabs.map((tab) => (

                  <button
                    key={tab}
                    className={
                      activeTab === tab
                        ? 'tab-btn active'
                        : 'tab-btn'
                    }
                    onClick={() =>
                      setActiveTab(tab)
                    }
                  >
                    {tab}
                  </button>

                ))}

              </div>

              {/* CONTENT BOX */}
              <div className="partner-box">

                <div className="row g-4 align-items-center justify-content-center">

                  {partnerData[activeTab]?.length > 0 ? (

                    partnerData[activeTab].map(
                      (partner, index) => (

                        <div
                          className="
                            col-6
                            col-sm-4
                            col-md-3
                          "
                          key={index}
                        >

                          <div className="partner-logo">

                            <img
                              src={partner.logo}
                              alt={partner.name}
                              className="img-fluid"
                            />

                          </div>

                        </div>

                      )
                    )

                  ) : (

                    <div className="col-12">

                      <div className="empty-content">
                        Coming Soon
                      </div>

                    </div>

                  )}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CSS */}
      <style>{`

        .gtm-section{
          padding: 85px 0;
          background: #f4f4f4;
          font-family: "Source Sans Pro", sans-serif;
          overflow: hidden;
        }

        /* ====================== */
        /* LEFT CONTENT */
        /* ====================== */

        .gtm-title{
          font-size: clamp(30px,4vw,42px);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 18px;
          line-height: 1.2;
        }

        .gtm-subtitle{
          font-size: 17px;
          color: #555;
          max-width: 360px;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        /* DOTS */

        .dot-pattern{
          display: grid;
          grid-template-columns: repeat(10, 6px);
          gap: 12px;
          margin-top: 25px;
        }

        .dot-pattern span{
          width: 5px;
          height: 5px;
          background: #cfcfcf;
          border-radius: 50%;
        }

        /* ====================== */
        /* TABS */
        /* ====================== */

        .tabs-wrapper{
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          position: relative;
          z-index: 2;
        }

        .tab-btn{
          border: none;
          background: transparent;
          padding: 13px 24px;
          color: #666;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
          border-radius: 10px 10px 0 0;
        }

        .tab-btn:hover{
          color: #000;
        }

        .tab-btn.active{
          background: #ccff00;
          color: #000;
          border: 1px solid #ccff00;
          border-bottom: none;
        }

        /* ====================== */
        /* CONTENT BOX */
        /* ====================== */

        .partner-box{
          background: #e6e6e6;
          border-radius: 0 20px 20px 20px;
          padding: 50px;
          margin-top: -1px;
          min-height: 280px;
        }

        /* LOGO */

        .partner-logo{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90px;
          transition: 0.3s ease;
        }

        .partner-logo:hover{
          transform: translateY(-5px);
        }

        .partner-logo img{
          max-width: 130px;
          max-height: 55px;
          object-fit: contain;
          opacity: 0.9;
          transition: 0.3s ease;
        }

        .partner-logo:hover img{
          opacity: 1;
          transform: scale(1.05);
        }

        /* EMPTY */

        .empty-content{
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 180px;
          font-size: 22px;
          font-weight: 600;
          color: #777;
        }

        /* ====================== */
        /* RESPONSIVE */
        /* ====================== */

        @media (max-width: 1199px){

          .gtm-section{
            padding: 75px 0;
          }

        }

        @media (max-width: 991px){

          .gtm-section{
            padding: 65px 0;
          }

          .partner-box{
            padding: 40px;
          }

          .gtm-subtitle{
            max-width: 100%;
          }

        }

        @media (max-width: 767px){

          .gtm-section{
            padding: 55px 0;
          }

          .gtm-title{
            font-size: 30px;
          }

          .gtm-subtitle{
            font-size: 15px;
            line-height: 1.7;
          }

          .tabs-wrapper{
            gap: 8px;
          }

          .tab-btn{
            padding: 10px 18px;
            font-size: 14px;
          }

          .partner-box{
            padding: 30px 20px;
            border-radius: 0 15px 15px 15px;
          }

          .partner-logo{
            height: 75px;
          }

          .partner-logo img{
            max-width: 110px;
            max-height: 45px;
          }

        }

        @media (max-width: 575px){

          .gtm-section{
            padding: 50px 0;
          }

          .tabs-wrapper{
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 5px;
          }

          .tabs-wrapper::-webkit-scrollbar{
            height: 4px;
          }

          .tabs-wrapper::-webkit-scrollbar-thumb{
            background: #ccc;
            border-radius: 10px;
          }

          .tab-btn{
            white-space: nowrap;
            flex-shrink: 0;
          }

          .partner-box{
            padding: 25px 15px;
          }

          .partner-logo img{
            max-width: 95px;
            max-height: 40px;
          }

        }

      `}</style>
    </>
  );
};

export default GTMPartners;