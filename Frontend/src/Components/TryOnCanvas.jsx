// import React, { useRef, useEffect } from 'react';
// import * as faceapi from 'face-api.js';

// const TryOnCanvas = ({ userImage, selectedGoggle }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const loadModels = async () => {
//   await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
// await faceapi.nets.faceLandmark68Net.loadFromUri('/models');

//       console.log('✅ Models loaded');
//     };
//     loadModels();
//   }, []);

//   useEffect(() => {
//     const draw = async () => {
//       if (!userImage) return;

//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');

//       const img = new Image();
//       img.src = userImage;

//       img.onload = async () => {
//         const originalWidth = img.width;
//         const originalHeight = img.height;

//         // Set canvas to fixed size
//         const canvasWidth = 400;
//         const canvasHeight = 400;
//         canvas.width = canvasWidth;
//         canvas.height = canvasHeight;

//         // Draw scaled image
//         ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//         ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

//         // Detect face from original image
//         const detection = await faceapi
//           .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
//           .withFaceLandmarks();

//         if (!detection) {
//           alert('❌ Face not detected');
//           return;
//         }

//         console.log('✅ Face detected');

//         const scaleX = canvasWidth / originalWidth;
//         const scaleY = canvasHeight / originalHeight;

//         const leftEye = detection.landmarks.getLeftEye();
//         const rightEye = detection.landmarks.getRightEye();

//         const leftX = (leftEye[0].x + leftEye[3].x) / 2 * scaleX;
//         const rightX = (rightEye[0].x + rightEye[3].x) / 2 * scaleX;
//         const centerX = (leftX + rightX) / 2;

//         const leftY = (leftEye[0].y + leftEye[3].y) / 2 * scaleY;
//         const rightY = (rightEye[0].y + rightEye[3].y) / 2 * scaleY;
//         const centerY = (leftY + rightY) / 2;

//         const eyeDistance = Math.abs(rightX - leftX);

//         const goggleImg = new Image();
//         goggleImg.src = selectedGoggle;
//         goggleImg.onload = () => {
//           const goggleWidth = eyeDistance * 2.2;
//           const goggleHeight = eyeDistance * 1.2;

//           ctx.drawImage(
//             goggleImg,
//             centerX - goggleWidth / 2,
//             centerY - goggleHeight / 2,
//             goggleWidth,
//             goggleHeight
//           );
//         };
//       };
//     };

//     draw();
//   }, [userImage, selectedGoggle]);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ border: '1px solid #ccc', marginTop: '20px' }}
//     />
//   );
// };

// export default TryOnCanvas;

// import React, { useRef, useEffect } from 'react';
// import * as faceapi from 'face-api.js';

// const TryOnCanvas = ({ userImage, selectedGoggle }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const loadModels = async () => {
//       await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
//       await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
//       console.log('✅ Models loaded');
//     };
//     loadModels();
//   }, []);

//   useEffect(() => {
//     const draw = async () => {
//       if (!userImage) return;

//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext('2d');

//       const img = new Image();
//       img.crossOrigin = 'anonymous';
//       img.src = userImage;

//       img.onload = async () => {
//         const canvasWidth = 400;
//         const canvasHeight = 400;
//         canvas.width = canvasWidth;
//         canvas.height = canvasHeight;

//         // Draw the user image
//         ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//         ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

//         // Detect face landmarks
//         const detection = await faceapi
//           .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
//           .withFaceLandmarks();

//         if (!detection) {
//           alert('❌ Face not detected');
//           return;
//         }

//         console.log('✅ Face detected');

//         const resizedDetections = faceapi.resizeResults(detection, {
//           width: canvasWidth,
//           height: canvasHeight,
//         });

//         const leftEye = resizedDetections.landmarks.getLeftEye();
//         const rightEye = resizedDetections.landmarks.getRightEye();

//         const leftX = (leftEye[0].x + leftEye[3].x) / 2;
//         const rightX = (rightEye[0].x + rightEye[3].x) / 2;
//         const centerX = (leftX + rightX) / 2;

//         const leftY = (leftEye[0].y + leftEye[3].y) / 2;
//         const rightY = (rightEye[0].y + rightEye[3].y) / 2;
//         const centerY = (leftY + rightY) / 2;

//         const eyeDistance = Math.abs(rightX - leftX);

