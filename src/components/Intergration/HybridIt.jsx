import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const Hybridit = () => {
  return (
    <>
    <SEO 
        title="Hybrid IT - Local Hardware & Cloud Harmonization"
        description="Balance local processing power with scalable cloud computing pipelines smoothly for balanced workloads."
        keywords="hybrid IT integrations cloud local infrastructure coordination"
        url="https://jprhosting.in/integration-services/hybrid-it-integration-services"
      />
   
    <div className="it-integration-page">

      {/* 5. IT Hero Section (Screenshot 2026-05-14 at 2.55.07 PM.jpg) */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container-fluid">
          <h1 className="display-5 fw-bold" style={{ color: '#d4e117', maxWidth: '700px' }}>
            Modernize and transform on-premise and cloud workloads with IT integration services
          </h1>
        </div>
      </section>

      {/* 6. Hybrid IT Info Section (Screenshot 2026-05-14 at 2.55.14 PM.jpg) */}
      <section className="hybrid-info py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Stay agile and in control through unified cloud and Hybrid IT Integration Services</h2>
              <p className="small text-muted mb-3">
                Hybrid IT serves as the overarching strategy or blueprint that governs the deployment and delivery...
              </p>
              <p className="small text-muted">
                <strong>JPRHosting delivers an exceptional hybrid IT experience</strong> through CI, AWS, Azure, Google, OCI and on-premise build models.
              </p>
              <div className="dot-grid mt-4" style={{ opacity: 0.2 }}>• • • • • • • •</div>
            </div>
            
            {/* Infographic Area */}
            <div className="col-lg-7">
              <div className="d-flex flex-wrap justify-content-center position-relative pt-5">
                {/* Yahan aap Screenshot 2026-05-14 at 2.55.14 PM.jpg ki infographic image lagayenge */}
                <img src="/assets/img3/Hybrid-IT-integration.svg" alt="Cloud Integration Workflow" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. IT Service Offerings (Screenshot 2026-05-14 at 2.55.21 PM.jpg) */}
      <section className="it-services py-5" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <h2 className="mb-5 fw-bold">Our service offerings</h2>
          <div className="row g-4">
            {[
              { title: "Hybrid IT", desc: "An innovative and balanced approach to own and consume IT with the best of both scenarios" },
              { title: "Private Cloud Build", desc: "Self-owned cloud data center with full automation and a single, centralized point of control" },
              { title: "Multi-Cloud", desc: "Design, implementation, and integration of multiple public cloud environments" },
              { title: "DC Modernization", desc: "Standardization of infrastructure, consolidation, hyper-convergence, virtualization, and security" },
              { title: "DC Network Build", desc: "Agile, high-performance, software-defined, and low-latency backbone of the data center network" },
              { title: "Managed Services", desc: "Skills, tools, and flexible monitoring processes to manage your entire IT footprint" }
            ].map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="service-card p-2">
                  <div className="icon mb-3" style={{ fontSize: '2.5rem' }}>🌐</div>
                  <h6 className="fw-bold">{service.title}</h6>
                  <p className="text-muted" style={{ fontSize: '0.85rem' }}>{service.desc}</p>
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

export default Hybridit;