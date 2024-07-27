import React, { useRef, useState } from 'react';

const HorizontalScrollCards = () => {
  const scrollContainerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      setScrollAmount(scrollAmount - 200);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      setScrollAmount(scrollAmount + 200);
    }
  };

  return (
    <div className="scroll-container">
      <button className="pagination-button" onClick={scrollLeft}>←</button>
      <div className="cards-container" ref={scrollContainerRef}>
        <div className="card"><img src="\public\charcoal.webp" alt="" /></div>
        <div className="card"><img src="/public/De-Tan.webp" alt="" /></div>
        <div className="card"><img src="/public/Growth.webp" alt="" /></div>
        <div className="card"><img src="/public/Hair.webp" alt="" /></div>
        <div className="card"><img src="\public\Ice.webp" alt="" /></div>
        <div className="card"><img src="\public\Intimate_copy.webp" alt="" /></div>
        <div className="card"><img src="https://cdn.shopify.com/s/files/1/1707/3445/files/Grooming_kit_2_copy.webp?v=1719462232" alt="" /></div>
        <div className="card"><img src="/public/Trimmer_copy.webp" alt="" /></div>
        <div className="card"><img src="https://cdn.shopify.com/s/files/1/1707/3445/files/Body_Spray_copy_1.webp?v=1719462232bp" alt="" /></div>
        <div className="card"><img src="https://cdn.shopify.com/s/files/1/1707/3445/files/Hair_Care_copy.webp?v=1719462232" alt="" /></div>
      </div>
      <button className="pagination-button" onClick={scrollRight}>→</button>
    </div>
  );
};

export default HorizontalScrollCards;
