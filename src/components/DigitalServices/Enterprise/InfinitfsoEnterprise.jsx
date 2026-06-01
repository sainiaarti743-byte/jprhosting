import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../../SEO';

const InfinitfsoEnterprise = () => {
  const limeColor = "#adff2f";
  return (
    <>
   <SEO 
        title="InfinitFSO - Fully Managed Shared Operations Support"
        description="Offload complex backend operations tasks seamlessly to certified cloud systems managers via customized business service tools."
        keywords="InfinitFSO system operations outsourcing backend services support"
        url="https://jprhosting.in/digital-services/infinitfso"
      />
    <div className="fso-container bg-white">

      <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h2 className="fw-bold mb-3" style={{ color: limeColor }}>
            Bridge the Gap to the Cloud with JPRHosting Technologies' Expert Network Transformation
          </h2>
        </div>
      </section>

      {/* 1. Header Section - Ref: Screenshot 2026-05-14 at 11.59.52 AM.jpg */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="fw-bold h2 mb-4">Break the barrier of siloed monitoring and get on to Full Stack Observability</h1>
              <p className="text-muted">As the digital ecosystem evolves, a single user journey often involves interactions with multiple applications. In such a complex technological landscape, ensuring the availability and performance of your business services is paramount.</p>
              <p className="text-muted">Comprehensive observation and correlation in real time at a system level, across the complete stack, is the need of the hour. Implementation of AIOps enables businesses to identify unusual patterns proactively.</p>
            </div>
            <div className="col-lg-5 text-center">
              {/* JPRHosting InfinitFSO Platform Wheel */}
              <div className="p-3">
                <img 
                  src="/assets/img/cloud.webp" 
                  alt="JPRHosting InfinitFSO platform wheel" 
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AI Powered FSO Section - Ref: Screenshot 2026-05-14 at 12.00.07 PM.jpg */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold h4 mb-3">Introducing JPRHosting’s InfinitFSO Services</h2>
          <p className="small mb-4 text-muted">JPRHosting’s InfinitFSO leverages advanced AI and machine learning capabilities to provide real-time, 360-degree observability across the full stack. It meticulously collects MELT (Metrics, Events, Logs, and Traces) data at each "element" level.</p>
          
          <div className="text-center mt-5 p-4 bg-white shadow-sm rounded">
            <h5 className="text-success fw-bold mb-4">AI POWERED INFINIT FULL STACK OBSERVABILITY</h5>
            <img 
              src="path_to_ai_powered_fso_diagram" 
              alt="AI Powered FSO Process - Screenshot 2026-05-14 at 12.00.07 PM.jpg" 
              className="img-fluid"
            />
            <div className="bg-success text-white py-2 mt-3 rounded-pill small">
              Gain insights, ensure high performance & availability of your business-critical applications
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Outcomes Cards - Ref: Screenshot 2026-05-14 at 12.00.22 PM.jpg */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold h4 mb-5">Key outcomes</h2>
          <div className="row g-4">
            {[
              { title: "Proactive assurance", color: "text-success", points: ["Continuous assurance of outcomes", "Business-level service assurance & dashboards", "Predictive analytics and insights"] },
              { title: "Improved metrics", color: "text-primary", points: ["Reduce total cost of ownership (TCO) by 50%", "Improve time to value (TTV) by 70%"] },
              { title: "Event correlation/ noise reduction", color: "text-success", points: ["Multi-source integration: cloud, Edge, DC", "Pull events, metrics, logs and traces", "Apply ML and algorithmic correlations"] },
              { title: "Faster incident resolution", color: "text-primary", points: ["2-way collaboration capabilities", "Built-in diagnostics", "Auto-remediate with workflow automation"] },
              { title: "Faster Root Cause Analysis", color: "text-success", points: ["Topology-based root cause analysis and forensics", "Single pane of observability with triage dashboard"] },
              { title: "Real-time transaction performance visibility", color: "text-primary", points: ["Transaction volumetrics (tech/business declines)", "Micro-transaction view based on protocol"] }
            ].map((outcome, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm p-4 border-bottom border-4 border-light">
                  <h6 className={`fw-bold mb-3 ${outcome.color}`}>{outcome.title}</h6>
                  <ul className="ps-3 mb-0">
                    {outcome.points.map((p, i) => (
                      <li key={i} className="small text-muted mb-2">{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Webinars Section - Ref: Screenshot 2026-05-14 at 11.59.59 AM.jpg */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold h4 mb-4">Watch our latest webinars</h2>
          <div className="row g-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="col-md-4">
                <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                  <img 
                    src={`path_to_webinar_thumbnail_${i}`} 
                    alt={`Webinar ${i} - Screenshot 2026-05-14 at 11.59.59 AM.jpg`} 
                    style={{objectFit: 'cover'}}
                  />
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="btn btn-danger btn-lg rounded-circle">▶</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Customers Choose JPRHosting (Dark Section) - Ref: Screenshot 2026-05-14 at 12.00.30 PM.jpg */}
      <section className="py-5 text-white" style={{ 
        background: 'linear-gradient(rgba(0,10,30,0.95), rgba(0,10,30,0.95)), url("path_to_fiber_bg")',
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <h3 className="fw-bold mb-5">Why customers choose <span className="text-warning">JPRHosting</span></h3>
          <div className="row g-4">
            {[
              { t: "Integrated Digital IT infrastructure management", d: "Build, host, and manage IT infrastructure securely across hybrid/multi-cloud, DCs, and networks." },
              { t: "Migration at scale", d: "Over 250 migrations across hyperscalers and private clouds ensure a risk-free transition." },
              { t: "Leadership in complex integrated project implementation", d: "Over 2 decades of proven experience in successfully implementing large turnkey Digital ICT projects." },
              { t: "Continuous innovation", d: "Providing innovation through InfinitDigital services like FSO, AI/ML, DAM, and AR/VR/MR." },
              { t: "Unique solution", d: "Automated service graph offers a comprehensive picture of your IT infrastructure and interdependencies." },
              { t: "Reliable services", d: "Well-defined practices built on SRE and DevOps foundations accelerate business value." }
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

export default InfinitfsoEnterprise;