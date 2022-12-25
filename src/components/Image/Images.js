import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Images1 from '../Images/banner.jpg';
import Images2 from '../Images/banner-2.jpg';
const Images = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Images1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Images2}
                        alt="First slide"
                    />
                    <Carousel.Caption className='-mt-100'>
                        <h3>Al Burj Hotel</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Images;