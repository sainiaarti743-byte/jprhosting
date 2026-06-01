import React from 'react';
// Importing specific icons from Material Design and Font Awesome
import { MdCloudQueue, MdSpeed, MdSecurity } from 'react-icons/md';
import { FaGlobe, FaHandshake, FaChartLine } from 'react-icons/fa';

const Servicecloud = () => {
  const services = [
    {
      title: "JPRHosting CloudInfinit Services",
      desc: "Leverage virtualization, massive scalability, enterprise security, and intelligent management to carry out business seamlessly on a larger scale.",
      icon: <MdCloudQueue size={50} color="#c9d200" />
    },
    {
      title: "Hyperscale Partner Cloud Services",
      desc: "Benefit from the agility of hyperscale clouds, such as rapid provisioning, self-service orchestration, and spend management, for a consistent experience.",
      icon: <FaHandshake size={50} color="#c9d200" />
    },
    {
      title: "Content Delivery Services",
      desc: "Deliver high-performance websites and applications with simplified edge-to-cloud solutions for content delivery.",
      icon: <MdSpeed size={50} color="#c9d200" />
    },
    {
      title: "Advisory & Migration Services",
      desc: "Discover, analyze, migrate, secure, and optimize applications from customer data center to hybrid or multi cloud with automation and assurance.",
      icon: <FaGlobe size={45} color="#c9d200" />
    },
    {
      title: "Multi Cloud Management Services",
      desc: "Get ahead in your multi cloud journey with right-fit hybrid-IT solutions – a one-stop platform for enabling any cloud anywhere.",
      icon: <FaChartLine size={45} color="#c9d200" />
    },
    {
      title: "Hybrid Cloud Managed Security Services",
      desc: "Secure your organization's critical data, assets, and applications through advanced threat-hunting solutions across multiple clouds.",
      icon: <MdSecurity size={50} color="#c9d200" />
    }
  ];

  return (
    <div className="container-fluid py-5">
      <div className="row mb-5">
        <div className="col-12 text-start">
          <h2 className="fw-bold text-dark border-bottom pb-3" style={{ fontSize: '28px' }}>
            Our service offerings
          </h2>
        </div>
      </div>

      <div className="row g-5">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="d-flex flex-column align-items-start h-100">
              
              {/* React Icon Container */}
              <div className="mb-4 d-flex align-items-center justify-content-start" style={{ height: '60px' }}>
                {service.icon}
              </div>

              <h5 className="fw-bold mb-3 text-dark" style={{ fontSize: '18px' }}>
                {service.title}
              </h5>
              <p className="text-secondary mb-4" style={{ fontSize: '14px', lineHeight: '1.6', textAlign: 'justify' }}>
                {service.desc}
              </p>

              <button 
                className="btn btn-dark px-4 py-1 rounded-pill mt-auto" 
                style={{ backgroundColor: '#444', border: 'none', fontSize: '12px', fontWeight: '600' }}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicecloud;