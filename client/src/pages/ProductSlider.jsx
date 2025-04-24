import React from 'react';
import image1 from '../assets/Image 40@2x.png'; 
import image2 from '../assets/pexels-pixabay-164455-1@2x.png'; 
const items = [
  { id: 1, src: image1 },
  { id: 2, src: image2 },
  { id: 3, src: image1 },
  { id: 4, src: image2 },
  { id: 5, src: image1 },
  { id: 6, src: image2 },
  { id: 7, src: image1 }
];

const ProductSlider = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-list">
        {items.map((item) => (
          <div key={item.id} className="scroll-item">
            <img src={item.src} alt={`Product ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
