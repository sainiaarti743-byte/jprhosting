import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const AkamaiServices = () => {
  return (
    <>
    <SEO 
        title="Akamai CDN & Advanced Enterprise Edge Security"
        description="Deploy high-grade media assets through premium Akamai routing layers to achieve uncompromised latency protections globally."
        keywords="Akamai CDN integration, premium edge cache, web media distribution"
        url="https://jprhosting.in/cloudservices/cdn-services/akamai"
      />
   
    <div className="container-fluid p-0 overflow-hidden" style={{ fontFamily: 'sans-serif' }}>
      
      {/* SECTION 1: DARK HERO  */}
     <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/network-transformation-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#c8e000' }}>
            Create a swift and secure digital <br /> experience with JPRHosting's AWS CDN Services
          </h1>
          <button className="btn rounded-pill px-4 fw-bold shadow-sm" style={{ backgroundColor: '#c8e000', color: '#000' }}>
            Contact Us
          </button>
        </div>
      </section>

      {/* SECTION 2: HIGH AVAILABILITY */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
             <img src="/assets/img2/Akamai.png" alt="Tech" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">High-availability CDN services: Akamai content delivery network with low latency and high speed</h2>
            <p className="text-secondary small">
              JPRHosting is a <strong>partner of Akamai</strong>, a global leader in content delivery, cybersecurity and edge compute solutions. With the world's largest edge network comprising over 4,200 PoPs and 350,000 edge servers, Akamai enables businesses to deliver a secure and high-quality customer experience...
            </p>
            <div className="d-flex flex-wrap gap-2 mt-4 opacity-25" style={{ width: '150px' }}>
              {[...Array(30)].map((_, i) => (
                <div key={i} className="rounded-circle bg-secondary" style={{ width: '5px', height: '5px' }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SECURITY SOLUTIONS  */}
      <section className="container py-5 bg-light rounded-3 my-4">
        <h6 className="text-uppercase fw-bold" style={{ color: '#c8e000' }}>Akamai services</h6>
        <h2 className="fw-bold mb-5">Security solutions</h2>
        <div className="row g-4">
          {[
            { title: "API and Application Security", text: "Intelligent, end-to-end protection for websites, applications and APIs. Instant mitigation of DDoS attacks." },
            { title: "Zero Trust Security", text: "Enable your workforce to work from anywhere with fast and secure access. Prevent enterprise data theft." },
            { title: "Account Takeover Protection", text: "Stop bots, fraud actors and credential abuse with proactive detection. Monitor and mitigate bot attacks." },
            { title: "Edge DNS", text: "High availability with 100% uptime SLA. Protect against DNS forgery and manipulation." }
          ].map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="bg-white p-4 h-100 shadow-sm border-bottom border-4" style={{ borderColor: i % 2 === 0 ? '#c8e000' : '#4a4a4a' }}>
                <h5 className="fw-bold mb-3">{item.title}</h5>
                <p className="small text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: EDGE OFFERINGS */}
      <section className="container py-5">
        <h2 className="fw-bold mb-5">Edge offerings</h2>
        <div className="row g-4">
          {[
            { title: "Edge Delivery", list: ["Create high-quality digital experiences", "Deliver flawless dynamic content", "Enhance user experience"] },
            { title: "Cloud Optimization", list: ["Optimize application performance", "Manage internet traffic", "Increase site availability"] },
            { title: "Edge Applications", list: ["Optimize and enhance visual media", "Make pages lighter and faster", "Run logic at the edge"] },
            { title: "Analytics", list: ["Capture user experience data", "Analyze media delivery performance", "Get an inside look into CDN"] }
          ].map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="bg-white p-4 h-100 shadow-sm border-bottom border-4" style={{ borderColor: i % 2 === 0 ? '#c8e000' : '#4a4a4a' }}>
                <h5 className="fw-bold mb-3">{item.title}</h5>
                <ul className="ps-3 small text-muted">
                  {item.list.map((li, j) => <li key={j}>{li}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: WHY SIFY DARK */}
      <section className="py-5" style={{ backgroundColor: '#000', backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)' }}>
        <div className="container text-white">
          <h2 className="fw-bold mb-5">Why customers choose <span style={{ color: '#c8e000' }}>JPRHosting</span></h2>
          <div className="row g-4">
            {[
              { t: "Advisory & migration expertise", d: "Experience in 200+ complex cloud migration projects." },
              { t: "Multi cloud management", d: "Providing better visibility and control while enabling cloud policy." },
              { t: "Unified security", d: "Ensuring unified security and visibility on a single console." },
              { t: "Hybrid cloud infrastructure", d: "Offering cloud-adjacent data centers and GlobalCloudConnect." },
              { t: "IT modernization", d: "Cloud-agnostic digital infrastructure and value stream management." },
              { t: "Skills & certifications", d: "500+ certified cloud professionals and security experts." }
            ].map((box, i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 h-100" style={{ border: '1px solid rgba(200,224,0,0.3)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <h5 style={{ color: '#c8e000' }} className="fw-bold">{box.t}</h5>
                  <p className="small opacity-75">{box.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: AKAMAI FAQs  */}
      <section className="container py-5 mb-5">
        <h2 className="fw-bold mb-4">FAQs</h2>
        <div className="accordion" id="akamaiFaq">
          <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-white shadow-none py-3" type="button" style={{ backgroundColor: '#4a4a4a' }}>
                <span className="me-2">—</span> What is Akamai CDN and how does it work?
              </button>
            </h2>
            <div className="accordion-collapse collapse show">
              <div className="accordion-body text-muted small lh-lg">
                Akamai CDN (Content Delivery Network) is a distributed network of servers that delivers web content to users based on their geographic location. It works by caching content on multiple edge servers around the world, allowing for faster load times and improved performance by reducing latency and bandwidth usage.
              </div>
            </div>
          </div>
          {["What are the benefits of using Akamai CDN for my website?", "How does Akamai CDN improve website security?", "Can Akamai CDN help with SEO?", "How do I integrate Akamai CDN?"].map((q, i) => (
            <div key={i} className="accordion-item border-0 border-bottom">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-white text-dark shadow-none py-3" type="button">
                  <span className="me-2 text-secondary">+</span> {q}
                </button>
              </h2>
            </div>
          ))}
        </div>
      </section>

    </div>
     </>
  );
};

export default AkamaiServices;