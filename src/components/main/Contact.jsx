import React, { useState } from 'react';

import SEO from '../SEO';

const Contact = () => {
  // FAQ accordion state handling
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
   <SEO 
        title="Contact Us | 24/7 Server Support Helpdesk"
        description="Get in touch with JPRHosting. Contact our Jaipur technical support station for server management, pricing setups, and sales assistance."
        keywords="contact JPRHosting, hosting customer care India, tech support hotline Jaipur"
        url="https://jprhosting.in/contact"
      />
    
   
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>
      
     
      <section 
        className="position-relative text-white d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(to right, rgba(0,20,40,0.95), rgba(0,40,60,0.85)), url("/assets/banner/data-center-integration-services.jpg")',
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
                <span style={{ color: '#d4af37' }}>Let’s Connect</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">
                  Talk to our cloud experts and digital transformation specialists.
                </p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Send a Message
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
          SECTION 2: CONTACT FORM & SUPPORT INFO
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5">
            {/* Contact Form Column */}
            <div className="col-lg-7">
              <h2 className="fw-bold text-dark mb-4 fs-2">Contact Form</h2>
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Full Name</label>
                  <input type="text" className="form-control bg-light border-0 py-2" placeholder="Enter your name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Email Address</label>
                  <input type="email" className="form-control bg-light border-0 py-2" placeholder="name@company.com" />
                </div>
                <div className="col-md-12">
                  <label className="form-label small fw-bold">Subject</label>
                  <select className="form-select bg-light border-0 py-2">
                    <option defaultValue>General Inquiry</option>
                    <option>Cloud Hosting Services</option>
                    <option>Cybersecurity Solutions</option>
                    <option>Enterprise Sales</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label className="form-label small fw-bold">Message</label>
                  <textarea className="form-control bg-light border-0 py-2" rows="4" placeholder="How can we help you?"></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-warning fw-bold px-4 rounded-pill">Submit Inquiry</button>
                </div>
              </form>
            </div>

            {/* Email & Phone Support Column */}
            <div className="col-lg-5">
              <h2 className="fw-bold text-dark mb-4 fs-2">Email & Phone Support</h2>
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start">
                  <div className="bg-light p-3 rounded-circle me-3">
                    <i className="bi bi-envelope-at-fill text-warning fs-4"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Direct Email Support</h6>
                    <p className="text-muted small mb-0 lh-base">
                      General: support@jprhosting.com<br />
                      Business: info@jprhosting.com
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="bg-light p-3 rounded-circle me-3">
                    <i className="bi bi-telephone-outbound-fill text-warning fs-4"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Phone Inquiries</h6>
                    <p className="text-muted small mb-0 lh-base">
                      Toll Free: +1-800-JPR-CLOUD<br />
                      Office: +91-141-XXXXXXX
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Dot Matrix */}
              <div className="mt-5 opacity-25 d-flex flex-column row-gap-1" style={{ width: '120px' }}>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="d-flex justify-content-between">
                    {[...Array(8)].map((_, j) => (
                      <span key={j} className="bg-secondary rounded-circle" style={{ width: '5px', height: '5px' }}></span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: 24×7 TECH SUPPORT & ENTERPRISE SALES
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container">
          <div className="row g-4">
            {/* 24x7 Technical Support */}
            <div className="col-md-6">
              <div className="bg-white p-4 rounded shadow-sm border-start border-warning border-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-headset fs-2 text-warning me-3"></i>
                  <h4 className="fw-bold text-dark mb-0">24×7 Technical Support</h4>
                </div>
                <p className="text-muted small mb-0 lh-base">
                  Our dedicated NOC and SOC teams are available around the clock to assist with infrastructure outages, server management, and urgent cloud deployments. Log in to your portal for instant ticket escalation.
                </p>
              </div>
            </div>

            {/* Enterprise Sales */}
            <div className="col-md-6">
              <div className="bg-white p-4 rounded shadow-sm border-start border-dark border-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-briefcase fs-2 text-dark me-3"></i>
                  <h4 className="fw-bold text-dark mb-0">Enterprise Sales</h4>
                </div>
                <p className="text-muted small mb-0 lh-base">
                  Looking for hyperscale solutions or custom private cloud architecture? Speak with our sales architects to draft an SLA-backed infrastructure plan tailored for your organizational requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: OFFICE LOCATIONS & MAP INTEGRATION
         ========================================== */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-4">
            {/* Office Locations */}
            <div className="col-lg-5">
              <h2 className="fw-bold text-dark mb-4 fs-2">Office Locations</h2>
              <div className="bg-light p-4 rounded mb-3">
                <h6 className="fw-bold mb-2">Corporate Headquarters</h6>
                <p className="text-muted small mb-0">
                  ICT Tower, Tech Corridor,<br />
                  Jaipur, Rajasthan, India - 3020XX
                </p>
              </div>
              <div className="bg-light p-4 rounded">
                <h6 className="fw-bold mb-2">Regional Operations Center</h6>
                <p className="text-muted small mb-0">
                  Data Hub Plaza, Level 4,<br />
                  Cyber City, Gurgaon, India
                </p>
              </div>
            </div>

            {/* Map Integration Placeholder */}
            <div className="col-lg-7">
              <h2 className="fw-bold text-dark mb-4 fs-2">Map Integration</h2>
              <div className="bg-dark rounded overflow-hidden position-relative" style={{ minHeight: '320px', background: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80")', backgroundSize: 'cover' }}>
                <div className="position-absolute top-50 start-50 translate-middle bg-white p-3 rounded shadow-lg">
                  <span className="fw-bold small text-dark"><i className="bi bi-geo-alt-fill text-danger me-1"></i> Visit Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: FAQ SECTION
         ========================================== */}
      <section className="py-5 mb-5" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <h2 className="fw-bold text-dark mb-4 fs-2">FAQ Section</h2>

          <div className="d-flex flex-column" style={{ gap: '12px' }}>
            {[
              {
                q: "What is the average response time for support tickets?",
                a: "For Critical (Priority 1) issues, our SLA guarantees a response within 15 minutes. General technical inquiries are addressed within 2 to 4 business hours."
              },
              {
                q: "How can I contact the security operations team?",
                a: "Security-related incidents should be reported via the 'Security Escalation' channel in your customer dashboard or by emailing soc@jprhosting.com for 24/7 monitoring assistance."
              },
              {
                q: "Do you offer physical data center tours for corporate clients?",
                a: "Yes, site visits can be arranged for enterprise customers following a formal request through your account manager and strict security clearance protocols."
              },
              {
                q: "How do I request a custom quote for managed services?",
                a: "You can use the 'Enterprise Sales' subject line in the contact form above, or contact our sales desk directly at sales@jprhosting.com with your technical requirements."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-white rounded border border-light shadow-sm overflow-hidden">
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
};

export default Contact;