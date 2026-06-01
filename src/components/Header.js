import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);

      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ========= MENU DATA =========
  const menuData = [
    {
      name: 'Cloud',
      columns: [
        {
          title: { label: 'Cloud Services', link: '/cloudservices' },
          items: [
            { label: 'JPRHosting CloudInfinit+AI Services', link: '/cloudservices/JPRHosting-cloudinfinit-services' },
            { label: 'Hosted Private cloud', link: '/cloudservices/JPRHosting-cloudinfinit-services/hosted-private-cloud' },
            { label: 'Managed Public Cloud', link: '/cloudservices/JPRHosting-cloudinfinit-services/managed-public-cloud' },
            { label: 'Smart SAP Grid', link: '/cloudservices/JPRHosting-cloudinfinit-services/smart-sap-grids' },
            { label: 'Desktop-as-a-Service', link: '/cloudservices/JPRHosting-cloudinfinit-services/Desktop-as-a-Service' },
            { label: 'Business Resiliency-as-a-Service', link: '/cloudservices/JPRHosting-cloudinfinit-services/business-resiliency-as-a-service' },
            { label: 'Kubernetes-as-a-Service', link: '/cloudservices/JPRHosting-cloudinfinit-services/kubernetes-as-a-service' }
          ],
          // items:[
          //   {  label: 'Advisory And Migration Services', link: '/cloudservices/advisory-and-migration-services' }
          // ]

        },

        {
          title: { label: 'Hyperscale Partner Cloud Services', link: '/cloudservices/hyperscale-partner-cloud-services' },
          items: [
            { label: 'AWS Cloud Services', link: '/cloudservices/hyperscale-partner-cloud-services/aws-cloud-services' },
            { label: 'Azure Cloud Services', link: '/cloudservices/hyperscale-partner-cloud-services/azure' },
            { label: 'Google Cloud Services', link: '/cloudservices/hyperscale-partner-cloud-services/google' },
            { label: 'Oracle Cloud Services', link: '/cloudservices/hyperscale-partner-cloud-services/oracle' }
          ]
        },
        {
          title: { label: 'CDN Services', link: '/cloudservices/cdn-services' },
          items: [
            { label: 'Akamai', link: '/cloudservices/cdn-services/akamai' },
            { label: 'AWS CloudFront', link: '/cloudservices/cdn-services/aws-cloudfront' }
          ]
        }
      ],
      pdf: "Read IDC Spotlight Paper"
    },

    {
      name: 'Digital',
      columns: [
        {
          title: { label: 'Digital Solutions', link: '/digital-services' },
          items: [
            { label: 'App Modernization Services', link: '/digital-services/app-modernization' },
            { label: 'kubernetes', link: '/digital-services/app-modernization/kubernetes' },
            { label: 'DevOps', link: '/digital-services/app-modernization/devsecops' },
            { label: 'Site Reliability Engineering', link: '/digital-services/app-modernization/site-reliability-engineering' }
          ]
        },
        {
          title: { label: 'Enterprise Application Services', link: '/digital-services/enterprise-application-servicess' },
          items: [
            { label: 'SAP Managed Services', link: '/digital-services/app-modernization' },
            { label: 'Azure Managed Services', link: '/digital-services/enterprise-application-services/azure' },
            { label: 'Oracle Managed Services', link: '/digital-services/enterprise-application-services/oracle' },
            { label: 'Infinitfso', link: '/digital-services/infinitfso' }
          ]
        },
        {
          title: { label: 'Digital XR And Learning', link: '/digital-services/digital-xr' },
          items: [
            { label: 'Immersive Experience', link: '/digital-services/digital-xr/immersive-experience' },
            { label: 'Digital Learning', link: '/digital-services/digital-xr/digital-learning' },
            { label: 'Digital Assets Management', link: 'digital-services/digital-assets-management' },

          ]
        },


      ]
    },

    {
      name: 'Data Centers',
      columns: [
        {
          title: { label: 'Data Center', link: '/data-center' },
          items: [
            { label: 'Colocation Services', link: '/data-center/colocation-services' },
            { label: 'Managed Hosting', link: '/data-center/managed-hosting' },
            { label: 'Cloud Services', link: '/data-center/cloud-services' },
            { label: 'Disaster Recovery', link: '/data-center/disaster-recovery' }
          ]
        },

        {
          title: { label: '', link: '/locations' },
          items: [
            { label: 'Network Services', link: '/data-center/network-services' },
            { label: 'Security Services', link: '/data-center/security-services' },

          ]
        },
        {
          title: { label: 'Benefits', link: '/Benefits' },
          items: [
            { label: 'Reliability', link: '/data-center/reliabilityr' },
            { label: 'Scalability', link: '/data-center/scalability' },
            { label: 'Security', link: '/data-center/security' },
            { label: 'Cost-Effective', link: '/data-center/cost-effective' }
          ]
        },


      ]
    },

    {
      name: 'Networks',
      columns: [
        {
          title: { label: 'Networks & Communications', link: '/network-services/' },
          items: [
            { label: 'EnterPrice Network Connectivity', link: '/network-services/enterprise-network-connectivity' },
            { label: 'SAD Wan', link: '/mpls' }
          ]
        },
        {
          title: { label: 'Managed Networks Services', link: '/network-services/managed-network-services' },
          items: [
            { label: 'Managed NOC Services', link: '/network-services/managed-network-services/managed-noc-services' },
            { label: 'Network Security Services', link: '/network-services/managed-network-services/network-security-services' }
          ]
        },

        {
          title: { label: 'Networks Transformation Services', link: '/network-services/network-transformation-services' },
          items: [
            { label: 'Cloud Ready', link: '/network-services/network-transformation-services/cloud-ready' },
            { label: 'Edge Ready', link: '/network-services/network-transformation-services/edge-ready' }
          ]
        },



      ]
    },
    { name: 'GCC', columns: [] },

    {
      name: 'Integration',
      columns: [
        {
          title: { label: 'Integration Services', link: '/integration-services' },
          items: [
            { label: 'Data Center Integration Services', link: '/integration-services/data-center-integration-services' },
            { label: 'Digital Trust And Authentication Services', link: '/integration-services/digital-trust-and-authentication-services' }
          ]
        },
        {
          title: { label: 'Network Integration Services', link: '/integration-services/network-integration-services' },
          items: [
            { label: '', link: '/managed-soc' },
            { label: '', link: '/endpoint-security' }
          ]
        },
        {
          title: { label: 'Hybrid IT Integration Services', link: '/integration-services/hybrid-it-integration-services' },
          items: [
            { label: '', link: '/managed-soc' },
            { label: '', link: '/endpoint-security' }
          ]
        },

      ]
    },
    {
      name: 'Security',
      columns: [
        {
          title: { label: 'Security', link: '/security-services' },
          items: [
            { label: 'Cloud Security', link: '/security-services/cloud-security' },
            { label: 'Data Security', link: '/security-services/data-security' }
          ]
        },

        {
          title: { label: '', link: '/security' },
          items: [
            { label: 'Network Security', link: '/security-services/network-security' },
            { label: 'Vulnerability Assessment Penetration Testing', link: '/security-services/vulnerability-assessment-penetration-testing' }
          ]
        },

        {
          title: { label: '', link: '/security' },
          items: [
            { label: 'Host Security', link: '/security-services/host-security' },
            { label: 'Managed Detection & Response', link: '/security-services/managed-detection-response' }
          ]
        },


      ]
    },

    {
      name: 'Partners', columns: [
        {
          title: { label: 'Alliance Partners', link: '/alliance-partners' },
          items: [
            { label: '', link: '/managed-soc' },
            { label: '', link: '/endpoint-security' }
          ]
        },
        {
          title: { label: 'JPRHosting Channel Partners', link: '/channel-partners' },
          items: [
            { label: '', link: '/managed-soc' },
            { label: '', link: '/endpoint-security' }
          ]
        },

      ]
    },
    {
      name: 'Insights', columns: [
        {
          title: { label: 'Insights', link: '/insights' },
          items: [
            { label: 'Success Stories', link: '/insights/success-stories' },
            { label: 'Events', link: '/insights/events-and-webinars' }
          ]
        },
        {
          title: { label: '', link: '/security' },
          items: [
            { label: 'White Papers', link: '/insights/white-paper' },
            { label: 'Customer Speak', link: '/insights/customer-speak' }
          ]
        },
        {
          title: { label: '', link: '/security' },
          items: [
            { label: 'Blogs', link: '/insights/blogs' },
            { label: 'Podcast', link: '"/insights/podcast' }
          ]
        },
        {
          title: { label: '', link: '/security' },
          items: [
            { label: 'Webinars', link: '/insights/webinars' },
            { label: '', link: '/endpoint-security' }
          ]
        },
      ]
    },
    {
      name: 'About JPRHosting', columns: [
        {
          title: { label: 'About US', link: '/about-us' },
          items: [
            { label: 'Management Team', link: '/about-us/management-team' },
            { label: 'Certifications', link: '/certifications' }
          ]
        },
        {
          title: { label: '', link: '/security' },
          items: [
            { label: 'JBRHosting News', link: '/about-us/news' },
            { label: 'Events And Webinars', link: '/insights/events-and-webinars' }
          ]
        },
        {
          title: { label: '', link: '/security' },
          items: [
            { label: 'Awards And Recognition', link: '/awards' },
            { label: '', link: '/endpoint-security' }
          ]
        },
      ]
    }
  ];

  return (
    <>
      {/* Spacer */}
      <div style={{ height: isMobile ? '70px' : '100px' }} />

      {/* Overlay */}
      {isMobile && mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 9998
          }}
        />
      )}

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 9999,
          background: '#050a1e',
          color: '#fff',
          fontFamily: 'sans-serif',
          boxShadow: '0 2px 10px rgba(0,0,0,0.4)'
        }}
      >
        {/* TOP BAR */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '20px',
              padding: '10px clamp(20px,5vw,80px)',
              fontSize: '12px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              flexWrap: 'wrap'
            }}
          >
            <Link
              to="/marketplace"
              target="_blank"
              style={{
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              Marketplace
            </Link>

            <Link
              to="/investors"
              target="_blank"
              style={{
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              Investors
            </Link>

            <Link
              to="/careers"
              target="_blank"
              style={{
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              target="_blank"
              style={{
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              Contact Us
            </Link>
          </div>
        )}

        {/* MAIN NAVBAR */}
        <div
          style={{
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 clamp(16px,4vw,80px)',
            position: 'relative'
          }}
        >
          {/* LOGO */}
          <a
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img
              src="/assets/banner/jprsj-preview.png"
              alt="JPRHosting"
              style={{
                height: isMobile ? '120px' : '255px',
                width: 'auto'
              }}
            />
          </a>

          {/* DESKTOP MENU */}
          {!isMobile && (
            <nav>
              <ul
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  gap: '8px'
                }}
              >
                {menuData.map((menu, idx) => (
                  <li
                    key={idx}
                    onMouseEnter={() => setActiveMenu(idx)}
                    onMouseLeave={() => setActiveMenu(null)}
                    style={{
                      height: '70px',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 12px',
                      cursor: 'pointer',
                      position: 'relative',
                      fontSize: '14px',
                      fontWeight: '500',
                      color:
                        activeMenu === idx ? '#ccff00' : '#ffffff',
                      borderBottom:
                        activeMenu === idx
                          ? '3px solid #ccff00'
                          : '3px solid transparent',
                      transition: '0.3s'
                    }}
                  >
                    {menu.name}

                    {menu.columns.length > 0 && (
                      <span
                        style={{
                          marginLeft: '5px',
                          fontSize: '10px'
                        }}
                      >
                        ▼
                      </span>
                    )}

                    {/* MEGA MENU */}
                    {activeMenu === idx &&
                      menu.columns.length > 0 && (
                        <div
                          style={{
                            position: 'fixed',
                            top: '100px',
                            left: 0,
                            width: '100%',
                            background: '#0a1029',
                            padding:
                              '35px clamp(20px,5vw,80px)',
                            display: 'grid',
                            gridTemplateColumns:
                              'repeat(auto-fit,minmax(240px,1fr))',
                            gap: '30px',
                            boxShadow:
                              '0 15px 30px rgba(0,0,0,0.5)',
                            borderTop:
                              '1px solid rgba(255,255,255,0.08)',
                            maxHeight: '80vh',
                            overflowY: 'auto'
                          }}
                        >
                          {menu.columns.map((col, cIdx) => (
                            <div key={cIdx}>
                              <h4
                                style={{
                                  marginBottom: '16px',
                                  lineHeight: '1.4'
                                }}
                              >
                                <a
                                  href={col.title.link}
                                  style={{
                                    color: '#ccff00',
                                    textDecoration: 'none',
                                    fontSize: '16px'
                                  }}
                                >
                                  {col.title.label}
                                </a>
                              </h4>

                              <ul
                                style={{
                                  listStyle: 'none',
                                  padding: 0,
                                  margin: 0
                                }}
                              >
                                {col.items.map((item, iIdx) => (
                                  <li
                                    key={iIdx}
                                    style={{
                                      marginBottom: '12px'
                                    }}
                                  >
                                    <a
                                      href={item.link}
                                      style={{
                                        color: '#adb5bd',
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        lineHeight: '1.6',
                                        transition: '0.3s'
                                      }}
                                    >
                                      {item.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* RIGHT */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px'
            }}
          >
            <span
              style={{
                cursor: 'pointer',
                fontSize: '20px',
                color: 'rgba(207, 243, 66, 1)'
              }}
            >
              <FaSearch />
            </span>

            {isMobile && (
              <div
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                style={{
                  fontSize: '30px',
                  color: '#ccff00',
                  cursor: 'pointer',
                  lineHeight: 1
                }}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </div>
            )}
          </div>
        </div>

        {/* MOBILE SIDEBAR */}
        {isMobile && (
          <div
            style={{
              position: 'fixed',
              top: '70px',
              right: mobileMenuOpen ? 0 : '-100%',
              width: '85%',
              maxWidth: '380px',
              height: 'calc(100vh - 70px)',
              background: '#050a1e',
              transition: '0.4s ease',
              overflowY: 'auto',
              zIndex: 9999,
              boxShadow: '-5px 0 20px rgba(0,0,0,0.5)'
            }}
          >
            {menuData.map((menu, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom:
                    '1px solid rgba(255,255,255,0.08)'
                }}
              >
                {/* MENU TITLE */}
                <div
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === idx ? null : idx
                    )
                  }
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color:
                      activeMenu === idx
                        ? '#ccff00'
                        : '#ffffff',
                    fontSize: '17px',
                    fontWeight: '500'
                  }}
                >
                  {menu.name}

                  {menu.columns.length > 0 && (
                    <span>
                      {activeMenu === idx ? '−' : '+'}
                    </span>
                  )}
                </div>

                {/* SUB MENU */}
                {activeMenu === idx &&
                  menu.columns.length > 0 && (
                    <div
                      style={{
                        background: '#0a1029',
                        padding: '10px 20px 20px'
                      }}
                    >
                      {menu.columns.map((col, cIdx) => (
                        <div
                          key={cIdx}
                          style={{
                            marginBottom: '22px'
                          }}
                        >
                          <a
                            href={col.title.link}
                            style={{
                              display: 'block',
                              color: '#ccff00',
                              textDecoration: 'none',
                              fontWeight: '700',
                              marginBottom: '10px',
                              lineHeight: '1.5'
                            }}
                          >
                            {col.title.label}
                          </a>

                          {col.items.map((item, iIdx) => (
                            <a
                              key={iIdx}
                              href={item.link}
                              style={{
                                display: 'block',
                                color: '#adb5bd',
                                textDecoration: 'none',
                                padding: '8px 0',
                                fontSize: '14px',
                                lineHeight: '1.5'
                              }}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

// import React, { useState } from 'react';

// const Header = () => {
//   const [activeMenu, setActiveMenu] = useState(null);

//   // Menu Data
//   const menuData = [
//     {
//       name: 'Cloud',
//       columns: [
//         {
//           title: { label: 'Cloud Services', link: '/cloudservices' },
//           items: [
//             { label: 'Sify CloudInfinit+AI Services', link: '/cloudservices/sify-cloudinfinit-services' },
//             { label: 'Hosted Private cloud', link: '/cloudservices/sify-cloudinfinit-services/hosted-private-cloud' },
//             { label: 'Managed Public Cloud', link: '/cloudservices/sify-cloudinfinit-services/managed-public-cloud' },
//             { label: 'Smart SAP Grid', link: '/cloudservices/sify-cloudinfinit-services/smart-sap-grids' },
//             { label: 'Desktop-as-a-Service', link: '/cloudservices/sify-cloudinfinit-services/Desktop-as-a-Service' },
//             { label: 'Business Resiliency-as-a-Service', link: '/cloudservices/sify-cloudinfinit-services/business-resiliency-as-a-service' },
//             { label: 'Kubernetes-as-a-Service', link: '/cloudservices/sify-cloudinfinit-services/kubernetes-as-a-service' }
//           ],
//           // items:[
//           //   {  label: 'Advisory And Migration Services', link: '/cloudservices/advisory-and-migration-services' }
//           // ]

//         },

//         {
//           title: { label: 'Hyperscale Partner Cloud Services', link: '/cloudservices/hyperscale-partner-cloud-services' },
//           items: [
//             { label: 'AWS Cloud Services', link: '/cloudservices/hyperscale-partner-cloud-services/aws-cloud-services' },
//             { label: 'Azure Cloud Services', link: '/cloudservices/hyperscale-partner-cloud-services/azure' },
//             { label: 'Google Cloud Services', link: '/cloudservices/hyperscale-partner-cloud-services/google' },
//             { label: 'Oracle Cloud Services', link: '/cloudservices/hyperscale-partner-cloud-services/oracle' }
//           ]
//         },
//         {
//           title: { label: 'CDN Services', link: '/cloudservices/cdn-services' },
//           items: [
//             { label: 'Akamai', link: '/cloudservices/cdn-services/akamai' },
//             { label: 'AWS CloudFront', link: '/cloudservices/cdn-services/aws-cloudfront' }
//           ]
//         }
//       ],
//       pdf: "Read IDC Spotlight Paper"
//     },

//     {
//       name: 'Digital',
//       columns: [
//         {
//           title: { label: 'Digital Solutions', link: '/digital-services' },
//           items: [
//             { label: 'App Modernization Services', link: '/digital-services/app-modernization' },
//             { label: 'kubernetes', link: '/digital-services/app-modernization/kubernetes' },
//             { label: 'DevOps', link: '/digital-services/app-modernization/devsecops' },
//             { label: 'Site Reliability Engineering', link: '/digital-services/app-modernization/site-reliability-engineering' }
//           ]
//         },
//         {
//           title: { label: 'Enterprise Application Services', link: '/digital-services' },
//           items: [
//             { label: 'SAP Managed Services', link: '/digital-services/app-modernization' },
//             { label: 'Azure Managed Services', link: '/digital-services/enterprise-application-services/azure' },
//             { label: 'Oracle Managed Services', link: '/digital-services/enterprise-application-services/oracle' },
//             { label: 'Infinitfso', link: '/digital-services/infinitfso' }
//           ]
//         },
//         {
//           title: { label: 'Digital XR And Learning', link: '/digital-services/digital-xr' },
//           items: [
//             { label: 'Immersive Experience', link: '/digital-services/digital-xr/immersive-experience' },
//             { label: 'Digital Learning', link: '/digital-services/digital-xr/digital-learning' },
//             { label: 'Digital Assets Management', link: 'digital-services/digital-assets-management' },

//           ]
//         },


//       ]
//     },

//     {
//       name: 'Data Centers',
//       columns: [
//         {
//           title: { label: 'Data Center', link: '/data-center' },
//           items: [
//             { label: 'Colocation Services', link: '/data-center/colocation-services' },
//             { label: 'Built-to-suit', link: '/data-center/built-to-suit' },
//             { label: 'Green-data-centers', link: '/data-center/green-data-centers' },
//             { label: 'Datacenter Interconnect', link: '/data-center/datacenter-interconnect' }
//           ]
//         },

//         {
//           title: { label: 'Locations', link: '/locations' },
//           items: [
//             { label: 'Mumbai', link: '/mumbai' },
//             { label: 'Noida', link: '/noida' },
//             { label: 'Chennai', link: '/chennai' }
//           ]
//         },
//         {
//           title: { label: 'Locations', link: '/locations' },
//           items: [
//             { label: 'Banglor', link: '/banglor' },
//             { label: 'Hydarbad', link: '/hydarbad' },
//             { label: 'Kolkata', link: '/kolkata' }
//           ]
//         },


//       ]
//     },

//     {
//       name: 'Networks',
//       columns: [
//         {
//           title: { label: 'Networks & Communications', link: '/network-services/' },
//           items: [
//             { label: 'EnterPrice Network Connectivity', link: '/network-services/enterprise-network-connectivit' },
//             { label: 'SAD Wan', link: '/mpls' }
//           ]
//         },
//         {
//           title: { label: 'Managed Networks Services', link: '/network-services/managed-network-services' },
//           items: [
//             { label: 'Managed NOC Services', link: '/network-services/managed-network-services/managed-noc-services' },
//             { label: 'Network Security Services', link: '/network-services/managed-network-services/network-security-services' }
//           ]
//         },

//         {
//           title: { label: 'Networks Transformation Services', link: '/network-services/network-transformation-services' },
//           items: [
//             { label: 'Cloud Ready', link: '/network-services/network-transformation-services/cloud-ready' },
//             { label: 'Edge Ready', link: '/network-services/network-transformation-services/edge-ready' }
//           ]
//         },



//       ]
//     },
//     { name: 'GCC', columns: [] },

//     {
//       name: 'Integration',
//       columns: [
//         {
//           title: { label: 'Integration Services', link: '/integration-services' },
//           items: [
//             { label: 'Data Center Integration Services', link: '/integration-services/data-center-integration-services' },
//             { label: 'Digital Trust And Authentication Services', link: '/integration-services/digital-trust-and-authentication-services' }
//           ]
//         },
//         {
//           title: { label: 'Network Integration Services', link: '/integration-services/network-integration-services' },
//           items: [
//             { label: '', link: '/managed-soc' },
//             { label: '', link: '/endpoint-security' }
//           ]
//         },
//         {
//           title: { label: 'Hybrid IT Integration Services', link: '/integration-services/hybrid-it-integration-services' },
//           items: [
//             { label: '', link: '/managed-soc' },
//             { label: '', link: '/endpoint-security' }
//           ]
//         },

//       ]
//     },
//     {
//       name: 'Security',
//       columns: [
//         {
//           title: { label: 'Security', link: '/security-services' },
//           items: [
//             { label: 'Cloud Security', link: '/security-services/cloud-security' },
//             { label: 'Data Security', link: '/security-services/data-security' }
//           ]
//         },

//         {
//           title: { label: '', link: '/security' },
//           items: [
//             { label: 'Network Security', link: '/security-services/network-security' },
//             { label: 'Vulnerability Assessment Penetration Testing', link: '/security-services/vulnerability-assessment-penetration-testing' }
//           ]
//         },

//         {
//           title: { label: '', link: '/security' },
//           items: [
//             { label: 'Host Security', link: '/security-services/host-security' },
//             { label: 'Managed Detection & Response', link: '/security-services/managed-detection-response' }
//           ]
//         },


//       ]
//     },

//     {
//       name: 'Partners', columns: [
//         {
//           title: { label: 'Alliance Partners', link: '/alliance-partners' },
//           items: [
//             { label: '', link: '/managed-soc' },
//             { label: '', link: '/endpoint-security' }
//           ]
//         },
//          {
//           title: { label: 'JPRHosting Channel Partners', link: '/channel-partners' },
//           items: [
//             { label: '', link: '/managed-soc' },
//             { label: '', link: '/endpoint-security' }
//           ]
//         },

//       ]
//     },
//     {
//       name: 'Insights', columns: [
//         {
//           title: { label: 'Insights', link: '/insights' },
//           items: [
//             { label: 'Success Stories', link: '/insights/success-stories' },
//             { label: 'Events', link: '/insights/events-and-webinars' }
//           ]
//         },
//         {
//           title: { label: '', link: '/security' },
//           items: [
//             { label: 'White Papers', link: '/insights/white-paper' },
//             { label: 'Customer Speak', link: '/insights/customer-speak' }
//           ]
//         },
//         {
//           title: { label: '', link: '/security' },
//           items: [
//             { label: 'Blogs', link: '/insights/blogs' },
//             { label: 'Podcast', link: '"/insights/podcast' }
//           ]
//         },
//          {
//           title: { label: '', link: '/security' },
//           items: [
//             { label: 'Webinars', link: '/insights/webinars' },
//             { label: '', link: '/endpoint-security' }
//           ]
//         },
//       ]
//     },
//     {
//       name: 'About Sify', columns: [
//         {
//           title: { label: 'About US', link: '/about-us' },
//           items: [
//             { label: 'Management Team', link: '/about-us/management-team' },
//             { label: 'Certifications', link: '/certifications' }
//           ]
//         },
//         {
//           title: { label: '', link: '/security' },
//           items: [
//             { label: 'JBRHosting News', link: '/about-us/news' },
//             { label: 'Events And Webinars', link: '/insights/events-and-webinars' }
//           ]
//         },
//         {
//           title: { label: '', link: '/security' },
//           items: [
//             { label: 'Awards And Recognition', link: '/awards' },
//             { label: '', link: '/endpoint-security' }
//           ]
//         },
//       ]
//     }
//   ];

//   // Header Style
//   const headerStyle = {
//     backgroundColor: '#050a1e',
//     color: 'white',
//     fontFamily: '"Source Sans Pro", sans-serif',
//     width: '100%',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     zIndex: 9999,
//   };

//   // Nav Item Style
//   const navItemStyle = (isActive) => ({
//     padding: '25px 15px',
//     fontSize: '18px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     color: isActive ? '#ccff00' : 'white',
//     borderBottom: isActive ? '3px solid #ccff00' : '3px solid transparent',
//     transition: '0.3s',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     position: 'relative'
//   });

//   return (
//     <>
//       {/* Spacer */}
//       <div style={{ height: '90px' }}></div>

//       <div style={headerStyle}>

//         {/* Top Bar */}
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             gap: '20px',
//             padding: '8px 80px',
//             fontSize: '11px',
//             borderBottom: '1px solid rgba(255,255,255,0.1)'
//           }}
//         >
//           {['Marketplace', 'Investors', 'Careers', 'Contact Us'].map((t) => (
//             <span
//               key={t}
//               style={{ cursor: 'pointer' }}
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Main Navbar */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             padding: '0 80px',
//             position: 'relative'
//           }}
//         >

//           {/* Logo */}
//           <div
//             style={{
//               fontSize: '32px',
//               fontWeight: 'bold',
//               color: '#ccff00',
//               marginRight: '50px'
//             }}
//           >
//             <a
//               href="/"
//               style={{
//                 color: '#ccff00',
//                 textDecoration: 'none'
//               }}
//             >
//               JPRHosting
//             </a>
//           </div>

//           {/* Menu */}
//           <ul
//             style={{
//               display: 'flex',
//               listStyle: 'none',
//               margin: 0,
//               padding: 0
//             }}
//           >
//             {menuData.map((menu, index) => (
//               <li
//                 key={index}
//                 onMouseEnter={() => setActiveMenu(index)}
//                 onMouseLeave={() => setActiveMenu(null)}
//                 style={navItemStyle(activeMenu === index)}
//               >
//                 {menu.name}

//                 {menu.columns.length > 0 && (
//                   <span style={{ fontSize: '10px' }}>▼</span>
//                 )}

//                 {/* Mega Menu */}
//                 {activeMenu === index && menu.columns.length > 0 && (
//                   <div
//                     style={{
//                       position: 'fixed',
//                       top: '86px',
//                       left: 0,
//                       width: '100%',
//                       backgroundColor: '#0a1029',
//                       padding: '40px 100px',
//                       display: 'grid',
//                       gridTemplateColumns: 'repeat(3, 1fr)',
//                       gap: '40px',
//                       boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
//                       borderTop: '1px solid rgba(255,255,255,0.1)',
//                       zIndex: 99999
//                     }}
//                   >
//                     {menu.columns.map((col, cIdx) => (
//                       <div key={cIdx}>

//                         {/* Column Title */}
//                         <h4
//                           style={{
//                             color: 'white',
//                             fontSize: '20px',
//                             marginBottom: '20px',
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '10px'
//                           }}
//                         >
//                           <span
//                             style={{
//                               width: '4px',
//                               height: '4px',
//                               background: '#ccff00'
//                             }}
//                           ></span>

//                           <a
//                             href={col.title.link}
//                             style={{
//                               color: 'white',
//                               textDecoration: 'none'
//                             }}
//                           >
//                             {col.title.label}
//                           </a>
//                         </h4>

//                         {/* Items */}
//                         <ul
//                           style={{
//                             listStyle: 'none',
//                             padding: 0,
//                             margin: 0
//                           }}
//                         >
//                           {col.items.map((item, iIdx) => (
//                             <li
//                               key={iIdx}
//                               style={{
//                                 marginBottom: '12px'
//                               }}
//                             >
//                               <a
//                                 href={item.link}
//                                 style={{
//                                   fontSize: '19px',
//                                   color: '#adb5bd',
//                                   textDecoration: 'none',
//                                   transition: '0.3s'
//                                 }}
//                                 onMouseOver={(e) => {
//                                   e.target.style.color = 'white';
//                                 }}
//                                 onMouseOut={(e) => {
//                                   e.target.style.color = '#adb5bd';
//                                 }}
//                               >
//                                 {item.label}
//                               </a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}

//                     {/* PDF Section */}
//                     {menu.pdf && (
//                       <div
//                         style={{
//                           gridColumn: '1 / -1',
//                           marginTop: '20px',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '15px',
//                           color: 'white'
//                         }}
//                       >
//                         <div
//                           style={{
//                             background: '#ccff00',
//                             color: 'black',
//                             padding: '5px 10px',
//                             borderRadius: '4px',
//                             fontWeight: 'bold',
//                             fontSize: '12px'
//                           }}
//                         >
//                           PDF
//                         </div>

//                         <span
//                           style={{
//                             fontSize: '14px',
//                             borderBottom: '1px solid #ccff00'
//                           }}
//                         >
//                           {menu.pdf}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* Search */}
//           <div
//             style={{
//               marginLeft: 'auto',
//               cursor: 'pointer',
//               fontSize: '18px'
//             }}
//           >
//             🔍
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;