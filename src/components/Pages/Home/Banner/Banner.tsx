import bannerImage from "../../../../assets/images/Banner.png";

const Banner = () => {
    return (
        <div className='relative mb-28'>
            <div>
                <img className='w-full' src={bannerImage} alt="banner image" />
                <div className='w-full h-full bg-gradient-to-r from-[#111111FF] via-[#11111100] to-[#111111FF] absolute top-0 left-0'></div>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transform translate z-30 w-3/4'>
                <h2 className='text-white font-eb-garamond font-extrabold text-6xl capitalize'>Your Trusted Partner <br /> for Legal Solutions</h2>

                <p className='font-poppins text-[#E7E7E7] pt-6 pb-8'>We offer personalized legal advice to help you navigate complex situations with confidence</p>

                <div className='font-poppins'>
                    <input className='input input-bordered text-lawHub-heading input-lg mr-6' type="text" placeholder='Search your services' />
                    <button className='btn btn-lg bg-lawHub-primary text-white border-lawHub-primary hover:bg-lawHub-heading hover:border-lawHub-primary hover:text-lawHub-primary'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;