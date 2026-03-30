import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="
                bg-[#0a2946] text-[#fff]
                mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
            ">
                {/* Content */}
                <div className="
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    py-[2rem] sm:py-[3rem] lg:py-[2.5rem] xl:py-[3rem] 2xl:py-[3.5rem]
                    flex justify-between flex-wrap
                ">
                    {/* Left */}
                    <div className="
                        w-full lg:w-[37%]
                    ">
                        <img src="images/logo/logo.png" alt="Logo" loading="lazy" className="
                            w-[50%] sm:w-[250px] lg:w-[240px] xl:w-[270px] 2xl:w-[300px]
                            rounded-[8px] sm:rounded-[10px] lg:rounded-[6px] xl:rounded-[8px] 2xl:rounded-[10px]
                        " />
                        <p className="
                            text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                            mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        ">
                            Marsons Limited is an ISO-certified manufacturer of Power, Distribution, and Special Purpose transformers. For 65 years, we have delivered reliable, high-quality power solutions across the globe.
                        </p>
                    </div>
                    {/* Right */}
                    <div className="
                        w-full lg:w-[58%]
                        flex justify-between flex-wrap
                        sm:mt-[2rem] lg:mt-0
                    ">
                        <div className="
                            footer-links
                            w-full sm:w-[30%] mt-[2rem] sm:mt-0
                        ">
                            <span>Quick Links</span>
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            {/* <Link href="/clientele">Clientele</Link> */}
                            {/* <Link href="/csr">CSR</Link> */}
                            {/* <Link href="/career">Career</Link> */}
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className="
                            footer-links
                            w-full sm:w-[30%] mt-[1.2rem] sm:mt-0
                        ">
                            <span>Investor Corner</span>
                            <Link href="/investor-corner/financials">Financials</Link>
                            <Link href="/investor-corner/regulation">Regulation 46(2)</Link>
                            <Link href="/investor-corner/corporate-governance">Corporate Governance</Link>
                            <Link href="/investor-corner/shareholding-pattern">Shareholding Pattern</Link>
                            <Link href="/investor-corner/notices-and-results">Notices & Results</Link>
                            <Link href="/investor-corner/policies">Policies</Link>
                            <Link href="/investor-corner/unclaimed-dividend">Unclaimed Dividend</Link>
                            <Link href="/investor-corner/contact-details">Contact Details</Link>
                        </div>
                        <div className="
                            footer-links
                            w-full sm:w-[30%] mt-[1.2rem] sm:mt-0
                        ">
                            <span>Contact Info</span>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@marsonsonline.com" target="_blank">sales@marsonsonline.com</a>
                            <a href="tel:8335881284">+91 8335881284</a>
                            <a href="tel:9007004222">+91 9007004222</a>
                            <a href="https://maps.app.goo.gl/xX2QPszNz8wNjfCs7" target="_blank">Marsons Limited Budge Budge Trunk Road, Maheshtala, Kolkata - 700142</a>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    py-[0.8rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                    border-t-[1px] border-[#b4b4b4]
                ">
                    <p className="
                        text-center
                        text-[0.7rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                    ">
                        Copyright © 2025 | Marsons Limited | All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;