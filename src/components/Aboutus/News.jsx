import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const News = () => {
  const limeGreen = "#adff2f";

  const newsItems = [
    {
      title: "HCLSoftware and JPRHosting Digital Services Limited Announce...",
      desc: "NOIDA, India (February 16, 2026) – HCLSoftware, a global leader in enterprise software solutions, and JPRHosting Digital...",
      tag: ""
    },
    {
      title: "JPRHosting Technologies to announce Financial Results for Third...",
      desc: "Chennai, India, Monday, January 05, 2026: JPRHosting Technologies Limited (NASDAQ: JPRHosting), India's leading",
      tag: ""
    },
    {
      title: "JPRHosting Digital Services announces the appointment of industry...",
      desc: "Chennai, India, Aug 20, 2025: JPRHosting Digital Services Limited, the IT and Digital Solutions subsidiary",
      tag: "News & Events"
    },
    {
      title: "JPRHosting reports Consolidated Financial Results for Q1 FY...",
      desc: "HIGHLIGHTS Revenue was INR 10,723 Million, an increase of 14% over the same quarter last year",
      tag: "News & Events"
    },
    {
      title: "JPRHosting Technologies Ltd. Announces Change of...",
      desc: "Chennai, India, Friday, July 16, 2025: JPRHosting Technologies Limited (NASDAQ: JPRHosting), India's leading Dig",
      tag: "News & Events"
    },
    {
      title: "JPRHosting Technologies to announce Financial Results for First...",
      desc: "Chennai, India, Friday, July 11, 2025: JPRHosting Technologies Limited (NASDAQ: JPRHosting), India's leading Dig",
      tag: "News & Events",
      highlight: true // Screenshot 4.24.59 PM ke last card ka color
    }
  ];

  return (
    <>
    <SEO title="Press Releases & Official Corporate News Room" description="Track official announcements, feature rollouts, and infrastructure enhancement details from our newsroom." keywords="JPRHosting press releases news infrastructure announcements room" url="https://jprhosting.in/about-us/news" />
   

    <div className="bg-white pb-5">
      {/* Hero Banner - Ref: Screenshot 2026-05-14 at 4.24.52 PM.jpg */}
      <section className="position-relative overflow-hidden mb-5" style={{ height: '350px' }}>
        <div 
          className="position-absolute w-100 h-100" 
          style={{ 
            background: `linear-gradient(to right, rgba(0,0,0,0.6) 30%, transparent 100%), url('https://via.placeholder.com/1600x400/333') center/cover`,
            zIndex: 1 
          }}
        ></div>
        <div className="container h-100 d-flex align-items-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-5 fw-bold text-white" style={{ maxWidth: '600px' }}>
            Stay Updated with <span style={{ color: limeGreen }}>JPRHosting Technologies'</span> Latest News and Insights
          </h1>
        </div>
      </section>

      {/* News Grid - Ref: Screenshot 2026-05-14 at 4.24.59 PM.jpg */}
      <div className="container">
        <h3 className="fw-bold mb-4">All the Important News and Updates on JPRHosting in One Place</h3>
        <div className="row g-4">
          {newsItems.map((item, index) => (
            <div key={index} className="col-md-4">
              <div 
                className="card border-0 h-100 p-4" 
                style={{ 
                  backgroundColor: item.highlight ? '#f9faf0' : '#eeeeee',
                  borderRadius: '0px'
                }}
              >
                <div className="card-body d-flex flex-column p-0">
                  <h5 className="fw-bold mb-3" style={{ fontSize: '1.15rem' }}>{item.title}</h5>
                  <p className="text-muted small mb-4 flex-grow-1" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                  
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div>
                      {item.tag && (
                        <span className="text-muted small italic" style={{ fontStyle: 'italic', fontSize: '0.75rem' }}>
                          • {item.tag}
                        </span>
                      )}
                    </div>
                    <a href="#" className="text-dark text-decoration-none small fw-bold">
                      &rarr; Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

     </>
  );
};

export default News;