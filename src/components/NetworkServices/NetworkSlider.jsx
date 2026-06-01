import React, { useState, useEffect } from 'react';

const NetworkSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Slides Data
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
      image: '/assets/banner/data-center-integration-services.jpg',
      buttonText: 'Explore More'
    },
    {
      title: 'Digital Transformation',
      highlight: 'Future-Proof Your Business with JPRHosting',
      image: '/assets/banner/enterprise-network-connectivity.jpg',
      buttonText: 'Explore More'
    }
  ];

  // Responsive Check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      style={{
        height: isMobile ? '75vh' : '90vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000',
        fontFamily: '"Source Sans Pro", sans-serif'
      }}
    >
      {/* SLIDE */}
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(0,0,51,0.85),
              rgba(0,0,0,0.25)
            ),
            url(${slides[currentSlide].image})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          padding: isMobile
            ? '0 20px'
            : '0 clamp(40px,8vw,100px)',
          transition: 'all 0.8s ease-in-out'
        }}
      >
        {/* CONTENT */}
        <div
          style={{
            maxWidth: isMobile ? '100%' : '700px',
            color: '#fff',
            animation: 'fadeInLeft 1s ease-out',
            zIndex: 2
          }}
        >
          {/* SUB TITLE */}
          <h2
            style={{
              fontSize: isMobile
                ? '24px'
                : 'clamp(32px,4vw,48px)',
              fontWeight: '400',
              marginBottom: '12px',
              marginTop: 0,
              lineHeight: '1.3'
            }}
          >
            {slides[currentSlide].title}
          </h2>

          {/* MAIN TITLE */}
          <h1
            style={{
              fontSize: isMobile
                ? '34px'
                : 'clamp(45px,5vw,65px)',
              fontWeight: '800',
              color: '#ccff00',
              lineHeight: isMobile ? '1.2' : '1.1',
              margin: 0,
              wordBreak: 'break-word'
            }}
          >
            {slides[currentSlide].highlight}
          </h1>

          {/* BUTTON */}
          <button
            style={{
              marginTop: isMobile ? '25px' : '35px',
              padding: isMobile
                ? '12px 28px'
                : '15px 40px',
              backgroundColor: 'transparent',
              color: '#fff',
              border: '1px solid #fff',
              borderRadius: '40px',
              cursor: 'pointer',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: '600',
              transition: '0.3s ease',
              outline: 'none'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ccff00';
              e.target.style.color = '#000';
              e.target.style.border =
                '1px solid #ccff00';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor =
                'transparent';
              e.target.style.color = '#fff';
              e.target.style.border =
                '1px solid #fff';
            }}
          >
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>

      {/* DOTS */}
      <div
        style={{
          position: 'absolute',
          bottom: isMobile ? '25px' : '40px',
          left: isMobile
            ? '20px'
            : 'clamp(40px,8vw,100px)',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '10px' : '15px',
          zIndex: 3
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: currentSlide === index
                ? (isMobile ? '30px' : '45px')
                : (isMobile ? '20px' : '35px'),
              height: '4px',
              backgroundColor:
                currentSlide === index
                  ? '#ccff00'
                  : 'rgba(255,255,255,0.35)',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: '0.4s ease'
            }}
          />
        ))}
      </div>

      {/* STYLES */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 1024px) {
          h1 {
            line-height: 1.2 !important;
          }
        }

        @media (max-width: 768px) {

          section {
            height: 75vh !important;
          }

        }

        @media (max-width: 480px) {

          section {
            height: 80vh !important;
          }

        }
      `}</style>
    </section>
  );
};

export default NetworkSlider;