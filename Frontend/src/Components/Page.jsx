// src/pages/TryGoggles.js
import React, { useState, useEffect } from 'react';
import WebcamCapture from './WebcamCapture';
import TryOnCanvas from './TryOnCanvas';
import img from "../assets/charsma1.png"
import img1 from "../assets/chasma2.png"


const TryGoggles = () => {
  const [userImage, setUserImage] = useState(null);
  const [selectedGoggle, setSelectedGoggle] = useState();

  const goggles = [
    img1,
    img,
  ];

  useEffect(() => {
    console.log('📥 userImage updated:', userImage);
  }, [userImage]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Try Virtual Chashma</h2>

      {!userImage ? (
        <WebcamCapture onCapture={setUserImage} />
      ) : (
        <>
          <TryOnCanvas userImage={userImage} selectedGoggle={selectedGoggle} />
          <button onClick={() => setUserImage(null)} style={{ marginTop: '10px' }}>
            Retake Photo
          </button>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {goggles.map((g, idx) => (
              <img
                key={idx}
                src={g}
                alt={`goggle-${idx}`}
                width={70}
                style={{
                  margin: '0 10px',
                  border: selectedGoggle === g ? '2px solid green' : '1px solid gray',
                  cursor: 'pointer',
                  borderRadius: '6px',
                }}
                onClick={() => setSelectedGoggle(g)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TryGoggles;
