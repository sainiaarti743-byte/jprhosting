import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const SuccessStories = () => {
  const limeGreen = "#adff2f";

  const stories = [
    // Data from Screenshot 2026-05-14 at 4.22.13 PM.jpg
    {
      title: "Improving the distribution efficiency of Petroleum...",
      objective: "The objective was to manage distributor operations efficiently, ensuring coordination between centr...",
      tag: "digital",
      img: "/assets/img/cloud.webp", 
      bgColor: "#eeeeee"
    },
    {
      title: "Improving the distribution efficiency of Petroleum...",
      objective: "The objective was to address inventory management challenges, inefficient supply chain operation...",
      tag: "digital",
      img: "/assets/img/cloud.webp",
      bgColor: "#eeeeee"
    },
    {
      title: "Enhancing the sales growth of a global biopharma company...",
      objective: "The objective was to ensure regulatory compliance, manage a complex supply chain, maintain...",
      tag: "",
      img: "/assets/img/cloud.webp",
      bgColor: "#f9faf0" // Light yellowish tint from screenshot
    },
    // Data from Screenshot 2026-05-14 at 4.22.21 PM.jpg
    {
      title: "Raising the operational efficiency of FMCG distributio...",
      objective: "The objective was to enhance the efficiency, visibility, and control of the distribution operations for the...",
      tag: "",
      img: "/assets/img/cloud.webp",
      bgColor: "#eeeeee"
    },
    {
      title: "National Co-operative Bank",
      objective: "The existing setup had non-standard and EOL CPEs in multiple branch locations. No fallback option across...",
      tag: "Networks",
      img: "/assets/img/cloud.webp",
      bgColor: "#eeeeee"
    },
    {
      title: "One of India's largest PSUs in Electricity sector",
      objective: "Online systems required continuous efforts for robustness and efficiency. Performance on MPLS network...",
      tag: "Networks",
      img: "/assets/img/cloud.webp",
      bgColor: "#f9faf0"
    }
  ];

  return (
    <>
    
   <SEO title="Case Studies & Client Success Stories" description="See how companies slashed computational latencies and optimized infrastructure spending via JPRHosting cloud implementations." keywords="cloud infrastructure case studies client success stories portfolio" url="https://jprhosting.in/insights/success-stories" />
    <div className="pb-5" style={{ backgroundColor: '#fff' }}>
      
      {/* Hero Banner - Ref: Screenshot 2026-05-14 at 4.22.08 PM.jpg */}
      <section className="position-relative overflow-hidden mb-5" style={{ height: '350px' }}>
        <div 
          className="position-absolute w-100 h-100" 
          style={{ 
            background: `linear-gradient(to right, rgba(0,0,0,0.8) 20%, transparent 80%), url('https://via.placeholder.com/1600x400/business-meeting') center/cover`,
            zIndex: 1 
          }}
        ></div>
        <div className="container h-100 d-flex align-items-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold" style={{ color: limeGreen }}>Success Stories</h1>
        </div>
        
        {/* Sticky Sidebar Icons seen in all screenshots */}
        <div className="position-absolute end-0 top-50 translate-middle-y d-flex flex-column gap-1" style={{ zIndex: 10 }}>
          <div className="p-2" style={{ backgroundColor: limeGreen, cursor: 'pointer' }}>🎙️</div>
          <div className="p-2" style={{ backgroundColor: limeGreen, cursor: 'pointer' }}>📞</div>
        </div>
      </section>

      {/* Stories Grid - Ref: 4.22.13 PM & 4.22.21 PM */}
      <div className="container">
        <div className="row g-4">
          {stories.map((story, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 h-100 shadow-sm" style={{ borderRadius: '0px' }}>
                <img src={story.img} className="card-img-top" alt="story" style={{ height: '220px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column p-4" style={{ backgroundColor: story.bgColor }}>
                  <h5 className="fw-bold mb-3" style={{ fontSize: '1.25rem', lineHeight: '1.4' }}>
                    {story.title}
                  </h5>
                  <p className="text-muted small mb-4 flex-grow-1">
                    <span className="fw-bold text-dark">Project Objective</span> {story.objective}
                  </p>
                  
                  {story.tag && (
                    <div className="mb-3">
                      <span className="text-muted small italic" style={{ fontStyle: 'italic' }}>
                        • {story.tag}
                      </span>
                    </div>
                  )}

                  <div className="mt-auto d-flex justify-content-end">
                    <a href="#" className="text-dark text-decoration-none small fw-bold">
                      <span className="me-2">&rarr;</span> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .card { transition: transform 0.3s ease; }
        .card:hover { transform: translateY(-5px); }
      `}</style>
    </div>

     </>
  );
};

export default SuccessStories;