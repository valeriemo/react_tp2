import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
   
    return (
        <BrowserRouter>
        <div className="bg-gray-900">
        <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/films" element={<Movies />} />
            </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    );
}

export default App;
