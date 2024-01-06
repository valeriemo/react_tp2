import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-gray-900 p-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-[#F2F3D9] text-lg font-semibold">
                    LOGO
                </Link>
                <Link to="/films" className="text-[#F2F3D9]">
                    Les films
                </Link>
                {/* <NavLink className="text-white text-lg font-semibold" to="/"><img>Logo</img></NavLink>
        <NavLink class="text-white" to="/">Accueil</NavLink>
        <NavLink to="/a-rropos">À propos</NavLink> */}
            </div>
        </nav>
    );
};

export default Nav;
