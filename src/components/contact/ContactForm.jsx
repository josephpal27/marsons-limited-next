"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Reveal from "../Reveal";

const ContactForm = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.target);

        formData.append(
            "access_key",
            "a1869f91-a4bc-4416-a3db-d3fa2b132ea1"
        );

        formData.append(
            "subject",
            "New Contact Form Submission from marsonsonline.com"
        );

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await response.json();

            if (result.success) {

                toast.success("Message sent successfully!");

                e.target.reset();

            } else {

                toast.error("Something went wrong!");

            }

        } catch (error) {

            toast.error("Failed to send message!");

        } finally {

            setLoading(false);

        }
    };

    return (
        <>
            <Reveal>
                <div className="
                    bg-[#0a2946]
                    pt-[1rem] sm:pt-[1.5rem] lg:pt-[1.6rem] xl:pt-[1.8rem] 2xl:pt-[2rem]
                    p-[1rem] sm:p-[1.5rem] lg:p-[2.1rem] xl:p-[2.3rem] 2xl:p-[2.5rem]
                    rounded-[20px] sm:rounded-[40px]
                    mt-[1.2rem] sm:mt-[0]
                    mb-[0.5rem] sm:mb-[0]
                ">
                    <span className="
                        text-[#fff] font-[700] font-gilroy
                        text-[1.5rem] sm:text-[1.8rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                    ">
                        Get In Touch
                    </span>
                    <p className="
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        text-[#eee]
                    ">
                        You’ll be heard by people who care and respond. <br /> Get in touch with our team.
                    </p>
                    <form onSubmit={handleSubmit} className="
                        contact-form
                        mt-[2rem] sm:mt-[2.5rem] lg:mt-[2.3rem] xl:mt-[2.5rem] 2xl:mt-[2.7rem]
                    ">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="Name" id="name" required />
                        <label htmlFor="email">Email Id</label>
                        <input type="email" name="Email" id="email" required />
                        <label htmlFor="msg">Message</label>
                        <textarea name="Message" id="msg" required></textarea>
                        <button type="submit" className="
                            bg-[#e9202a] hover:bg-[#d6151f] text-[#fff]
                            py-[0.65rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                            px-[1.3rem] sm:px-[3rem] lg:px-[2.6rem] xl:px-[2.8rem] 2xl:px-[3rem]
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            font-[600]
                            rounded-full
                            transition
                        ">
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </Reveal>

        </>
    )
}

export default ContactForm
