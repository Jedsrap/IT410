import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DonationDetail from "../component/donateDetail";
import DonationForm from "../component/donationForm";
import Header from "../component/header";
import List from "../component/list";

function Detail() {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <DonationDetail />
                </Col>
                <Col md={6}>
                    <DonationForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Detail;