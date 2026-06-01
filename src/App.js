import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './page/Home';
import About from './page/About';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HeroSlider from './components/HeroSlider';
import StickySidebar from './components/StickySidebar'
import Cloud from './components/CloudServices/Cloud';
import CloudAi from './components/AiServices/CloudAi';
import PrivateHosted from './components/privatcloud/PrivateHosted';
import ManageCloud from './components/manage/ManageCloud';
import SapGrid from './components/sapgrid/SapGrid';
import DesktopCloud from './components/sapgrid/DesktopCloud';
import BusinessService from './components/sapgrid/BusinessService';
import KubernetesService from './components/sapgrid/KubernetesService';
import AdvisoryMigration from './components/sapgrid/AdvisoryMigration';
import HyperscaleServices from './components/HyperscalePartner/HyperscaleServices';
import AwsCloudServices from './components/HyperscalePartner/AwsCloudServices';
import AzureServices from './components/HyperscalePartner/AzureServices';
import GoogleCloudServices from './components/HyperscalePartner/GoogleCloudServices';
import OracleServices from './components/HyperscalePartner/OracleServices';
import CdnServices from './components/CDN/CdnServices';
import AkamiServices from './components/CDN/AkamiServices';
import AwsCloudFront from './components/CDN/AwsCloudFront';
import AppModernization from './components/DigitalServices/AppModernization/AppModernization';
import DigitalServices from './components/DigitalServices/DigitalServices';
import Kubernetes from './components/DigitalServices/AppModernization/Kubernetes';
import Devsecops from './components/DigitalServices/AppModernization/Devsecops';
import SiteReliability from './components/DigitalServices/AppModernization/SiteReliability';
import EnterpriseApplication from './components/DigitalServices/Enterprise/EnterpriseApplication';
import OracleEnterprise from './components/DigitalServices/Enterprise/OracleEnterprise';
import AzureEnterprise from './components/DigitalServices/Enterprise/AzureEnterprise';
import InfinitfsoEnterprise from './components/DigitalServices/Enterprise/InfinitfsoEnterprise';
import Digitalxr from './components/DigitalServices/DigitalXr/Digitalxr';
import ImmersiveExperience from './components/DigitalServices/DigitalXr/ImmersiveExperience';
import DigitalLearning from './components/DigitalServices/DigitalXr/DigitalLearning';
import NetworkServices from './components/NetworkServices/NetworkServices';
import EnterpriseConnectivity from './components/NetworkServices/EnterpriseConnectivity';
import ManagedNetwork from './components/NetworkServices/ManagedNetwork';
import ManagedNoc from './components/NetworkServices/ManagedNoc';
import NetworkSecurity from './components/NetworkServices/NetworkSecurity';
import NetworkTransformation from './components/NetworkServices/NetworkTransformation';
import CloudReady from './components/NetworkServices/CloudReady';
import EdgeReady from './components/NetworkServices/EdgeReady';
import Gcc from './page/Gcc';
import IntergrationServices from './components/Intergration/IntergrationServices';
import DatacenterIntegration from './components/Intergration/DatacenterIntegration';
import DigitalTrust from './components/Intergration/DigitalTrust';
import NetworkIntegration from './components/Intergration/NetworkIntegration';
import Hybridit from './components/Intergration/HybridIt';
import SecurityServices from './components/Security/SecurityServices';
import CloudSecurity from './components/Security/CloudSecurity';
import DataSecurity from './components/Security/DataSecurity';
import Vulnerability from './components/Security/Vulnerability';
import HostSecurity from './components/Security/HostSecurity';
import ManagedDetecation from './components/Security/ManagedDetecation';
import Alliance from './components/Partners/Alliance';
import ChannlPartner from './components/Partners/ChannlPartner';
import Insights from './components/Insights/Insights';
import SuccessStories from './components/Insights/SuccessStories';
import AboutUs from './components/Aboutus/AboutUs';
import Certifications from './components/Aboutus/Certifications';
import News from './components/Aboutus/News';
import Awards from './components/Aboutus/Awards';
import DataCenter from './components/DataCenter/DataCenter';
import ColocationServices from './components/DataCenter/ColocationServices';
import BuiltTo from './components/DataCenter/BuiltTo';
import GreenDatacenter from './components/DataCenter/GreenDatacenter';
import DatacenterInterconnect from './components/DataCenter/DatacenterInterconnect';
import Mumbai from './components/DataCenter/Mumbai';
import Noida from './components/DataCenter/Noida';
import Chennai from './components/DataCenter/Chennai';
import Banglor from './components/DataCenter/Banglor';
import Hydarbad from './components/DataCenter/Hydarbad';
import Kolkata from './components/DataCenter/Kolkata';
import Events from './components/Insights/Events';
import WhaitePapers from './components/Insights/WhaitePapers';
import Customer from './components/Insights/Customer';
import Blogs from './components/Insights/Blogs';
import { Podcast } from 'lucide-react';
import Webiners from './components/Insights/Webiners';
import ManagementTeam from './components/Aboutus/ManagementTeam';
import Eventsand from './components/Aboutus/Eventsand';
import Marketplace from './components/main/Marketplace';
import Investors from './components/main/Investors';
import Careers from './components/main/Careers';
import Contact from './components/main/Contact';


