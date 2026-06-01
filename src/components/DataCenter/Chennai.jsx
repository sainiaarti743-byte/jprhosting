import React, { useState } from 'react';

export default function Chennai() {
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
          background: 'linear-gradient(to right, rgba(10,35,40,0.95), rgba(15,55,60,0.85)), url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80")',
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
                Enterprise Grade <span style={{ color: '#d4af37' }}>Site Reliability</span> <br />
                <span className="text-warning">Maximizing Performance Stability & Fault-Tolerant Architectures</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">Continuous SLA Management, Performance Engineering & Proactive SRE Automation</p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Optimize System Reliability
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
          SECTION 2: ABOUT RELIABILITY SERVICES
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-1" style={{ letterSpacing: '-0.5px' }}>
                Eliminate unexpected system bottlenecks and engineer absolute operational uptime
              </h2>
              <p className="text-muted mb-4 fs-6">
                High user concurrency surges, database deadlocks, and unoptimized cloud deployments can cause high latencies, breaking essential user-facing journeys.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                JPRHosting's specialized <strong>Reliability Engineering Services</strong> are explicitly built to guarantee system resilience for complex software environments. Backed by our dedicated <strong>Site Reliability Engineering (SRE) frameworks</strong>, we deliver advanced <strong>fault isolation, horizontal auto-scaling matrices, and real-time observability structures</strong>. We focus on continuous system optimization through deep <strong>chaos engineering dry-runs, synthetic load modeling, and microsecond-level telemetry tracing.</strong>
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
                  <i className="bi bi-cpu fs-1 mb-2"></i>
                  <p className="small mb-0">[ Core Uptime & Telemetry Dashboard Placeholder ]</p>
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
          <h2 className="fw-bold text-dark mb-5 fs-2">Our Reliability offerings</h2>
          
          <div className="row g-4 row-gap-5">
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Managed Site Reliability Engineering (SRE)</h5>
              <p className="text-muted small lh-base">
                Embedding certified SRE experts into your product cycles to automate operational tasks, configure reliable pipelines, and destroy recurring infrastructure bugs.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Advanced Chaos Engineering</h5>
              <p className="text-muted small lh-base">
                Injecting controlled faults, instance shutdowns, and artificial network spikes directly into staging nodes to evaluate structural resilience under real pressure.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">High-Availability & Load Balancing</h5>
              <p className="text-muted small lh-base">
                Configuring automated multi-region active-active traffic routing maps to prevent single points of failure across global user-facing application layers.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Full-Stack Observability & Telemetry</h5>
              <p className="text-muted small lh-base">
                Deploying unified tracing frameworks across system logs, query flows, and cloud metrics to identify hidden micro-latencies instantly.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">SLO / SLI Infrastructure Guarding</h5>
              <p className="text-muted small lh-base">
                Formulating precise Service Level Indicators (SLIs) and Error Budgets to control fast code deployment speeds against platform stability benchmarks.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Capacity Planning & Scalability Auditing</h5>
              <p className="text-muted small lh-base">
                Running high-volume stress simulations against your app infrastructure to accurately project and allocate hardware resources before mass traffic events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: RELIABILITY STATS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#0f3d3e' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Our Reliability Architecture & Milestones</h2>
          <p className="mb-5 opacity-90 fs-5 fw-light">Sovereign Performance Guardrails Preserving Enterprise Stability</p>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="border border-white border-opacity-25 rounded p-4 text-center bg-white bg-opacity-10" style={{ minHeight: '200px' }}>
                <p className="text-white-50 mb-0 pt-5">[ Real-Time Error Budget Visualization Map ]</p>
              </div>
            </div>

            <div className="col-lg-7 text-start ps-lg-5">
              <div className="row g-4">
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">99.999%</span>
                    <span className="small text-white opacity-90">Uptime Targets Engineered</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">&lt; 5 Min</span>
                    <span className="small text-white opacity-90">Mean Time to Detect (MTTD) Anomalies</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">80%+</span>
                    <span className="small text-white opacity-90">Operational Routine Overhead Automated</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">50M+</span>
                    <span className="small text-white opacity-90">Concurrent Telemetry Metrics Parsed Daily</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Zero</span>
                    <span className="small text-white opacity-90">Single Points of Failure on Core Frameworks</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">24x7</span>
                    <span className="small text-white opacity-90">Continuous Performance Command Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY JPRHosting FOR RELIABILITY
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 fs-2 text-dark">
            Why <span className="text-success">JPRHosting</span> for Platform Reliability
          </h2>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Automated Remediation:</strong> Instant self-healing script execution upon server node response failures.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Deep Database Optimization:</strong> Finding and optimizing slow transactions before database locks occur.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Error Budget Guardrails:</strong> Intelligent tracking parameters preventing unstable code pushes automatically.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Synthetic User Modeling:</strong> Continually simulating real user actions to check checkout flow health.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Blameless Post-Mortems:</strong> Structuring technical post-mortems to discover and fix system design flaws.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Microservices Resiliency:</strong> Implementing robust circuit-breaker logic across high-load microservice calls.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Dynamic Auto-Scaling:</strong> Tuning infrastructure profiles to scale resources horizontally within seconds.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>High-Fidelity Logs:</strong> Preserving clean execution metrics for historical capacity charting.
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
          <h2 className="fw-bold text-dark mb-1 fs-2">Sectors running on JPRHosting Reliability Frameworks</h2>
          <p className="text-muted mb-4 fs-5">Securing high-concurrency digital platforms against sudden stability drops.</p>

          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">FinTech Payment Gateways</h5>
                <p className="text-muted small mb-0 lh-base">
                  Ensuring zero checkout dropouts during peak discount shopping hours using robust active-active load balancing layouts.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">On-Demand Streaming Portals</h5>
                <p className="text-muted small mb-0 lh-base">
                  Optimizing database connections and data delivery networks to handle millions of simultaneous API calls smoothly.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Enterprise ERP Networks</h5>
                <p className="text-muted small mb-0 lh-base">
                  Maintaining stable app response times for global logistics tracking grids running across complex cloud systems.
                </p>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-dark mt-5 fs-2 pt-2">Reliability Engineering Excellence – 5 Core Pillars</h2>
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
                q: "What is Site Reliability Engineering (SRE)?",
                a: "SRE is a methodology that applies software engineering principles directly to infrastructure challenges. Its goal is to create highly automated, self-healing platforms, replacing repetitive manual operations with clean, scalable code."
              },
              {
                q: "What is an Error Budget?",
                a: "An Error Budget is the maximum acceptable amount of system downtime or instability allowed for a product (e.g., a 99.9% uptime target leaves a 0.1% error budget). If an app breaks this budget, new code releases are paused until platform stability is restored."
              },
              {
                q: "How does Chaos Engineering improve live production stability?",
                a: "Chaos Engineering safely injects mock failures (like server turn-offs or network drops) into isolated systems. This helps engineers find weaknesses and build self-healing configurations before real hardware breakdowns happen."
              },
              {
                q: "What parameters are tracked inside full-stack observability setups?",
                a: "We track the 'Four Golden Signals' of reliability: Latency (request times), Traffic (system demand), Errors (failure rates), and Saturation (resource limits like CPU or memory load)."
              },
              {
                q: "How does circuit-breaker logic prevent widespread system outages?",
                a: "If a specific microservice fails or slows down, a circuit breaker cuts off calls to that service automatically. This stops the slowdown from piling up and crashing the entire application ecosystem."
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