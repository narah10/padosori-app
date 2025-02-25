'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

// const links = [
//     { name: 'Home', href: '/' },
//     {name: 'Contact', href: '/Contact'},
//     { name: 'FAQ', href: '/FAQ'},
//     { name: 'Direction', href: '/Directions'},
//     { name: 'Apply', href: '/Apply'},
//   ];
  
function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const pathname = usePathname()
    return (
        <nav className="bg-white border-gray-200 py-5">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                    src="/logo.svg"
                    width={180}
                    height={100}
                    alt="Padosori Logo showing a sun and the ocean"
                    />
                </Link>
                <button 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                    aria-controls="navbar-default" 
                    aria-expanded={isOpen} 
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                        <li>
                            <Link href="/" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${pathname === '/' ? ' text-blue-700' : 'text-gray-900'}`}
                  aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/Contact" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${pathname === '/Contact' ? ' text-blue-700' : 'text-gray-900'}`}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/FAQ" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${pathname === '/FAQ' ? ' text-blue-700' : 'text-gray-900'}`}>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/Directions" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${pathname === '/Directions' ? ' text-blue-700' : 'text-gray-900'}`}>
                                Direction
                            </Link>
                        </li>
                        <li>
                            <Link href="/api/auth/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                Residents
                            </Link>
                        </li>
                        <li>
                            <Link href="/Apply" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${pathname === '/Apply' ? ' text-blue-700' : 'text-gray-900'}`}>
                                Apply
                            </Link>
                        </li>
                        {/* <a href="/api/auth/login">Login</a> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
