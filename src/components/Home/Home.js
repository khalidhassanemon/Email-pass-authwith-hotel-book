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
                                    alt="second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <p className='text-justify'>Who doesn’t look at travel photos on Instagram and fantasize about visiting the most beautiful country in the world? But what defines beauty? A new study from the website money.co.uk aims to rank the 50 most beautiful countries in the world by analyzing the amount of natural wonders in each location, from coral reefs and tropical rainforests to volcanoes, glaciers and more.

                            “While beauty is ultimately subjective, it’s clear that these countries have a lot to offer visitors, whether you prefer adventuring in the mountains or relaxing by the coast,” says Sal Haqqi, personal finance editor at money.co.uk.

                            Coming in at the top of the list as the most beautiful place on earth is Indonesia, which has a natural beauty score of 7.77 out of 10. Indonesia is home to more than 17,000 islands. “And just off the shores of these islands, you’ll find over 31,000 square miles of coral reef, teeming with life, much of which can be explored from the popular province of Bali,” says Haqqi.Massive glaciers, staggering mountains, plains dotted with wild animals: Our planet sure is incredible. In fact, when looking at the most beautiful places in the world, it can feel impossible to decide where to visit next. The islands of Southeast Asia? The deserts of the Middle East? How about the countless travel-worthy sites right here in the United States?

                            While pinpointing all of Mother Nature’s greatest hits could take a lifetime, we think these 51 staggering landscapes and awe-inspiring wonders—from Antarctica to Zimbabwe—need to move to the very top of your travel list. Whether you’re looking for beaches, forests, or national parks, you’re sure to find you new favorite destination below. </p>
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