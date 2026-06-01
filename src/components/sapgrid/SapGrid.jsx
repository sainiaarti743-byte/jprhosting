import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet-async';
import SEO from '../SEO';

const SapGrid = () => {
  return (
    <>
    <SEO 
        title="Smart SAP Grid - ERP Cloud Optimization"
        description="Deploy mission-critical SAP applications on certified cloud nodes with zero data loss protection and massive transactional speeds."
        keywords="SAP on cloud, smart SAP grid, ERP cloud infrastructure India"
        url="https://jprhosting.in/cloudservices/JPRHosting-cloudinfinit-services/smart-sap-grids"
      />
   
    <div className="sap-cloud-container" style={{ backgroundColor: '#fdfdfd', fontFamily: 'Arial, sans-serif' }}>
      
      {/* SECTION 1: Hero & SAP on Cloud Made Easy (Screenshot 2026-05-13 at 9.52.00 AM.jpg) */}
        <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/Network-Banner.webp') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container py-4">
          <h1 className="fw-bold" style={{ color: '#c6e217' }}>Accelerate your business <br /> automation with SAP on Cloud</h1>
          <button className="btn rounded-pill px-4 mt-3 fw-bold" style={{ backgroundColor: '#c6e217', color: '#000' }}>Contact Us</button>
        </div>
      </section>

      <section className="intro-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">SAP on Cloud made easy</h2>
              <p className="text-muted small">JPRHosting has over a decade of experience in providing SAP Advisory and Consulting, Implementation, SAP Infrastructure, SAP Migration, SAP Management and Support services.</p>
              <p className="text-muted small">As a trusted partner, we provide SAP workloads on the cloud with a range of benefits including zero downtime...</p>
              <div className="dots-pattern mt-4 d-flex flex-wrap gap-2" style={{ width: '200px' }}>
                {[...Array(20)].map((_, i) => <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ccc' }}></div>)}
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src="/assets/img2/sap3.gif" alt="SAP Diagram" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SAP Cloud Infrastructure Services (Screenshot 2026-05-13 at 9.52.07 AM.jpg) */}
      <section className="infra-services py-5" style={{ backgroundColor: '#f9faec' }}>
        <div className="container">
          <h2 className="fw-bold mb-5">SAP Cloud Infrastructure Services</h2>
          <div className="row">
            <div className="col-md-5">
              {[
                "Enterprises that are looking for cloud adoption are often unsure about what they need to assess...",
                "With its SAP on Cloud Advisory services, JPRHosting helps organizations choose the cloud that best fits...",
                "We help organizations accelerate their cloud adoption through our multi-cloud offerings..."
              ].map((text, idx) => (
                <div key={idx} className="mb-4 ps-3" style={{ borderLeft: '4px solid #c6e217' }}>
                  <p className="small text-dark">{text}</p>
                </div>
              ))}
            </div>
            <div className="col-md-7">
               <img src="/assets/img2/sap.svg" alt="Process Chart" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Highlights Grid (Screenshot 2026-05-13 at 9.52.14 AM.png & 9.52.30 AM.png) */}
      <section className="highlights py-5">
        <div className="container text-center mb-4">
           <h2 className="fw-bold">Highlights</h2>
        </div>
        <div className="container">
          <div className="row g-3">
            {highlightData.map((text, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="bg-white p-3 h-100 shadow-sm d-flex align-items-center" style={{ borderLeft: '6px solid #c6e217' }}>
                  <span className="small fw-bold">{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Unlock Hidden Potential (Screenshot 2026-05-13 at 9.52.23 AM.jpg) */}
      <section className="unlock-potential py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 pe-md-5">
              <h2 className="fw-bold">Unlock your organization's hidden business potential using our <span style={{ color: '#000' }}>SAP Functional and Technical Services</span></h2>
              <p className="small mt-3">With the pace of innovation in SAP solutions, increasing complexities of business processes and the persistent need to maximize ROI...</p>
            </div>
            <div className="col-md-6 position-relative">
              <div className="rounded-start shadow-lg overflow-hidden" style={{ borderRadius: '100px 0 0 100px', backgroundColor: '#000' }}>
                 <img src="/assets/img2/sap2.png" alt="SAP Tech" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Service Offerings with Image Background (Screenshot 2026-05-13 at 9.52.46 AM.jpg & 9.52.54 AM.jpg) */}
      <section className="service-offers py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Our service offerings</h2>
          <div className="card border-0 shadow-sm overflow-hidden mb-4">
            <div className="row g-0">
              <div className="col-md-4 p-5 bg-white">
                <h4 className="fw-bold">SAP Service Offerings</h4>
                <p className="small text-muted mt-3">JPRHosting is one of the handful of SAP solution providers with a wide spectrum of competencies under one umbrella...</p>
                <div style={{ width: '40px', height: '2px', backgroundColor: '#000' }}></div>
              </div>
              <div className="col-md-8">
                <img src="/assets/img2/sap5.jpeg" alt="Meeting" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Certifications (Screenshot 2026-05-13 at 9.53.03 AM.jpg) */}
      <section className="certifications py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Certifications</h2>
          <div className="row g-4 text-center">
            {["Hosting Ops", "HANA Ops", "Cloud & Infra Ops", "S/4HANA Apps", "Business Suite Apps"].map((title, i) => (
              <div className="col-md-2" key={i} style={{ flex: '1 0 20%' }}>
                <div className="p-3 bg-white shadow-sm border border-light">
                  <img src="/assets/img/ISO-27017-2015-Certificate-valid-till-Jan-2023-for-Managed-Cloud-Services.jpg" alt="Cert" className="img-fluid mb-3" />
                  <div className="bg-white py-2 border-top">
                    <p className="x-small fw-bold m-0" style={{ fontSize: '11px' }}>SAP Certified in {title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Blogs (Screenshot 2026-05-13 at 9.53.19 AM.jpg) */}
      <section className="blogs py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Blogs</h2>
          <div className="row g-4">
            {blogData.map((blog, i) => (
              <div className="col-md-4" key={i}>
                <div className="card border-0 shadow-sm h-100">
                  <img src={blog.img} className="card-img-top" alt="blog" />
                  <div className="card-body">
                    <h5 className="fw-bold">{blog.title}</h5>
                    <p className="small text-muted">{blog.desc}</p>
                    <a href="#" className="text-dark small fw-bold text-decoration-none">→ Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right Side Sticky Icons */}
      <div className="position-fixed end-0 top-50 translate-middle-y d-flex flex-column gap-1" style={{ zIndex: 1050 }}>
        <div style={{ backgroundColor: '#c6e217', padding: '10px' }}>🌐</div>
        <div style={{ backgroundColor: '#c6e217', padding: '10px' }}>📞</div>
      </div>
    </div>
     
    </>
  );
};

const highlightData = [
  "Custom-sized, custom-built and bespoke hosted private cloud offering",
  "Dedicated and managed servers, storage, network and security",
  "Virtual private instances to run dev-test and production",
  "Offers both virtual and physical HANA custom deployments",
  "Wide range of HANA appliance sizes ranging from 64GB up to 6TB",
  "VMware - HANA best practice, anti-affinity rule strictly followed",
  "HANA KPIs maintained at all levels to adhere to SAP guidelines",
  "HANA-certified all-flash storage SAN on 16G FC protocol",
  "State-of-the-art tools for optimizing automation"
];

const blogData = [
  { title: "Fast-track your SAP's Cloud Adoption on AWS", desc: "Cloud computing (which later became known as just Cloud), one of the technology trends...",
     img: "/assets/img2/disaster_recovery_system_fod-1.jpg" 
    },
  { title: "Automated Recovery of SAP HANA Database", desc: "This blog exclusively covers the options available in AWS to recover SAP HANA Database...",
     img: "/assets/img2/SAP-Blog-Web-Banner-01.jpg" 
    },
  { title: "SAP Security – A Holistic View", desc: "With 90%+ of Fortune-500 organizations running SAP to manage their mission-critical business...", 
    img: "/assets/img2/awsbanner.jpg" 
  }
];

export default SapGrid;