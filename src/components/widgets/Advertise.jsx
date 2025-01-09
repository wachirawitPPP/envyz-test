import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getAdImages = async () => {
    try {
      const res = await axios.get('https://66602e275425580055b2a55d.mockapi.io/img');
      if (res) {
        setImages(res.data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    getAdImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-5">
      <section className="relative overflow-hidden rounded-lg w-full max-w-4xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 sm:p-3 md:p-4"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 sm:p-3 md:p-4"
        >
          &#8594;
        </button>
      </section>
    </div>
  );
};

export default Slider;
