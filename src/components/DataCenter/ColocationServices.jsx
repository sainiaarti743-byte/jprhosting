import React, { useState } from 'react';
import SEO from '../SEO';

export default function ColocationServices() {
  // FAQ state toggle karne ke liye
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
  <SEO 
        title="Secure Server Colocation | Rack Space Allocation"
        description="Rent standard private computing racks equipped with continuous redundant power feeds and highly resilient physical locks."
        keywords="colocation server rack space secure data center housing systems"
        url="https://jprhosting.in/data-center/colocation-services"
      />
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>


      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          background: 'linear-gradient(to right, rgba(0,25,20,0.95), rgba(0,50,40,0.85)), url("/assets/banner/Digital_app-modernization.jpg")',
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
                India’s first <span style={{ color: '#d4af37' }}>NVIDIA Certified DGX-Ready</span> <br />
                <span className="text-warning">Data Center Service Provider for Liquid Cooling</span>
              </h1>

              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">Supports 130+ kW/rack power and cooling</p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Contact Us
              </button>
            </div>
          </div>

          {/* Slider Indicators at the Bottom Center */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex" style={{ gap: '8px' }}>
            <div className="bg-warning" style={{ width: '40px', height: '4px' }}></div>
            <div className="bg-secondary" style={{ width: '40px', height: '4px', opacity: 0.5 }}></div>
            <div className="bg-secondary" style={{ width: '40px', height: '4px', opacity: 0.5 }}></div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: ABOUT INFRASTRUCTURE (SCREENSHOT 2)
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            {/* Left Content Column */}
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-1" style={{ letterSpacing: '-0.5px' }}>
                Move your IT infrastructure to a reliable, secure, and managed colocation data center
              </h2>
              <p className="text-muted mb-4 fs-6">
                Enterprises are challenged with the complexities of managing their own IT-infrastructure, capex vs opex, compliances, and under-utilization.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                JPRHosting, with <strong>25 years of experience</strong> in <strong>colocation Data Center</strong> services in India, helps you to accelerate your digital transformation journey in a reliable and secure environment. We offer comprehensive data center solutions through our <strong>hyperscale data centers</strong> from single cabinet to multi-megawatt power deployment in a carrier-neutral, multi-IX, multi-telecom ecosystem. Our expertise includes <strong>colocation data center services, Data Center Design, Creation, Migration, and Managed Services.</strong>
              </p>

              {/* Decorative Dot Matrix Grid */}
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

            {/* Right Missing Image/Placeholder Column */}
            <div className="col-md-5 mt-4 mt-md-0">
              <div className="border border-secondary border-opacity-25 rounded p-5 d-flex align-items-center justify-content-center bg-light" style={{ minHeight: '250px' }}>
                <div className="text-center text-muted">
            
                  <img
                    src=" /assets/banner/data1.jpeg"
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
          SECTION 3: OUR SERVICE OFFERINGS (SCREENSHOT 3)
         ========================================== */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-dark mb-5 fs-2">Our service offerings</h2>

          <div className="row g-4 row-gap-5">
            {/* Box 1 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Data Center Colocation</h5>
              <p className="text-muted small lh-base">
                Data center space is leased according to customer specifications, from single-cabinet to multi-megawatt-capacity deployment, built-to-suit data centers.
              </p>
            </div>
            {/* Box 2 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Physical Migration</h5>
              <p className="text-muted small lh-base">
                Ensure seamless movement of customer’s IT assets from in-house or third-party data centers to JPRHosting data centers.
              </p>
            </div>
            {/* Box 3 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Cross Connects</h5>
              <p className="text-muted small lh-base">
                Extend network from MMRs to customer racks via copper cable, single mode to bulk fiber deployment. This is a ready-to-use connectivity link between JPRHosting DC-hosted customer and other telcos/BSO.
              </p>
            </div>
            {/* Box 4 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Smart Hands</h5>
              <p className="text-muted small lh-base">
                Skilled technicians and engineers capable of advising and following customer instructions to complete the physical tasks within their colocation space, with 24x7 availability.
              </p>
            </div>
            {/* Box 5 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Secure Cage with Multifactor Authentication</h5>
              <p className="text-muted small lh-base">
                Customizable, opaque, solid privacy panels or complete mesh cage from raised floor to the ceiling, with self-closing door that uses badge and biometric access.
              </p>
            </div>
            {/* Box 6 */}
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Secure Office Space</h5>
              <p className="text-muted small lh-base">
                Exclusive, secure and customized office space with basic fit-outs, furniture, multi-factor authentication using badge, biometric reader, and other value-added services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: DATA CENTER FOOTPRINT (SCREENSHOT 4)
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#6f42c1' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Our Data Center Footprint</h2>
          <p className="mb-5 opacity-90 fs-5 fw-light">Scalable, Sustainable, and Supercharged for AI</p>

          <div className="row align-items-center mt-4">
            {/* Left Placeholder Column */}
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="border border-white border-opacity-25 rounded p-4 text-center bg-white bg-opacity-10" style={{ minHeight: '200px' }}>
                  <img
                    src="/assets/banner/data2.jpeg"
                    alt=""
                    className="img-fluid"
                  />
                  
              </div>
            </div>

            {/* Right Counters Grid */}
            <div className="col-lg-7 text-start ps-lg-5">
              <div className="row g-4">
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">14</span>
                    <span className="small text-white opacity-90">Data Centers in operation</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">188 MW</span>
                    <span className="small text-white opacity-90">Live Capacity</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">11</span>
                    <span className="small text-white opacity-90">Upcoming Metro and Edge Data Centers</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">3</span>
                    <span className="small text-white opacity-90">AI-optimized NVIDIA-certified data centers</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">309.6 MWp</span>
                    <span className="small text-white opacity-90">renewable power contracted</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">58.7%</span>
                    <span className="small text-white opacity-90">Power generated from renewable sources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY JPRHosting GRID (SCREENSHOT 5)
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 fs-2 text-dark">
            Why <span className="text-success">JPRHosting</span> for Colocation Services
          </h2>

          <div className="row g-3">
            {/* Card 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>RAS</strong> based design for future ready infrastructure
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>14 Data Centers – 188 MW</strong>, Upcoming <strong>11</strong> Metro and Edge DCs
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  Campuses is highly scalable with BTS capabilities
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  Enhanced <strong>10 levels</strong> of security with automation
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>309.6 MWp</strong> renewable energy contracted. ESG best practices
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  AI/ML led operational excellence with <strong>100% uptime</strong>
                </p>
              </div>
            </div>
            {/* Card 7 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Hyperconnected</strong>, Carrier-neutral and Rich Interconnect ecosystem
                </p>
              </div>
            </div>
            {/* Card 8 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>130 kW/rack</strong> with liquid cooling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: TRUSTED CLIENTS & PILLARS (SCREENSHOT 6)
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-dark mb-1 fs-2">Hyperscale and global enterprises trust JPRHosting</h2>
          <p className="text-muted mb-4 fs-5">JPRHosting Data Center host more than 500+ customers across all segments.</p>

          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Hyperscale cloud service providers</h5>
                <p className="text-muted small mb-0 lh-base">
                  With presence in multiple cities, JPRHosting has continued to invest in providing infrastructure to hyperscalers thereby enabling cloud on-ramp to enterprises.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Global enterprises</h5>
                <p className="text-muted small mb-0 lh-base">
                  Large BFSI companies, media, manufacturers, retailers, technology companies, and more rely on JPRHosting's Colocation Services.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Global OTT providers</h5>
                <p className="text-muted small mb-0 lh-base">
                  JPRHosting provides low-latency delivery of video and content streaming services to global OTT players.
                </p>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-dark mt-5 fs-2 pt-2">Operational sustainability – 5 pillars</h2>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: ACCORDION FAQs (SCREENSHOT 7)
         ========================================== */}
      <section className="py-5 mb-5" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">FAQs</h2>

          <div className="d-flex flex-column" style={{ gap: '12px' }}>
            {[
              {
                q: "What is Colocation Data Center?",
                a: "A Colocation Data Center is a facility where businesses can rent space to house their servers and IT equipment. It provides power, cooling, bandwidth, and physical security, while companies maintain control over their hardware."
              },
              {
                q: "What colocation options does JPRHosting offer?",
                a: "JPRHosting offers single cabinet, multi-rack configurations, caged environments, and customized built-to-suit private data halls depending on your scale and requirements."
              },
              {
                q: "How does JPRHosting ensure the security of colocated assets?",
                a: "JPRHosting uses enhanced 10-tier automated security check-points, including continuous CCTV monitoring, biometric scanners, automated card access control, and 24/7 on-site guard patrols."
              },
              {
                q: "What additional services are available with JPRHosting's colocation offerings?",
                a: "Additional services include physical asset migration management, Smart Hands 24x7 support, robust cross-connect deployments, carrier-neutral network setups, and complete infrastructure managed services."
              },
              {
                q: "Where are 'JPRHosting data centers located in India?",
                a: "JPRHosting operating 14 hyperscale data centers spanning across vital metro areas and edge networks in main enterprise Hubs throughout India."
              },
              {
                q: "What sustainability initiatives does JPRHosting implement in their data centers?",
                a: "JPRHosting uses over 58.7% renewable energy sources, holding a contracted capacity of 309.6 MWp, alongside deploying green liquid cooling technology that cuts waste in extreme density server environments."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded border border-light shadow-sm overflow-hidden"
                >
                  {/* Accordion Header */}
                  <div
                    className={`p-3 d-flex align-items-center justify-content-between style-pointer`}
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

                  {/* Accordion Body */}
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