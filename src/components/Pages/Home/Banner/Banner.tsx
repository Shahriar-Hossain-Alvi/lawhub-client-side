import bannerImage from "../../../../assets/images/Banner.png";

const Banner = () => {
    return (
        <div className='relative mb-28 z-40'>
            <img className='w-full h-96 md:h-full' src={bannerImage} alt="banner image" />
            <div className='w-full h-full md:h-full bg-gradient-to-r from-[#111111FF] via-[#11111100] to-[#111111FF] absolute top-0 left-0'></div>


            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4'>
                <div className="text-center">
                    <h2 className='text-white font-eb-garamond font-extrabold text-2xl md:text-6xl capitalize'>Your Trusted Partner <br /> for Legal Solutions</h2>

                    <p className='font-poppins text-[#E7E7E7] pt-6 pb-8'>We offer personalized legal advice to help you navigate complex situations with confidence</p>
                </div>

                <form className="flex items-center max-w-lg mx-auto">
                    <div className="relative w-full">
                        <input type="text" id="simple-search" className="text-lawHub-secondary  rounded-lg focus:ring-lawHub-primary focus:border-lawHub-primary block w-full pl-5 py-4" placeholder="Search your services" required />
                    </div>
                    <button type="submit" className="py-3 px-10 ms-2 text-xl text-white font-medium bg-lawHub-primary rounded-lg border border-lawHub-primary hover:bg-lawHub-heading focus:ring-4 focus:outline-none focus:ring-lawHub-primary">
                        Search
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Banner;