"use client";
import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

 
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }

  export default function Contact() {  
    // TypeScript ko formData ka structure pata chal jayega
    const [formData, setFormData] = useState<FormData>({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  
    // Success message ka type define kiya
    const [successMessage, setSuccessMessage] = useState<string>('');
  
    // Handle change function ka type define kiya
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    // Handle submit function ka type define kiya
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSuccessMessage('Submit Successfully');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setSuccessMessage('Error sending message.');
      }
    };

    return (
        <section id="contact">
        <div className="min-h-screen w-full py-20 flex flex-col items-center justify-center bg-gray-800 px-4">
            <div className="bg-gradient-to-b from-neutral-50 to-neutral-500 shadow-lg rounded-lg p-8 max-w-2xl w-full">
                <h2 className="text-3xl font-semibold text-center text-gray-800">Lets Talk!</h2>
                <p className="text-center text-gray-600 mt-2">Feel free to reach out</p>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center space-x-3">
                        <FaPhone className="text-gray-700 text-xl" />
                        <span className="text-gray-700">0343-2343626</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-gray-700 text-xl" />
                        <span className="text-gray-700">themraliakbar@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="text-gray-700 text-xl" />
                        <span className="text-gray-700">Karachi, Pakistan</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-6">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-black text-black"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-3 border rounded-lg mt-4 focus:ring focus:ring-black text-black"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        className="w-full p-3 border rounded-lg mt-4 h-32 focus:ring focus:ring-black text-black"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-gray-700 text-white py-3 rounded-lg mt-4 hover:bg-gray-800 transition"
                    >
                        Send Message
                    </button>
                    {successMessage && <p className="text-green-600 text-center mt-3">{successMessage}</p>}
                </form>

                <div className="flex justify-center space-x-6 mt-6 text-gray-700">
                    <a href="https://www.linkedin.com/in/ali-akbar-b66ab62b6/" className="hover:text-gray-900 text-2xl"><FaLinkedin /></a>
                    <a href="https://github.com/aliakbar9889" className="hover:text-gray-900 text-2xl"><FaGithub /></a>
                </div>
            </div>
        </div>
        </section>  
    );
};
