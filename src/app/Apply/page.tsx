import Navigation from "../components/nav"
import Head from "../components/head"
import Footer from "../components/footer"

export default function Apply(){
    return(
        <main>
            <Navigation/>
            <Head/>
            <section>
                <h2 className="text-center font-bold">Application Form</h2>
                <form className="max-w-lg mx-auto">
                <div className="mb-5">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                    <input type="text" id="fname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
                    <input type="text" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required />
                </div>
                <div className="mb-5">
                <label htmlFor="layout" className="block mb-2 text-sm font-medium text-gray-900 ">Choose Layout</label>
                    <select id="layout" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option>Single Bedroom</option>
                        <option>Studio</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                        Date
                    </label>
                    <input type="date" name="date" id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="minPrice" className="block mb-2 text-sm font-medium text-gray-900 ">Min Price</label>
                    <input type="number" id="minPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="400000" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="maxPrice" className="block mb-2 text-sm font-medium text-gray-900 ">Max Price</label>
                    <input type="number" id="maxPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="600000" required />
                </div>
                <div className="mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit Application</button>
                </form>

            </section>
            <Footer/>
        </main>
    )
}