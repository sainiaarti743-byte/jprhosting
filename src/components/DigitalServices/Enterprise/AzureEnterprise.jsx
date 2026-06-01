import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../SEO';

const AzureEnterprise = () => {
  return (
    <>
    <SEO 
        title="Azure Enterprise Application Integration Services"
        description="Configure your large-scale corporate databases over secure Microsoft Azure active directories with granular user group controls."
        keywords="Azure enterprise application solutions, active directories management cloud"
        url="https://jprhosting.in/digital-services/enterprise-application-services/azure"
      />
   
    <div className="azure-services-container bg-white">

      {/* 1. Hero Section  */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h1 className="text-warning fw-bold h3">Azure Infrastructure & Application Managed Services</h1>
          <p className="mb-0 border-start border-warning border-4 ps-3">Drive innovation, agility, and security within your business</p>
        </div>
      </section>

      {/* 2. Intro with Diagram Space */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold h4 mb-4">Accelerate growth and streamline operations with JPRHosting’s Azure Infrastructure & Application Managed Services</h2>
              <p className="text-muted small">As businesses evolve to meet present requirements and anticipate future needs, digital transformation becomes increasingly pivotal. The Azure cloud platform is a leading force within the enterprise ecosystem.</p>
              <p className="text-muted small">JPRHosting’s Azure Application Services include assessments, migration, strategic consulting, and managed services to fuel your business ambitions.</p>
            </div>
            <div className="col-lg-6">
              {/* Microsoft Services Diagram Placeholder */}
            
                <img 
                  src="/assets/img2/Microsoft-Azure.svg" 
                  alt="Microsoft Services Diagram - Screenshot 2026-05-14 at 11.58.05 AM.jpg" 
                  className="img-fluid"
                />
                {/* <p className="text-muted mt-2 x-small">[Diagram: Microsoft Services Hub]</p> */}
           
            </div>
          </div>
        </div>
      </section>

      {/* 3. Highlights Section  */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold h4 mb-4">Highlights</h2>
          <div className="row g-3">
            {[
              "Comprehensive hybrid and centralized JPRHosting Cloud Management Platform (CMP)",
              "One of the key pan India Express Route providers",
              "A single, one-stop partner offering cloud migration & connectivity",
              "Microsoft LSP (Licensing Solution Provider) & Tier 1 Direct CSP",
              "Microsoft Gold Partner (App Development & Integration)"
            ].map((text, idx) => (
              <div key={idx} className={`${idx < 3 ? 'col-md-4' : 'col-md-6'}`}>
                <div className="bg-white p-4 border-start border-4 border-warning shadow-sm h-100">
                  <p className="small mb-0 fw-bold">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Service Offerings  */}
      <section className="py-5">
        <div className="container">
          <h3 className="fw-bold mb-5">Our service offerings</h3>
          <div className="row g-4 text-center">
            {[
              { title: "Upgrade, Application Development & Support", body: "Comprehensive Azure Managed services including application development, upgrade of applications and workloads." },
              { title: "Azure Cloud Services", body: "Effortlessly transition your business-critical apps to the cloud with our expert guidance. Includes IaaS, PaaS, and more." },
              { title: "O365 Mail Migration Services", body: "Streamline your Office 365 migration with our end-to-end migration service kit, including pre-migration analysis." }
            ].map((offering, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 border-warning border-opacity-25 shadow-sm p-4">
                  <h6 className="fw-bold mb-4 border-bottom pb-3">{offering.title}</h6>
                  <p className="text-muted" style={{fontSize: '0.85rem'}}>{offering.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Customers Choose JPRHosting (Dark Theme)*/}
      <section className="py-5 text-white" style={{ 
        background: 'linear-gradient(rgba(0,10,30,0.9), rgba(0,10,30,0.9)), url("path_to_azure_lines_bg")',
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <h3 className="fw-bold mb-5">Why customers choose <span className="text-warning">JPRHosting</span></h3>
          <div className="row g-4">
            {[
              { t: "End-to-end Application Managed Services", d: "From application consulting, support, and maintenance to complex cloud migration." },
              { t: "Advisory and migration expertise", d: "Comprehensive tool-based discovery and assessment for cloud migration." },
              { t: "Multi cloud management", d: "Providing customers better visibility and control while enabling cloud usage policy." },
              { t: "Unified security and compliance automation", d: "Ensuring unified security and visibility on a single console with augmented controls." },
              { t: "Hybrid cloud-led digital infrastructure", d: "Offering cloud-adjacent data centers and Global Cloud Connect." },
              { t: "Application modernization", d: "Cloud-agnostic digital infrastructure and value stream management solutions." }
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

export default AzureEnterprise;