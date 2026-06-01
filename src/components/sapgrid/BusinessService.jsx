import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SEO from '../SEO';

const BusinessService = () => {
  return (
    <>
    <SEO 
        title="Business Resiliency as a Service | Cloud Backup"
        description="Prevent data disasters. Automated instant failover, real-time incremental backups, and reliable recovery plans to ensure seamless uptime."
        keywords="business resiliency service, cloud disaster recovery, secure backup backup"
        url="https://jprhosting.in/cloudservices/JPRHosting-cloudinfinit-services/business-resiliency-as-a-service"
      />
   
    <div className="dr-container" style={{ backgroundColor: '#f4f4f4', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      
      {/* SECTION 1: HERO & PLAN (Screenshot 2026-05-13 at 10.13.19 AM.jpg) */}
      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container py-4">
          <h1 className="fw-bold" style={{ color: '#c6e217', fontSize: '2.5rem' }}>
            Mitigate disaster-associated risks to <br /> provide disruption-free services
          </h1>
          <button className="btn rounded-pill px-4 mt-3 fw-bold" style={{ backgroundColor: '#c6e217', color: '#000' }}>Contact Us</button>
        </div>
      </section>

      <section className="plan-section py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src="/assets/img2/Business-Resilency-service (1).png" alt="DR Cycle" className="img-fluid" />
            </div>
            <div className="col-md-6 ps-md-5">
              <h2 className="fw-bold mb-4" style={{ fontSize: '2.2rem' }}>Plan, execute and maintain a resilient business</h2>
              <p className="small text-muted mb-3">
                Enterprises need <strong>faster time to recover</strong> from the aftermath of a disaster and continue their business-critical activities.
              </p>
              <p className="small text-muted mb-3">
                JPRHosting provides comprehensive solutions for <strong>business continuity</strong> by managing the entire DR lifecycle with disaster impact and risk assessment.
              </p>
              <p className="small text-muted mb-4">
                We ensure <strong>continuous data protection</strong> from our 11 data centers and secure enterprise private cloud platform.
              </p>
              <div className="dots-pattern d-flex flex-wrap gap-2" style={{ width: '220px' }}>
                {[...Array(24)].map((_, i) => <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ccc' }}></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HIGHLIGHTS (Screenshot 2026-05-13 at 10.13.25 AM.jpg) */}
      <section className="highlights-section py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Highlights</h2>
          <div className="row g-3">
            {highlights.map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="bg-white p-4 h-100 shadow-sm border-start border-4 position-relative" style={{ borderColor: '#c6e217' }}>
                  <p className="small fw-bold m-0" style={{ fontSize: '13px', lineHeight: '1.5' }}>{item}</p>
                  {idx === 8 && (
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', background: 'linear-gradient(135deg, transparent 50%, #c6e217 50%)' }}></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURES (Screenshot 2026-05-13 at 10.13.36 AM.jpg) */}
      <section className="features-section py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-5">Features</h2>
          <div className="row g-4">
            {features.map((f, i) => (
              <div className="col-md-6" key={i}>
                <div className="feature-card d-flex align-items-center shadow-sm rounded p-0 overflow-hidden" style={{ border: '1px solid #eee' }}>
                  <div className="label-box p-4 text-center fw-bold" style={{ 
                    backgroundColor: i % 2 === 0 ? '#c6e217' : '#888', 
                    color: i % 2 === 0 ? '#000' : '#fff',
                    width: '40%',
                    clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                  }}>
                    {f.title}
                  </div>
                  <div className="content-box p-3 bg-light flex-grow-1">
                    <h6 className="fw-bold mb-1" style={{ fontSize: '14px' }}>{f.sub}</h6>
                    <p className="m-0 text-muted" style={{ fontSize: '12px' }}>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom Dots Pattern */}
          <div className="dots-pattern mt-5 d-flex flex-wrap gap-2 ms-auto" style={{ width: '220px' }}>
                {[...Array(30)].map((_, i) => <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ccc' }}></div>)}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY JPRHosting (Screenshot 2026-05-13 at 10.13.42 AM.jpg) */}
      <section className="why-sify py-5" style={{ backgroundColor: '#efefef' }}>
        <div className="container">
          <h2 className="fw-bold mb-4">Why JPRHosting for business resiliency</h2>
          <div className="row g-4">
            {whySify.map((item, i) => (
              <div className="col-md-3" key={i}>
                <div className="card h-100 border-0 shadow-sm border-bottom border-4" style={{ borderColor: i % 2 === 0 ? '#888' : '#c6e217' }}>
                  <div className="card-body p-4">
                    <h6 className="fw-bold mb-3" style={{ fontSize: '15px' }}>{item.title}</h6>
                    <p className="text-muted" style={{ fontSize: '12px', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
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

const highlights = [
  "Fully-managed Disaster-Recovery-as-a-Service from multiple geographic data centers with seismic zonal redundancy",
  "Highly cost-effective compared to traditional disaster recovery solutions, with 50-60% lower total cost of ownership",
  "Scalable to address 100% production workloads with no tie-ups associated with underlying infrastructure. Capable of delivering “zero data loss” protection",
  "Reliability guaranteed through non-disruptive managed DR drills",
  "Huge value to the customers in all the 3 layers of recovery – data replication, system recovery and DR systems and processes",
  "Fully integrated service suite covering data center, data center infrastructure, network, and application recovery",
  "Availability of the DR site for recovery and failover without any hassles of application updating, patching or specialized skills required for the DR site",
  "Single ownership with 24X7 helpdesk support for optimal RPO and RTO goals",
  "Pay for the usage during disaster period with flexible monthly/yearly plans"
];

const features = [
  { title: "CDP Technology", sub: "Meeting Stringent SLAs", desc: "RPO = Near zero to 30 min | RTO = 30 Min to few hours" },
  { title: "Online Portal for DR Service Management", sub: "Customer Dashboard", desc: "Monitoring of service, RPO | RTO balance check, Performance" },
  { title: "Cloud Solution", sub: "On Demand provisioning", desc: "Faster implementation, scalable, high-available" },
  { title: "Automated DR setup, replication, recovery Et Fail back", sub: "Guaranteed Apps Recovery", desc: "No specialized skills needed" },
  { title: "WAN optimization, Data encryption with Qos", sub: "Optimized Network", desc: "Compression, Encryption supported" }
];

const whySify = [
  { title: "On-demand enterprise-grade cloud infrastructure", desc: "Readily deployable DR solutions without upfront capex and DR on-demand proposition." },
  { title: "Integrated or converged network stack", desc: "Cost-effective solutions enabling multiple customer sites to connect to the DR site, along with near-DR data center and connectivity capabilities for zero data loss." },
  { title: "Best-of-breed technology and management capability", desc: "Right-sized DR design meeting optimal RPO, RTO requirements, industry-leading solutions and partner tools for replication, DR management and reporting." },
  { title: "Single partner for managed services", desc: "Across data center, network, infrastructure, applications, and end-user devices." }
];

export default BusinessService;