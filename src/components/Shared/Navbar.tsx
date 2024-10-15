import logo from "../../assets/images/logo3.png";
import { useEffect } from 'react';
import { Collapse } from 'flowbite';
import type { CollapseOptions, CollapseInterface } from 'flowbite';
import { MdContactPhone, MdOutlineDesignServices, MdOutlineMenuOpen } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { FaBlog } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoBriefcaseSharp } from "react-icons/io5";

const Navbar = () => {
    useEffect(() => {
        // Get the target element (the navbar menu)
        const $targetEl: HTMLElement | null = document.getElementById('navbar-cta');

        // Get the trigger element (the button)
        const $triggerEl: HTMLElement | null = document.querySelector('[data-collapse-toggle="navbar-cta"]');

        let collapse: CollapseInterface | undefined;

        if ($targetEl && $triggerEl) {
            // Collapse options (optional)
            const options: CollapseOptions = {
                onCollapse: () => console.log('Navbar has been collapsed'),
                onExpand: () => console.log('Navbar has been expanded'),
                onToggle: () => console.log('Navbar has been toggled'),
            };

            // Initialize the collapse functionality
            collapse = new Collapse($targetEl, $triggerEl, options);
        }

        // Cleanup function to avoid memory leaks
        return () => {
            if (collapse) {
                collapse = undefined;
            }
        };
    }, []);


    return (
        <nav className="bg-white">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto py-1">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-16 w-16" alt="Flowbite Logo" />
                    <span className="text-4xl font-extrabold text-lawHub-heading font-eb-garamond">Law Hub</span>
                </Link>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-lawHub-primary hover:bg-lawHub-heading focus:ring-4 focus:outline-none focus:ring-lawHub-primary font-semibold rounded-lg text-sm md:text-lg px-4 py-2">Free Consultation</button>


                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <MdOutlineMenuOpen className="text-2xl text-lawHub-heading" />
                    </button>
                </div>


                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 md:p-0 text-white bg-lawHub-primary md:bg-transparent">
                            <FaHome className="inline" /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="block py-2 px-3 md:p-0 text-white bg-lawHub-primary md:bg-transparent">
                            <MdOutlineDesignServices className="inline" /> Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cases" className="block py-2 px-3 md:p-0 text-white bg-lawHub-primary md:bg-transparent">
                            <IoBriefcaseSharp className="inline" /> Cases
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="block py-2 px-3 md:p-0 text-white bg-lawHub-primary md:bg-transparent">
                            <FaBlog className="inline" /> Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="block py-2 px-3 md:p-0 text-white bg-lawHub-primary md:bg-transparent">
                            <MdContactPhone className="inline" /> Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;