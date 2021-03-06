import React from 'react';

import './index.css';
import { Image } from '../../types';

interface Props {
  images?: Image[];
}

export const Gallery: React.FC<Props> = ({ images }) => {
  if (images === undefined || images.length < 1) {
    return null;
  }

  return (
    <div className="Gallery">
      {images.map(({ id, src, title }) => (
        <div key={id}>
          <img src={src} alt={title} />
          <p className="Gallery-caption">{title}</p>
        </div>
      ))}
    </div>
  );
};
