import React, { useState } from 'react';

export default function Kolkata() {
  // FAQ state toggle karne ke liye
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>
      
  
      <section 
        className="position-relative text-white d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(to right, rgba(15,35,25,0.95), rgba(25,60,40,0.85)), url("/assets/banner/network-transformation-services.jpg")',
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
                Maximize Your <span style={{ color: '#d4af37' }}>Cloud ROI</span> <br />
                <span className="text-warning">Data-Driven Cloud FinOps & Infrastructure Cost Optimization</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">Eliminate Infrastructure Waste, Right-Size Workloads, and Cut Hidden IT Overheads</p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Start Saving Now
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
          SECTION 2: ABOUT COST EFFECTIVE SERVICES
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-1" style={{ letterSpacing: '-0.5px' }}>
                Stop paying for unutilized cloud capacity and over-provisioned system environments
              </h2>
              <p className="text-muted mb-4 fs-6">
                Orphaned storage blocks, oversized compute frames, and unmonitored development instances silently drain enterprise budgets without boosting performance output.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                JPRHosting's advanced <strong>Cost-Effective Cloud Architecture Solutions</strong> empower businesses to regain complete control over their operational expenses. Driven by modern <strong>FinOps principles and structural audit metrics</strong>, we thoroughly inspect your multi-cloud estates to identify hidden cost leaks. We build highly efficient, sustainable pipelines through <strong>intelligent spot-instance orchestration, automatic non-production shutdowns, database storage tiering, and strategic upfront commit modeling.</strong>
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
                  <i className="bi bi-pie-chart-fill fs-1 mb-2"></i>
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
          SECTION 3: SERVICE OFFERINGS
         ========================================== */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-dark mb-5 fs-2">Our Cost Optimization offerings</h2>
          
          <div className="row g-4 row-gap-5">
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Enterprise FinOps Auditing</h5>
              <p className="text-muted small lh-base">
                Mapping granular budget attributions across departments to tag cost allocations, expose idle environments, and introduce permanent cost accountability.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Automated Workload Right-Sizing</h5>
              <p className="text-muted small lh-base">
                Continuously assessing historical CPU/Memory cycles to automatically scale down oversized instances to matching, budget-friendly hardware tiers.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Spot Instance Management Mesh</h5>
              <p className="text-muted small lh-base">
                Safely running batch analytical jobs and stateless container clusters on highly discounted spot computing frames with built-in instant drain fallbacks.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Smart Tiered Storage Archiving</h5>
              <p className="text-muted small lh-base">
                Moving massive, infrequently accessed database backups and static assets out of premium hot storage drives into ultra-low-cost cold glacier storage rooms.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Commitment & RI Optimization</h5>
              <p className="text-muted small lh-base">
                Analyzing baseline usage paths to engineer data-driven Reserved Instance (RI) and Savings Plans combinations, cutting up to 72% off on-demand rates.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Non-Prod Resource Lifecycle Rules</h5>
              <p className="text-muted small lh-base">
                Enforcing strict automated schedules that turn off staging and test clusters completely outside of business hours, preventing accidental weekend charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: FINANCIAL PERFORMANCE STATS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#133520' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Our Cost Optimization Milestones</h2>
          <p className="mb-5 opacity-90 fs-5 fw-light">Proven financial engineering maximizing your underlying infrastructure efficiency</p>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="border border-white border-opacity-25 rounded p-4 text-center bg-white bg-opacity-10" style={{ minHeight: '200px' }}>
                 <img
                    src="/assets/banner/data2.jpeg"
                    alt=""
                    className="img-fluid"
                  />
              </div>
            </div>

            <div className="col-lg-7 text-start ps-lg-5">
              <div className="row g-4">
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">35% - 45%</span>
                    <span className="small text-white opacity-90">Average Monthly Cloud Bill Reductions</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">100%</span>
                    <span className="small text-white opacity-90">Visibility Gained Over Orphaned Cloud Assets</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">&lt; 14 Days</span>
                    <span className="small text-white opacity-90">Initial Potential Cost Drainage Analysis Delivery</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Zero</span>
                    <span className="small text-white opacity-90">Performance Degradation or SLA Violations During Scaling</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Millions</span>
                    <span className="small text-white opacity-90">In Annual IT OpEx Retained for Strategic Innovation</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Real-Time</span>
                    <span className="small text-white opacity-90">Anomaly Budget Alerts & Drift Tracking Enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY JPRHosting FOR COST EFFECTIVE SERVICES
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 fs-2 text-dark">
            Why <span className="text-success">JPRHosting</span> for FinOps & Cloud Economics
          </h2>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Cross-Cloud Tracking:</strong> Unified spend dashboards across AWS, Azure, GCP, and private bare-metal instances.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Intelligent Waste Discovery:</strong> Instant algorithmic flagging of unattached storage volumes and unread system log heaps.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>No-Impact Right-Sizing:</strong> Safely implementing configuration sizing downgrades without causing operational slowdowns.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Container Spend Mapping:</strong> Breaking down granular Kubernetes cluster costs right down to the specific microservice namespace level.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Dynamic Scaling Guardrails:</strong> Configuring upper budget limits on auto-scaling setups to prevent accidental bills from code loops.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Commitment Lifecycle Tracking:</strong> Proactively alerting teams when pre-purchased cloud savings configurations are about to expire.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>License Optimization:</strong> Reclaiming underutilized commercial database licenses and converting to open-source alternatives.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Automated Cleanups:</strong> Deploying lightweight daily script cleanups to sweep up abandoned developer testing images.
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
          <h2 className="fw-bold text-dark mb-1 fs-2">Sectors running on JPRHosting Cost Optimization Frameworks</h2>
          <p className="text-muted mb-4 fs-5">Maximizing margins and infrastructure efficiency across high-scale digital industries.</p>

          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">High-Growth SaaS Brands</h5>
                <p className="text-muted small mb-0 lh-base">
                  Drastically reducing server hosting costs per user by moving tenant sandboxes onto automated auto-scaling structures.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">E-Commerce & Retail Chains</h5>
                <p className="text-muted small mb-0 lh-base">
                  Utilizing intelligent spot instances to power complex catalog parsing batch workloads, slashing operational compute spends.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Banking & NBFC Platforms</h5>
                <p className="text-muted small mb-0 lh-base">
                  Tiering heavy multi-year transaction log histories out into structured secure cold storage lines to meet regulatory compliance cost-effectively.
                </p>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-dark mt-5 fs-2 pt-2">FinOps Cost Management Lifecycle – 5 Core Pillars</h2>
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
                q: "What is Cloud FinOps?",
                a: "FinOps is an operational framework and cultural practice that brings financial accountability to the variable spend model of cloud computing, enabling engineering, finance, and business teams to collaborate on making data-driven spending choices."
              },
              {
                q: "How does right-sizing improve infrastructure cost profiles?",
                a: "Right-sizing analyzes performance telemetry to identify instances running at low utilization (e.g., under 10% average CPU). We then match those workloads to smaller, cheaper server configurations to stop overpaying for wasted resources."
              },
              {
                q: "Is it safe to migrate enterprise databases to tiered cold storage?",
                a: "Yes. Tiered storage policies are configured using automated lifecycle rules. Active databases remain on hot storage for quick access, while old data histories are seamlessly moved to archived cold storage with clear retrieval parameters."
              },
              {
                q: "How do automated non-production schedules generate savings?",
                a: "Most development, testing, and staging clusters are only needed during working hours (roughly 50 hours a week). Automating shutdowns for nights and weekends prevents resources from sitting idle for the remaining 118 hours, instantly lowering non-prod infrastructure bills by over 60%."
              },
              {
                q: "How can dynamic auto-scaling budgets protect against unexpected bill shocks?",
                a: "We configure strict automated guardrails on auto-scaling clusters alongside real-time anomaly alerts. If a broken code loop triggers massive scaling, the system sets off immediate alerts or caps the growth to protect your budget."
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
  );
}