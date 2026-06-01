import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const AwsCloudFront = () => {
  return (
    <>
    
  <SEO 
        title="Amazon CloudFront Custom Integration Services"
        description="Optimize your dynamic asset deliveries seamlessly with secure CloudFront distributions connected to specialized web edge layers."
        keywords="Amazon CloudFront cache, AWS edge server delivery, static content routing"
        url="https://jprhosting.in/cloudservices/cdn-services/aws-cloudfront"
      />
    <div className="container-fluid p-0 overflow-hidden" style={{ fontFamily: 'sans-serif' }}>
      
      {/* SECTION 1: AWS HERO (Reference: Screenshot 2026-05-13 at 11.51.24 AM.jpg) */}
     <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/network-transformation-services.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container py-4">
          <h1 className="display-5 fw-bold mb-3" style={{ color: '#c8e000' }}>
            Accelerate Content Delivery with JPRHosting’s <br /> AWS CDN Service (CloudFront)
          </h1>
          <div className="d-flex align-items-center mb-4">
            <div style={{ width: '4px', height: '24px', backgroundColor: '#c8e000' }} className="me-2"></div>
            <p className="text-white h5 mb-0 fw-light">Securely deliver content at high speed, with low latency</p>
          </div>
          <button className="btn rounded-pill px-4 fw-bold shadow-sm" style={{ backgroundColor: '#c8e000', color: '#000' }}>
            Contact Us
          </button>
        </div>
      </section>

      {/* SECTION 2: AWS INTRODUCTION (Reference: Screenshot 2026-05-13 at 11.51.24 AM.jpg lower part) */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
             <img src="/assets/img2/aws-cloudfront.png" alt="AWS Cloud" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">AWS CDN service with low latency, high availability and high transfer speed</h2>
            <p className="text-secondary small">
              JPRHosting is an <strong>advanced consulting partner for AWS</strong> and identifies use cases where organizations can leverage the AWS Cloud Network and deliver content through Amazon CloudFront.
            </p>
            <p className="text-secondary small">
              CloudFront represents edge servers connected to AWS regions through the AWS network backbone, which deliver content through a reliable, low-latency and high-throughput network. It also protects against network and application layer security attacks.
            </p>
            {/* Dots UI element */}
            <div className="d-flex flex-wrap gap-2 mt-4 opacity-25" style={{ width: '180px' }}>
              {[...Array(36)].map((_, i) => (
                <div key={i} className="rounded-circle bg-secondary" style={{ width: '5px', height: '5px' }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HIGHLIGHTS GRID (Reference: Screenshot 2026-05-13 at 11.51.37 AM.jpg) */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-5">Highlights</h2>
          <div className="row g-0 border-top border-start border-secondary border-opacity-10">
            {[
              { title: "Global edge network", text: "AWS CloudFront uses a global network of over 410 PoPs in over 90 cities across 47 countries to deliver content with lower latency." },
              { title: "Security", text: "Protects applications and content from network and application layer attacks. Control who can see your content by allowing only authenticated viewers." },
              { title: "Availability", text: "Content is stored in the edge and regional caches and only fetched from origins when needed, reducing load on application origins." },
              { title: "Edge computing", text: "CloudFront functions are ideal for high-scale and latency-sensitive operations to support traffic that is unpredictable and spiky." },
              { title: "Real-time metrics and logging", text: "CloudFront is integrated with AWS CloudWatch to publish 6 operational metrics per distribution visible in the console." },
              { title: "DevOps-friendly", text: "Changes are propagated to the edge in a matter of minutes. Provides developers with a full-featured API to create and maintain distributions." },
              { title: "Cost control", text: "Personalized pricing options, including pay-as-you-go, and CloudFront Security Savings Bundle. Zero fees for data transfer out of AWS origins." }
            ].map((highlight, i) => (
              <div key={i} className="col-md-4 border-end border-bottom border-secondary border-opacity-10">
                <div className="p-4 h-100 bg-white border-start border-4" style={{ borderColor: '#c8e000' }}>
                  <h6 className="fw-bold mb-3">{highlight.title}</h6>
                  <p className="small text-muted mb-0 lh-base">{highlight.text}</p>
                </div>
              </div>
            ))}
            {/* Empty filler to maintain grid symmetry if needed */}
            <div className="col-md-4 border-end border-bottom border-secondary border-opacity-10 bg-white"></div>
            <div className="col-md-4 border-end border-bottom border-secondary border-opacity-10 bg-white"></div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE JPRHosting - SHARED COMPONENT (Reference: Screenshot 2026-05-13 at 11.51.44 AM.jpg) */}
      <section className="py-5" style={{ backgroundColor: '#000' }}>
        <div className="container text-white">
          <h2 className="fw-bold mb-5">Why customers choose <span style={{ color: '#c8e000' }}>JPRHosting</span></h2>
          <div className="row g-3">
            {[
              { t: "Advisory & migration expertise", d: "Comprehensive tool-based discovery and assessment. Experience in 200+ complex cloud migration projects." },
              { t: "Multi cloud management", d: "Providing better visibility and control while enabling cloud usage policy and maintaining governance." },
              { t: "Unified security", d: "Ensuring unified security and visibility on a single console with augmented controls and proactive threat monitoring." },
              { t: "Hybrid cloud-led digital infrastructure", d: "Offering cloud-adjacent data centers and GlobalCloudConnect to hyperscale CSPs along with JPRHosting Virtual Private Cloud." },
              { t: "IT modernization", d: "Cloud-agnostic digital infrastructure and value stream management solutions around DevSecOps and CI/CD." },
              { t: "Skills & certifications", d: "500+ certified cloud professionals, 150+ dedicated, highly skilled cloud engineering and security experts." }
            ].map((box, i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 h-100" style={{ border: '1px solid #c8e00033', backgroundColor: '#0a0a0a' }}>
                  <h6 style={{ color: '#c8e000' }} className="fw-bold mb-3">{box.t}</h6>
                  <p className="small opacity-75 mb-0">{box.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: AWS FAQs (Reference: Screenshot 2026-05-13 at 11.51.51 AM.jpg) */}
      <section className="container py-5 mb-5">
        <h2 className="fw-bold mb-4">FAQs</h2>
        <div className="accordion" id="awsFaq">
          <div className="accordion-item border-0 mb-3 shadow-sm rounded-3 overflow-hidden">
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-white shadow-none" type="button" style={{ backgroundColor: '#4a4a4a' }}>
                <span className="me-2">—</span> What is an AWS CDN service and how does it work?
              </button>
            </h2>
            <div className="accordion-collapse collapse show">
              <div className="accordion-body text-muted small lh-lg">
                An AWS CDN service (via Amazon CloudFront) is a globally distributed content delivery network that caches web assets at edge locations closer to users, reducing latency, improving load speed and offering secure delivery. JPRHosting's implementation ensures Indian and global enterprises can deploy AWS CDN service rapidly and securely.
              </div>
            </div>
          </div>
          {[
            "Why should Indian companies choose JPRHosting's AWS CDN service?",
            "What types of content can be accelerated using AWS CDN?",
            "How does pricing work for JPRHosting's AWS CDN service offering?",
            "How quickly can I get started with JPRHosting's AWS CDN service?"
          ].map((q, i) => (
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

export default AwsCloudFront;