//         // 👉 Calculate face angle
//         const angle = Math.atan2(rightY - leftY, rightX - leftX); // in radians

//         const goggleImg = new Image();
//         goggleImg.crossOrigin = 'anonymous';
//         goggleImg.src = selectedGoggle;

//         goggleImg.onload = () => {
//           const goggleWidth = eyeDistance * 2.2;
//           const goggleHeight = eyeDistance * 1.2;

//           // 🔄 Rotate context around eye center
//           ctx.save();
//           ctx.translate(centerX, centerY);
//           ctx.rotate(angle); // tilt correction
//           ctx.drawImage(
//             goggleImg,
//             -goggleWidth / 2,
//             -goggleHeight / 2,
//             goggleWidth,
//             goggleHeight
//           );
//           ctx.restore();
//         };
//       };
//     };

//     draw();
//   }, [userImage, selectedGoggle]);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ border: '1px solid #ccc', marginTop: '20px' }}
//     />
//   );
// };

// export default TryOnCanvas;




import React, { useRef, useEffect } from 'react';
import * as faceapi from 'face-api.js';

const TryOnCanvas = ({ userImage, selectedGoggle }) => {
  const canvasRef = useRef(null);

  // Load models once
  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models')
      ]);
      console.log('✅ FaceAPI models loaded');
    };

    loadModels();
  }, []);

  // Main drawing logic
  useEffect(() => {
    const draw = async () => {
      if (!userImage) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = userImage;

      img.onload = async () => {
        const canvasWidth = window.innerWidth > 600 ? 400 : 300;
        const canvasHeight = canvasWidth;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

        // Detect face
        const detection = await faceapi
          .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks();

        if (!detection) {
          alert('❌ Face not detected');
          return;
        }

        console.log('✅ Face detected');

        const resized = faceapi.resizeResults(detection, {
          width: canvasWidth,
          height: canvasHeight
        });

        const landmarks = resized.landmarks;
        const leftEye = landmarks.getLeftEye();
        const rightEye = landmarks.getRightEye();

        // Calculate eye center and angle
        const leftX = (leftEye[0].x + leftEye[3].x) / 2;
        const rightX = (rightEye[0].x + rightEye[3].x) / 2;
        const leftY = (leftEye[0].y + leftEye[3].y) / 2;
        const rightY = (rightEye[0].y + rightEye[3].y) / 2;

        const centerX = (leftX + rightX) / 2;
        const centerY = (leftY + rightY) / 2;

        const eyeDistance = Math.abs(rightX - leftX);
        const angle = Math.atan2(rightY - leftY, rightX - leftX);

        // Optional: Estimate face shape
        const jaw = landmarks.getJawOutline();
        const jawWidth = Math.abs(jaw[0].x - jaw[16].x);
        const jawHeight = Math.abs(jaw[8].y - landmarks.getNose()[0].y);
        const ratio = jawWidth / jawHeight;

        let faceShape = 'Oval';
        if (ratio > 1.5) faceShape = 'Round';
        else if (ratio < 0.9) faceShape = 'Long';

        console.log(`🧠 Estimated Face Shape: ${faceShape}`);

        // Load and overlay goggle
        const goggleImg = new Image();
        goggleImg.crossOrigin = 'anonymous';
        goggleImg.src = selectedGoggle;

        goggleImg.onload = () => {
          const goggleWidth = eyeDistance * 2.4;
          const goggleHeight = eyeDistance * 1.4;

          ctx.save();
          ctx.translate(centerX, centerY + eyeDistance * 0.2); // shifted down slightly
          ctx.rotate(angle);
          ctx.drawImage(
            goggleImg,
            -goggleWidth / 2,
            -goggleHeight / 2,
            goggleWidth,
            goggleHeight
          );
          ctx.restore();


          // Optional: Draw face shape label
          ctx.font = '16px Arial';
          ctx.fillStyle = 'rgba(0,0,0,0.7)';
          ctx.fillText(`Face Shape: ${faceShape}`, 10, canvasHeight - 10);
        };
      };
    };

    draw();
  }, [userImage, selectedGoggle]);

  return (
    <div className="text-center">
      <canvas
        ref={canvasRef}
        style={{ border: '1px solid #ccc', marginTop: '20px', maxWidth: '100%' }}
      />
    </div>
  );
};

export default TryOnCanvas;
