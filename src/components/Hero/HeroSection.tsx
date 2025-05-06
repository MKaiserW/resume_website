import React from 'react';
import './HeroSection.css'; // We'll create this CSS file next

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = 'src/assets/20250505_201913.jpg',
  title = 'Welcome to My Website',
  subtitle = 'This background image takes up the full viewport height'
}) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {/* <div className="scroll-indicator">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5"></path>
          <path d="M7 7l5 5 5-5"></path>
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;