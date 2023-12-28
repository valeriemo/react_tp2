import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Nav />
            <Header title="Bienvenue" text="Votre bibliothéque cinématographique personnelle !"/>
        </div>
    );
}

export default App;
