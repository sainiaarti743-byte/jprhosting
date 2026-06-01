import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const Certifications = () => {
  const limeGreen = "#adff2f";

  const isoCerts = [
    { id: "9001:2015", title: "ISO 9001:2015", img: "https://via.placeholder.com/150/0056b3/fff?text=TUV+SUD" },
    { id: "20000-1:2018", title: "ISO 20000-1:2018", img: "https://via.placeholder.com/150/0056b3/fff?text=TUV+SUD", hoverText: "IT Service Management System" },
    { id: "27001:2022", title: "ISO 27001:2022", img: "https://via.placeholder.com/150/0056b3/fff?text=TUV+SUD" },
    { id: "27017:2015", title: "ISO 27017:2015", img: "https://via.placeholder.com/150/0056b3/fff?text=TUV+SUD" }
  ];

  const sapCerts = [
    { title: "SAP Certified in Hosting Ops", img: "https://via.placeholder.com/200x280/f8f9fa/333?text=SAP+Cert" },
    { title: "SAP Certified in HANA Ops", img: "https://via.placeholder.com/200x280/f8f9fa/333?text=SAP+Cert" },
    { 
      title: "SAP Certified in Cloud & Infra Ops", 
      img: "https://via.placeholder.com/200x280/f8f9fa/333?text=SAP+Cert",
      hoverText: "Offering an infrastructure and cloud services portfolio tailored to SAP customers..." 
    },
    { title: "SAP Certified in Apps Ops for S/4HANA", img: "https://via.placeholder.com/200x280/f8f9fa/333?text=SAP+Cert" }
  ];

  const CertCard = ({ item, isSap = false }) => (
    <div className="col-md-3 mb-4">
      <div className="cert-card position-relative shadow-sm text-center">
        <div className="image-container p-4" style={{ backgroundColor: '#e9ecef', minHeight: isSap ? '320px' : '220px' }}>
          <img src={item.img} alt={item.title} className="img-fluid" style={{ maxHeight: isSap ? '250px' : '120px' }} />
          
          {/* Hover Overlay - Ref: Screenshot 2026-05-14 at 4.24.31 PM.jpg */}
          {item.hoverText && (
            <div className="overlay d-flex align-items-center justify-content-center p-3">
              <p className="small text-white mb-0">{item.hoverText}</p>
            </div>
          )}
        </div>
        <div className="title-box bg-white p-3 shadow-sm mx-3 position-relative" style={{ marginTop: '-30px', zIndex: 2 }}>
          <span className="fw-bold small">{item.title}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <SEO title="Compliance Certifications - ISO & Tier-III Standards" description="Review our compliance protocols including data center safety standards and international protection certificates." keywords="ISO compliance data center certificates hosting industry standards" url="https://jprhosting.in/certifications" />
    
    <div className="bg-white">
      {/* Hero Banner - Ref: Screenshot 2026-05-14 at 4.24.23 PM.jpg */}
      <section className="position-relative d-flex align-items-center mb-5" style={{ height: '350px', background: '#0a0a23' }}>
        <div className="position-absolute w-100 h-100" style={{ 
          backgroundImage: `url('https://via.placeholder.com/1600x400/111')`, 
          backgroundSize: 'cover', opacity: 0.5 
        }}></div>
        <div className="container position-relative text-white" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold" style={{ color: limeGreen }}>Certifications</h1>
          <div className="d-flex align-items-center mt-3">
            <div style={{ width: '4px', height: '25px', backgroundColor: limeGreen, marginRight: '12px' }}></div>
            <p className="h5 mb-0 fw-light">Powering Digital IT with Excellence</p>
          </div>
        </div>
      </section>

      {/* ISO Certifications - Ref: Screenshot 2026-05-14 at 4.24.31 PM.jpg */}
      <section className="container py-4">
        <h4 className="fw-bold mb-5 text-dark">Certified Commitment to Quality: Recognized Globally</h4>
        <div className="row">
          {isoCerts.map((cert, idx) => <CertCard key={idx} item={cert} />)}
        </div>
      </section>

      {/* SAP Certifications - Ref: Screenshot 2026-05-14 at 4.24.44 PM.jpg */}
      <section className="container py-5">
        <div className="row">
          {sapCerts.map((cert, idx) => <CertCard key={idx} item={cert} isSap={true} />)}
        </div>
      </section>

      <style>{`
        .cert-card .image-container { position: relative; overflow: hidden; transition: 0.3s; }
        .cert-card .overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.7); opacity: 0; transition: 0.4s;
        }
        .cert-card:hover .overlay { opacity: 1; }
        .title-box { border-bottom: 3px solid transparent; transition: 0.3s; }
        .cert-card:hover .title-box { border-bottom-color: ${limeGreen}; }
      `}</style>
    </div>
    </>
  );
};

export default Certifications;