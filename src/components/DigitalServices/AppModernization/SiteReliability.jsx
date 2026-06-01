import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../SEO';

const SiteReliability = () => {
  return (
    <>
    <SEO 
        title="Site Reliability Engineering (SRE) Services"
        description="Achieve continuous fault-tolerant application uptimes using advanced monitoring configurations and proactive server metrics tracking."
        keywords="SRE engineering services, infrastructure monitoring uptime, log tracing systems"
        url="https://jprhosting.in/digital-services/app-modernization/site-reliability-engineering"
      />
    <div className="sre-container bg-white">

      {/* 1. Hero Banner - Ref: Screenshot 2026-05-14 at 10.46.49 AM.jpg */}
       <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h1 className="text-warning fw-bold h3">Site Reliability Engineering (SRE)</h1>
          <p className="mb-0 border-start border-warning border-4 ps-3">Meeting ever-increasing reliability demands</p>
        </div>
      </section>

      {/* 2. Intro Section with Poster Image Space */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              {/* Image Placeholder for the circular SRE Design Poster */}
              <div className="p-4 border border-dashed text-center bg-light rounded">
                <img 
                  src="/assets/img2/Site-Reliability-Engineering-SRE.png" 
                  alt="SRE Design Poster" 
                  className="img-fluid"
                />
                {/* <p className="text-muted mt-2 small">[Design Poster: Screenshot 2026-05-14 at 10.46.49 AM.jpg]</p> */}
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold h4">Achieving quantifiable and reliable outcomes through Site Reliability Engineering</h2>
              <p className="text-muted small">
                JPRHosting's SRE creates <strong>measurable, incremental, and sustained value</strong> by modernization and automation of the enterprise application landscape.
              </p>
              <p className="text-muted small">
                The focus is moving towards production shortcomings to ensure that SRE parameter targets are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Highlights Grid - Ref: Screenshot 2026-05-14 at 10.46.57 AM.jpg */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold h4 mb-4">Highlights</h2>
          <div className="row g-3">
            {[
              "Define Service Level Objectives (SLOs) and SLIs",
              "Define monitoring and assess tools for observability",
              "Eliminate toil",
              "Faster identification of production issues",
              "Improvement and efficiency in monitoring alerts",
              "Maximized visibility and control"
            ].map((text, idx) => (
              <div key={idx} className="col-md-4">
                <div className="bg-white p-3 border-start border-4 border-warning shadow-sm h-100">
                  <p className="small mb-0 fw-bold">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SRE Key Principles - Ref: Screenshot 2026-05-14 at 10.47.10 AM.jpg */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold h4 mb-5 text-center">SRE Key Principles</h2>
          <div className="row g-4 justify-content-center">
           
              <div  className="col-md-4">
               <img 
               src="/assets/img2/Monitoring-and-Alarams.svg" 
               alt="SRE Delivery Pillars Diagram - Screenshot 2026-05-14 at 10.47.22 AM.jpg" 
               className="img-fluid"
             />
              </div>
              <div  className="col-md-4">
               <img 
               src="/assets/img2/CI-CD.svg" 
               alt="SRE Delivery Pillars Diagram - Screenshot 2026-05-14 at 10.47.22 AM.jpg" 
               className="img-fluid"
             />
              </div>
              <div  className="col-md-4">
               <img 
               src="/assets/img2/Backup.svg" 
               alt="SRE Delivery Pillars Diagram - Screenshot 2026-05-14 at 10.47.22 AM.jpg" 
               className="img-fluid"
             />
              </div>
          
          </div>
        </div>
      </section>

      {/* 5. Delivery Pillars Diagram Space - Ref: Screenshot 2026-05-14 at 10.47.22 AM.jpg */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold h4 mb-4">JPRHosting's SRE solution is focused on four delivery pillars</h2>
          <div className="p-5 ">
             {/* Space for the Temple/Pillar Diagram */}
             <img 
               src="/assets/img2/Group-30699.svg" 
               alt="SRE Delivery Pillars Diagram - Screenshot 2026-05-14 at 10.47.22 AM.jpg" 
               className="img-fluid"
             />
             <p className="text-muted mt-3 small">[Diagram: Four Delivery Pillars - Screenshot 2026-05-14 at 10.47.22 AM.jpg]</p>
          </div>
        </div>
      </section>

      {/* 6. Detailed Pillars Text - Ref: Screenshot 2026-05-14 at 10.47.32 AM.jpg */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {[
              { t: "Incident Management", d: "Reduce mean time to detect (MTTD) and mean time to resolve (MTTR)." },
              { t: "Problem Management", d: "Deals with root cause analysis, prevention and self-healing mechanisms." },
              { t: "Business Continuity", d: "Disaster recovery and Chaos engineering to identify vulnerabilities." },
              { t: "Environment Management", d: "Ensure a stable, efficient, observable and resilient technology environment." }
            ].map((item, idx) => (
              <div key={idx} className="col-md-6">
                <div className="p-4 border border-warning rounded h-100 shadow-sm">
                  <h5 className="fw-bold">{item.t}</h5>
                  <p className="text-muted small mb-0">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default SiteReliability;