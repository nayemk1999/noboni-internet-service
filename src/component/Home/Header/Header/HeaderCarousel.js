import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const HeaderCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel style={{height: "400px"}} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/TqYJgFp/river-Clean.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/SvFHKqc/newBooks.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/5Y2VgW5/study-Group.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default HeaderCarousel;
