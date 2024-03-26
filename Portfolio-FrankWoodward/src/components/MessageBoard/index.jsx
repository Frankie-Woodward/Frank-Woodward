import React, { useState } from 'react';
import './style.css';

export default function MessageBoard() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Here you can integrate with your backend to save the data
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
        });
    };

    return (
        <div className="message-board">
          
            <form onSubmit={handleSubmit} className="form-column">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                />
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
