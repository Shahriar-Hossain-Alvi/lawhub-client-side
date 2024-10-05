import { Link, NavLink } from "react-router-dom";
import navbarLogo from "../../assets/images/logo1.png";
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/"><span>Home</span> <FaAngleRight /></NavLink></li>
        <li><NavLink to="/service"><span>Service</span> <FaAngleRight /></NavLink></li>
        <li><NavLink to="/cases"><span>Cases</span> <FaAngleRight /></NavLink></li>
        <li><NavLink to="/blog"><span>Blog</span> <FaAngleRight /></NavLink></li>
        <li><NavLink to="/contact"><span>Contact Us</span> <FaAngleRight /></NavLink></li>
    </>

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul id="menu-sm"
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="flex rounded-full items-center justify-between gap-1 pr-3">
                    <img className="w-16 h-16 bg-black rounded-full" src={navbarLogo} alt="navbar logo" />
                    <span className="font-bold text-3xl font-eb-garamond">Law Hub</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul id="menu-lg" className="menu menu-horizontal px-1 text-[#707070] font-poppins">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-lawHub-primary text-white border-lawHub-primary font-poppins text-lg font-medium hover:text-lawHub-primary hover:bg-lawHub-heading">Free Consultation</a>
            </div>
        </div>
    );
};

export default Navbar;