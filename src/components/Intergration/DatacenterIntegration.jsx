import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const DatacenterIntegration = () => {
  const sifyGreen = "#adff2f";

  // Timeline Data for the zigzag layout
  // const timelineSteps = [
  //   { title: "Pioneering private cloud build services", icon: "☁️", color: "#e74c3c", position: "top" },
  //   { title: "Design and build secure, green, and scalable data centers", icon: "🏢", color: "#f39c12", position: "bottom" },
  //   { title: "Data center consolidation and modernization", icon: "⚙️", color: "#7f8c8d", position: "top" },
  //   { title: "HCI, virtualization, automation and enhanced security of data centers", icon: "🛡️", color: "#2980b9", position: "bottom" },
  //   { title: "Software-defined and agile data center network", icon: "🌐", color: "#34495e", position: "top" },
  //   { title: "Flexible monitoring and management of IT footprint", icon: "📊", color: "#27ae60", position: "bottom" },
  // ];

  return (
    <>
    
    <SEO 
        title="On-Premise to Cloud Data Center Integrations"
        description="Consolidate physical equipment rooms safely with scalable public or private hosting locations."
        keywords="data center integration hardware consolidation cloud setups"
        url="https://jprhosting.in/integration-services/data-center-integration-services"
      />
    <div style={{ fontFamily: 'Segoe UI, sans-serif', color: '#333' }}>

        <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/data-center-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container-fluid">
          <h1 className="display-5 fw-bold" style={{ color: '#d4e117', maxWidth: '700px' }}>
            Modernize and transform on-premise and cloud workloads with IT integration services
          </h1>
        </div>
      </section>
      
      {/* 1. Infrastructure Revolution Section - Ref: Screenshot 2026-05-14 at 2.53.49 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4" style={{ fontSize: '2.2rem' }}>
                Revolutionizing your infrastructure with next-level Data Center Integration services
              </h2>
              <p className="text-muted small mb-4">
                Data centers must support agile infrastructure by leveraging cloud and virtualization, software-defined infrastructure, and automation to meet the evolving business dynamics.
              </p>
              <p className="text-muted small mb-4">
                For <strong>over 20 years</strong>, JPRHosting has been proactively handling data center projects by tapping into state-of-art tools and robust industrialized methodologies.
              </p>
              <p className="text-muted small">
                Our Data Center Integration Service (DCIS) enables enterprises to design, build, deploy, deliver, and secure applications across the distributed enterprise architecture.
              </p>
              <div className="mt-5 opacity-25 d-flex gap-2">
                {[...Array(24)].map((_, i) => <span key={i} style={{fontSize: '10px'}}>●</span>)}
              </div>
            </div>

            {/* Zigzag Timeline Column */}
            <div className="col-lg-7 position-relative mt-5 mt-lg-0">
          <img src="/assets/img3/DC-integration-spotlight.svg" alt="Edge Assets" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Offerings - Ref: Screenshot 2026-05-14 at 2.53.53 PM.jpg */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <h3 className="fw-bold mb-5">Our service offerings</h3>
          <div className="row g-5">
            {[
              { 
                title: "Private Cloud Build", 
                desc: "Pioneer in building cloud data centers with full automation and a single centralized point of control",
                icon: "☁️"
              },
              { 
                title: "Data Center Build", 
                desc: "Designing and building smart, green, and scalable data centers to run business-critical applications on-premise",
                icon: "🏢"
              },
              { 
                title: "Data Center Modernization", 
                desc: "Standardization of infrastructure, consolidation, hyper-converged infrastructure, virtualization, automation, and security.",
                icon: "⚙️"
              },
              { 
                title: "Data Center Network Build", 
                desc: "Agile, high-performance, software-defined, and low-latency backbone of the data center network",
                icon: "🌐"
              },
              { 
                title: "Managed Services", 
                desc: "Leverage skills, tools, processes, and flexible monitoring and management of your entire IT footprint.",
                icon: "🛠️"
              }
            ].map((service, i) => (
              <div className="col-md-4" key={i}>
                <div className="pe-lg-4">
                  <div className="mb-4 d-inline-block p-2 rounded" style={{ border: `1px solid ${sifyGreen}` }}>
                    <span className="fs-2">{service.icon}</span>
                  </div>
                  <h6 className="fw-bold mb-3">{service.title}</h6>
                  <p className="text-muted x-small" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Branding Detail */}
      <div className="py-4 bg-white text-end container">
         <small className="text-muted opacity-50">JPRHosting DCIS Framework v2.0</small>
      </div>

    </div>
    </>
  );
};

export default DatacenterIntegration;