import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import data from "../utils/data.json";

function List() {
    return (
        <>
            {
                data.map(items =>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>{items.name}</Card.Title>
                                <Card.Text>
                                    {items.description}
                                </Card.Text>
                                <Link to={`/detail/${items.id}`}>
                                    <Button variant="primary">see more</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
        </>
    );
}

export default List;