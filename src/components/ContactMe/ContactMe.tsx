import './ContactMe.css'
import { useState } from 'react';
import Send_Icon from "@/assets/send-svgrepo-com.svg"

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <section id='Contact'>
            <h1 className="section-header">Reach Out</h1>
            <div className="contact-container">

                {/* <p className="contact-description">
                </p> */}

                <div className="form-container">
                    <div className="input-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <textarea
                        rows={5}
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                    />

                    <button onClick={handleSubmit} className="submit-button">
                        <img
                                src={Send_Icon}
                                width="20"
                                height="20"
                            />
                        Send
                    </button>
                </div>
            </div>

        </section>
    )
}
