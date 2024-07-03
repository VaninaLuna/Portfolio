// src/components/TwoColorBackground.tsx
import React, { ReactNode } from 'react';
import './../assets/css/ColorBackground.css'

interface ColorBckgroundProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

const ColorBckground: React.FC<ColorBckgroundProps> = ({ leftContent, rightContent }) => {
  return (
    <div className='home-container'>
      <div className='left-side'>
        <div className='content'>{leftContent}</div>
      </div>
      <div className='right-side'>
        <div className='content'>{rightContent}</div>
      </div>
    </div>
  );
};

export default ColorBckground;
