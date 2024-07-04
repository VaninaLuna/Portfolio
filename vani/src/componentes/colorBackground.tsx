// src/components/TwoColorBackground.tsx
import React, { ReactNode } from 'react';
import './../assets/css/ColorBackground.css'

interface ColorBckgroundProps {
  rightContent: ReactNode;
}

const ColorBckground: React.FC<ColorBckgroundProps> = ({ rightContent }) => {
  return (
    <div className='home-container'>
      <div className='left-side'></div>
      <div className="right-side">
        <div className="diagonal"></div>
        <div className="content">{rightContent}</div>
      </div>
    </div>
  );
};

export default ColorBckground;
