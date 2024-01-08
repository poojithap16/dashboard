
import React from 'react';
import styled from 'styled-components';
import { cardStyles } from "./Reusable";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { GoPerson } from "react-icons/go";
import { TiCloudStorageOutline } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";


function Basic() {
  return (
    <Section>
      <CardContainer>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Basic</Card.Title>
            <p>$89.9/mo</p>
            <h5>$9.99/mo</h5>
            <Button variant="warning">Get Started <FaArrowRightLong /></Button>{' '}
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><GoPerson />  what you get</ListGroup.Item>
            <ListGroup.Item><TiCloudStorageOutline />  upto 25 users</ListGroup.Item>
            <ListGroup.Item><HiOutlineMail />  Email Support</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Explore Features <IoMdArrowDropright /></Card.Link>
          </Card.Body>
        </Card>
      </CardContainer>

      <CardContainer>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Medium</Card.Title>
            <p>$89.9/mo</p>
            <h5>$9.99/mo</h5>
            <Button variant="danger">Get Started <FaArrowRightLong /></Button>{' '}      
                </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><GoPerson />  what you get</ListGroup.Item>
            <ListGroup.Item><TiCloudStorageOutline />  upto 25 users</ListGroup.Item>
            <ListGroup.Item><HiOutlineMail />  Email Support</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Explore Features <IoMdArrowDropright /></Card.Link>
          </Card.Body>
        </Card>
      </CardContainer>

      <CardContainer>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Standard</Card.Title>
            <p>$89.9/mo</p>
            <h5>$9.99/mo</h5>
            <Button variant="info">Get Started <FaArrowRightLong /></Button>{' '}          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><GoPerson />  what you get</ListGroup.Item>
            <ListGroup.Item><TiCloudStorageOutline />  upto 25 users</ListGroup.Item>
            <ListGroup.Item><HiOutlineMail />  Email Support</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Explore Features <IoMdArrowDropright /></Card.Link>
          </Card.Body>
        </Card>
      </CardContainer>
      <div col-6>
    </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh; /* Adjust height as needed */
`;

const CardContainer = styled.div`
  ${cardStyles}
  margin-bottom: 20px; /* Space between card and bottom */
`;

const RowContainer = styled.div`
  flex: 1;
  margin: 10px;
  /* Additional styles for rows as needed */
`;export default Basic;

