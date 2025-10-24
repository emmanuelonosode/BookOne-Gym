
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-gray-900 border-t border-gray-800 text-gray-400">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-heading font-black tracking-wider gradient-text">ELITE</h2>
                        <p className="mt-4 text-sm">Transform Your Body, Elevate Your Life.</p>
                        <div className="flex space-x-4 mt-6">
                            {/* Replace with actual social links */}
                            <a href="#" className="hover:text-cyan-400 transition-colors">IG</a>
                            <a href="#" className="hover:text-cyan-400 transition-colors">FB</a>
                            <a href="#" className="hover:text-cyan-400 transition-colors">YT</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-white uppercase tracking-wider">Explore</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#classes" className="hover:text-white transition-colors">Classes</a></li>
                            <li><a href="#memberships" className="hover:text-white transition-colors">Memberships</a></li>
                            <li><a href="#trainers" className="hover:text-white transition-colors">Trainers</a></li>
                            <li><a href="#" title="Coming Soon!" className="hover:text-white transition-colors cursor-not-allowed opacity-50">Blog</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-bold text-white uppercase tracking-wider">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white uppercase tracking-wider">Get In Touch</h3>
                         <ul className="mt-4 space-y-2 text-sm">
                            <li>123 Fitness Ave, Metro City, 10101</li>
                            <li><a href="mailto:contact@elitegym.com" className="hover:text-white transition-colors">contact@elitegym.com</a></li>
                            <li><a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} ELITE GYM. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;