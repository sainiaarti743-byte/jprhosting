import React, { useState } from 'react';

export default function Banglor() {
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
          background: 'linear-gradient(to right, rgba(15,20,45,0.95), rgba(25,35,75,0.85)), url("/assets/banner/hybrid-it-integration-services.jpg")',
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
                Infinite Growth with <span style={{ color: '#d4af37' }}>Elastic Scalability</span> <br />
                <span className="text-warning">On-Demand Horizontal Scaling & High-Concurrency Architecture</span>
              </h1>
              
              <div className="d-flex align-items-center mb-5">
                <div className="bg-warning me-3" style={{ width: '5px', height: '30px' }}></div>
                <p className="fs-5 mb-0 opacity-90">Seamless Resource Provisioning, Cloud Native Refactoring & Zero-Lag Performance</p>
              </div>

              <button className="btn btn-warning fw-semibold rounded-pill px-4 py-2 text-dark btn-lg">
                Scale Your Infrastructure
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
          SECTION 2: ABOUT SCALABILITY SERVICES
         ========================================== */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="fw-bold text-dark mb-4 fs-1" style={{ letterSpacing: '-0.5px' }}>
                Future-proof your application core to handle multi-million user surges smoothly
              </h2>
              <p className="text-muted mb-4 fs-6">
                Monolithic barriers, rigid on-premise compute ceilings, and single-database choke points lead to downtime precisely when your traffic peaks.
              </p>
              <p className="text-dark fs-6" style={{ lineHeight: '1.7' }}>
                JPRHosting's advanced <strong>Scalability Engineering Solutions</strong> liberate your digital applications from hardware limitations. Utilizing cutting-edge <strong>container orchestration, microservices segregation, and dynamic multi-zone layer systems</strong>, we guarantee that your infrastructure dynamically resizes in real time. We engineer seamless scaling path patterns via <strong>distributed memory caching layers, database read-replica mesh systems, and global edge request balancing.</strong>
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
                    src="/assets/banner/data2.jpeg"
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
          <h2 className="fw-bold text-dark mb-5 fs-2">Our Scalability offerings</h2>
          
          <div className="row g-4 row-gap-5">
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Horizontal Auto-Scaling Matrix</h5>
              <p className="text-muted small lh-base">
                Deploying granular scheduling metrics that automatically boot additional application container nodes within seconds during sudden transaction spikes.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Database Sharding & Replication</h5>
              <p className="text-muted small lh-base">
                Partitioning complex massive database estates horizontally into regional shards, utilizing write-isolated read-replicas to speed up querying execution.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Cloud Native Microservices Migration</h5>
              <p className="text-muted small lh-base">
                Refactoring old heavy legacy architectures into isolated, decoupled microservices that scale independently based on real processing load requirements.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Distributed Memory Caching</h5>
              <p className="text-muted small lh-base">
                Integrating lightning-fast Redis or Memcached clusters to cache repetitive application database reads, eliminating redundant backend query loops.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Global Layer-7 Load Balancing</h5>
              <p className="text-muted small lh-base">
                Intelligent traffic orchestration mapping incoming client application streams across multiple physical server clusters using smart location routing.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-dark mb-3">Asynchronous Event-Driven Piping</h5>
              <p className="text-muted small lh-base">
                Utilizing robust message queue solutions like Apache Kafka or RabbitMQ to decouple heavy processing jobs, ensuring zero UI lag during mass request peaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: SCALABILITY STATS
         ========================================== */}
      <section className="py-5 text-white" style={{ backgroundColor: '#0f1c3f' }}>
        <div className="container py-4 text-center">
          <h2 className="fw-bold mb-2 display-6">Our Scalability Milestones & Benchmarks</h2>
          <p className="mb-5 opacity-90 fs-5 fw-light">Sovereign Performance Milestones Handling Mass Concurrency Pushes</p>

          <div className="row align-items-center mt-4">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="border border-white border-opacity-25 rounded p-4 text-center bg-white bg-opacity-10" style={{ minHeight: '200px' }}>
                  <img
                    src="/assets/banner/data1.jpeg"
                    alt=""
                    className="img-fluid"
                  />
              </div>
            </div>

            <div className="col-lg-7 text-start ps-lg-5">
              <div className="row g-4">
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">10X+</span>
                    <span className="small text-white opacity-90">Concurrency Growth Capabilities Unlocked</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">&lt; 30 Sec</span>
                    <span className="small text-white opacity-90">Cluster Node Scaling Trigger Execution Time</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">1M+</span>
                    <span className="small text-white opacity-90">Simultaneous App Connections Managed Safely</span>
                  </div>
                </div>
                <div className="col-sm-6 border-bottom border-white border-opacity-25 pb-3">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">60%</span>
                    <span className="small text-white opacity-90">Database Query Overhead Latency Reductions</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Zero</span>
                    <span className="small text-white opacity-90">Hard Compute Resource Ceilings Remaining</span>
                  </div>
                </div>
                <div className="col-sm-6 pt-2">
                  <div className="d-flex align-items-center">
                    <span className="display-5 fw-bold text-info me-2">Automatic</span>
                    <span className="small text-white opacity-90">Downscaling Controls For Maximum Cost Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY JPRHosting FOR SCALABILITY
         ========================================== */}
      <section className="py-5" style={{ backgroundColor: '#f1f3f5' }}>
        <div className="container">
          <h2 className="fw-bold mb-4 fs-2 text-dark">
            Why <span className="text-success">JPRHosting</span> for Architectural Scalability
          </h2>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Elastic Compute Models:</strong> Instantly provision or decommission cloud clusters based on real-time traffic rules.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>State Isolation Rules:</strong> Building stateless application nodes that allow fluid scaling across any location mesh.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>No-Downtime Migration:</strong> Seamless database updates using advanced live replication patterns.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>FinOps Alignment:</strong> Shrinking cloud bills by aggressively scaling down idle systems automatically.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Advanced Load Splitting:</strong> Smart traffic filters separating write tasks from light search operations.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Global CDN Mesh:</strong> Caching heavy static assets across worldwide points for immediate edge delivery.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>Connection Pooling:</strong> Reusing database pathways efficiently to stop processor fatigue during traffic rushes.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow-sm h-100 d-flex align-items-center">
                <p className="mb-0 text-muted small">
                  <strong>API Gateway Buffering:</strong> Protecting downstream microservices with smart request limits and throttling policies.
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
          <h2 className="fw-bold text-dark mb-1 fs-2">Sectors running on JPRHosting Scalability Models</h2>
          <p className="text-muted mb-4 fs-5">Empowering high-growth web networks against massive load bottlenecks.</p>

          <div className="row g-3 mb-5">
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">E-Commerce Marketplaces</h5>
                <p className="text-muted small mb-0 lh-base">
                  Managing massive traffic volume spikes during flash sales using highly optimized cluster scaling architectures.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">EdTech Exam Engines</h5>
                <p className="text-muted small mb-0 lh-base">
                  Supporting hundreds of thousands of simultaneous test submissions securely without database latency slips.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded h-100" style={{ backgroundColor: '#e9ecef' }}>
                <h5 className="fw-bold text-dark mb-3">Global Hyperlocal SaaS</h5>
                <p className="text-muted small mb-0 lh-base">
                  Distributing tenant application workspaces dynamically across multi-region cloud arrays as client demands grow.
                </p>
              </div>
            </div>
          </div>

          <h2 className="fw-bold text-dark mt-5 fs-2 pt-2">Scalability Architecture Design – 5 Core Pillars</h2>
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
                q: "What is the difference between Vertical and Horizontal Scaling?",
                a: "Vertical scaling adds more power (CPU, RAM) to a single existing server, which has fixed hardware limits. Horizontal scaling adds more independent server nodes to your cluster setup, offering theoretically infinite scalability options."
              },
              {
                q: "How does Database Sharding help optimize data handling performance?",
                a: "Sharding breaks up huge, bulky database tables into smaller, horizontal rows split across separate database engines. This shortens index search times and spreads out read/write stress across different hardware."
              },
              {
                q: "What triggers automatic system up-scaling routines?",
                a: "Our monitoring frameworks track custom-defined rules such as average cluster CPU utilization crossing 70%, memory saturation spikes, or live connection queues filling up past safe thresholds."
              },
              {
                q: "Why are stateless application architectures critical for scaling up?",
                a: "Stateless systems do not save user session data directly on the web server. Because sessions are managed on centralized caching layers, any incoming web request can be routed to any newly booted server node safely."
              },
              {
                q: "How do asynchronous message queues prevent system timeouts?",
                a: "Queues decouple slow, heavy backend tasks (like PDF rendering or mass emails) from the main user action. The request is instantly accepted and queued in the background, keeping the user interface fast and responsive."
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