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
                        <Card>
                            <Card.Img variant="top" src={`/pic/${items.image}`} />
                            <Card.Body>
                                <Card.Title>{items.name}</Card.Title>
                                <Card.Text>
                                    {items.intro}
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