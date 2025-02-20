'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#f5deb3] shadow-md p-4 fixed w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={'/'}>
                    <div className="text-2xl font-bold text-[#713700] flex items-center gap-2">
                        <img src="/images/vh1.png" alt="logo" className="w-10 h-10" />
                        Vedic Pedia
                    </div>
                </Link>
                <div className="hidden md:flex space-x-6">
                    <a href="/vedas" className="text-[#713700] font-medium hover:text-[#492401]">Vedic Section</a>
                    <a href="mantrapedia" className="text-[#713700] font-medium hover:text-[#492401]">Mantras</a>
                    <a href="/about-us" className="text-[#713700] font-medium hover:text-[#492401]">About Us</a>
                </div>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6 text-[#713700]" /> : <Menu className="w-6 h-6 text-[#713700]" />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center mt-3 space-y-3 bg-[#f5deb3] p-3">
                    <a href="/vedas" className="text-[#713700] font-medium hover:text-[#492401]" onClick={() => setIsOpen(false)}>Vedic Section</a>
                    <a href="/mantrapedia" className="text-[#713700] font-medium hover:text-[#492401]" onClick={() => setIsOpen(false)}>Mantras</a>
                    <a href="about-us" className="text-[#713700] font-medium hover:text-[#492401]" onClick={() => setIsOpen(false)}>About Us</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
