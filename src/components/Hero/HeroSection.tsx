import React from 'react';
import './HeroSection.css';

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
    </section>
  );
};

export default HeroSection;