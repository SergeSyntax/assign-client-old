import React from 'react';
import teamWorkVideo from 'assets/videos/Team-Work.mp4';
import './FeaturesBackground.scss';

const FeaturesBackground = () => {
  return (
    <div className="features__background">
      <video className="features__background__video" autoPlay loop muted>
        <source src={teamWorkVideo} />
      </video>
    </div>
  );
};

export default FeaturesBackground;
