import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CdnSlider from './CdnSlider';
import SEO from '../SEO';

const CdnServices = () => {
  return (
    <> 

    <SEO 
        title="Global CDN Services - Lightning Fast Web Delivery"
        description="Cache assets close to end-users worldwide. Drastically reduce page loads, block bad traffic edge spikes, and streamline network distributions."
        keywords="CDN services India, content delivery network, fast asset loading cache"
        url="https://jprhosting.in/cloudservices/cdn-services"
      />
    <CdnSlider/>
    <div className="container-fluid p-0 overflow-hidden" style={{ fontFamily: 'sans-serif' }}>
      
      {/* SECTION 1: HERO  */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="display-6 fw-bold mb-4" style={{ color: '#1a1a1a' }}>
              CDN cloud service: Innovation at the core, agility at the edge, and resiliency all across
            </h1>
            <p className="text-secondary mb-3">
              JPRHosting is uniquely positioned with its Cloud, Data Center, Network, Security Services and strong partnerships with leading CDN providers, to offer end-to-end CDN Services in India that improve your website and application delivery performance.
            </p>
            <p className="text-secondary mb-3">
              CDN and JPRHosting cloud computing together create a more resilient and reliable delivery strategy for your critical applications and content. Whether you're looking for CDN Services in India or globally, JPRHosting ensures seamless performance.
            </p>
            <p className="text-secondary">
              JPRHosting & Akamai's partnership empowers organizations to adopt best practices that help in delivering a seamless and secure customer experience from the core to edge, making JPRHosting a trusted provider of CDN Services in India.
            </p>
            {/* Dot Pattern Placeholder using Bootstrap utilities */}
            <div className="d-flex flex-wrap gap-2 mt-4 opacity-25" style={{ width: '120px' }}>
              {[...Array(24)].map((_, i) => (
                <div key={i} className="rounded-circle bg-secondary" style={{ width: '6px', height: '6px' }}></div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 text-center">
           \
            <img src="/assets/img2/CDN-services.svg" alt="CDN Layers" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* SECTION 2: KEY SERVICES  */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4">Our Key Services</h2>
        <div className="rounded-4 p-1" style={{ backgroundColor: '#c8e000' }}> {/* Lime Border Effect */}
          <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm">
            <div className="row g-0">
              <div className="col-md-6 border-end border-secondary border-opacity-25 border-dashed pe-md-4 text-center mb-4 mb-md-0">
                <h3 className="fw-bold mb-3">Akamai</h3>
                <p className="text-muted small px-lg-4">
                  JPRHosting is a leading partner for Akamai, a "Leader" in Gartner's Magic Quadrant for CDN acceleration & cybersecurity solutions like app & API Security, zero-trust solutions, bot management etc. JPRHosting & Akamai's partnership empowers organizations to adopt best practices...
                </p>
                <a href="#" className="text-decoration-none fw-bold" style={{ color: '#007bff' }}>Read more &gt;&gt;</a>
              </div>
              <div className="col-md-6 ps-md-4 text-center">
                <h3 className="fw-bold mb-3">AWS CloudFront</h3>
                <p className="text-muted small px-lg-4">
                  JPRHosting is advanced tier consulting partner for AWS and helps organizations leverage AWS Cloud Network to deliver their applications, websites and other content through CloudFront, a simple and highly available CDN solution with low latency and high transfer speed.
                </p>
                <a href="#" className="text-decoration-none fw-bold" style={{ color: '#007bff' }}>Read more &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US  */}
      <section className="py-5" style={{ 
          backgroundColor: '#050b1d', 
          backgroundImage: 'linear-gradient(45deg, rgba(200,224,0,0.05) 0%, transparent 70%)' 
        }}>
        <div className="container text-white">
          <h2 className="fw-bold mb-5">Why customers choose <span style={{ color: '#c8e000' }}>JPRHosting</span></h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 h-100 border-start border-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: '#c8e000 !important' }}>
                <h5 style={{ color: '#c8e000' }} className="fw-bold">Strong partnerships</h5>
                <p className="small mb-0 opacity-75">JPRHosting's CDN Services complement the cloud, data center, network, and security services to create a resilient and reliable delivery strategy.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 h-100 border-start border-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: '#c8e000 !important' }}>
                <h5 style={{ color: '#c8e000' }} className="fw-bold">Industry experience</h5>
                <p className="small mb-0 opacity-75">JPRHosting identifies the right use cases to move to Akamai or AWS Edge Networks for maximum value addition.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 h-100 border-start border-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: '#c8e000 !important' }}>
                <h5 style={{ color: '#c8e000' }} className="fw-bold">Trusted advisor</h5>
                <p className="small mb-0 opacity-75">JPRHosting acts as a consulting partner for organizations and helps them adopt best practices in their digital journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ */}
      <section className="container py-5 mb-5">
        <h2 className="fw-bold mb-4">FAQs</h2>
        <div className="accordion border-0" id="cdnFaq">
          {/* Active FAQ */}
          <div className="accordion-item border-0 mb-3 shadow-sm overflow-hidden rounded-3">
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-white shadow-none" type="button" style={{ backgroundColor: '#4a4a4a' }}>
                <span className="me-2">—</span> What is a CDN and how does it work?
              </button>
            </h2>
            <div className="accordion-collapse collapse show">
              <div className="accordion-body text-muted small">
                A Content Delivery Network (CDN) is a network of distributed servers that work together to deliver web content to users based on their geographic location. By caching content on servers located closer to the end-users, CDNs reduce latency and improve load times for websites and applications.
              </div>
            </div>
          </div>
          
          {/* Other FAQs */}
          {["What are the benefits of using CDN services?", "How does CDN improve website performance?", "Is CDN suitable for all types of websites?", "How do I choose the right CDN provider?"].map((faq, idx) => (
            <div key={idx} className="accordion-item border-0 border-bottom">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-white text-dark shadow-none py-3" type="button">
                  <span className="me-2 text-secondary">+</span> {faq}
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

export default CdnServices;