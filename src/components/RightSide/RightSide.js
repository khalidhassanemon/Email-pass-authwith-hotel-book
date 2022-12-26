import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle,FaYoutube,FaTwitter,FaWhatsapp } from 'react-icons/fa';
const RightSide = () => {
    return (
        <div>
            <ButtonGroup vertical>
            <Button className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
            <Button variant='outline-dark'><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div>
                <h1>Find Us on</h1>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube></ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter></ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp></ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightSide;