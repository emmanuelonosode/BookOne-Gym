
import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import Card from './ui/Card';

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    };
    
    const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

    return (
        <section className="py-20 sm:py-28 bg-black overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 scroll-reveal">
                    <h2 className="font-heading text-4xl md:text-5xl font-black uppercase">Real People, Real Results</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. See the transformations for yourself.</p>
                </div>

                <div className="relative scroll-reveal stagger-1">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-0 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-8 flex flex-col justify-center">
                                    <blockquote className="text-xl italic text-gray-200">
                                        "{currentTestimonial.story}"
                                    </blockquote>
                                    <cite className="mt-4 font-bold text-cyan-400 not-italic text-right">- {currentTestimonial.name}</cite>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="relative">
                                        <img src={currentTestimonial.beforeImg} alt={`Before shot of ${currentTestimonial.name}`} className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 left-0 bg-black/70 text-white px-2 py-1 text-xs font-bold uppercase">Before</div>
                                    </div>
                                    <div className="relative">
                                        <img src={currentTestimonial.afterImg} alt={`After shot of ${currentTestimonial.name}`} className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 left-0 bg-cyan-500/70 text-black px-2 py-1 text-xs font-bold uppercase">After</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <button onClick={prevTestimonial} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 w-12 h-12 bg-gray-800/50 hover:bg-cyan-500/80 rounded-full flex items-center justify-center transition-all text-white">
                        &#8249;
                    </button>
                    <button onClick={nextTestimonial} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 w-12 h-12 bg-gray-800/50 hover:bg-cyan-500/80 rounded-full flex items-center justify-center transition-all text-white">
                        &#8250;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
