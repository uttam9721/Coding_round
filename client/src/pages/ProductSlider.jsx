// import React from "react";
// // import "./SimpleSlider.css";

// const SimpleSlider = () => {
//   return (
//     <div className="slider-wrapper">
//       <div className="slider-container">
//         <div className="slider-track">
//           <div className="slide">
//             <img
//               src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
//               alt="Slide 1"
//             />
//             <p className="caption">Modern Wall Decor Framed Painting</p>
//             <p className="price">$199.99</p>
//           </div>
//           <div className="slide">
//             <img
//               src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
//               alt="Slide 2"
//             />
//             <p className="caption">Modern Wall Decor Framed Painting</p>
//             <p className="price">$199.99</p>
//           </div>
//           <div className="slide">
//             <img
//               src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
//               alt="Slide 3"
//             />
//             <p className="caption">Modern Wall Decor Framed Painting</p>
//             <p className="price">$199.99</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SimpleSlider;

import React from "react";
import image from '../assets/Image 40.png';  // Filter icon
// import image from '../assets/Image 39.png';  // Filter icon

const products = [
  {
    id: 1,
    image,
    title: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    rating: 5
  },
  {
    id: 2,
    image,
    title: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    rating: 5
  },
  {
    id: 3,
    image,
    title: "Modern Wall Decor Framed Painting",
    price: "$199.99",
    rating: 4
  }
];

const ProductSlider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <p className="title">{product.title}</p>
            <p className="price">{product.price}</p>
            <p className="stars">
              {"⭐️".repeat(product.rating)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
