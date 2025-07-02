import React, { useEffect, useRef, useState } from 'react';
import './TestimonialSlider.css';

const testimonials = [
  {
    quote: "This is the best no-code platform I've ever seen",
    name: 'Alyssa Morris',
    position: 'Product Manager, Intel',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2261&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote: 'The perfect organizer and team builder',
    name: 'Randall Howard',
    position: 'UX Designer, Netflix',
    image: 'https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote: 'Flexible product with near endless possibilities',
    name: 'Adam Worrell',
    position: 'Data Analyst, Spotify',
    image: 'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    quote: 'Great collaboration and UI flow',
    name: 'Lucy Carter',
    position: 'Frontend Developer, Microsoft',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2261&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
];

function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef();

  const maxIndex = Math.ceil(testimonials.length / 2) - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (maxIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <div className='main'>

<h3 className='h3tag mt-5'>Explore Our Client’s Success Stories</h3>
<p className='ptag'>Read The Reviews To Know Why We Are the Prime Choice Of Industry Leaders Everywhere!</p>


      <ul className="slider" ref={sliderRef}>
        {testimonials.map((item, i) => (
         <li
         key={i}
         className={`item ${
           window.innerWidth >= 768
             ? i === index * 2 || i === index * 2 + 1
               ? 'animation'
               : ''
             : i === index
             ? 'animation'
             : ''
         }`}
       >
            <div className="testimonial">
              <p>"{item.quote}"</p>
              <p>{item.name}</p>
              <p>{item.position}</p>
            </div>
            <img className="image" src={item.image} alt={item.name} />
          </li>
        ))}
      </ul>
      <nav>
        {[...Array(maxIndex + 1)].map((_, i) => (
          <button
            key={i}
            className={`btnnn ${i === index ? 'expand' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </nav>
    </div>
  );
}

export default TestimonialSlider;
