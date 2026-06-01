import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../SEO';

const OracleEnterprise = () => {
  return (
    <>
    <SEO 
        title="Oracle Enterprise Resource Planning (ERP) Solutions"
        description="Deploy unified transactional ledger networks and database management systems safely via industry-standard Oracle enterprise nodes."
        keywords="Oracle database solutions, corporate ERP systems distribution"
        url="https://jprhosting.in/digital-services/enterprise-application-services/oracle"
      />
   
    <div className="oracle-services-container bg-white">

      {/* 1. Hero Banner - Ref: Screenshot 2026-05-14 at 11.59.04 AM.jpg */}
       <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h1 className="text-warning fw-bold h3">Oracle Cloud Infrastructure & Application Managed Services</h1>
          <p className="mb-0 border-start border-warning border-4 ps-3">Elevate performance, maximize potential and unlock efficiency of your Oracle ecosystem</p>
        </div>
      </section>

      {/* 2. Intro with Lifecycle Diagram - Ref: Screenshot 2026-05-14 at 11.59.04 AM.jpg */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold h4 mb-4">Get expert guidance to optimize your Oracle workloads</h2>
              <p className="text-muted small">JPRHosting's Oracle Cloud Managed Services provide a complete solution for managing application, database and middleware performance across Oracle Cloud Infrastructure (OCI) and hybrid IT environments.</p>
              <p className="text-muted small">Our experts analyze and oversee the entire lifecycle of your Oracle systems, enhancing and optimizing the environment to your unique needs and business flow.</p>
            </div>
            <div className="col-lg-6">
              {/* OCI Managed Services Lifecycle Diagram Placeholder */}
              <div className="p-3 border border-dashed rounded bg-light text-center shadow-sm">
                <img 
                  src="/assets/img2/Managed-Services-.svg" 
                  alt="Managed OCI Services Diagram - Screenshot 2026-05-14 at 11.59.04 AM.jpg" 
                  className="img-fluid"
                />
                <p className="text-muted mt-2 x-small">[Diagram: Managed OCI Services Wheel]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Highlights - Ref: Screenshot 2026-05-14 at 11.59.10 AM.png */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold h4 mb-4">Highlights</h2>
          <div className="row g-3">
            {[
              "Comprehensive hybrid and centralized Cloud Management Platform (CMP) for OCI deployment.",
              "A key FastConnect Partner across India providing cost-effective interconnectivity.",
              "Single end-to-end service provider with integrated play across Telecom to DC & Apps.",
              "Customized operating model – Dedicated/Shared, Onsite/Offshore & Hybrid Models.",
              "Oracle Partner-Network member for Cloud Service, Cloud Resell, and License."
            ].map((text, idx) => (
              <div key={idx} className={`${idx < 3 ? 'col-md-4' : 'col-md-6'}`}>
                <div className="bg-white p-4 border-start border-4 border-warning shadow-sm h-100 d-flex align-items-center">
                  <p className="small mb-0 fw-bold">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Service Offerings - Ref: Screenshot 2026-05-14 at 11.59.18 AM.jpg */}
      <section className="py-5">
        <div className="container">
          <h3 className="fw-bold mb-5">Our service offerings</h3>
          <div className="row g-4">
            {[
              { title: "Implementation, Upgrade, Application Development & Support", body: "JPRHosting offers comprehensive Oracle Managed Services, including Oracle Application & DB Managed Support services." },
              { title: "Oracle Cloud Services", body: "Oracle Workloads Migration, Homogenous & Heterogenous Migrations (on-premises/cloud) to OCI/JPRHosting CI." },
              { title: "Consulting and Niche Offerings", body: "Includes Oracle Cloud Fusion/ERP SaaS, Oracle Cloud Analytics, Process Automation, and more." }
            ].map((offering, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 border-warning border-opacity-25 shadow-sm p-4">
                  <h6 className="fw-bold mb-3 border-bottom pb-3">{offering.title}</h6>
                  <p className="text-muted" style={{fontSize: '0.85rem'}}>{offering.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Oracle Journey Flowchart - Ref: Screenshot 2026-05-14 at 11.59.29 AM.jpg */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold mb-5">Oracle journey - Cloud Migration, Upgrades, AMS & DR Services</h3>
          <div className="p-4 border border-dashed bg-white rounded shadow-sm">
             <img 
               src="path_to_oracle_journey_flowchart" 
               alt="Oracle Journey Flowchart - Screenshot 2026-05-14 at 11.59.29 AM.jpg" 
               className="img-fluid"
             />
             <p className="text-muted mt-3 small">[Flowchart: Assessment - Provisioning - Migration - Support - Upgrade - DR]</p>
          </div>
        </div>
      </section>

      {/* 6. Why Choose JPRHosting (Dark Theme) - Ref: Screenshot 2026-05-14 at 11.59.35 AM.jpg */}
      <section className="py-5 text-white" style={{ 
        background: 'linear-gradient(rgba(0,10,30,0.9), rgba(0,10,30,0.9)), url("path_to_oracle_fiber_bg")',
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <h3 className="fw-bold mb-5">Why customers choose <span className="text-warning">JPRHosting</span></h3>
          <div className="row g-4">
            {[
              { t: "End-to-end Application Managed Services", d: "From application consulting, support, and maintenance to complex cloud migration." },
              { t: "Advisory and migration expertise", d: "Experience in 200+ complex cloud migration projects." },
              { t: "Multi cloud management", d: "Better visibility and control while enabling cloud usage policy and governance." },
              { t: "Unified security and compliance automation", d: "Security and visibility on a single console with augmented controls." },
              { t: "Hybrid cloud-led digital infrastructure", d: "Cloud-adjacent data centers and Global Cloud Connect to hyperscalers." },
              { t: "IT modernization", d: "Cloud-agnostic digital infrastructure and value stream management solutions." }
            ].map((item, idx) => (
              <div key={idx} className="col-md-4">
                <div className="p-4 h-100 border border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <h6 className="text-warning fw-bold mb-3">{item.t}</h6>
                  <p className="small text-light opacity-75">{item.d}</p>
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

export default OracleEnterprise;