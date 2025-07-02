import './ContactMe.css'
import { useState } from 'react';
import Send_Icon from "@/assets/send-svgrepo-com.svg"

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        setShowModal(true);

    };

    const closeModal = () => {
        setShowModal(false);
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

            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Message Error</h2>
                            <button className="modal-close" onClick={closeModal}>
                                ×
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Im sorry, I currently don't have a backend server to handle your request. Please use your preferred email software to reach out.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="modal-button" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}