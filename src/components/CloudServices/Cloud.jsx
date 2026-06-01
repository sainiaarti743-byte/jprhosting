import React from "react";
import Cloudslider from "./Cloudslider";
import CloudPriorities from "./CloudPriorities";
import IDCChallengesSection from "./IDCChallengesSection";
import VideoGallerySection from "./VideoGallerySection";
import TrustedPartner from "../../page/TrustedPartner";
import Servicecloud from "./Servicecloud";
import WhySify from "../../page/WhySify";
import GTMPartnercloud from "./GTMPartnercloud";
import CustomerStories from "../../page/CustomerStories";
import GartnerInsights from "../../page/GartnerInsights";
import TestimonialsSlider from "./TestimonialsSlider";
import FAQSection from "./FAQSection";

import SEO from "../SEO";

const Cloud = () => {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "JPRHosting Enterprise Cloud Services",
        "provider": { "@type": "LocalBusiness", "name": "JPRHosting" },
        "description": "High-availability enterprise public, private, and hybrid cloud management models across India."
    };
    return (
        <>
       <SEO 
        title="Enterprise Managed Cloud Services India"
        description="Scale your IT architecture with JPRHosting secure Cloud Services. Public, private, hybrid cloud setup with automated deployment options."
        keywords="cloud services India, enterprise cloud computing, managed infrastructure"
        url="https://jprhosting.in/cloudservices"
      />
            <Cloudslider />
            <main>
                <CloudPriorities />
                <IDCChallengesSection />
                <VideoGallerySection />
                <TrustedPartner />
                <Servicecloud />
                <WhySify />
                <GTMPartnercloud />
                <CustomerStories />
                <GartnerInsights />
                <TestimonialsSlider />
                <FAQSection />


            </main>

        </>
    )
};

export default Cloud;