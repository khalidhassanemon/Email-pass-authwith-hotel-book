import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Images from '../Images/banner-4.jpg';
import Images2 from '../Images/banner-3.jpg';
const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-80"
                        src={Images}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-80"
                        src={Images2}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;