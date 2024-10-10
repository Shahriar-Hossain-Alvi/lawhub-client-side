import { LiaTelegram } from "react-icons/lia";
import footerLogo from "../../assets/images/logo1.png"

const Footer = () => {
    return (
        <footer className="footer bg-[#111111] text-white p-10 space-x-14">
            <nav>
                <div className="flex items-center justify-between gap-2">
                    <img className="w-20 h-20" src={footerLogo} alt="footer logo" />
                    <h1 className=" font-extrabold text-4xl font-eb-garamond">Law Hub</h1>
                </div>
                <p className="text-lawHub-[#CFCFCF]">LawHub - Your trusted partner for comprehensive legal solutions. We're committed to guiding you through every step of your legal journey with expertise and care.</p>
            </nav>
            <nav className="text-[#CFCFCF]">
                <h6 className="text-2xl font-extrabold font-eb-garamond text-white">Useful Link</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Cases</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Contact Us</a>
            </nav>
            <nav className="text-[#CFCFCF]">
                <h6 className="text-2xl font-extrabold font-eb-garamond text-white">Contact Now</h6>
                <p>555 4th 5t NW, Washington <br />
                    DC 20530, United States</p>
                <p>+88 01750 000 000 <br />
                    +88 01750 000 000</p>
                <p>info@gmail.com <br />
                    info@gmail.com</p>
            </nav>

            <form>
                <h6 className="text-2xl font-extrabold font-eb-garamond text-white">Subscribe</h6>
                <fieldset className="form-control text-lawHub-secondary w-80">
                    <p className="mb-6 text-[#CFCFCF]">Subscribe for our latest & Articles. We Won't Give You Spam Mails
                    </p>
                    <div className="join">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="input input-bordered join-item" />
                        <button className="btn bg-lawHub-primary hover:bg-lawHub-heading hover:text-lawHub-primary text-white text-2xl join-item"><LiaTelegram /></button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;