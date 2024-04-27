import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import Socials from "./Socials";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs
            .send(
                "service_r77accg",
                "template_xbdijc8",
                {
                    from_name: form.name,
                    to_Name: "Nithya Prakash A V",
                    from_email: form.email,
                    to_email: "nithyaprakashavjobs@gmail.com",
                    message: form.message,
                },
                "eot5UpXGDNF7sEjnD"
            )
            .then(() => {
                setIsLoading(false);
                toast.success("Thank you. I will get back to you as soon as possible.");
                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error.message);
                toast.error("Something went wrong.");
            });
    };

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[1.4] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col mt-12 gap-8">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        ></input>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        ></input>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        className="bg-secondary py-3 px-8 outline-none w-full text-black font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {isLoading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <Socials />
            </motion.div>

            <ToastContainer position="bottom-center" autoClose={5000} />
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
