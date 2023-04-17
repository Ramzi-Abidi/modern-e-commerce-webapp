import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import Rating from "../components/Rating";

const ProductScreen = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    console.log(id);
    const getProduct = async () => {
        const { data } = await axios.get(
            `http://localhost:5000/api/v1/products/${id}`,
        );
        console.log(data);
        setProduct(data);
    };
    useEffect(() => {
        getProduct();
    }, []);

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                go back
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2> {product.name} </h2>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews}`}
                            />
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                description: ${product.description}
                            </ListGroup.Item>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price :</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status :</Col>
                                    <Col>
                                        {product.countInStock > 0
                                            ? "In Stock"
                                            : "Out Of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    className="btn-block"
                                    type="button"
                                    disabled={product.countInstock === 0}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;
