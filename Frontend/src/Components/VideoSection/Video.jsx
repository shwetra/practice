import React from 'react';
import video from '../images/video1.mp4';
import banner1 from '../images/image.jpg';
import banner2 from '../images/image2.jpg';
import './videosection.css'; // Import the custom styles

const Video = () => {
  return (
    <div className="container-fluid h-100 p-0">
      <div className="row g-0 h-100 flex-column flex-md-row">
        {/* Left: Video */}
        <div className="col-12 col-md-6 video-wrapper">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-100 h-100 object-cover disable-click"
          />
        </div>

        {/* Right: Image banners */}
        <div className="col-12 col-md-6 d-flex flex-column h-100">
          <div className="flex-fill">
            <img src={banner1} alt="Banner 1" className="w-100 h-100 object-cover" />
          </div>
          <div className="flex-fill">
            <img src={banner2} alt="Banner 2" className="w-100 h-100 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
