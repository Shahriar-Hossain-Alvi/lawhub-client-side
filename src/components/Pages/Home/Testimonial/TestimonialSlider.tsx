import { TestimonialType } from "./Testimonial";

interface TestimonialSliderPropType {
    testimonial: TestimonialType
}

const TestimonialSlider = ({ testimonial }: TestimonialSliderPropType) => {


    return (
        <div className="text-center w-2/3 mx-auto mb-6">
            <img className="h-7 w-7 rounded-full border mx-auto" src={testimonial.clientsImage} alt={testimonial.clientsName} />
            <h3 className="text-2xl font-extrabold font-eb-garamond text-white">{testimonial.clientsName}</h3>
            <p className="text-white mb-8">{testimonial.clientsProfession}</p>
            <p className="text-[#F3F3F3]">{testimonial.review}</p>
        </div>
    );
};

export default TestimonialSlider;