function App() {
  return (
    <BrowserRouter>
      <Header />


      <StickySidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/investors" element={<Investors/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/contact" element={<Contact/>} />


        {/* cloudservices********************** */}
        <Route path="/cloudservices" element={<Cloud />} />
        {/* sify-cloudinfinit-services */}
        <Route path="/cloudservices/JPRHosting-cloudinfinit-services" element={<CloudAi />} />
        <Route path="/cloudservices/JPRHosting-cloudinfinit-services/hosted-private-cloud" element={<PrivateHosted />} />
        <Route path="/cloudservices/JPRHosting-cloudinfinit-services/managed-public-cloud" element={<ManageCloud />} />
        <Route path="/cloudservices/JPRHosting-cloudinfinit-services/smart-sap-grids" element={<SapGrid />} />
        <Route path="/cloudservices/JPRHosting-cloudinfinit-services/Desktop-as-a-Service" element={<DesktopCloud />} />
        <Route path="/cloudservices/JPRHosting-cloudinfinit-services/business-resiliency-as-a-service" element={<BusinessService />} />
        <Route path="/cloudservices/JPRHosting-cloudinfinit-services/kubernetes-as-a-service" element={<KubernetesService />} />
        <Route path="/cloudservices/advisory-and-migration-services" element={<AdvisoryMigration />} />

        {/* HyperscaleServices */}
        <Route path="/cloudservices/hyperscale-partner-cloud-services" element={<HyperscaleServices />} />
        <Route path="/cloudservices/hyperscale-partner-cloud-services/aws-cloud-services" element={<AwsCloudServices />} />
        <Route path="/cloudservices/hyperscale-partner-cloud-services/azure" element={<AzureServices />} />
        <Route path="/cloudservices/hyperscale-partner-cloud-services/google" element={<GoogleCloudServices />} />
        <Route path="/cloudservices/hyperscale-partner-cloud-services/oracle" element={<OracleServices />} />

        {/* cdn-services */}

        <Route path="/cloudservices/cdn-services" element={<CdnServices />} />
        <Route path="/cloudservices/cdn-services/akamai" element={<AkamiServices />} />
        <Route path="/cloudservices/cdn-services/aws-cloudfront" element={<AwsCloudFront />} />


        {/* digital-services*********************** */}

        <Route path="/digital-services" element={<DigitalServices />} />
        {/* digital-services/app-modernization */}
        <Route path="/digital-services/app-modernization" element={<AppModernization />} />
        <Route path="/digital-services/app-modernization/kubernetes" element={<Kubernetes />} />
        <Route path="/digital-services/app-modernization/devsecops" element={<Devsecops/>} />
        <Route path="/digital-services/app-modernization/site-reliability-engineering" element={<SiteReliability />} />

        <Route path="/digital-services/infinitai-ml" element={<AwsCloudFront />} />
        <Route path="/digital-services/infinitai-ml/infinitot" element={<AwsCloudFront />} />
        <Route path="/digital-services/digital-assessment" element={<AwsCloudFront />} />


        {/* digital-services/enterprise-application-services */}
        <Route path="/digital-services/enterprise-application-services" element={<EnterpriseApplication />} />

        <Route path="/digital-services/enterprise-application-services/azure" element={<AzureEnterprise/>} />
        <Route path="/digital-services/enterprise-application-services/oracle" element={<OracleEnterprise />} />
        <Route path="/digital-services/infinitfso" element={<InfinitfsoEnterprise />} />

        <Route path="/digital-services/distribution-management-solution" element={<AwsCloudFront />} />

        {/* digital-services/digital-xr/ */}
        <Route path="/digital-services/digital-xr" element={<Digitalxr />} />
        <Route path="/digital-services/digital-xr/immersive-experience" element={<ImmersiveExperience />} />
        <Route path="/digital-services/digital-xr/digital-learning" element={<DigitalLearning />} />

        <Route path="/digital-services/digital-assets-management" element={<AwsCloudFront />} />

        {/* data-center */}
        <Route path="/data-center" element={<DataCenter/>} />

        <Route path="/data-center/colocation-services" element={<ColocationServices/>} />
        <Route path="/data-center/managed-hosting" element={<BuiltTo />} />
        <Route path="/data-center/cloud-services" element={<GreenDatacenter/>} />
        <Route path="/data-center/disaster-recovery" element={<DatacenterInterconnect />} />

        <Route path="/data-center/network-services" element={<Mumbai/>} />
        <Route path="/data-center/security-services" element={<Noida/>} />

        <Route path="/data-center/reliability" element={<Chennai/>} />
        <Route path="/data-center/scalability" element={<Banglor/>} />
        <Route path="/data-center/security" element={<Hydarbad/>} />
        <Route path="/data-center/cost-effective" element={<Kolkata/>} />




        {/* network-services/ */}

        <Route path="/network-services/" element={<NetworkServices/>} />
        <Route path="/network-services/enterprise-network-connectivity" element={<EnterpriseConnectivity/>} />

        <Route path="/network-services/managed-network-services" element={<ManagedNetwork />} />
        <Route path="/network-services/managed-network-services/managed-noc-services" element={<ManagedNoc/>} />
        <Route path="/network-services/managed-network-services/network-security-services" element={<NetworkSecurity />} />

        <Route path="/network-services/network-transformation-services" element={<NetworkTransformation/>} />
        <Route path="/network-services/network-transformation-services/cloud-ready" element={<CloudReady/>} />
        <Route path="/network-services/network-transformation-services/edge-ready" element={<EdgeReady/>} />
     

        {/* GCC */}
        <Route path="/global-capability-centers" element={<Gcc/>} />

        {/* integration-services/ */}
        <Route path="/integration-services" element={<IntergrationServices/>} />
        <Route path="/integration-services/data-center-integration-services" element={<DatacenterIntegration/>} />
        <Route path="/integration-services/digital-trust-and-authentication-services" element={<DigitalTrust />} />
        <Route path="/integration-services/network-integration-services" element={<NetworkIntegration/>} />
        <Route path="/integration-services/hybrid-it-integration-services" element={<Hybridit/>} />

        {/* Security */}
        <Route path="/security-services" element={<SecurityServices/>} />
        <Route path="/security-services/cloud-security" element={<CloudSecurity/>} />
        <Route path="/security-services/data-security" element={<DataSecurity />} />
        <Route path="/security-services/network-security" element={<NetworkSecurity/>} />
        <Route path="/security-services/vulnerability-assessment-penetration-testing" element={<Vulnerability/>} />
        <Route path="/security-services/host-security" element={<HostSecurity />} />
        <Route path="/security-services/managed-detection-response" element={<ManagedDetecation/>} />


        {/* Partners */}
        <Route path="/alliance-partners" element={<Alliance/>} />
        <Route path="/channel-partners" element={<ChannlPartner/>} />
       
       {/* Insights */}
       <Route path="/insights" element={<Insights />} />
       <Route path="/insights/success-stories" element={<SuccessStories/>} />
       <Route path="/insights/events-and-webinars" element={<Events/>} />
       <Route path="/insights/white-papers" element={<WhaitePapers/>} />
       <Route path="/insights/customer-speak" element={<Customer/>} />
       <Route path="/insights/blogs" element={<Blogs/>} />
       <Route path="/insights/podcast" element={<Podcast/>} />
       <Route path="/insights/webinars" element={<Webiners/>} />
       {/* <Route path="/channel-partners" element={<AwsCloudFront />} /> */}

       {/* About Sify */}
       <Route path="/about-us" element={<AboutUs/>} />
       <Route path="/about-us/management-team" element={<ManagementTeam/>} />
       <Route path="/certifications" element={<Certifications/>} />
       <Route path="/about-us/news" element={<News/>} />
       <Route path="/insights/events-and-webinars" element={<Eventsand />} />
       <Route path="/awards" element={<Awards />} />
















      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
