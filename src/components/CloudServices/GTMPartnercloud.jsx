import React from 'react';

const GTMPartnercloud = () => {
  // Partners data with placeholders for logos
  const partners = [
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg" },
    { name: "HPE GreenLake", logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo_black.svg" },
    { name: "Hitachi", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Hitachi_logo.svg" },
    { name: "Oracle Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" }
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#eeeeee' }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Text Content */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3" style={{ fontSize: '24px' }}>Our GTM partners</h2>
            <p className="text-dark small mb-4" style={{ lineHeight: '1.5' }}>
              Our strategic partners help us deliver unmatched business value and a unique experience.
            </p>
            
            {/* Decorative Dot Pattern */}
            <div className="d-flex flex-wrap gap-2 opacity-25" style={{ maxWidth: '250px' }}>
              {[...Array(40)].map((_, i) => (
                <div key={i} className="bg-secondary rounded-circle" style={{ width: '4px', height: '4px' }}></div>
              ))}
            </div>
          </div>

          {/* Right Partner Logos Grid */}
          <div className="col-lg-8">
            <div className="row row-cols-2 row-cols-md-4 g-4 align-items-center justify-content-center text-center">
              {partners.map((partner, index) => (
                <div key={index} className="col d-flex justify-content-center px-3">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="img-fluid" 
                    style={{ 
                      maxHeight: '40px', 
                      filter: 'grayscale(0%)', 
                      opacity: '0.9',
                      transition: 'opacity 0.3s'
                    }} 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GTMPartnercloud;