import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Contact from "./screens/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
