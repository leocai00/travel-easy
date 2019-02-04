import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { Col, Row } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import './Homepage.css';
import './background.jpg';

class Homepage extends Component {
    render() {
        return (
            <div className='container'>
                <h2>TravelEasy</h2>
                <MediaQuery maxDeviceWidth={768}>
                    <Row>
                        <Col xs="12">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum gravida neque a porta. Nullam fringilla, turpis id dapibus varius, orci odio venenatis purus, id sodales nibh odio quis purus. Sed diam velit, vestibulum sit amet consectetur a, faucibus non purus. Sed quis tincidunt elit. Suspendisse egestas molestie lorem, sit amet fringilla lacus consequat id. Mauris semper ullamcorper diam vitae scelerisque. Nulla dapibus eget metus id porttitor.
                            </p>
                        </Col>
                        <Col xs="12">
                            <img src={require('./background.jpg')} alt='background' />
                        </Col>
                    </Row>
                </MediaQuery>
                <MediaQuery minDeviceWidth={769}>
                    <Row>
                        <Col xs="6">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum gravida neque a porta. Nullam fringilla, turpis id dapibus varius, orci odio venenatis purus, id sodales nibh odio quis purus. Sed diam velit, vestibulum sit amet consectetur a, faucibus non purus. Sed quis tincidunt elit. Suspendisse egestas molestie lorem, sit amet fringilla lacus consequat id. Mauris semper ullamcorper diam vitae scelerisque. Nulla dapibus eget metus id porttitor.
                            </p>
                        </Col>
                        <Col xs="6">
                            <img src={require('./background.jpg')} alt='background' />
                        </Col>
                    </Row>
                </MediaQuery>
                <Row>
                    <Col sm="4">
                        <Card body>
                            <CardTitle>Lorem Ipsum</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet<br />Lorem ipsum dolor sit amet</CardText>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body>
                            <CardTitle>Lorem Ipsum</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet<br />Lorem ipsum dolor sit amet</CardText>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body>
                            <CardTitle>Lorem Ipsum</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet<br />Lorem ipsum dolor sit amet</CardText>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Homepage;