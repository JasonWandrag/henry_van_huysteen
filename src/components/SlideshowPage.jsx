import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, Play, Pause, Download, Maximize2, Minimize2 } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react'; // Added missing import for React

// Import all photos from assets
import photo1 from '../assets/WhatsApp Image 2025-07-28 at 7.26.47 PM (2).jpeg';
import photo2 from '../assets/WhatsApp Image 2025-07-28 at 7.26.48 PM.jpeg';
import photo3 from '../assets/WhatsApp Image 2025-07-28 at 7.26.49 PM.jpeg';
import photo4 from '../assets/WhatsApp Image 2025-07-28 at 7.12.02 PM.jpeg';
import photo5 from '../assets/WhatsApp Image 2025-07-28 at 7.11.55 PM.jpeg';
import photo6 from '../assets/WhatsApp Image 2025-07-28 at 7.11.51 PM (1).jpeg';
import photo7 from '../assets/WhatsApp Image 2025-07-28 at 7.11.51 PM.jpeg';
import photo8 from '../assets/WhatsApp Image 2025-07-28 at 7.11.50 PM (3).jpeg';
import photo9 from '../assets/WhatsApp Image 2025-07-28 at 7.11.50 PM (2).jpeg';
import photo10 from '../assets/WhatsApp Image 2025-07-28 at 7.11.50 PM (1).jpeg';
import photo11 from '../assets/WhatsApp Image 2025-07-28 at 7.11.50 PM.jpeg';
import photo12 from '../assets/WhatsApp Image 2025-07-28 at 7.11.49 PM (2).jpeg';
import photo13 from '../assets/WhatsApp Image 2025-07-28 at 7.11.49 PM (1).jpeg';
import photo14 from '../assets/WhatsApp Image 2025-07-28 at 7.11.49 PM.jpeg';
import photo15 from '../assets/WhatsApp Image 2025-07-28 at 7.11.48 PM (1).jpeg';
import photo16 from '../assets/WhatsApp Image 2025-07-28 at 7.11.48 PM.jpeg';
import photo17 from '../assets/WhatsApp Image 2025-07-28 at 7.11.47 PM (3).jpeg';
import photo18 from '../assets/WhatsApp Image 2025-07-28 at 7.11.47 PM (2).jpeg';
import photo19 from '../assets/WhatsApp Image 2025-07-28 at 7.11.47 PM (1).jpeg';
import photo20 from '../assets/WhatsApp Image 2025-07-28 at 7.11.47 PM.jpeg';
import photo21 from '../assets/WhatsApp Image 2025-07-28 at 7.11.46 PM (3).jpeg';
import photo22 from '../assets/WhatsApp Image 2025-07-28 at 7.11.46 PM (2).jpeg';
import photo23 from '../assets/WhatsApp Image 2025-07-28 at 7.11.46 PM (1).jpeg';
import photo24 from '../assets/WhatsApp Image 2025-07-28 at 7.11.46 PM.jpeg';
import photo25 from '../assets/WhatsApp Image 2025-07-28 at 7.11.45 PM (2).jpeg';
import photo26 from '../assets/WhatsApp Image 2025-07-28 at 7.11.45 PM (1).jpeg';
import photo27 from '../assets/WhatsApp Image 2025-07-28 at 7.11.45 PM.jpeg';
import photo28 from '../assets/WhatsApp Image 2025-07-28 at 7.11.44 PM (3).jpeg';
import photo29 from '../assets/WhatsApp Image 2025-07-28 at 7.11.44 PM (2).jpeg';
import photo30 from '../assets/WhatsApp Image 2025-07-28 at 7.11.44 PM (1).jpeg';
import photo31 from '../assets/WhatsApp Image 2025-07-28 at 7.11.44 PM.jpeg';
import photo32 from '../assets/WhatsApp Image 2025-07-28 at 7.11.43 PM (2).jpeg';
import photo33 from '../assets/WhatsApp Image 2025-07-28 at 7.11.43 PM (1).jpeg';
import photo34 from '../assets/WhatsApp Image 2025-07-28 at 7.11.43 PM.jpeg';
import photo35 from '../assets/WhatsApp Image 2025-07-28 at 7.13.46 PM (1).jpeg';
import photo36 from '../assets/WhatsApp Image 2025-07-28 at 7.13.46 PM.jpeg';
import photo37 from '../assets/WhatsApp Image 2025-07-28 at 7.13.45 PM (3).jpeg';
import photo38 from '../assets/WhatsApp Image 2025-07-28 at 7.13.45 PM (2).jpeg';
import photo39 from '../assets/WhatsApp Image 2025-07-28 at 7.13.45 PM (1).jpeg';
import photo40 from '../assets/WhatsApp Image 2025-07-28 at 7.13.45 PM.jpeg';
import photo41 from '../assets/WhatsApp Image 2025-07-28 at 7.13.44 PM (2).jpeg';
import photo42 from '../assets/WhatsApp Image 2025-07-28 at 7.13.44 PM (1).jpeg';
import photo43 from '../assets/WhatsApp Image 2025-07-28 at 7.13.44 PM.jpeg';
import photo44 from '../assets/WhatsApp Image 2025-07-28 at 7.13.43 PM.jpeg';
import photo45 from '../assets/WhatsApp Image 2025-07-28 at 7.26.49 PM (3).jpeg';
import photo46 from '../assets/WhatsApp Image 2025-07-28 at 7.26.49 PM (2).jpeg';
import photo47 from '../assets/WhatsApp Image 2025-07-28 at 7.26.49 PM (1).jpeg';
import photo48 from '../assets/WhatsApp Image 2025-07-28 at 7.26.48 PM (1).jpeg';
import photo49 from '../assets/WhatsApp Image 2025-07-28 at 7.26.47 PM (1).jpeg';
import photo50 from '../assets/WhatsApp Image 2025-07-28 at 7.26.47 PM.jpeg';
import photo51 from '../assets/WhatsApp Image 2025-07-28 at 7.26.46 PM (2).jpeg';
import photo52 from '../assets/WhatsApp Image 2025-07-28 at 7.26.46 PM (1).jpeg';
import photo53 from '../assets/WhatsApp Image 2025-07-28 at 7.26.46 PM.jpeg';
import photo54 from '../assets/WhatsApp Image 2025-07-28 at 7.26.45 PM (1).jpeg';
import photo55 from '../assets/WhatsApp Image 2025-07-28 at 7.26.45 PM.jpeg';

// Import new photos from the new folder
import newPhoto1 from '../assets/new/WhatsApp Image 2025-07-28 at 9.01.59 PM (3).jpeg';
import newPhoto2 from '../assets/new/WhatsApp Image 2025-07-28 at 9.01.59 PM (2).jpeg';
import newPhoto3 from '../assets/new/WhatsApp Image 2025-07-28 at 9.01.59 PM (1).jpeg';
import newPhoto4 from '../assets/new/WhatsApp Image 2025-07-28 at 9.01.59 PM.jpeg';
import newPhoto5 from '../assets/new/WhatsApp Image 2025-07-28 at 9.01.58 PM (2).jpeg';
import newPhoto6 from '../assets/new/WhatsApp Image 2025-07-28 at 9.01.58 PM (1).jpeg';
import newPhoto7 from '../assets/new/WhatsApp Image 2025-07-28 at 9.01.58 PM.jpeg';
import newPhoto8 from '../assets/new/WhatsApp Image 2025-07-28 at 9.01.57 PM (2).jpeg';
import newPhoto9 from '../assets/new/WhatsApp Image 2025-07-28 at 9.01.57 PM (1).jpeg';
import newPhoto10 from '../assets/new/WhatsApp Image 2025-07-28 at 9.01.57 PM.jpeg';

// Import photos from the wan folder
import wanPhoto1 from '../assets/wan/IMG-20250730-WA0015.jpg';
import wanPhoto2 from '../assets/wan/IMG-20250730-WA0014.jpg';
import wanPhoto3 from '../assets/wan/IMG-20250730-WA0013.jpg';
import wanPhoto4 from '../assets/wan/IMG-20250730-WA0012.jpg';
import wanPhoto5 from '../assets/wan/IMG-20250730-WA0011.jpg';
import wanPhoto6 from '../assets/wan/IMG-20250730-WA0010.jpg';
import wanPhoto7 from '../assets/wan/IMG-20250730-WA0009.jpg';
import wanPhoto8 from '../assets/wan/IMG-20250730-WA0007.jpg';

const SlideshowPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // All photos from assets folder (original + new)
  const photos = [
    { id: 1, src: photo1 },
    { id: 2, src: photo2 },
    { id: 3, src: photo3 },
    { id: 4, src: photo4 },
    { id: 5, src: photo5 },
    { id: 6, src: photo6 },
    { id: 7, src: photo7 },
    { id: 8, src: photo8 },
    { id: 9, src: photo9 },
    { id: 10, src: photo10 },
    { id: 11, src: photo11 },
    { id: 12, src: photo12 },
    { id: 13, src: photo13 },
    { id: 14, src: photo14 },
    { id: 15, src: photo15 },
    { id: 16, src: photo16 },
    { id: 17, src: photo17 },
    { id: 18, src: photo18 },
    { id: 19, src: photo19 },
    { id: 20, src: photo20 },
    { id: 21, src: photo21 },
    { id: 22, src: photo22 },
    { id: 23, src: photo23 },
    { id: 24, src: photo24 },
    { id: 25, src: photo25 },
    { id: 26, src: photo26 },
    { id: 27, src: photo27 },
    { id: 28, src: photo28 },
    { id: 29, src: photo29 },
    { id: 30, src: photo30 },
    { id: 31, src: photo31 },
    { id: 32, src: photo32 },
    { id: 33, src: photo33 },
    { id: 34, src: photo34 },
    { id: 35, src: photo35 },
    { id: 36, src: photo36 },
    { id: 37, src: photo37 },
    { id: 38, src: photo38 },
    { id: 39, src: photo39 },
    { id: 40, src: photo40 },
    { id: 41, src: photo41 },
    { id: 42, src: photo42 },
    { id: 43, src: photo43 },
    { id: 44, src: photo44 },
    { id: 45, src: photo45 },
    { id: 46, src: photo46 },
    { id: 47, src: photo47 },
    { id: 48, src: photo48 },
    { id: 49, src: photo49 },
    { id: 50, src: photo50 },
    { id: 51, src: photo51 },
    { id: 52, src: photo52 },
    { id: 53, src: photo53 },
    { id: 54, src: photo54 },
    { id: 55, src: photo55 },
    // New photos from the new folder
    { id: 56, src: newPhoto1 },
    { id: 57, src: newPhoto2 },
    { id: 58, src: newPhoto3 },
    { id: 59, src: newPhoto4 },
    { id: 60, src: newPhoto5 },
    { id: 61, src: newPhoto6 },
    { id: 62, src: newPhoto7 },
    { id: 63, src: newPhoto8 },
    { id: 64, src: newPhoto9 },
    { id: 65, src: newPhoto10 },
    // Photos from the wan folder
    { id: 66, src: wanPhoto1 },
    { id: 67, src: wanPhoto2 },
    { id: 68, src: wanPhoto3 },
    { id: 69, src: wanPhoto4 },
    { id: 70, src: wanPhoto5 },
    { id: 71, src: wanPhoto6 },
    { id: 72, src: wanPhoto7 },
    { id: 73, src: wanPhoto8 }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div className={`dot ${i === currentSlide ? 'active' : ''}`}></div>
    )
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = photos[currentSlide].src;
    link.download = `henry-van-huyssteen-${currentSlide + 1}.jpg`;
    link.click();
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Handle ESC key to exit fullscreen
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isFullscreen) {
      setIsFullscreen(false);
    }
  };

  // Add event listener for ESC key
  React.useEffect(() => {
    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isFullscreen]);

  return (
    <div className={`slideshow-page ${isFullscreen ? 'fullscreen' : ''}`}>
      {!isFullscreen && (
        <div className="slideshow-header">
          <h1>Photo Memories</h1>
          <p>Celebrating the life and memories of Henry van Huyssteen</p>
        </div>
      )}

      <div className="slideshow-container">
        <Slider {...sliderSettings} className="photo-slider">
          {photos.map((photo) => (
            <div key={photo.id} className="slide">
              <div className="slide-content">
                <img 
                  src={photo.src} 
                  alt={`Henry van Huyssteen - Photo ${photo.id}`} 
                  className={`slide-image ${isFullscreen ? 'fullscreen-image' : ''}`}
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="slideshow-controls">
          <div className="control-buttons">
            <button 
              className="control-btn" 
              onClick={togglePlayPause}
              title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            
            <button 
              className="control-btn" 
              onClick={downloadImage}
              title="Download current photo"
            >
              <Download size={24} />
            </button>

            <button 
              className="control-btn" 
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
            </button>
          </div>
          
          <div className="slide-counter">
            {currentSlide + 1} of {photos.length}
          </div>
        </div>
      </div>

      {!isFullscreen && (
        <div className="slideshow-info">
          <div className="info-content">
            <h3>Share Your Photos</h3>
            <p>
              If you have photos of Henry van Huyssteen that you'd like to share, 
              please contact the family. We'd love to add more memories to this collection.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideshowPage; 