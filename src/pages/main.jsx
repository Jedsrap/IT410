import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../component/header";
import List from "../component/list";

function Main() {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Header />
                </Col>
            </Row>
            <Row>
                <List />
            </Row>
        </Container>
    );
}

export default Main;