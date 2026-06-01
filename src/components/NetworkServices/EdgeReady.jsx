import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const EdgeReady = () => {
  const limeColor = "#adff2f";
  const darkPurple = "#6f3586";

  return (
    <>
    <SEO 
        title="Edge-Ready Ultra Low Latency Environments"
        description="Distribute data computation points close to active users to achieve instant edge compute feedback."
        keywords="edge networks ultra low latency compute edge routing nodes"
        url="https://jprhosting.in/network-services/network-transformation-services/edge-ready"
      />
   
    <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. Edge Connect Hero - Ref: Screenshot 2026-05-14 at 2.22.17 PM.jpg */}
       <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h2 className="fw-bold" style={{ color: limeColor }}>
            Edge Connect - Edge Ready Network Transformation with JPRHosting
          </h2>
        </div>
      </section>

      {/* 2. Edge Connect Content - Ref: Screenshot 2026-05-14 at 2.22.17 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="/assets/img3/Edge-Ready-Network-SPotlight.png" alt="Edge Assets" className="img-fluid" />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h3 className="fw-bold mb-4">Connect to the Edge Connect Network Transformation Services</h3>
              <p className="text-muted small mb-3">
                Today’s enterprises are accelerating efforts to move to the cloud for on-demand compute, capacity, scale, better reach, and higher availability. With the unprecedented advancement in IoT, data modeling, and AI/ML, there is a <strong>growing focus on edge computing and its benefits</strong>.
              </p>
              <p className="text-muted small mb-0">
                JPRHosting's <strong>Edge Connect</strong> platform plays an important role in the <strong>security, unified policy, mobility, access, visibility, automation, and autonomy of end-user devices</strong>, IoT, and so on.
              </p>
              <div className="mt-4 d-flex justify-content-center opacity-25">
                 {[...Array(12)].map((_, i) => <span key={i} className="mx-1 fs-4">•</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Edge Highlights - Ref: Screenshot 2026-05-14 at 2.22.25 PM.jpg */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-5">Highlights</h3>
          <div className="row g-4">
            {[
              { t: "Quick, accurate decision-making", d: "Real-time information is available to onsite production teams via the Wi-Fi platform" },
              { t: "Better production planning & logistics", d: "Assets tracking to minimize waste/loss by using sensors" },
              { t: "Complete mobility", d: "Information on-the-go for end-users to access the corporate network" },
              { t: "Lower IT support costs", d: "As-a-service model frees up IT Team's bandwidth to focus on business-critical activities" },
              { t: "Improve employee safety", d: "Human Resources tracking helps prevent employees from entering restricted plant areas" }
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="p-4 bg-white h-100 shadow-sm border-start border-4" style={{ borderColor: limeColor }}>
                  <h6 className="fw-bold mb-3">{item.t}</h6>
                  <p className="text-muted small mb-0">{item.d}</p>
                </div>
              </div>
            ))}
            {/* Dot pattern block */}
            <div className="col-md-8 d-none d-md-flex align-items-center">
              <div className="w-100 opacity-25 text-success" style={{ letterSpacing: '15px', lineHeight: '1' }}>
                ••••••••••••••••••••••••<br/>••••••••••••••••••••••••<br/>••••••••••••••••••••••••
              </div>
            </div>
          </div>
        </div>
      </section>

    


    </div>
     </>
  );
};

export default EdgeReady ;