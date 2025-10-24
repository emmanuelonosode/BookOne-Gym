
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["Classes", "Memberships", "Trainers", "About"];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="text-2xl font-heading font-black tracking-wider gradient-text">
                        ELITE
                    </a>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-200">{link}</a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button>Start Free Trial</Button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-lg">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors duration-200">{link}</a>
                        ))}
                         <Button>Start Free Trial</Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
