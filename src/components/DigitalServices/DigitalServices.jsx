import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DigitalSlider from './DigitalSlider';
import TrustedPartner from '../../page/TrustedPartner';
import CustomerStories from '../../page/CustomerStories';
import SEO from '../SEO';

const DigitalServices = () => {
  return (
    <>
    <SEO 
        title="Digital Transformation & Modern Application Frameworks"
        description="Accelerate modernization paradigms across legacy business pipelines via microservice transitions and interactive digital workflows."
        keywords="digital transformation services, modern application workflow, application design"
        url="https://jprhosting.in/digital-services"
      />
    <DigitalSlider/>
   
    <div className="sify-page bg-light">
      
      {/* 1. Header Section - Ref: Screenshot 2026-05-14 at 10.40.50 AM.jpg */}
      <section className="py-5 container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold">Accelerate digital adoption with JPRHosting's InfinitDigital Services</h1>
            <p className="text-muted mt-4">
              In the new normal, digital engagement has become a must-have... JPRHosting's InfinitDigital Services provide the full spectrum of digital solutions to maximize return on digital assets.
            </p>
          </div>
          <div className="col-md-6 text-center">
           
          <img src="/assets/img2/InfinitDIGITAL-2.svg" alt="AWS Cloud" className="img-fluid" />
          
          </div>
        </div>
      </section>

      <TrustedPartner/>

      {/* 2. Service Offerings - Ref: Screenshot 2026-05-14 at 10.41.17 AM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="mb-5 fw-bold">Our service offerings</h2>
          <div className="row g-4">
            {[
              { title: "Application Modernization Services", desc: "Delivering a compelling user experience with digital infrastructure..." ,},
              { title: "Enterprise Application Services", desc: "Increase operational efficiency with integrated end-to-end management..." },
              { title: "Digital XR Services", desc: "Enable immersive user experience by utilizing digital technologies..." },
              { title: "Digital Asset Management", desc: "Streamline and automate your digital assets, engage modern buyers..." },
              { title: "Digital Assessment Solutions", desc: "Modernize your talent assessment and recruitment processes..." },
              { title: "Retail Intelligence Solution", desc: "Proactive intelligent insights for forward supply chain operations..." }
            ].map((service, idx) => (
              <div key={idx} className="col-md-4">
                <div className="h-100 p-3">
                  <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#e9ecef'}}></div>
                  <h5>{service.title}</h5>
                  <p className="small text-muted">{service.desc}</p>
                  <button className="btn btn-dark btn-sm rounded-pill px-3">Know More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose JPRHosting (Dark Banner) - Ref: Screenshot 2026-05-14 at 10.41.27 AM.jpg */}
      <section className="py-5 text-white" style={{background: 'linear-gradient(to right, #000428, #004e92)'}}>
        <div className="container">
          <h2 className="fw-bold">Why customers choose <span style={{color: '#cddc39'}}>JPRHosting</span></h2>
          <p className="mb-5">Building an immersive digital experience</p>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="p-4 border border-secondary h-100">
                <h5 style={{color: '#cddc39'}}>Technology leadership</h5>
                <p className="small">Over 2 decades of partnering with our customers for digital transformation...</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-4 border border-secondary h-100">
                <h5 style={{color: '#cddc39'}}>Proven solution capabilities</h5>
                <p className="small">Pioneer in providing Trust & Authentication, Retail Intelligence, and Talent Assessment...</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-4 border border-secondary h-100">
                <h5 style={{color: '#cddc39'}}>Continuous innovation</h5>
                <p className="small">JPRHosting provides continuous innovation for enterprises through its InfinitDigital services...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <CustomerStories/>

      {/* 5. GTM Partners - Ref: Screenshot 2026-05-14 at 10.41.35 AM.jpg */}
      <section className="py-5 bg-light border-top">
        <div className="container text-center">
          <h2 className="fw-bold text-start">Our GTM Partners</h2>
          <p className="text-start text-muted small">Our strategic partners help us deliver unmatched business value.</p>
          <div className="row row-cols-2 row-cols-md-4 g-4 mt-4 align-items-center opacity-75">
            <div className="col fw-bold">Meta</div>
            <div className="col fw-bold">NVIDIA</div>
            <div className="col fw-bold">SAP</div>
            <div className="col fw-bold">Microsoft</div>
            <div className="col fw-bold">ORACLE</div>
            <div className="col fw-bold">tenovos</div>
            <div className="col fw-bold">nirmata</div>
            <div className="col fw-bold">AIZEN</div>
          </div>
        </div>
      </section>

      {/* 6. FAQs Section - Ref: Screenshot 2026-05-14 at 10.42.08 AM.jpg */}
      <section className="py-5 container">
        <h2 className="fw-bold mb-4">FAQs</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item mb-3 border">
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#f1">
                What are InfinitDigital Services?
              </button>
            </h2>
            <div id="f1" className="accordion-collapse collapse show">
              <div className="accordion-body text-muted">
                InfinitDigital Services encompass digital solutions for businesses, offering both customizable and ready-to-deploy SaaS options.
              </div>
            </div>
          </div>
          {["What services does InfinitDigital provide?", "How do JPRHosting's services support transformation?", "What industries benefit?"].map((q, i) => (
            <div key={i} className="accordion-item mb-2 border-0 border-bottom">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target={`#f${i+2}`}>
                  {q}
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

export default DigitalServices;