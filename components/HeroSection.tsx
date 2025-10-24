
import React from 'react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
    return (
        <section className="h-screen w-full relative flex items-center justify-center text-center text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
                poster="https://picsum.photos/seed/hero/1920/1080"
            >
                {/* Placeholder video - replace with actual gym montage */}
                <source src="https://assets.mixkit.co/videos/preview/mixkit-man-lifting-weights-in-the-gym-2302-large.mp4" type="video/mp4" />
            </video>
            <div className="relative z-20 container mx-auto px-4 hero-text-reveal">
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
                    Transform Your Body
                    <br />
                    <span className="gradient-text">Elevate Your Life</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
                    This isn't just a gym. It's a digital experience that embodies energy, transformation, and premium fitness culture.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="w-full sm:w-auto">Start Free Trial</Button>
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">Watch Our Story</Button>
                </div>
            </div>
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>
        </section>
    );
};

export default HeroSection;
