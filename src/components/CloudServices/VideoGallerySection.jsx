import React from 'react';

const VideoGallerySection = () => {
  const videoData = [
    {
      id: 1,
      title: "JPRHosting Multi & Hybrid Cloud with Cloud Adjacency",
       image: "/assets/img2/cloud1.webp",
    },
    {
      id: 2,
      title: "JPRHosting Gen-V Multi Cloud Management Platform (infinitCMP)",
       image: "/assets/img2/cloud2.jpeg",
    },
    {
      id: 3,
      title: "JPRHosting Cloud Webinar – Unlock the Power of Multi-Cloud Management",
       image: "/assets/img2/cloud3.jpeg",
    },
    {
      id: 4,
      title: "The Future of Manufacturing: Unlocking Innovation",
          image: "/assets/img2/cloud4.jpeg",
    },
    {
      id: 5,
      title: "AI AT SCALE: BLUEPRINT FOR CLOUD INNOVATION",
      image: "/assets/img2/cloud.5.jpeg",
    },
     {
      id: 5,
      title: "AI AT SCALE: BLUEPRINT FOR CLOUD INNOVATION",
       image: "/assets/img/CaseStudies_8.jpg",
    }
  ];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '24px' }}>Unlock and enjoy your Cloud freedom</h2>
        </div>

        {/* Video Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {videoData.map((video) => (
            <div className="col" key={video.id}>
              <div className="card h-100 border-0 bg-transparent">
                
                {/* Video Thumbnail Placeholder */}
                <div className="position-relative overflow-hidden rounded-1 shadow-sm" style={{ cursor: 'pointer' }}>
                  <img 
                    src={video.image} 
                    className="card-img-top w-100" 
                    alt={video.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  
                  {/* Play Button Overlay (Red Youtube style) */}
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div style={{
                      width: '60px',
                      height: '42px',
                      backgroundColor: '#ff0000',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '0',
                        height: '0',
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        borderLeft: '18px solid white',
                        marginLeft: '5px'
                      }}></div>
                    </div>
                  </div>

                  {/* JPRHosting Logo Overlay (Top Right) */}
                  <div className="position-absolute top-0 end-0 p-2">
                    <span className="fw-bold" style={{ color: '#c9d200', fontSize: '12px' }}>'</span>
                  </div>
                </div>

                {/* Video Title */}
                <div className="card-body px-0 pt-3 text-center">
                  <p className="card-text fw-medium text-dark" style={{ fontSize: '15px', lineHeight: '1.4' }}>
                    {video.title}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default VideoGallerySection;