
interface SectionHeadingType {
    heading: string
    description: string
}

const SectionHeading = ({ heading, description }: SectionHeadingType) => {
    return (
        <div className="mx-auto text-center w-3/4 mb-16">
            <h1 className="text-lawHub-heading font-eb-garamond font-extrabold text-4xl mb-6">{heading}</h1>
            <p className="font-poppins text-lawHub-secondary">{description}</p>
        </div>
    );
};

export default SectionHeading;