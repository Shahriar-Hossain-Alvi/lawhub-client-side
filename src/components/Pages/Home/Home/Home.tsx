import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Faq from "../FAQ/Faq";
import PracticeAreas from "../PracticeAreas/PracticeAreas";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner />
            <PracticeAreas />
            <Testimonial />
            <Faq />
            <Contact />
        </div>
    );
};

export default Home;