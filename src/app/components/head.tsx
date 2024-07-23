import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  imageSrc: string;
  h1: string;
  text: string;
    alt: string;
}

const Head: React.FC<HeroSectionProps> = ({ imageSrc, h1, text, alt }) => {
  return (
    <section className="bg-hero-blue">
      <div className="grid max-w-screen-xl px-5 md:px-2 py-8 mx-auto lg:gap-8 xl:gap-5 lg:py-16 lg:grid-cols-12">
        <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start mb-5 lg:my-0">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl">{h1}</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">{text}</p>
          <div className="text-center lg:text-left">
            <Link href='/Apply' className="inline-flex items-center justify-center px-5 text-xl py-3 mr-3 font-medium text-center text-black hover:text-white border border-gray-200 rounded-lg focus:ring-4 focus:ring-gray-100 bg-white hover:bg-accent-text focus:ring-primary-300">
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
              src={imageSrc}
              width={500}
              height={500}
              alt={alt}
              layout="intrinsic"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
