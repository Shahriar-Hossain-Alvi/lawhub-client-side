import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;