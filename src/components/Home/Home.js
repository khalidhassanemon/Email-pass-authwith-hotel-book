import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Images from '../Images/banner-4.jpg';
import Images2 from '../Images/banner-3.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import Leftside from '../LeftSide/Leftside';
import RightSide from '../RightSide/RightSide';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="2">
                        <Leftside></Leftside>
                    </Col>
                    <Col lg="7">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Images}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Images2}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <p>The Burj Al Arab(Arabic: برج العرب) is a hotel in Dubai, United Arab Emirates. It is the fourth largest hotel in the world. It is very expensive to stay at the Burj Al Arab. It is known as the world's only 7 star hotel. On the top of the Burj Al-Arab there is a helipad which is  sometimes used as a tennis court for high paying guests. The hotel was built by South African construction contractor Murray & Roberts. The hotel cost $650 million to build.</p>
                    </Col>
                    <Col lg="3">
                        <RightSide></RightSide>
                    </Col>
                </Row>
                  
            </Container>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;