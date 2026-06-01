import React from "react";

import SovereignAI from "./SovereignAI";
import TrustedPartner from "./TrustedPartner";
import ServiceOfferings from "./ServiceOfferings";
import WhySify from "./WhySify";
import IndustryRecognitions from "./IndustryRecognitions";
import GTMPartners from "./GTMPartners";
import CustomerStories from "./CustomerStories";
import GartnerInsights from "./GartnerInsights";
import Testimonials from "./Testimonials";
import HeroSlider from "../components/HeroSlider";

import SEO from "../components/SEO";

const Home = () => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "JPRHosting",
        "image": "https://jprhosting.in/logo192.png",
        "@id": "https://jprhosting.in",
        "url": "https://jprhosting.in",
        "telephone": "+91-7073010846",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Malviya Nagar Industrial Area",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "postalCode": "302017",
            "addressCountry": "IN"
        }
    };
    return (
        <>
            <SEO
                title="Best Web Hosting Company India | Cloud Hosting"
                description="JPRHosting provides cheap web hosting India, high-performance VPS hosting, and reliable dedicated server infrastructure built on LiteSpeed servers."
                keywords="web hosting India, cheap web hosting India, web hosting Jaipur, JPRHosting"
                url="https://jprhosting.in/"
                schemaData={localBusinessSchema}
            />

            <HeroSlider />
            <main>

                <SovereignAI />

                <TrustedPartner />
                <ServiceOfferings />
                <WhySify />
                <IndustryRecognitions />
                <GTMPartners />
                <CustomerStories />
                <GartnerInsights />
                <Testimonials />


                <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
                    {/* <p>Next Section Coming Soon...</p> */}
                </div>
            </main>

            {/* Footer yahan aayega */}
        </>
    );
};

export default Home;