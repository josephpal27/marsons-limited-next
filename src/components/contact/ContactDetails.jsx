import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import ContactForm from './ContactForm';

const contactData = [
    {
        id: 1,
        title: "Call Us",
        items: [
            { value: "+91 8335881284", link: "tel:8335881284" },
            { value: "+91 9007004222", link: "tel:9007004222" },
        ],
    },
    {
        id: 2,
        title: "Location",
        items: [
            {
                value: "Marsons Limited Budge Budge Trunk Road, Maheshtala, Kolkata - 700142",
                link: "https://maps.app.goo.gl/xX2QPszNz8wNjfCs7",
            },
        ],
    },
    {
        id: 3,
        title: "Email Us",
        items: [
            {
                value: "sales@marsonsonline.com",
                link: "https://mail.google.com/mail/?view=cm&fs=1&to=sales@marsonsonline.com",
            },
        ],
    },
    {
        id: 4,
        title: "Social Media",
        socials: [
            { icon: <FaInstagram />, link: "https://instagram.com" },
            { icon: <FaFacebookF />, link: "https://facebook.com" },
            { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
        ],
    },
];

const ContactDetails = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[2rem] sm:mt-[3rem] lg:mt-[6.5rem] xl:mt-[7.5rem] 2xl:mt-[8rem]
                d-flex flex-wrap justify-between
            ">
                <div className="
                    w-full lg:w-[50%]
                ">
                    <h2 className="
                        text-[1.4rem] sm:text-[2rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]
                        text-[#e9202a] font-[600]
                    "
                        data-aos="fade"
                    >
                        Get in touch <span className="text-[#000]">for support,</span> <span className="text-[#000]">queries,</span> or <span className="text-[#000]">collaborations</span>
                    </h2>
                    <p className="
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        mt-[0.8rem] sm:mt-[1rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        font-[500] text-[#000]
                    "
                        data-aos="fade"
                    >
                        Whether you need a quote for our power transformers, require 24x7 breakdown support, or want to discuss a global partnership, our dedicated team is ready to assist you.
                    </p>
                    <div className="
                        mt-[2rem] sm:mt-[2rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                        d-flex flex-wrap justify-between
                    ">
                        {contactData.map((item) => (
                            <div key={item.id} className="
                                w-full sm:w-[48.5%]
                                p-[1rem]
                                border
                                rounded-[10px] sm:rounded-[12px] lg:rounded-[8px] xl:rounded-[10px] 2xl:rounded-[12px]
                                mb-[1rem] sm:mb-[1.3rem] lg:mb-[1.1rem] xl:mb-[1.2rem] 2xl:mb-[1.25rem]
                            "
                                data-aos="fade" data-aos-once="true"
                            >
                                <span className="
                                    text-[#e9202a] font-[600] d-block
                                    text-[1.2rem] sm:text-[1.4rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                                    mb-[0.5rem] sm:mb-[1rem] lg:mb-[0.8rem] xl:mb-[0.9rem] 2xl:mb-[1rem]
                                ">
                                    {item.title}
                                </span>

                                {/* Normal text / links */}
                                {item.items &&
                                    item.items.map((data, i) => (
                                        <p key={i} className="
                                            text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                            mb-[0.5rem]
                                        ">
                                            {data.label &&
                                                <b className="
                                                text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                            ">
                                                    {data.label} :
                                                </b>}
                                            <a
                                                href={data.link} target="_blank"
                                                className="
                                                    text-[#000] hover:text-[#e9202a] font-[500]
                                                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                            ">
                                                {data.value}
                                            </a>
                                        </p>
                                    ))}

                                {/* Social icons */}
                                {item.socials && (
                                    <div className="
                                        d-flex 
                                        gap-[1rem] sm:gap-[1.1rem] lg:gap-[0.8rem] xl:gap-[0.9rem] 2xl:gap-[1rem]
                                        mt-[0.9rem] sm:mt-[0.5rem]
                                    ">
                                        {item.socials.map((social, i) => (
                                            <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="
                                                text-[#fff] bg-[#e9202a] hover:bg-[#d6151f] transition rounded-full d-flex justify-center items-center
                                                text-[1rem] sm:text-[1.1rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                                w-[28px] lg:w-[28px] xl:w-[32px] 2xl:w-[35px]
                                                h-[28px] lg:h-[28px] xl:h-[32px] 2xl:h-[35px]
                                            ">
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="
                    w-full lg:w-[44%]
                    md:mt-[1.5rem] lg:mt-0
                ">
                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default ContactDetails
