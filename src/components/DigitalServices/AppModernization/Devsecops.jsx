import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../SEO';

const Devsecops = () => {
  return (
    <>
    <SEO 
        title="DevSecOps Integration - Continuous Pipeline Security"
        description="Embed security scripts directly inside your deployment processes. Continuous automated security checks running inside fast operational code lines."
        keywords="DevSecOps services India, secure CI CD pipeline, automation compliance tests"
        url="https://jprhosting.in/digital-services/app-modernization/devsecops"
      />
   
    <div className="devsecops-container bg-white">

      {/* 1. Hero Section - Ref: Screenshot 2026-05-14 at 10.44.51 AM.jpg */}
       <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h1 className="text-warning fw-bold h3">DevSecOps Services for secure and efficient application modernization</h1>
          <div className="border-start border-warning border-4 ps-3 mt-3">
            <p className="mb-0 small">DevSecOps integrates security practices into the DevOps process, ensuring security is embedded throughout the development lifecycle.</p>
          </div>
        </div>
      </section>

      <section className="py-5 container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold">DevSecOps services with automated governance and compliance</h1>
            <p className="mt-4 text-muted">
            In this agile, complex, and changing world, providing quick, iterative response to business demands and adapting to them is the need of the hour for enterprises. This is critical for them to survive disruptions and convert them into opportunities. With an integrated governance and compliance solution implemented through continuous feedback and AI-driven adaptation, DevSecOps services are the key to success.
            </p>
            <p className="text-muted">
             The Sify Value Chain – DevSecOps service starts with measuring the prevailing DevSecOps status to establish a baseline, and provides a maturity model for enabling the effective use of DevSecOps at minimum cost with high compliance. It provides an automated fast release pipeline – from development to deployment to production and further monitoring – for the developers and operations.


            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/img2/DevSecOps-Spotlight.png" alt="AWS Cloud" className="img-fluid" />
          </div>
        </div>
      </section>



      {/* 2. JPRHosting Value Chain - Ref: Screenshot 2026-05-14 at 10.45.11 AM.jpg */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="h4 fw-bold mb-4">JPRHosting value chain platform – integrated AI-enabled ops</h2>
          <div className="row g-4 justify-content-center">
            {[
              { name: "CloudOps", items: "Environment Provisioning, Application Provisioning", color: "#004d40" },
              { name: "DevOps", items: "Tool Chain Setup, CI/CD", color: "#00838f" },
              { name: "SecOps", items: "Security Assessment, Security Testing", color: "#2e7d32" },
              { name: "ComplianceOps", items: "Compliance Automation", color: "#2e7d32" },
              { name: "GovernanceOps", items: "Track Atomic Progress Measure KPIs", color: "#006064" },
              { name: "AIOps", items: "Cost/Workload Optimization, Incident Prediction", color: "#00838f" }
            ].map((op, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card border-0 shadow-sm rounded-pill overflow-hidden" style={{ borderLeft: `10px solid ${op.color}` }}>
                  <div className="card-body p-3 ps-4">
                    <h6 className="fw-bold mb-1">{op.name}</h6>
                    <p className="small text-muted mb-0">{op.items}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Three Pillars - Ref: Screenshot 2026-05-14 at 10.45.32 AM.jpg */}
      <section className="py-5">
        <div className="container">
          <h3 className="h5 fw-bold text-center mb-5">JPRHosting’s DevSecOps is a union of culture, practices and tools providing continuous delivery to the end user</h3>
          <div className="row text-center g-4">
            {[
              { title: "Culture", list: ["Trust", "Collaboration", "Transparency", "Communication"], icon: "👥" },
              { title: "Practices", list: ["Continuous integration", "Continuous testing", "Continuous delivery"], icon: "🎯" },
              { title: "Tools", list: ["Build", "Test", "Deploy", "Monitor", "Security"], icon: "🛠️" }
            ].map((pillar, idx) => (
              <div key={idx} className="col-md-4">
                <div className="pillar-card p-4 rounded bg-light h-100 border-top border-warning border-5">
                  <div className="rounded-circle bg-white border border-warning d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                    {pillar.icon}
                  </div>
                  <h5 className="fw-bold">{pillar.title}</h5>
                  <ul className="list-unstyled mt-3 small text-muted text-start ps-4">
                    {pillar.list.map((li, i) => <li key={i}>• {li}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-warning text-center fw-bold py-2 rounded-pill">
            Security built-in throughout
          </div>
        </div>
      </section>

      {/* 4. Statistics/Highlights - Ref: Screenshot 2026-05-14 at 10.46.08 AM.png */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Highlights</h2>
          <div className="row g-3">
            {[
              { val: "60+", label: "Tools integrated" },
              { val: "200+", label: "Cloud services enabled" },
              { val: "100+", label: "Design best practices" },
              { val: "600+", label: "APIs integrated" },
              { val: "500+", label: "Security policies" },
              { val: "25+", label: "AI models" }
            ].map((stat, idx) => (
              <div key={idx} className="col-md-4">
                <div className="bg-white p-4 text-center border-start border-4 border-warning shadow-sm">
                  <h4 className="fw-bold mb-0">{stat.val}</h4>
                  <p className="text-muted small mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Key Services Grid - Ref: Screenshot 2026-05-14 at 10.46.16 AM.jpg */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Key Services</h2>
          <div className="row g-4">
            {["CI/CD", "Container Management", "Security Posture", "Config Management", "App Instance on Demand", "Governance"].map((service, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-4 shadow-sm rounded border-bottom border-warning border-4 bg-white h-100">
                  <h6 className="fw-bold">{service}</h6>
                  <p className="small text-muted">Enterprise-grade management and automation services.</p>
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

export default Devsecops;