import SectionHeading from "../../../SmallComponents/SectionHeading/SectionHeading";
import { IoIosAdd } from "react-icons/io";
import Lottie from 'react-lottie';
import FaqAnimation from "../../../../assets/Animations/faqAnimation.json"

const Faq = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: FaqAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="mb-28">
            <SectionHeading heading="Frequently Asked Any Questions" description="Find quick answers to common questions about our services, legal processes, and how we can assist you. This section helps clarify important details to guide you through your legal journey." />


            <div className="grid md:grid-cols-2 gap-10 md:gap-7 items-center">
                <div id="accordion-arrow-icon" data-accordion="open">

                    {/* accordion 1 */}
                    <h2 className="bg-[#F3F3F3]" id="accordion-arrow-icon-heading-1">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium gap-3" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
                            <span>What types of legal services do you offer?</span>
                            <IoIosAdd className="text-xl" />
                        </button>
                    </h2>
                    <div className="bg-[#F3F3F3] mb-8" id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
                        <div className="p-5">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">We provide a wide range of legal services, including business law, family law, criminal defense, and more. Our team is equipped to handle both personal and corporate legal matters</p>
                        </div>
                    </div>


                    {/* Accordion 2 */}
                    <h2 className="bg-[#F3F3F3] mt-8" id="accordion-arrow-icon-heading-2">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium gap-3" data-accordion-target="#accordion-arrow-icon-body-2" aria-expanded="false" aria-controls="accordion-arrow-icon-body-2">
                            <span>How do I schedule a consultation?</span>
                            <IoIosAdd className="text-xl" />
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-2" className="hidden bg-[#F3F3F3]" aria-labelledby="accordion-arrow-icon-heading-2">
                        <div className="p-5 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">You can schedule a consultation through our website by filling out the contact form or by calling our office directly. We will promptly get back to you to arrange a convenient time.</p>
                        </div>
                    </div>


                    {/* accordion 3 */}
                    <h2 id="accordion-arrow-icon-heading-3" className="mt-8 bg-[#F3F3F3]">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-gray-500 gap-3" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
                            <span>What should I bring to my first consultation?</span>
                            <IoIosAdd className="text-xl" />
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-3" className="hidden bg-[#F3F3F3]" aria-labelledby="accordion-arrow-icon-heading-3">
                        <div className="p-5 bg-[#F3F3F3]">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">It's helpful to bring any relevant documents, identification, and a list of questions or concerns you may have. This helps us provide you with the most accurate advice during your meeting.</p>
                        </div>
                    </div>


                    {/* accordion 4 */}
                    <h2 id="accordion-arrow-icon-heading-4" className="mt-8 bg-[#F3F3F3]">
                        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-gray-500 gap-3" data-accordion-target="#accordion-arrow-icon-body-4" aria-expanded="false" aria-controls="accordion-arrow-icon-body-4">
                            <span>How much do your services cost?</span>
                            <IoIosAdd className="text-xl" />
                        </button>
                    </h2>
                    <div id="accordion-arrow-icon-body-4" className="hidden bg-[#F3F3F3]" aria-labelledby="accordion-arrow-icon-heading-4">
                        <div className="p-5">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Our fees vary depending on the complexity of the case. During the initial consultation, we will discuss the cost and offer a clear outline of any potential expenses..</p>
                        </div>
                    </div>
                </div>


                {/* Faq Image */}
                <div>
                    <Lottie options={defaultOptions}
                        height={600}
                        width={400} />
                </div>
            </div>
        </div>
    );
};

export default Faq;