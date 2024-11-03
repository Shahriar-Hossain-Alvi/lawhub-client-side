import { LiaTelegram } from "react-icons/lia";
import footerLogo from "../../assets/images/logo1.png"

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white">
            <div className="mx-auto w-full">
                <div className="grid grid-cols-2 gap-8 px-2 py-6 md:py-12 lg:py-20 md:grid-cols-4">

                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <img className="w-20 h-20" src={footerLogo} alt="footer logo" />
                            <h1 className=" font-extrabold text-3xl font-eb-garamond">Law Hub</h1>
                        </div>

                        <p className="text-[#CFCFCF]">LawHub - Your trusted partner for comprehensive legal solutions. We're committed to guiding you through every step of your legal journey with expertise and care.</p>
                    </div>


                    <div className="mt-6">
                        <h2 className="mb-12 text-2xl font-eb-garamond font-extrabold">Useful Link</h2>

                        <ul className="text-[#CFCFCF]">
                            <li className="mb-4">
                                <a href="/" className="hover:text-lawHub-primary">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="/about" className="hover:text-lawHub-primary">About us</a>
                            </li>
                            <li className="mb-4">
                                <a href="/cases" className="hover:text-lawHub-primary">Cases</a>
                            </li>
                            <li className="mb-4">
                                <a href="/contact" className="hover:text-lawHub-primary">Contact Us</a>
                            </li>
                        </ul>
                    </div>


                    <div className="mt-6">
                        <h2 className="mb-12 font-eb-garamond text-2xl font-extrabold">Contact Now</h2>

                        <div className="space-y-4 text-[#CFCFCF]">
                            <p>555 4th 5t NW, Washington <br />
                                DC 20530, United States</p>
                            <p>+88 01750 000 000 <br />
                                +88 01750 000 000</p>
                            <p>info@gmail.com <br />
                                info@gmail.com</p>
                        </div>
                    </div>


                    <form className="mt-6">
                        <h6 className="text-2xl font-extrabold font-eb-garamond text-white mb-12">Subscribe</h6>

                        <p className="mb-6 text-[#CFCFCF]">Subscribe for our latest & Articles. We Won't Give You Spam Mails
                        </p>


                        <form className="mx-auto w-full relative">
                            <div className="w-full">
                                <input type="text" id="simple-search" className="text-[#A0A0A0] rounded-lg block w-full py-4 border-2  focus:outline-none focus:ring-0 focus:border-lawHub-primary border-lawHub-primary" placeholder="Email Address" required />
                            </div>

                            <button type="submit" className="absolute right-0 top-0 p-4 -ml-5 z-20 rounded-md 
                             border border-lawHub-primary bg-lawHub-primary hover:bg-lawHub-heading hover:text-lawHub-primary text-white text-[25px]">
                            <LiaTelegram />
                                <span className="sr-only">Search</span>
                            </button>
                        </form>

                    </form>
                </div>
            </div>
        </footer>

    );
};

export default Footer;