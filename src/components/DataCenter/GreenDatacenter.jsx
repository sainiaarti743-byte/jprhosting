import React, { useState } from 'react';
import SEO from '../SEO';

export default function GreenDatacenter() {
  // FAQ state toggle karne ke liye
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
    <SEO 
        title="Eco-Friendly Green Data Center Cloud Nodes"
        description="Host digital systems sustainably. Energy-efficient computing configurations reducing environmental impacts via localized carbon metrics management."
        keywords="green data center eco friendly server nodes sustainable cloud hosting"
        url="https://jprhosting.in/data-center/cloud-services"
      />
   
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>
      
     
      <section 
        className="position-relative text-white d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(to right, rgba(0,20,50,0.95), rgba(0,40,80,0.85)), url("/assets/banner/enterprise-network-connectivity.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '450px',
          padding: '80px 0'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <h1 className="fw-bold display-5 mb-4" style={{ lineHeight: '1.2' }}>
                Accelerate Digital <span style={{ color: '#d4af37' }}>Agility with JPRHosting Cloud</span> <br />
                <span className="text-warning">Future-Ready Multi-Cloud & Hybrid Solutions</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">Scalable, Secure, and Cost-Optimized Cloud Infrastructure</p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Start Cloud Journey
              </button>
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex" style={{ gap: '8px' }}>
            <div className="bg-warning" style={{ width: '40px', height: '4px' }}></div>
            <div className="bg-secondary" style={{ width: '40px', height: '4px', opacity: 0.5 }}></div>
            <div className="bg-secondary" style={{ width: '40px', height: '4px', opacity: 0.5 }}></div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: ABOUT CLOUD SERVICES
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-1" style={{ letterSpacing: '-0.5px' }}>
                Transform your business with an Intelligent Multi-Cloud ecosystem
              </h2>
              <p className="text-muted mb-4 fs-6">
                Legacy systems often struggle with scalability and high operational costs. Modern enterprises need a cloud strategy that balances performance with cost-efficiency.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                JPRHosting <strong>Cloud Services</strong> provide a unified approach to <strong>Public, Private, and Hybrid Cloud</strong> management. With deep expertise in <strong>AWS, Azure, and Google Cloud</strong>, we help you migrate, manage, and optimize your workloads seamlessly. Our platform offers <strong>Cloud Governance, FinOps, and automated orchestration</strong> to ensure your digital assets are always available, secure, and running at peak performance.
              </p>

              {/* Decorative Dot Matrix */}
              <div className="mt-5 opacity-25 d-flex flex-column row-gap-1" style={{ width: '180px' }}>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="d-flex justify-content-between">
                    {[...Array(12)].map((_, j) => (
                      <span key={j} className="bg-secondary rounded-circle" style={{ width: '6px', height: '6px' }}></span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-5 mt-4 mt-md-0">
              <div className="border border-secondary border-opacity-25 rounded p-5 d-flex align-items-center justify-content-center bg-light" style={{ minHeight: '250px' }}>
                <div className="text-center text-muted">
                  <img
                    src="/assets/banner/data3.jpeg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: CLOUD OFFERINGS
         ========================================== */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-dark mb-5 fs-2">Our Cloud offerings</h2>
          
          <div className="row g-4 row-gap-5">
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Managed Public Cloud</h5>
              <p className="text-muted small lh-base">
                End-to-end management of AWS, Azure, and GCP environments with proactive monitoring, cost optimization, and 24/7 technical support.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Enterprise Private Cloud</h5>
              <p className="text-muted small lh-base">
                Secure, isolated, and dedicated cloud environments tailored for sensitive data and high-performance enterprise applications.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Cloud Migration Services</h5>
              <p className="text-muted small lh-base">
                Zero-friction migration of legacy workloads to the cloud using automated tools and a proven 'Lift & Shift' or 'Refactor' approach.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Disaster Recovery on Cloud</h5>
              <p className="text-muted small lh-base">
                Robust DRaaS (Disaster Recovery as a Service) to ensure business continuity with near-zero RPO and RTO on cloud infrastructure.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Cloud Security & Governance</h5>
              <p className="text-muted small lh-base">
                Implementation of Zero Trust architecture, identity management, and compliance auditing across multi-cloud deployments.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Cloud FinOps & Cost Optimization</h5>
              <p className="text-muted small lh-base">
                Intelligent analytics to track cloud spending, eliminate wasted resources, and resize infrastructure for maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: CLOUD FOOTPRINT / STATS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#004c3f' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Our Cloud Mastery & Scale</h2>
          <p className="mb-5 opacity-90 fs-5 fw-light">Seamless Orchestration across Global Regions</p>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="border border-white border-opacity-25 rounded p-4 text-center bg-white bg-opacity-10" style={{ minHeight: '200px' }}>
              <img
                    src="/assets/banner/data4.jpeg"
                    alt=""
                    className="img-fluid"
                  />
              </div>
            </div>

            <div className="col-lg-7 text-start ps-lg-5">
              <div className="row g-4">
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">250+</span>
                    <span className="small text-white opacity-90">Cloud Certified Experts</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">15+</span>
                    <span className="small text-white opacity-90">Global Cloud Regions Connect</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">30%</span>
                    <span className="small text-white opacity-90">Average Cost Savings for Clients</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Tier III</span>
                    <span className="small text-white opacity-90">Enterprise Grade Cloud Nodes</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">500+</span>
                    <span className="small text-white opacity-90">Cloud Migrations Completed</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">24x7</span>
                    <span className="small text-white opacity-90">Cloud Operations Center (COC)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY JPRHosting FOR CLOUD
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 fs-2 text-dark">
            Why <span className="text-success">JPRHosting</span> for Cloud Services
          </h2>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Multi-Cloud Neutrality:</strong> Expert advice across AWS, Azure, and GCP.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Scalable on Demand:</strong> Auto-scaling resources to meet business peaks.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Integrated Interconnect:</strong> Direct high-speed fiber to cloud on-ramps.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Zero-Data Loss:</strong> Advanced backup and synchronization protocols.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Automated Governance:</strong> Policy-driven compliance across all tenants.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Hybrid Flexibility:</strong> Seamless integration between on-prem and cloud.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>DevOps & Agile:</strong> CI/CD pipeline integration for fast deployments.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>FinOps Management:</strong> Reducing cloud bill wastage through deep auditing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: TRUSTED SEGMENTS
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-dark mb-1 fs-2">Sectors thriving on JPRHosting Cloud</h2>
          <p className="text-muted mb-4 fs-5">Enabling high-growth industries with cloud-native agility.</p>

          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">SaaS & Tech Companies</h5>
                <p className="text-muted small mb-0 lh-base">
                  Accelerating product launches with automated dev-test environments and scalable microservices.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Media & Entertainment</h5>
                <p className="text-muted small mb-0 lh-base">
                  High-speed content transcoding and low-latency delivery through cloud-integrated CDNs.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Manufacturing & Logistics</h5>
                <p className="text-muted small mb-0 lh-base">
                  IoT data processing and real-time supply chain analytics powered by cloud-native AI.
                </p>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-dark mt-5 fs-2 pt-2">Operational Cloud Excellence – 5 Pillars</h2>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: FAQs
         ========================================== */}
      <section className="py-5 mb-5" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">FAQs</h2>

          <div className="d-flex flex-column" style={{ gap: '12px' }}>
            {[
              {
                q: "What is Multi-Cloud management?",
                a: "Multi-Cloud management is the practice of using multiple public cloud providers (like AWS and Azure) together. JPRHosting provides a single pane of glass to manage resources, security, and costs across all these providers."
              },
              {
                q: "How does JPRHosting help in Cloud Cost Optimization?",
                a: "Our FinOps team uses advanced analytics to identify 'zombie' resources, suggests rightsizing for over-provisioned instances, and helps you leverage reserved instances for significant savings."
              },
              {
                q: "Is my data secure during migration?",
                a: "Absolutely. We use encrypted transit tunnels and private connectivity (like Direct Connect or ExpressRoute) during migration to ensure your data is never exposed to the public internet."
              },
              {
                q: "Can I move back from cloud to on-premise (Cloud Exit strategy)?",
                a: "Yes. We design cloud architectures with portability in mind, using containers and standard protocols that allow for data repatriation if your business needs change."
              },
              {
                q: "Do you support Hybrid Cloud setups?",
                a: "Yes. We specialize in Hybrid Cloud, connecting your on-premise data centers with public clouds seamlessly through JPRHosting own high-speed network backbone."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded border border-light shadow-sm overflow-hidden"
                >
                  <div 
                    className="p-3 d-flex align-items-center justify-content-between"
                    style={{ 
                      cursor: 'pointer', 
                      backgroundColor: isOpen ? '#4a4a4a' : '#ffffff',
                      color: isOpen ? '#ffffff' : '#212529',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="fw-semibold small">{isOpen ? '−' : '+'} &nbsp; {faq.q}</span>
                  </div>

                  {isOpen && (
                    <div className="p-4 bg-white border-top border-light">
                      <p className="mb-0 text-muted small" style={{ lineHeight: '1.6' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
     </>
  );
}