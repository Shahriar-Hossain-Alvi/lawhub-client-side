import { CiClock2, CiLocationOn } from 'react-icons/ci';
import SectionHeading from '../../../SmallComponents/SectionHeading/SectionHeading';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='mb-28'>
            <SectionHeading heading='Contact With Us' description="Have any questions or need assistance? Reach out to our team! We're here to provide guidance and support. Contact us through the form below, and we'll respond to your inquiries promptly." />


            <div className='grid grid-cols-2 gap-7'>

                <div className='grid grid-cols-2'>
                    <div className="bg-[#F3F3F3] text-center py-10 border-r border-b border-[#CFCFCF]">
                        <CiLocationOn className='mb-4 mx-auto text-lawHub-primary w-10 h-10' />
                        <h1 className='font-eb-garamond text-2xl text-lawHub-heading font-extrabold mb-4'>Address</h1>
                        <p className='text-lawHub-secondary'>A108 Adam Street, <br />
                            New York, NY 535022</p>
                    </div>

                    <div className="bg-[#F3F3F3] text-center py-10 border-b border-[#CFCFCF]">
                        <IoCallOutline className='mb-4 mx-auto text-lawHub-primary w-10 h-10' />
                        <h1 className='font-eb-garamond text-2xl text-lawHub-heading font-extrabold mb-4'>Call Us</h1>
                        <p className='text-lawHub-secondary'>+88 01750 00 00 00 <br />
                            +88 01750 00 00 00</p>
                    </div>



                    <div className="bg-[#F3F3F3] text-center py-10 border-r border-[#CFCFCF]">
                        <MdOutlineMail className='mb-4 mx-auto text-lawHub-primary w-10 h-10' />
                        <h1 className='font-eb-garamond text-2xl text-lawHub-heading font-extrabold mb-4'>Email Us</h1>
                        <p className='text-lawHub-secondary'>info@gmail.com <br />
                            info@gmail.com</p>
                    </div>


                    <div className="bg-[#F3F3F3] text-center py-10">
                        <CiClock2 className='mb-4 mx-auto text-lawHub-primary w-10 h-10' />
                        <h1 className='font-eb-garamond text-2xl text-lawHub-heading font-extrabold mb-4'>Working Hours</h1>
                        <p className='text-lawHub-secondary'>inMon-Fri: 9AM to 5PM <br />
                            Sunday: 9AM to 1 PM</p>
                    </div>
                </div>





                <div className='flex items-center'>
                    <form className="w-full space-y-7">
                        <div className="form-control">
                            <input type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <input type="email" placeholder="Your email" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" required />
                        </div>

                        <div className='form-control'>
                            <textarea
                                placeholder="Your Message"
                                className="textarea textarea-bordered textarea-lg w-full"></textarea>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn bg-lawHub-primary text-white border-lawHub-primary hover:bg-lawHub-heading hover:text-lawHub-primary hover:border-lawHub-primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;