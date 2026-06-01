import React from "react";

const StickySidebar = () => {
  const sidebarStyle = {
    position: 'fixed', // 'absolute' ki jagah 'fixed' use karein
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    zIndex: 9999, // Taaki yeh har section ke upar dikhe
  };

  const iconStyle = {
    padding: '12px 15px',
    backgroundColor: '#ccff00',
    color: '#000',
    cursor: 'pointer',
    fontSize: '20px',
    border: 'none',
    transition: '0.3s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={sidebarStyle}>
      <div 
        style={iconStyle} 
        onMouseOver={(e) => e.target.style.paddingLeft = '20px'} 
        onMouseOut={(e) => e.target.style.paddingLeft = '15px'}
      >
        🎧
      </div>
      <div 
        style={iconStyle}
        onMouseOver={(e) => e.target.style.paddingLeft = '20px'} 
        onMouseOut={(e) => e.target.style.paddingLeft = '15px'}
      >
        📞
      </div>
    </div>
  );
};

export default StickySidebar;