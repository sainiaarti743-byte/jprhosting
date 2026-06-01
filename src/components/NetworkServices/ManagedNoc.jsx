import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const ManagedNoc = () => {
  const limeColor = "#adff2f";

  return (
    <>
    <SEO 
        title="24/7 Network Operations Center (NOC) Support"
        description="Professional technicians monitoring live link paths non-stop to capture packet drops and apply instant corrective actions."
        keywords="managed NOC services live network operations center monitoring support"
        url="https://jprhosting.in/network-services/managed-network-services/managed-noc-services"
      />
   
    <div className="noc-services-page" style={{ color: '#333' }}>
      
      {/* 1. Hero Section - Ref: Screenshot 2026-05-14 at 2.18.29 PM.jpg */}
       <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/hybrid-it-integration-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container">
          <h2 className="fw-bold mb-3" style={{ color: limeColor }}>Managed NOC Services: Strengthen Your Network Operations Center</h2>
          <button className="btn rounded-pill px-4 fw-bold" style={{ backgroundColor: limeColor, color: '#000', fontSize: '0.8rem' }}>Get in touch</button>
        </div>
      </section>

      {/* 2. Optimize Performance Content - Ref: Screenshot 2026-05-14 at 2.18.29 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              {/* Dashboard Illustration */}
              <img src="/assets/img3/5D799C26-3E34-47E4-8B77-5B47529B17B3.png" alt="NOC Dashboard" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">Optimize Network Performance with Our Expert Network Operations Center (NOC)</h3>
              <p className="small text-muted">
                The need to leverage multiple network service providers, the distributed nature of application hosting and end-users, the move away from on-premise setups to co-located data centers/ public clouds, and the rise in consumption of applications on SaaS models have increased the complexity of the overall network architecture, making NOC services essential.
              </p>
              <p className="small text-muted">
                JPRHosting simplifies the complexities of monitoring and management of the network with its robust <strong>global Network Operations Center (NOC) services</strong>. JPRHosting manages the customers' as-is, end-to-end network architecture, providing <strong>24X7 monitoring</strong> of links, undertaking incident management, and ensuring <strong>unified enterprise-grade SLA management</strong> across multiple service provider networks through comprehensive NOC services.
              </p>
              <div className="dot-pattern mt-4 opacity-25" style={{ letterSpacing: '8px', fontSize: '20px' }}>
                ••••••••••••<br />••••••••••••
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Highlights Grid - Ref: Screenshot 2026-05-14 at 2.18.36 PM.png */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-5">Highlights</h3>
          <div className="row g-4">
            {[
              { title: "Connectivity-centric to app-centric", desc: "Discover, understand needs and manage performance" },
              { title: "Cloud enablement", desc: "Facilitate & manage performance" },
              { title: "Difficult to simplified operations", desc: "Automation, programmability, consolidation and agility" },
              { title: "Inflexible to flexible", desc: "Hybrid WAN, topologies, physical / virtual convergence" },
              { title: "Visibility & analytics", desc: "Behaviours, trends, and feedback loops" },
              { title: "Security", desc: "Cloud perimeter branch and user security" }
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="bg-white p-4 h-100 border-start border-4 shadow-sm" style={{ borderColor: limeColor }}>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="small text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Strengths Infographic - Ref: Screenshot 2026-05-14 at 2.18.44 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h4 className="fw-bold mb-5">Managed services to drive efficiencies, lead engagements through insights and value beyond cost economics</h4>
          {/* Placeholder for the complex radial infographic */}
          <div className="position-relative mx-auto" style={{ maxWidth: '900px' }}>
             <img src="/assets/img3/Managed-services-to-drive-efficiencieslead-engagements-through-insights.svg" alt="Our Strengths" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* 5. Key Services (White Cards) - Ref: Screenshot 2026-05-14 at 2.18.51 PM.png */}
      <section className="py-5" style={{ backgroundColor: '#f0f2f5' }}>
        <div className="container">
          <h3 className="fw-bold mb-5">Key services</h3>
          <div className="row g-4">
            {[
              { title: "Captive on-prem NOC", desc: "Dedicated resources for customer NOC operations within JPRHosting GNOC and dedicated on-premises NOC setup for customers" },
              { title: "Shared NOC", desc: "Proactive network monitoring & reporting (PNMR) and Proactive network monitoring & management (PNMM)" },
              { title: "Hybrid NOC", desc: "Shared global NOC backed by minimal on-premises resources" }
            ].map((card, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm p-4 text-start" style={{ borderBottom: `4px solid ${idx === 1 ? '#5a6268' : limeColor}` }}>
                  <h5 className="fw-bold mb-3">{card.title}</h5>
                  <p className="small text-muted">{card.desc}</p>
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

export default ManagedNoc;