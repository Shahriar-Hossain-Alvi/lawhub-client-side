import SectionHeading from "../../../SmallComponents/SectionHeading/SectionHeading";
import faqImage from "../../../../assets/images/FaqImage.png"

const Faq = () => {


    return (
        <div>
            <SectionHeading heading="Frequently Asked Any Questions" description="Find quick answers to common questions about our services, legal processes, and how we can assist you. This section helps clarify important details to guide you through your legal journey." />


            <div className="grid md:grid-cols-2 gap-10 md:gap-7 items-center">
                <div className="flex flex-col gap-7">
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-2xl font-eb-garamond text-lawHub-heading font-extrabold">What types of legal services do you offer?</div>
                        <div className="collapse-content text-lawHub-secondary">
                            <p>We provide a wide range of legal services, including business law, family law, criminal defense, and more. Our team is equipped to handle both personal and corporate legal matters.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl font-eb-garamond text-lawHub-heading font-extrabold">How do I schedule a consultation?</div>
                        <div className="collapse-content text-lawHub-secondary">
                            <p>You can schedule a consultation through our website by filling out the contact form or by calling our office directly. We will promptly get back to you to arrange a convenient time.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl font-eb-garamond text-lawHub-heading font-extrabold">What should I bring to my first consultation?</div>
                        <div className="collapse-content text-lawHub-secondary">
                            <p>It's helpful to bring any relevant documents, identification, and a list of questions or concerns you may have. This helps us provide you with the most accurate advice during your meeting.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-2xl font-eb-garamond text-lawHub-heading font-extrabold">How much do your services cost?</div>
                        <div className="collapse-content text-lawHub-secondary">
                            <p>Our fees vary depending on the complexity of the case. During the initial consultation, we will discuss the cost and offer a clear outline of any potential expenses.</p>
                        </div>
                    </div>
                </div>


                <div>
                    <img className="w-full" src={faqImage} alt="Faq Image" />
                </div>
            </div>
        </div>
    );
};

export default Faq;