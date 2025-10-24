
import React from 'react';
import Card from './ui/Card';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 sm:py-28 bg-[#0A0A0A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 scroll-reveal">
                    <h2 className="font-heading text-4xl md:text-5xl font-black uppercase">More Than A Gym</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">We are a community dedicated to pushing limits and achieving greatness.</p>
                </div>

                <Card className="p-0 overflow-hidden scroll-reveal stagger-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className="p-8 md:p-12">
                            <h3 className="font-heading text-3xl font-bold gradient-text mb-4">Our Philosophy</h3>
                            <p className="text-gray-300 mb-6">
                                ELITE GYM was founded on a simple principle: to create a world-class fitness environment that inspires and enables personal transformation. We believe that a gym is more than just weights and machines; it's a sanctuary for growth, a hub for community, and a platform for elevating every aspect of your life.
                            </p>
                            <p className="text-gray-300">
                                Our state-of-the-art facility, expert trainers, and vibrant community are all here to support your journey. Whether you're a seasoned athlete or just starting, you've found your place to thrive.
                            </p>
                        </div>
                        <div className="h-64 md:h-full">
                             <img 
                                src="https://picsum.photos/seed/about/800/600" 
                                alt="Inside of the Elite Gym" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default AboutSection;
