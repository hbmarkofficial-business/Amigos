import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseursalon Aachen | Amigos</title>
        <meta
          name="description"
          content="Besuche unseren Premium Friseursalon Aachen Amigos für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Amigos, Friseursalon, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Aachen"
        />
        <link rel="canonical" href="https://viphaircut.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Amigos | Premium Friseursalon Aachen" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman im Friseursalon Aachen."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viphaircut.de" />
        <meta property="og:image" content="https://viphaircut.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amigos | Premium Friseursalon Aachen" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://viphaircut.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Amigos",
            "image": "https://viphaircut.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Peterstraße 40",
              "addressLocality": "Aachen",
              "postalCode": "52062",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.7766",
              "longitude": "6.0834"
            },
            "url": "https://viphaircut.de",
            "telephone": "+49 241 95783920",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/amigos",
              "https://www.instagram.com/amigos"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

