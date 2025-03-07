"use client"
import { useState } from "react";
import Navigation from "../components/nav";
import Image from "next/image";
import Link from "next/link";
import Head from "../components/head";
import Footer from "../components/footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Your message has been sent to the housing manager!");
        // Here you can also add the logic to send the form data to your server
        console.log(formData);
        setFormData({ name: "", email: "", message: "" }); // Reset form data after submission
    };

    return(
        <main className="bg-white">
            <Navigation/>
            {/* <Head/> */}
            <section className="bg-hero-blue" id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-blue-600">
                                Contact
                            </p>
                            <h1
                                className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                                Get in Touch
                            </h1>
                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">We&apos;d love to answer your questions!
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg text-gray-600">
                                At Padosori Pension, we value open communication and are here to assist you with any questions or concerns you may have. Whether you are interested in learning more about our housing options, need help with your current accommodations, or have any other inquiries, our team is ready to help.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-accent-text text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h2 className="mb-2 text-lg font-medium leading-6 text-gray-900">Our Address
                                            </h2>
                                            <p className="text-gray-600">1강원 고성군 토성면 광포길 58 게섯거라</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-accent-text text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h2 className="mb-2 text-lg font-medium leading-6 text-gray-900">Contact
                                            </h2>
                                            <p className="text-gray-600">Mobile: +82 (010) 2939-9611</p>
                                            <p className="text-gray-600">Mail: bountiafulnam@gmail.com</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-accent-text text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h2 className="mb-2 text-lg font-medium leading-6 text-gray-900">Working
                                                hours</h2>
                                            <p className="text-gray-600">Monday - Friday: 08:00 - 17:00</p>
                                            <p className="text-gray-600">Saturday &amp; Sunday: 08:00 - 12:00</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                                <Image
                                    src="/welcome-img.svg"
                                    width={500}
                                    height={500}
                                    alt="Padosori housing at night with lights turned on"
                                    layout="intrinsic"
                                    className="object-cover w-full h-full"
                                />
                                <div className="text-center my-4">
                                    <button className="w-full bg-blue-800 hover:bg-accent-text text-white px-6 py-3 font-xl rounded-md sm:mb-0">
                                    <a href="mailto:bountifulnaim@gmail.com" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">Send Message</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
