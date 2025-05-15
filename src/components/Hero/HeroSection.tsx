import React from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = 'src/assets/20250505_201913.jpg',
  title = 'From Circuit to Web Design',
}) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default HeroSection;