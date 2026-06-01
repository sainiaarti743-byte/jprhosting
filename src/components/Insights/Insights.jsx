import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Note: Iske liye 'react-multi-carousel' install karna hoga
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrustedPartner from '../../page/TrustedPartner';
import CustomerStories from '../../page/CustomerStories';
import SEO from '../SEO';

const Insights = () => {
  const sifyGreen = "#adff2f";

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  // Reusable Section Component
  const SliderSection = ({ title, data }) => (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">{title}</h2>
          <button className="btn btn-dark btn-sm rounded-pill px-3">View all &rarr;</button>
        </div>
        
        <Carousel 
          responsive={responsive} 
          infinite={true} 
          showDots={true} 
          arrows={false}
          renderDotsOutside={true}
          dotListClass="custom-dot-list"
        >
          {data.map((item, index) => (
            <div key={index} className="card h-100 border-0 shadow-sm mx-2 overflow-hidden" style={{ borderRadius: '12px' }}>
              <div className="position-relative">
                <img src={item.img} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
                {item.overlayIcon && (
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="bg-white rounded-circle p-2 opacity-75">▶️</div>
                  </div>
                )}
              </div>
              <div className="card-body d-flex flex-column" style={{ backgroundColor: index === 2 ? '#f9faf0' : '#f0f0f0' }}>
                <h6 className="fw-bold mb-2">{item.title}</h6>
                <p className="text-muted small flex-grow-1">{item.desc}</p>
                {item.meta && <p className="small text-secondary mb-2">📍 {item.meta}</p>}
                <div className="mt-auto">
                   <a href="#" className="text-dark text-decoration-none small fw-bold">&rarr; Read More</a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );



  // Data mapping for all screenshots
  const sectionsData = {
    customerSpeak: [
      { title: "Mr. Kripadyuti Sarkar, Group CIO, Ambuja Neotia Group", desc: "Digital transformation insights...", img: "/assets/img/CaseStudies_5.jpg", overlayIcon: true },
      { title: "Dr Sunil Pandey, Director IT, Institute of Technology...", desc: "Cloud adoption strategies...", img: "/assets/img/CaseStudies_7.jpg", overlayIcon: true },
      { title: "Dr Sandip Pradhan, VP and CDIP, Century Plyboards...", desc: "AI implementation success...", img: "/assets/img/CaseStudies_8.jpg", overlayIcon: true }
    ],
    whitePapers: [
      { title: "AI-Ready Data Centers: Powering Future...", desc: "In today's rapidly evolving digital landscape...", img: "/assets/img/CaseStudies_10.jpg" },
      { title: "Driving innovation in Manufacturing...", desc: "The MRD industry is undergoing transformation...", img: "/assets/img/CaseStudies_7.jpg" },
      { title: "A cornerstone of business growth for BFSI...", desc: "Adopting AI in financial sectors...", img: "/assets/img/cloud.webp" }
    ],
    events: [
      { title: "JPRHosting at Davos – World Economic Forum 2026", desc: "Joining the conversation globally.", meta: "Davos | 19 Jan - 23 Jan 2026", img: "/assets/img/CaseStudies_8.jpg" },
      { title: "Network infra and network digital managed...", desc: "Regional tech summit updates.", meta: "Kolkata | 12 Dec 2025", img: "/assets/img/cloud.webp" },
      { title: "JPRHosting honoured with IGBC GREEN CHAMPION...", desc: "Leading the green data center movement.", meta: "India | 2025", img: "/assets/img/cloud.webp" }
    ]
  };

  return (
    <>
    <SEO title="Corporate Insights, Technology Trends & Analytics" description="Analysis of emerging cloud trends, datacenter transformations, and modern automation strategies." keywords="technology insights business white papers cloud studies" url="https://jprhosting.in/insights" />
    
    <div style={{ backgroundColor: '#fff' }}>
      
      {/* Hero Section - Ref: Screenshot 2026-05-14 at 4.20.51 PM.jpg */}
 <section className="hero-section text-white d-flex align-items-center" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/banner/Digital_app-modernization.jpg') center/cover",
          height: '350px',
          padding: '0 5%'
        }}>
        <div className="container py-5">
          <h1 className="display-4 fw-bold" style={{ color: sifyGreen }}>Insights</h1>
          <div className="d-flex align-items-center">
            <div style={{ width: '4px', height: '30px', backgroundColor: sifyGreen, marginRight: '10px' }}></div>
            <p className="h4 mb-0">Enhancing Digital footprint globally</p>
          </div>
        </div>
      </section>
      <TrustedPartner/>

      <CustomerStories/>

      {/* Dynamic Sections - Ref: 4.21.05 PM to 4.21.48 PM */}
      <SliderSection title="Customer Speak" data={sectionsData.customerSpeak} />
      <hr className="container opacity-25" />
      <SliderSection title="White papers" data={sectionsData.whitePapers} />
      <hr className="container opacity-25" />
      <SliderSection title="Blogs and Articles" data={sectionsData.whitePapers} /> {/* Reusing pattern */}
      <hr className="container opacity-25" />
      <SliderSection title="Events" data={sectionsData.events} />
      <hr className="container opacity-25" />
      <SliderSection title="Podcast" data={sectionsData.customerSpeak} /> {/* Reusing pattern */}

      <style>{`
        .custom-dot-list { bottom: -30px !important; }
        .react-multi-carousel-dot button { border: 1px solid #999; background: transparent; width: 8px; height: 8px; }
        .react-multi-carousel-dot--active button { background: #333; border-color: #333; transform: scale(1.2); }
      `}</style>
    </div>
    </>
  );
};

export default Insights;