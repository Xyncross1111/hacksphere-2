"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Memories', href: '#memories' },
        { label: 'Timeline', href: '#process' },
        { label: 'Partners', href: '#partners' },
        { label: 'Domains', href: '#domains' },
        { label: 'Prizes', href: '#prizes' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <nav
            className="fixed font-['Space Grotesk'] w-full z-50 bg-black shadow-lg"
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/icon.png"
                            alt="HackSphere"
                            width={200}
                            height={200}
                            className="h-20 w-auto "
                        />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            HackSphere
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                    {/* <a
                        href="/swag"
                        className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
                    >
                        SWAG
                    </a> */}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${menuOpen ? 'max-h-[500px] py-4' : 'max-h-0 overflow-hidden'
                    }`}
            >
                <div className="container mx-auto px-4 flex flex-col space-y-4 ">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-gray-300 hover:text-white py-2 transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    {/* <a
                        href="/swag"
                        className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white font-medium hover:opacity-90 transition-opacity text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        SWAG
                    </a> */}
                </div>
            </div>
        </nav>
    );
};
