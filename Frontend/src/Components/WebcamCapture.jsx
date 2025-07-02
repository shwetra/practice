// src/components/WebcamCapture.js
import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    console.log('📸 Captured image:', imageSrc);

    if (imageSrc) {
      onCapture(imageSrc); // updates userImage in TryGoggles
    } else {
      alert('Failed to capture image');
    }
  };

  return (
    <div>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/png"
        width={400}
        height={400}
        videoConstraints={{ facingMode: 'user' }}
      />
      <button onClick={capture}>Capture</button>
    </div>
  );
};

export default WebcamCapture;
