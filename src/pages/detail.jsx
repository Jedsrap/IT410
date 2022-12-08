import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DonationDetail from "../component/donateDetail";
import DonationForm from "../component/donationForm";
import Header from "../component/header";

function Detail() {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <DonationDetail />
                </Col>
                <Col md={12}>
                    <DonationForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Detail;