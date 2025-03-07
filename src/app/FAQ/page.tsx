import Navigation from "../components/nav";
import Image from "next/image";
import Link from "next/link";
import Head from "../components/head";
import Footer from "../components/footer";

export default function FAQ() {
    return (
        <main className="bg-white">
            <Navigation/>
            <Head
                imageSrc="/kdu.jpg"
                h1="Have questions?"
                text="Welcome to our FAQ page! Here, you&apos;ll find answers to the most common questions about Padosori Housing. Whether you&apos;re curious about our application process, housing options, amenities, or policies, we&apos;ve got you covered. If you don&apos;t find the answer you&apos;re looking for, feel free to reach out to our team for more information."
                alt="Kyungdong Global Campus next to the ocean"
            />
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 ">Frequently Asked Questions</h2>
                    <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Is the housing furnished?
                                </h3>
                                <p className="text-gray-500 ">Yes, all our housing options come fully furnished with essential amenities to ensure a comfortable living experience.</p>
                            </div>
                            <div className="mb-10">                        
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    What types of housing options are available?
                                </h3>
                                <p className="text-gray-500">Padosori Housing offers studio apartments to accommodate students atteding Kyungdong University Global Campus</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    How close is the housing to the Campus?
                                </h3>
                                <p className="text-gray-500 ">Our housing is conveniently located just a 5-minute walk from Kyungdong University Global Campus, making it ideal for students and faculty.</p>
                                <p className="text-gray-500 ">Feel free to <a href="#" className="font-medium underline text-primary-600 hover:no-underline" target="_blank" rel="noreferrer">contact us</a> and we&apos;ll help you out as soon as we can.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Are there laundry facilities available?
                                </h3>
                                <p className="text-gray-500 ">Yes, we provide shared laundry facilities that are easily accessible to all residents.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Are pets allowed?
                                </h3>
                                <p className="text-gray-500 ">Unfortunately, pets are not allowed in our housing to maintain a clean and allergen-free environment for all residents.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Are utilities included in the rent?
                                </h3>
                                <p className="text-gray-500 ">Basic utilities such as water, electricity, and internet are included in the rent. However, any additional services or utilities will be billed separately.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    What is the policy on guest visits?
                                </h3>
                                <p className="text-gray-500 ">Residents are allowed to have guests, but there are certain rules and regulations regarding the duration and frequency of guest visits. Please refer to our housing policy for detailed information.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 d" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Is there a curfew for residents?
                                </h3>
                                <p className="text-gray-500 ">There is no curfew for residents. However, we ask that you respect the quiet hours from 10 PM to 7 AM to ensure a peaceful environment for all.</p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Do the rooms have private bathrooms?
                                </h3>
                                <p className="text-gray-500 ">Yes, each room comes with a private bathroom for your convenience and privacy.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Is there Wi-Fi available?
                                </h3>
                                <p className="text-gray-500 ">Yes, high-speed Wi-Fi is available throughout all our housing facilities.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    How much is the monthly rent?
                                </h3>
                                <p className="text-gray-500 ">Monthly rent varies depending on the type of housing option selected. Please contact our office for detailed pricing information.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Is there a security deposit required?
                                </h3>
                                <p className="text-gray-500 ">Yes, a security deposit  ₩500,000 is required upon signing the lease agreement. The deposit is refundable at the end of the lease term, subject to terms and conditions.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    How can I renew my lease?
                                </h3>
                                <p className="text-gray-500 ">Lease renewal information will be provided towards the end of your current lease term. You can also contact our office for assistance with the renewal process.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Can I visit the housing before applying?
                                </h3>
                                <p className="text-gray-500 ">Yes, we offer guided tours of our housing facilities. Please contact our office to schedule a tour.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    What documents are required for the application?
                                </h3>
                                <p className="text-gray-500 ">You will need to provide a valid ID, proof of enrollment or employment (for students and faculty), and financial information for the application process.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    How do I apply for housing?
                                </h3>
                                <p className="text-gray-500">You can apply for housing through our website by filling out the online application form. Alternatively, you can visit our office for in-person assistance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
  }