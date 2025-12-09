import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Update page title and meta description based on route
    const hash = location.hash;
    
    let title = "Lasha Consultancy | HR, Real Estate, Tourism & AI Services in Dubai, UAE";
    let description = "Lasha Consultancy offers premium HR solutions, real estate services, tourism experiences, and AI automation in Dubai. Expert consulting for businesses in UAE.";
    
    switch (hash) {
      case '#services':
        title = "Our Services | Lasha Consultancy Dubai";
        description = "Comprehensive HR, Real Estate, Tourism & AI Automation services in Dubai. Expert consulting solutions tailored for your business growth in UAE.";
        break;
      case '#about':
        title = "About Us | Lasha Consultancy Dubai";
        description = "Learn about Lasha Consultancy - Dubai's premier consulting firm offering HR, real estate, tourism, and AI automation solutions across UAE.";
        break;
      case '#mission':
        title = "Our Mission | Lasha Consultancy Dubai";
        description = "Discover our mission to redefine professional services in Dubai through HR excellence, real estate intelligence, tourism experiences, and AI automation.";
        break;
      case '#contact':
        title = "Contact Us | Lasha Consultancy Dubai";
        description = "Get in touch with Lasha Consultancy for expert HR, real estate, tourism, and AI automation services in Dubai. Call +971 506244352 or email us today.";
        break;
      default:
        break;
    }
    
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
  }, [location]);

  return null;
};

export default SEO;
