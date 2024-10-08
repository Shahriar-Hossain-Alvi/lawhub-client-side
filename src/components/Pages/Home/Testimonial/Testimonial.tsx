import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../SmallComponents/SectionHeading/SectionHeading";
import axios from "axios";
import LoadingSpinner from "../../../SmallComponents/LoadingSpinner/LoadingSpinner";
import TestimonialSlider from "./TestimonialSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import testimonialBackgroundImage from "../../../../assets/images/Testimonial.png"



export interface TestimonialType {
    id: string
    clientsImage: string
    clientsName: string
    clientsProfession: string
    review: string
}

type AllTestimonialType = TestimonialType[];

const Testimonial = () => {

    // slider function
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots: React.ReactNode) => (
            <div>
                <ul className="mx-auto" > {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <div className="h-2 border-black border border-x-2 bg-white rounded-3xl px-3">
                {/* {i+1} */}
            </div>
        )
    };


    // data fetching function
    const { data: AllTestimonial = [], isLoading, isError, error } = useQuery<AllTestimonialType>({
        queryKey: ["AllTestimonial"],
        queryFn: async () => {
            const res = await axios.get<AllTestimonialType>("./testimonial.json");
            return res.data;
        }
    })

    if (isLoading) {
        <LoadingSpinner />
    }

    if (isError) {
        <span className="text-red-500">{error.message}</span>
        console.log(error);
    }

    return (
        <div className="mb-28">
            <SectionHeading heading="Client Testimonials" description="Our clients experiences matter to us. In this section, you'll find real stories and feedback from those we've had the privilege to serve, showcasing our commitment to providing effective legal solutions and compassionate support throughout their legal journeys" />

            <div className="relative w-full">
                <img className='w-full' src={testimonialBackgroundImage} alt="testimonial image" />
                <div className='w-full h-full bg-[#111111CC] absolute top-0 left-0'></div>

                <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
                    <div className="slider-container w-3/4 mx-auto">
                        <Slider {...settings}>
                            {
                                AllTestimonial.map(testimonial => <TestimonialSlider key={testimonial.id} testimonial={testimonial} />)
                            }
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;