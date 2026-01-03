import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Avasar Arts | Professional Photography Services in Mumbai</title>
        <meta
          name="description"
          content="Avasar Arts offers professional wedding, portrait, and event photography services in Mumbai. Capturing life's precious moments with artistry and passion. Book your session today!"
        />
        <meta name="keywords" content="photography, wedding photography, portrait photography, event photography, Mumbai photographer, professional photographer, Avasar Arts" />
        <meta name="author" content="Avasar Arts" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avasararts.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://avasararts.com" />
        <meta property="og:title" content="Avasar Arts | Professional Photography Services" />
        <meta
          property="og:description"
          content="Capturing life's precious moments with artistry and passion. Wedding, portrait, and event photography in Mumbai."
        />
        <meta property="og:image" content="https://avasararts.com/og-image.jpg" />
        <meta property="og:site_name" content="Avasar Arts" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://avasararts.com" />
        <meta name="twitter:title" content="Avasar Arts | Professional Photography Services" />
        <meta
          name="twitter:description"
          content="Capturing life's precious moments with artistry and passion. Wedding, portrait, and event photography in Mumbai."
        />
        <meta name="twitter:image" content="https://avasararts.com/og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Avasar Arts",
            "image": "https://avasararts.com/og-image.jpg",
            "description": "Professional photography services in Mumbai specializing in weddings, portraits, and events.",
            "url": "https://avasararts.com",
            "telephone": "+91-98765-43210",
            "email": "hello@avasararts.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.0760,
              "longitude": 72.8777
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "19:00"
            },
            "sameAs": [
              "https://instagram.com/avasararts",
              "https://facebook.com/avasararts",
              "https://youtube.com/@AvasarArts"
            ],
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Photography Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wedding Photography"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Portrait Photography"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Event Photography"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <VideoSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
