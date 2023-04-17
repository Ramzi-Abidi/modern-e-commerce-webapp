import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const { data } = await axios.get(
            "http://localhost:5000/api/v1/products",
        );
        console.log(data.data);

        setProducts(data.data);
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <h1> Latest product</h1>
            <Row>
                {products.length === 0 && <div> No products to show </div>}
                {products.map((product) => {
                    return (
                        <Col key={product._id} className="centeredCard">
                            <Product product={product} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default HomeScreen;
