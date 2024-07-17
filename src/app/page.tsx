import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/nav";

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation/>
      <section className="bg-hero-blue">
        <div className="grid max-w-screen-xl px-5 md:px-2 py-8 mx-auto lg:gap-8 xl:gap-5 lg:py-16 lg:grid-cols-12">
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start mb-5 lg:my-0">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl">Apply Today!</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">With a great location next to Kyungdong University Global Campus, Padosori is the Best Housing Around in Bongopo-Ri</p>
            <div className="text-center lg:text-left">
              <Link href="#" className="inline-flex items-center justify-center px-5 text-xl py-3 mr-3 font-medium text-center text-black hover:text-white border border-gray-200 rounded-lg focus:ring-4 focus:ring-gray-100 bg-white hover:bg-accent-text focus:ring-primary-300">
                Apply
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/hero-img.svg"
                width={500}
                height={500}
                alt="KyungDong University with ocean on the background"
                layout="intrinsic"
                className="object-cover w-full h-full"
              />
            </div>
          </div>            
        </div>
      </section>
      <section className="bg-white my-2">
        <div className="max-w-screen-xl mx-auto px-5 md:px-2 py-8 lg:py-16 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="flex justify-center lg:justify-start mb-5 lg:mb-0">
              <Image
                src="/welcome-img.svg"
                width={500}
                height={500}
                alt="Padosori housing at night with lights turned on"
                layout="intrinsic"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start">
            <h2 className="max-w-2xl mb-4 text-3xl font-extrabold md:text-4xl xl:text-5xl text-center lg:text-left"> Welcome to Padosori Pension</h2>
            <p className="max-w-2xl mb-6 text-base font-light text-gray-500 md:text-lg text-center lg:text-left">Discover the perfect blend of convenience and comfort at our Padosori Housing in Bongpo-Ri, just a short 5-minute walk from Kyungdong University Global Campus. Ideal for students and professionals alike, our housing offers a tranquil environment with easy access to campus facilities and nearby amenities.</p>
          </div>
        </div>
      </section>
      <section className="bg-hero-blue">
        <div className="grid max-w-screen-xl px-5 md:px-2 py-8 mx-auto lg:gap-8 xl:gap-12 lg:py-16 lg:grid-cols-12">
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start mb-5 lg:my-0">
            <h2 className="max-w-2xl mb-4 text-2xl font-extrabold md:text-3xl xl:text-4xl text-center lg:text-left">Learn More Information </h2>
            <p className="max-w-2xl mb-6 text-base font-light text-gray-500 md:text-lg text-center lg:text-left">Whether you're a student looking for proximity to campus or a professional seeking a quiet retreat, Padosori Housing provides the perfect blend of convenience and comfort. Learn more information on the experience of Padosori living firsthand.</p>
            <div className="text-center lg:text-left">
              <Link href="/FAQ" className="inline-flex items-center justify-center px-5 text-xl py-3 mr-3 font-medium text-center text-black hover:text-white border border-gray-200 rounded-lg focus:ring-4 focus:ring-gray-100 bg-white hover:bg-accent-text focus:ring-primary-300">
                Learn More
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div>
              <div className="flex w-[80%] lg:w-[100%] mx-auto lg:ml-0 lg:justify-center items-center gap-5 py-2 my-2">
                <Image
                  src="/icon-house.svg"
                  width={70}
                  height={50}
                  alt="Icon of money on a house"
                />
                <p>Affordable housing options cater to budget-conscious individuals and families.</p>
              </div>
              <div className="flex w-[80%] lg:w-[100%] mx-auto lg:ml-0 lg:justify-center items-center gap-5 py-2 my-2">
                <Image
                  src="/icon-money.svg"
                  width={65}
                  height={50}
                  alt="Icon of money being put in"
                />
                <p>Reasonable deposits make moving in hassle-free and accessible to all. </p>
              </div>
              <div className="flex w-[80%] lg:w-[100%] mx-auto lg:ml-0 lg:justify-center items-center gap-5 py-2 my-2">
                <Image
                  src="/icon-pet.svg"
                  width={70}
                  height={50}
                  alt="Icon of No Pet Sign"
                />
                <p>No pets policy ensures a clean and allergen-free environment for all residents. </p>
              </div>
            </div>
          </div>            
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl px-5 md:px-2 py-8 mx-auto">
          <div className="lg:col-span-12 flex flex-col justify-center items-center">
            <h2 className="max-w-2xl my-10 text-2xl font-extrabold md:text-3xl xl:text-4xl text-center lg:text-left">Why Padosori Housing?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="px-10 py-12 lg:justify-center items-center border border-gray-200 rounded-lg">
              <Image
                    src="/icon-location.svg"
                    width={80}
                    height={50}
                    alt="Icon Showing location with a Pin"
                    className="m-auto"
                  />
              <h3 className="text-center text-xl font-bold my-2">Prime Location</h3>
              <p className="text-center">Enjoy the convenience of living just minutes away from campus, surrounded by local shops, dining options, and recreational facilities.</p>
            </div>
            <div className="px-10 py-12 lg:justify-center items-center border border-gray-200 rounded-lg">
              <Image
                    src="/icon-space.svg"
                    width={80}
                    height={50}
                    alt="Icon showing a nice small house"
                    className="m-auto"
                  />
              <h3 className="text-center text-xl font-bold my-2">Comfortable Living Spaces</h3>
              <p className="text-center">Each unit is designed for your comfort, featuring private bathrooms, spacious living areas, and access to shared amenities like laundry facilities.</p>
            </div>
            <div className="px-10 py-12 lg:justify-center items-center border border-gray-200 rounded-lg">
              <Image
                    src="/icon-community.svg"
                    width={80}
                    height={50}
                    alt="Icon showing a group of people"
                    className="m-auto"
                  />
              <h3 className="text-center text-xl font-bold my-2">Community Atmosphere</h3>
              <p className="text-center">Join a vibrant community of students and professionals who value peace and productivity. Connect with peers in our common areas or take advantage of quiet study spaces.</p>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  )
}
