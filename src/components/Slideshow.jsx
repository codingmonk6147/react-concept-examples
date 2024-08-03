import React, { useState } from 'react';

const slides = [
    { title: 'Slide 1', url: 'image1.jpg' },
    { title: 'Slide 2', url: 'image2.jpg' },
    { title: 'Slide 3', url: 'image3.jpg' }
];

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div>
            <button onClick={prevSlide}>Left</button>
            <div>
                <img src={slides[currentIndex].url} alt={slides[currentIndex].title} />
                <h2>{slides[currentIndex].title}</h2>
            </div>
            <button onClick={nextSlide}>Right</button>
        </div>
    );
}

export default Slideshow;
