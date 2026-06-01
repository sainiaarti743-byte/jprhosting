import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../SEO';

const Awards = () => {
  const limeGreen = "#adff2f";

  const awards = [
    { title: "Asia-Pacific Stevie Awards 2026", img: "https://via.placeholder.com/250x300/f8f9fa/333?text=Stevie+Award" },
    { title: "IGBC Green Champion Award 2025", img: "https://via.placeholder.com/250x300/f8f9fa/333?text=IGBC+Award" },
    { title: "Cisco Gold Provider 2025 Cisco Gold Integrator 2023", img: "https://via.placeholder.com/250x300/f8f9fa/333?text=Cisco+Partner" },
    { title: "APAC Rising Star Partner 2025", img: "https://via.placeholder.com/250x300/f8f9fa/333?text=Cato+Partner" }
  ];

  return (
    <>
    <SEO title="Industry Awards & Technology Industry Recognition" description="Review the technological achievements and enterprise service honors presented to JPRHosting platforms." keywords="hosting industry awards tech platform honors recognition" url="https://jprhosting.in/awards" />
    
    <div className="bg-white pb-5">
      {/* Hero Banner - Ref: Screenshot 2026-05-14 at 4.25.22 PM.jpg */}
      <section className="position-relative overflow-hidden mb-5" style={{ height: '300px' }}>
        <div 
          className="position-absolute w-100 h-100" 
          style={{ 
            background: `linear-gradient(rgba(0,0,50,0.6), rgba(0,0,50,0.6)), url('https://via.placeholder.com/1600x400/003366') center/cover`,
            zIndex: 1 
          }}
        ></div>
        <div className="container h-100 d-flex align-items-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold" style={{ color: limeGreen }}>Awards and Recognition</h1>
        </div>
      </section>

      {/* Awards Grid - Ref: Screenshot 2026-05-14 at 4.25.27 PM.jpg */}
      <div className="container mt-5">
        <h2 className="fw-bold mb-5">JPRHosting’s Roll Of Honour</h2>
        <div className="row g-4 text-center">
          {awards.map((award, index) => (
            <div key={index} className="col-md-3">
              <div className="award-item">
                {/* Image with Frame Effect */}
                <div className="p-2 shadow-sm mb-3" style={{ 
                  backgroundColor: '#f1f4f8', 
                  border: '15px solid #333',
                  borderRadius: '2px'
                }}>
                  <img src={award.img} alt={award.title} className="img-fluid" style={{ width: '100%' }} />
                </div>
                {/* Title */}
                <p className="fw-bold px-2" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>
                  {award.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .award-item img { transition: transform 0.3s ease; }
        .award-item:hover img { transform: scale(1.02); }
      `}</style>
    </div>
    </>
  );
};

export default Awards;