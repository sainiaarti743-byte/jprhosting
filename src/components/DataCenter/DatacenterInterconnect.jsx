import React, { useState } from 'react';
import SEO from '../SEO';

export default function DatacenterInterconnect() {
  // FAQ state toggle karne ke liye
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
    <SEO 
        title="Data Center Interconnect & Disaster Recovery Sites"
        description="High-speed real-time mirroring loops tracking active storage changes across secure geographical separation zones to handle emergency faults."
        keywords="disaster recovery sites server clustering failover channels interconnect"
        url="https://jprhosting.in/data-center/disaster-recovery"
      />
    
  
    <div className="bg-light text-dark position-relative" style={{ fontFamily: 'sans-serif' }}>
      
      
      <section 
        className="position-relative text-white d-flex align-items-center" 
        style={{ 
          background: 'linear-gradient(to right, rgba(40,10,20,0.95), rgba(70,15,30,0.85)), url("/assets/banner/Integration_banner.jpg")',
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
                Uncompromised <span style={{ color: '#d4af37' }}>Business Continuity</span> <br />
                <span className="text-warning">Automated Disaster Recovery as a Service (DRaaS)</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">Near-Zero RTO & RPO targets for mission-critical enterprise workloads</p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Build Resilience Plan
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
          SECTION 2: ABOUT DISASTER RECOVERY
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-1" style={{ letterSpacing: '-0.5px' }}>
                Protect your enterprise from data loss, ransomware, and infrastructure outages
              </h2>
              <p className="text-muted mb-4 fs-6">
                Unexpected hardware failures, cyber-attacks, or natural calamities can halt operations instantly, leading to financial loss and reputational damage.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                JPRHosting's <strong>Disaster Recovery Services</strong> deliver an automated, secure, and fully managed framework to keep your business running under any crisis. Powered by robust <strong>multi-site asynchronous replication</strong> and hybrid configurations, we ensure your databases, core configurations, and client applications failover smoothly. Our lifecycle includes <strong>continuous data synchronization, non-disruptive DR drills, automated runbook execution, and rapid system remediation.</strong>
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
                    src="/assets/banner/data6.jpeg"
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
          <h2 className="fw-bold text-dark mb-5 fs-2">Our Disaster Recovery offerings</h2>
          
          <div className="row g-4 row-gap-5">
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Real-Time Continuous Replication</h5>
              <p className="text-muted small lh-base">
                Block-level, low-overhead synchronization mapping live storage changes into remote recovery nodes continuously to ensure absolute minimal data gap points.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Automated Runbook Orchestration</h5>
              <p className="text-muted small lh-base">
                Single-click failover flows designed to boot cloud node compute layers, re-route networking paths, and restore full production operations without manual delays.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Non-Disruptive DR Drills</h5>
              <p className="text-muted small lh-base">
                Periodic isolated verification routines that validate infrastructure readiness and recovery time compliance metrics without affecting ongoing primary operations.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Ransomware Rollback Shielding</h5>
              <p className="text-muted small lh-base">
                Immutable, timestamped recovery points enabling teams to instantly rewind storage volumes right back to healthy moments before malware or encryption execution.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Hybrid & Cloud-to-Cloud DR</h5>
              <p className="text-muted small lh-base">
                Flexible layouts supporting recovery mapping from physical on-premise components to public cloud instances, or native protection between separate isolated cloud providers.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Managed DR Consultation</h5>
              <p className="text-muted small lh-base">
                Expert system assessment analyzing business applications to prioritize critical dependency maps, draft accurate RPO targets, and align compliance metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: DR INFRASTRUCTURE SCALE / STATS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#7a1c1c' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Our DR Operational Resilience</h2>
          <p className="mb-5 opacity-90 fs-5 fw-light">Guaranteed business survival metrics when disaster strikes</p>

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
                    <span className="display-5 fw-bold text-info me-2">&lt; 15 Min</span>
                    <span className="small text-white opacity-90">Recovery Time Objective (RTO) Achieved</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Seconds</span>
                    <span className="small text-white opacity-90">Recovery Point Objective (RPO) Capacity</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">100%</span>
                    <span className="small text-white opacity-90">Drill Success Integrity Rate</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">PB Scale</span>
                    <span className="small text-white opacity-90">Protected Enterprise Storage Volumes</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Zero</span>
                    <span className="small text-white opacity-90">Data Loss Failover Pipelines Designed</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">24x7</span>
                    <span className="small text-white opacity-90">Continuous BCP Operations Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY JPRHosting FOR DISASTER RECOVERY
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 fs-2 text-dark">
            Why <span className="text-success">JPRHosting</span> for DRaaS Solutions
          </h2>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Granular Point Recovery:</strong> Roll back data to specific hours or minutes to bypass file corruption issues.
                </p>
              </div>
                </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Network Auto-Routing:</strong> Instant DNS shifting mapping active users to recovery nodes cleanly.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Immutable Snapshots:</strong> Write-Once-Read-Many (WORM) parameters preventing unauthorized script overrides.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Multi-Tenant Isolation:</strong> Strict cloud segment boundaries protecting recovery image profiles.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Resource-Friendly FinOps:</strong> Pay only for raw backup storage; compute pricing kicks in only when full failover boots.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Regulatory Compliance:</strong> Meets strict SEBI, RBI, and global corporate audit standards for data resiliency.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>End-to-End Encryption:</strong> Strict data shielding across transit pipelines and sitting storage sectors.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Integrated Network Backbone:</strong> Low-latency high-speed fiber paths maximizing pipeline synchronization speeds.
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
          <h2 className="fw-bold text-dark mb-1 fs-2">Industries secured by JPRHosting DRaaS</h2>
          <p className="text-muted mb-4 fs-5">Eliminating downtime boundaries across high-stakes corporate operations.</p>

          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Banking & Financial Exchanges</h5>
                <p className="text-muted small mb-0 lh-base">
                  Securing core ledger led transaction ledgers via continuous real-time multi-zone hot replication structures.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Healthcare & Hospital Portals</h5>
                <p className="text-muted small mb-0 lh-base">
                  Maintaining immediate, continuous accessibility to emergency patient logs and monitoring feeds during system dropouts.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Critical Logistics & Airlines</h5>
                <p className="text-muted small mb-0 lh-base">
                  Preserving continuous tracking channels and real-time transit scheduling grids through sudden regional node failures.
                </p>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-dark mt-5 fs-2 pt-2">Disaster Recovery Engineering – 5 Pillars</h2>
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
                q: "What is the difference between RTO and RPO?",
                a: "Recovery Time Objective (RTO) is the duration of time within which infrastructure must be restored after an outage before impacting business. Recovery Point Objective (RPO) is the maximum acceptable age of the data that can be recovered (e.g., data loss measured in seconds or minutes)."
              },
              {
                q: "Will a DR drill disrupt our live business operations?",
                a: "No. JPRHosting executes DR drills inside completely isolated, fenced network segments. The live production applications remain completely untouched while recovery runbooks are exhaustively tested."
              },
              {
                q: "How does DRaaS protect against active ransomware threats?",
                a: "Since our backup repositories hold immutable, version-controlled snapshots, we can isolate infected systems and revert storage volumes back to clean, pre-attack timestamps within minutes."
              },
              {
                q: "What does pay-per-use mean in Disaster Recovery setups?",
                a: "You only pay standard pricing for the underlying storage used to hold your replica images. The high-performance compute pricing (vCPUs/RAM) is billed only when a real failover or pre-scheduled drill boots those cloud systems into active use."
              },
              {
                q: "How fast is the user traffic redirected during a primary site failure?",
                a: "Our automated system runbooks trigger automated DNS shifts. Global traffic routes are automatically re-targeted to the secondary recovery data center node within minutes of outage confirmation."
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