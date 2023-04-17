import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/cartScreen";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Container>
                        <Routes>
                            <Route path="/" exact element={<HomeScreen />} />
                            <Route
                                path="/product/:id"
                                element={<ProductScreen />}
                            />
                            <Route path="/cart" element={<CartScreen />} />
                        </Routes>
                    </Container>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
