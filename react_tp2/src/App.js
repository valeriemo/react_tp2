import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";

function App() {
    return (
        <div className="bg-gray-900 h-screen">
            <Nav />
            <Header title="Bienvenue" text="Votre bibliothéque cinématographique personnelle !"/>
            <Movies />
        </div>
    );
}

export default App;
