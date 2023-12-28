import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-[#030027] p-6">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-[#F2F3D9] text-lg font-semibold">
                    LOGO
                </a>
                <a href="#" className="text-[#F2F3D9]">
                    À propos
                </a>
                {/* <NavLink className="text-white text-lg font-semibold" to="/"><img>Logo</img></NavLink>
        <NavLink class="text-white" to="/">Accueil</NavLink>
        <NavLink to="/a-rropos">À propos</NavLink> */}
            </div>
        </nav>
    );
};

export default Nav;
