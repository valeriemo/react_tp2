import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-gray-900 p-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-[#F2F3D9] text-lg font-semibold">
                    LOGO
                </Link>
                <Link to="/films" className="text-[#F2F3D9] text-lg font-semibold hover:bg-[#e9295c] p-2">
                    Les films
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
