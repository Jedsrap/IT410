import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../component/header";
import List from "../component/list";
import DonateCarousel from "../component/donateCarousel";

function Main() {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <DonateCarousel />
                </Col>
            </Row>
            <Row className="content-section">
                <List />
            </Row>
        </Container>
    );
}

export default Main;