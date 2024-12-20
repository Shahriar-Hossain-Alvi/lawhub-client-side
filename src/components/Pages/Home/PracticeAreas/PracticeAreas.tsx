import SectionHeading from "../../../SmallComponents/SectionHeading/SectionHeading";
import { FaArrowRight } from "react-icons/fa6";
import { GiHandcuffs, GiPrisoner } from "react-icons/gi";
import { TbGavel } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { BsFileText, BsHeartbreak } from "react-icons/bs";
import { Link } from "react-router-dom";


const PracticeAreas = () => {
    return (
        <div className="mb-28">
            <SectionHeading heading="Our Expertise in Legal Solutions" description="We offer a wide range of legal services tailored to meet your specific needs, providing expert guidance and dedicated support to ensure the best possible outcome in every case." />

            <div className="grid md:grid-cols-2 lg:grid-cols-3">

                {/* Business law */}
                <div className="text-center p-10 border-b hover:bg-gradient-to-b from-[#F3F3F3FF] to-[#F3F3F300]">
                    <TbGavel className="text-7xl text-lawHub-primary mb-8 mx-auto -scale-x-90" />
                    <h1 className="font-eb-garamond text-3xl font-extrabold mb-6">Business Law</h1>
                    <p className="text-lawHub-secondary mb-8">Business Law encompasses a variety of legal practices that govern commercial transactions and business operations. Our expert attorneys provide guidance on contracts, compliance, intellectual property, and dispute resolution, ensuring your business thrives while adhering to legal standards.</p>

                    <Link to="#">
                        <button type="button" className="bg-lawHub-primary text-white text-2xl hover:bg-lawHub-heading hover:text-lawHub-primary rounded-full p-2.5 text-center inline-flex items-center">
                            <FaArrowRight />
                            <span className="sr-only">Icon description</span>
                        </button>
                    </Link>
                </div>


                {/* criminal law */}
                <div className="text-center p-10 border border-t-0 hover:bg-gradient-to-b from-[#F3F3F3FF] to-[#F3F3F300]">
                    <GiHandcuffs className="text-7xl text-lawHub-primary mb-8 mx-auto" />
                    <h1 className="font-eb-garamond text-3xl font-extrabold mb-6">Criminal Law</h1>
                    <p className="text-lawHub-secondary mb-8">Criminal Law encompasses legal representation for individuals accused of crimes, ranging from misdemeanors to serious felonies. Our experienced defense attorneys work diligently to protect your rights, crafting strong defense strategies and navigating the complexities of the criminal justice system to achieve the best possible outcomes.</p>

                    <Link to="#">
                        <button type="button" className="bg-lawHub-primary text-white text-2xl hover:bg-lawHub-heading hover:text-lawHub-primary rounded-full p-2.5 text-center inline-flex items-center">
                            <FaArrowRight />
                            <span className="sr-only">Icon description</span>
                        </button>
                    </Link>
                </div>


                {/* child support */}
                <div className="text-center p-10 border-b hover:bg-gradient-to-b from-[#F3F3F3FF] to-[#F3F3F300]">
                    <GiPrisoner className="text-7xl text-lawHub-primary mb-8 mx-auto" />
                    <h1 className="font-eb-garamond text-3xl font-extrabold mb-6">Child Support</h1>
                    <p className="text-lawHub-secondary mb-8">Child Support law focuses on ensuring the financial well-being of children after separation or divorce. We provide guidance in calculating support obligations, modifying agreements, and enforcing payments, advocating for the best interests of the child and ensuring fair contributions from both parents.</p>

                    <Link to="#">
                        <button type="button" className="bg-lawHub-primary text-white text-2xl hover:bg-lawHub-heading hover:text-lawHub-primary rounded-full p-2.5 text-center inline-flex items-center">
                            <FaArrowRight />
                            <span className="sr-only">Icon description</span>
                        </button>
                    </Link>
                </div>


                {/* Education Law */}
                <div className="text-center p-10 hover:bg-gradient-to-b from-[#F3F3F3FF] to-[#F3F3F300]">
                    <GoLaw className="text-7xl text-lawHub-primary mb-8 mx-auto" />
                    <h1 className="font-eb-garamond text-3xl font-extrabold mb-6">Education Law</h1>
                    <p className="text-lawHub-secondary mb-8">Education Law covers the legal rights and responsibilities of students, educators, and educational institutions. We assist with issues such as special education rights, discrimination, and policy compliance, ensuring that every student receives the quality education they deserve.</p>

                    <Link to="#">
                        <button type="button" className="bg-lawHub-primary text-white text-2xl hover:bg-lawHub-heading hover:text-lawHub-primary rounded-full p-2.5 text-center inline-flex items-center">
                            <FaArrowRight />
                            <span className="sr-only">Icon description</span>
                        </button>
                    </Link>
                </div>


                {/* Divorce Law */}
                <div className="text-center p-10 border-x hover:bg-gradient-to-b from-[#F3F3F3FF] to-[#F3F3F300]">
                    <BsHeartbreak className="text-7xl text-lawHub-primary mb-8 mx-auto" />
                    <h1 className="font-eb-garamond text-3xl font-extrabold mb-6">Divorce Law</h1>
                    <p className="text-lawHub-secondary mb-8">Divorce Law focuses on the legal dissolution of marriage, addressing matters such as asset division, alimony, and child custody. Our compassionate attorneys provide personalized support and strategies to navigate this challenging process, ensuring fair outcomes for all parties involved.</p>

                    <Link to="#">
                        <button type="button" className="bg-lawHub-primary text-white text-2xl hover:bg-lawHub-heading hover:text-lawHub-primary rounded-full p-2.5 text-center inline-flex items-center">
                            <FaArrowRight />
                            <span className="sr-only">Icon description</span>
                        </button>
                    </Link>
                </div>


                {/* Tax Law */}
                <div className="text-center p-10 hover:bg-gradient-to-b from-[#F3F3F3FF] to-[#F3F3F300]">
                    <BsFileText className="text-7xl text-lawHub-primary mb-8 mx-auto" />
                    <h1 className="font-eb-garamond text-3xl font-extrabold mb-6">Tax Law</h1>
                    <p className="text-lawHub-secondary mb-8">Tax Law involves the regulations governing taxation and financial reporting. Our knowledgeable attorneys offer expert advice on compliance, tax planning, and dispute resolution with tax authorities, helping individuals and businesses minimize liabilities and avoid legal pitfalls.</p>

                    <Link to="#">
                        <button type="button" className="bg-lawHub-primary text-white text-2xl hover:bg-lawHub-heading hover:text-lawHub-primary rounded-full p-2.5 text-center inline-flex items-center">
                            <FaArrowRight />
                            <span className="sr-only">Icon description</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PracticeAreas;