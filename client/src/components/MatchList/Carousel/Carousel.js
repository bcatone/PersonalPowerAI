import React, { useState } from 'react';
import './Carousel.css';

const items = [
  { id: 1, content: '1', pos: -2 },
  { id: 2, content: '2', pos: -1 },
  { id: 3, content: '3', pos: 0 },
  { id: 4, content: '4', pos: 1 },
  { id: 5, content: '5', pos: 2 }
];

const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState(items);
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemClick = (clickedPos, index) => {
    setActiveIndex(index);

    setCarouselItems(prevItems => {
      return prevItems.map(item => {
        const itemPos = item.pos;
        return {
          ...item,
          pos: getNewPos(itemPos, clickedPos)
        };
      });
    });
  };

  const getNewPos = (current, clickedPos) => {
    const diff = clickedPos;
    return current - diff;
  };

  return (
    <div className="carousel">
      <ul className="carousel__list">
        {carouselItems.map((item, index) => (
          <li
            key={item.id}
            className={`carousel__item ${index === activeIndex ? 'active' : ''}`}
            data-pos={item.pos}
            onClick={() => handleItemClick(item.pos, index)}
          >
            {item.content}
            {index === activeIndex && (
              <div className="buttons">
                <button className="reject-button">REJECT</button>
                <button className="connect-button ">CONNECT</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;

// import React, { useState } from 'react';
// import './Carousel.css';

// const items = [
//   { id: 1, content: '1', pos: -2 },
//   { id: 2, content: '2', pos: -1 },
//   { id: 3, content: '3', pos: 0 },
//   { id: 4, content: '4', pos: 1 },
//   { id: 5, content: '5', pos: 2 }
// ];

// const Carousel = () => {
//   const [carouselItems, setCarouselItems] = useState(items);

//   const handleItemClick = clickedPos => {
//     const newActivePos = 0; // The clicked item becomes the new active item (centered).

//     setCarouselItems(prevItems => {
//       return prevItems.map(item => {
//         const itemPos = item.pos;
//         return {
//           ...item,
//           pos: getNewPos(itemPos, newActivePos, clickedPos)
//         };
//       });
//     });
//   };

//   const getNewPos = (current, newActive, clickedPos) => {
//     const diff = clickedPos - newActive;
//     return current - diff;
//   };

//   return (
//     <div className="carousel">
//       <ul className="carousel__list">
//         {carouselItems.map(item => (
//           <li
//             key={item.id}
//             className={`carousel__item`}
//             data-pos={item.pos}
//             onClick={() => handleItemClick(item.pos)}
//           >
//             {item.content}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Carousel;
