import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSlider = () => {
  // Testimonial Data
  const testimonials = [
    {
      id: 1,
      companyLogo: "https://via.placeholder.com/150x50?text=Arshiya", // Replace with real logo
      text: "We have high dependencies on JPRHosting's Cloudinfinit Services, for the SAP ERP to run smoothly across the entire organization. JPRHosting, as a strategic partner has supported in ensuring 99.9% uptime access to all the servers and applications for our employees even for a WFH (Work-From-Home) environment, during this nationwide lockdown.",
      author: "AVP – IT, Arshiya Limited, Mumbai"
    },
    {
      id: 2,
      companyLogo: "https://via.placeholder.com/150x50?text=Partner+Logo", 
      text: "JPRHosting has been instrumental in our digital transformation journey, providing robust cloud infrastructure that scales with our business needs perfectly.",
      author: "IT Director, Global Solutions"
    }
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#eeeeee', minHeight: '400px' }}>
      <div className="container position-relative">
        <div className="row align-items-center">
          
          {/* Left Side: Title & Dots */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="fw-bold mb-3" style={{ fontSize: '28px' }}>Testimonials</h2>
            <p className="text-dark small mb-4">
              Delivering unique and compelling customer experiences – time and again
            </p>
            
            {/* Decorative Dot Pattern */}
            <div className="d-flex flex-wrap gap-2 opacity-25" style={{ maxWidth: '300px' }}>
              {[...Array(50)].map((_, i) => (
                <div key={i} className="bg-secondary rounded-circle" style={{ width: '5px', height: '5px' }}></div>
              ))}
            </div>
          </div>

          {/* Right Side: Bootstrap Carousel Slider */}
          <div className="col-lg-8">
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              
              <div className="carousel-inner">
                {testimonials.map((t, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={t.id}>
                    <div className="text-center px-md-5">
                      {/* Company Logo */}
                      <div className="mb-4 d-flex justify-content-center">
                        <img src={t.companyLogo} alt="Logo" style={{ maxHeight: '50px', filter: 'contrast(1.2)' }} />
                      </div>
                      
                      {/* Quote Text */}
                      <p className="text-dark mb-4 px-lg-5" style={{ fontSize: '15px', lineHeight: '1.7', fontWeight: '400' }}>
                        {t.text}
                      </p>
                      
                      {/* Author */}
                      <p className="fw-bold text-primary mb-5" style={{ fontSize: '13px', color: '#2b5a91' }}>
                        {t.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Indicators (The small dots at bottom) */}
              <div className="carousel-indicators position-relative mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#666', margin: '0 5px', border: 'none' }}
                  ></button>
                ))}
              </div>

              {/* Custom Navigation Buttons (Left/Right) */}
              <button 
                className="carousel-control-prev" 
                type="button" 
                data-bs-target="#testimonialCarousel" 
                data-bs-slide="prev"
                style={{ width: '45px', height: '45px', backgroundColor: 'white', borderRadius: '8px', top: '40%', left: '-20px', opacity: '1', border: '1px solid #ddd', color: '#666' }}
              >
                <FaChevronLeft />
              </button>
              <button 
                className="carousel-control-next" 
                type="button" 
                data-bs-target="#testimonialCarousel" 
                data-bs-slide="next"
                style={{ width: '45px', height: '45px', backgroundColor: 'white', borderRadius: '8px', top: '40%', right: '-20px', opacity: '1', border: '1px solid #ddd', color: '#666' }}
              >
                <FaChevronRight />
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;