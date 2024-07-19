import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import './contact.css'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const notifySuccess = () => toast.success(`Thank you for registering ${name}. We'll get back to you soon!`);
    const notifyError = () => toast.error(`Email send failed!`, {
        position: 'top-center',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            emailjs
                .sendForm(
                    "service_hl95h5x",
                    "template_cv0vnaq",
                    e.currentTarget,
                    "wQHtJBvc36kFAudMa"
                )
                .then(
                    (res) => notifySuccess(),
                    (error) => console.log(error.text)
                );
        } catch (error) {
            console.log(error, 'error')
            notifyError()
        }
    };

    return (
        <div className='wrapper' >
            <ToastContainer />
            <Header height={81} scrollY={false} />
            <form className="contact-form" onSubmit={handleSubmit}>
                <input name="name" type="text" class="feedback-input" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input name="email" type="text" class="feedback-input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <textarea name="text" class="feedback-input" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default Contact;

