import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const Alliance = () => {
  const sifyGreen = "#adff2f";
  const [activeTab, setActiveTab] = useState('Network');

  // Partners Data from Screenshot 2026-05-14 at 3.54.56 PM.jpg
  const partnerLogos = {
    Network: ["CISCO", "Aruba", "Fortinet", "Versa", "Cato"],
    Infrastructure: ["Dell", "HP", "NetApp"],
    Cloud: ["AWS", "Azure", "Google Cloud"],
    Security: ["Zscaler", "Palo Alto", "Crowdstrike"],
    Digital: ["SAP", "Oracle", "Microsoft"]
  };

  return (
    <>
    <SEO title="Global Alliance Tech Partners" description="Collaborating with enterprise technology leaders to construct robust hybrid infrastructure ecosystems globally." keywords="alliance partners technology integration systems" url="https://jprhosting.in/alliance-partners" />
   
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#fdfdfd' }}>
      
      {/* 1. Alliance Hero - Ref: Screenshot 2026-05-14 at 3.54.41 PM.jpg */}
      <section className="position-relative text-white py-5" style={{ backgroundColor: '#050a10', minHeight: '450px' }}>
        <img 
          src="/assets/banner/data-center-integration-services.jpg" 
          alt="Alliance Background" 
          className="position-absolute w-100 h-100 top-0 start-0" 
          style={{ objectFit: 'cover', opacity: '0.4' }}
        />
        <div className="container position-relative py-5">
          <h1 className="fw-bold display-4 mb-3" style={{ color: sifyGreen }}>Our Strategic Alliance Ecosystem</h1>
          <div className="d-flex align-items-center mb-4">
            <div style={{ width: '4px', height: '30px', backgroundColor: sifyGreen, marginRight: '15px' }}></div>
            <p className="fs-5 mb-0">Driving Scalable Innovation with a Unified GTM Alliance Network</p>
          </div>
          <button className="btn fw-bold px-4 py-2" style={{ backgroundColor: sifyGreen, borderRadius: '25px' }}>Get in touch</button>
        </div>
      </section>

      {/* 2. Partnership Intro - Ref: Screenshot 2026-05-14 at 3.54.48 PM.jpg */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="fw-bold mb-4">Building partnership for success</h2>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>
                We partner with industry leading technology providers to deliver innovative solutions that empower our customers to grow and succeed... Together, we help customers achieve revenue growth, operational excellence, and superior satisfaction.
              </p>
            </div>
            <div className="col-lg-5 text-center position-relative">
               <img 
                src="/assets/img3/Rectangle-5369.svg" 
                className="img-fluid rounded-4 shadow-lg" 
                alt="Partnership"
              />
              <div className="position-absolute bottom-0 start-0 translate-middle-y ms-n4 opacity-50">
                <div style={{ width: '60px', height: '60px', border: `8px solid ${sifyGreen}` }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GTM Partners Tabs - Ref: Screenshot 2026-05-14 at 3.54.56 PM.jpg */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-4">Our GTM Partners</h3>
          <div className="d-flex border-bottom mb-4">
            {Object.keys(partnerLogos).map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`btn px-4 py-2 fw-bold border-0 ${activeTab === tab ? 'text-dark' : 'text-muted'}`}
                style={{ 
                  backgroundColor: activeTab === tab ? sifyGreen : 'transparent',
                  borderRadius: activeTab === tab ? '10px 10px 0 0' : '0'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <p className="small text-muted mb-4">
            Working with global networking leaders to deliver secure, high-availability, AI-optimized networks.
          </p>
          <div className="row g-3">
            {partnerLogos[activeTab].map((partner, i) => (
              <div className="col-md-3 col-6" key={i}>
                <div className="border rounded-3 p-4 text-center h-100 d-flex align-items-center justify-content-center shadow-sm">
                  <span className="fw-bold text-primary">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Awards Section - Ref: Screenshot 2026-05-14 at 3.55.13 PM.jpg */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h3 className="fw-bold text-start mb-5">Awards</h3>
          <div className="row g-4">
            {[
              { title: "Cisco Gold Provider 2025", desc: "Cisco Gold Integrator 2023" },
              { title: "APAC Rising Star Partner 2025", desc: "JPRHosting & Cato Partnership" },
              { title: "BFSI Partner of the Year 2025", desc: "Forcepoint Excellence" },
              { title: "Accelerating Next Partner Award 2024", desc: "HPE Aruba Networking" }
            ].map((award, idx) => (
              <div className="col-md-3" key={idx}>
                <div className="bg-white p-2 border shadow-sm mb-3">
                   <div style={{ height: '200px', backgroundColor: '#f8f9fa' }} className="d-flex align-items-center justify-content-center border">
                      <span className="text-muted small">Award Frame</span>
                   </div>
                </div>
                <p className="fw-bold small mb-1">{award.title}</p>
                <p className="text-muted" style={{ fontSize: '11px' }}>{award.desc}</p>
              </div>
            ))}
          </div>
          <button className="btn mt-4 px-5 py-2 fw-bold" style={{ backgroundColor: sifyGreen, borderRadius: '25px' }}>View more</button>
        </div>
      </section>

      {/* 5. AI Ambition Footer - Ref: Screenshot 2026-05-14 at 3.55.21 PM.jpg */}
      <section className="py-5 border-top border-bottom border-light">
        <div className="container text-center">
          <h4 className="fw-bold">Empowering India’s AI Ambition</h4>
          <p className="text-muted mb-5">JPRHosting's integrated digital infrastructure empowers enterprises to advance and scale India’s AI ambition.</p>
          <div className="row g-2 justify-content-center">
            {["Mission-Critical Networks", "AI-Ready Data Centers", "AI Cloud, Hybrid IT", "Digital Services", "Robust Security"].map((item, i) => (
              <div className="col-md-2 col-6" key={i}>
                <div className="p-3 bg-light rounded shadow-sm h-100">
                  <div className="mb-2">⚙️</div>
                  <p className="small fw-bold mb-0">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-dark mt-5 px-5 py-2 fw-bold" style={{ backgroundColor: sifyGreen, color: '#000', borderRadius: '25px', border: 'none' }}>Know More</button>
        </div>
      </section>

    </div>

     </>
  );
};

export default Alliance ;