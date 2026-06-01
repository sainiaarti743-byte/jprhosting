import React, { useState, useEffect } from 'react';

const CdnSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Screenshots ke mutabik slides ka data
  const slides = [
    {
      title: 'Introducing the',
      highlight: "World's First PAY-PER-USE Colocation for AI",
      image: '/assets/img/1920x670-Banner-1.webp',
      buttonText: 'Know more'
    },
    {
      title: 'Digital Transformation',
      highlight: 'Future-Proof Your Business with JPRHosting',
      image: '/assets/banner/Networks_managed-network-services.jpg',
      buttonText: 'Explore More'
    },
     {
      title: 'Digital Transformation',
      highlight: 'Future-Proof Your Business with JPRHosting',
      image: '/assets/banner/network-transformation-services.jpg',
      buttonText: 'Explore More'
    },
     {
      title: 'Digital Transformation',
      highlight: 'Future-Proof Your Business with JPRHosting',
      image: '/assets/banner/network-integration-services.jpg',
      buttonText: 'Explore More'
    },
  ];

  // Auto slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Styles
  const sectionStyle = {
    height: '60vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#000',
    fontFamily: '"Source Sans Pro", sans-serif'
  };

  const slideStyle = {
    height: '100%',
    width: '100%',
    backgroundImage: `linear-gradient(to right, rgba(0,0,51,0.8), rgba(0,0,0,0.2)), url(${slides[currentSlide].image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    padding: '0 100px',
    transition: 'background-image 0.8s ease-in-out',
  };

  const contentStyle = {
    maxWidth: '600px',
    color: 'white',
    animation: 'fadeInLeft 1s ease-out'
  };

  const buttonStyle = {
    marginTop: '30px',
    padding: '12px 35px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: '0.3s'
  };

  return (
    <section style={sectionStyle}>
      <div style={slideStyle}>
        <div style={contentStyle}>
          <h2 style={{ fontSize: '48px', fontWeight: '400', marginBottom: '10px' }}>
            {slides[currentSlide].title}
          </h2>
          <h1 style={{ fontSize: '56px', fontWeight: '800', color: '#ccff00', lineHeight: '1.1' }}>
            {slides[currentSlide].highlight}
          </h1>
          <button 
            style={buttonStyle}
            onMouseOver={(e) => {e.target.style.backgroundColor='#ccff00'; e.target.style.color='#000'; e.target.style.border='1px solid #ccff00'}}
            onMouseOut={(e) => {e.target.style.backgroundColor='transparent'; e.target.style.color='white'; e.target.style.border='1px solid white'}}
          >
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>

      {/* Slider Dots/Progress */}
      <div style={{ position: 'absolute', bottom: '40px', left: '100px', display: 'flex', gap: '15px' }}>
        {slides.map((_, index) => (
          <div 
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '40px',
              height: '4px',
              backgroundColor: currentSlide === index ? '#ccff00' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          />
        ))}
      </div>

    

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default CdnSlider;