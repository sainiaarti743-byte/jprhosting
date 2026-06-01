import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SEO from '../SEO';

const DesktopCloud = () => {
  return (
    <>
    <SEO 
        title="Desktop as a Service (DaaS) | Cloud Workspaces"
        description="Access workspace virtualization safely from anywhere. Secure virtual environments for your distributed workforce with high encryption overlays."
        keywords="desktop as a service, DaaS India, virtual desktop workspace, cloud computer"
        url="https://jprhosting.in/cloudservices/JPRHosting-cloudinfinit-services/Desktop-as-a-Service"
      />
   
    <div className="daas-page" style={{ overflowX: 'hidden' }}>
      
      {/* HERO SECTION (Top Gradient Part) */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h1 className="fw-bold mb-4" style={{ color: '#c6e217', fontSize: '2.5rem' }}>
            Digital workplace on the go – <br />
            work from anywhere, anytime
          </h1>
          <button className="btn rounded-pill px-4 py-2 fw-bold" style={{ 
            backgroundColor: '#c6e217', 
            color: '#000',
            fontSize: '14px'
          }}>
            Contact Us
          </button>
        </div>
      </section>

      {/* CONTENT SECTION (Illustration and Text) */}
      <section className="content-section py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Left side: Isometric Cloud Illustration */}
            <div className="col-md-6 pe-md-5">
              <div className="img-wrapper" style={{ position: 'relative' }}>
                <img 
                  src="/assets/img2/Desktop-as-a-service (1).png" 
                  alt="Desktop as a Service Illustration" 
                  className="img-fluid" 
                />
              </div>
            </div>

            {/* Right side: Text Content */}
            <div className="col-md-6">
              <h2 className="fw-bold mb-4" style={{ fontSize: '2.4rem', lineHeight: '1.2' }}>
                Desktop-as-a-Service: Easy-to-use digital <br />
                workplace on the cloud
              </h2>
              
              <div className="description" style={{ fontSize: '15px', color: '#444', lineHeight: '1.6' }}>
                <p className="mb-4">
                  In the new normal, organizations need to configure their employees' workstations faster, while enabling 
                  anywhere, anytime secure access.
                </p>
                
                <p className="mb-4">
                  JPRHosting's CloudInfinit hybrid cloud infrastructure offers a <strong>seamless, efficient, fast, and reliable 
                  virtualization service pack</strong> integrating compute, network, storage, security, and virtualization depending 
                  on the usage and the number of users at scale. It offers simplified management of virtual desktop 
                  environments using a modern architecture that delivers the best experience, irrespective of user location.
                </p>
              </div>

              {/* Dot Pattern Grid */}
              <div className="dots-container mt-4 d-flex flex-wrap" style={{ width: '220px', gap: '10px' }}>
                {[...Array(30)].map((_, i) => (
                  <div key={i} style={{ 
                    width: '6px', 
                    height: '6px', 
                    backgroundColor: '#cccccc', 
                    borderRadius: '50%' 
                  }}></div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
  {/* SECTION 2: Highlights (Based on Screenshot 2026-05-13 at 9.07.10 AM.png) */}
      <section className="highlights-section py-5">
        <div className="container-fluid">
          <h2 className="fw-bold mb-4">Highlights</h2>
          <div className="row g-3">
            {[
              "Instant, real-time automated deployment of VMs",
              "Highly scalable and resilient",
              "Usage-based monthly or annual billing",
              "Reliable service and strong SLA",
              "24x7 customer support via email or phone",
              "Lower total cost of ownership (TCO)",
              "Gen-5 intelligent cloud management platform",
              "Flexibility to choose the right cloud model"
            ].map((text, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="bg-white p-3 d-flex align-items-center h-100 shadow-sm" style={{ borderLeft: '6px solid #c6e217' }}>
                  <span className="fw-bold small text-dark">{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       <section className="dark-possibilities py-5 text-white" style={{ backgroundColor: '#000', backgroundImage: 'radial-gradient(circle at 50% 50%, #222 0%, #000 100%)' }}>
        <div className="container py-4">
          <h2 className="fw-bold mb-2">Infinite possibilities with JPRHosting CI</h2>
          <p className="mb-5">Cloud Leadership Across Industries</p>
          <div className="row g-4">
            {[
              "Decade-plus experience of managing and migrating 250+ cloud customers in India",
              "Holistic multi cloud approach across public, private and hybrid",
              "On-premise-like experience for your cloud workloads",
              "Assured cost-effectiveness for predictable loads",
              "Single point of ownership across all digital-led IT infrastructure",
              "Outcome-based service models enable industries to relate with their business"
            ].map((text, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="bg-white text-dark p-4 rounded h-100 d-flex align-items-center justify-content-center text-center shadow">
                  <p className="m-0 small fw-medium">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQs (Based on Screenshot 2026-05-13 at 9.07.47 AM.jpg) */}
      <section className="faq-section py-5">
        <div className="container-fluid">
          <h2 className="fw-bold mb-4">FAQs</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item border-0 mb-3 shadow-sm rounded">
              <h2 className="accordion-header">
                <button className="accordion-button text-white" style={{ backgroundColor: '#4a4a4a' }}>
                  — What is a Hosted Private Cloud?
                </button>
              </h2>
              <div className="accordion-collapse collapse show">
                <div className="accordion-body bg-white py-4">
                  <p className="small m-0">A Hosted Private Cloud is a cloud computing environment dedicated to a single organization, providing enhanced privacy, control, and security compared to shared cloud environments...</p>
                </div>
              </div>
            </div>
            {[
              "What are the benefits of using JPRHosting CloudInfinit Hosted Private Cloud?",
              "How does JPRHosting ensure the security of its Hosted Private Cloud?",
              "Can I integrate my existing IT infrastructure with the JPRHosting Hosted Private Cloud?",
              "What kind of support does JPRHosting provide?",
              "What is Private Cloud?"
            ].map((q, i) => (
              <div className="accordion-item border-0 mb-2 border-bottom" key={i}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed bg-transparent" type="button">
                    + {q}
                  </button>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
  

    </div>
     </>
  );
};

export default DesktopCloud;