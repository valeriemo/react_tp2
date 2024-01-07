import { Link } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
    return (
        <nav className="bg-gray-900 p-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-[#F2F3D9] text-lg font-semibold">
                    <Logo />
                </Link>
                <Link to="/films" className="text-[#F2F3D9] text-xl font-semibold hover:bg-[#e9295c] p-2">
                    Collection
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
