
import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ClassesSection from './components/ClassesSection';
import MembershipSection from './components/MembershipSection';
import TrainersSection from './components/TrainersSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AboutSection from './components/AboutSection';

const App: React.FC = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        const targets = document.querySelectorAll('.scroll-reveal');
        targets.forEach(target => observer.observe(target));

        return () => {
            targets.forEach(target => observer.unobserve(target));
        };
    }, []);

    return (
        <div className="bg-[#0A0A0A] text-white overflow-x-hidden">
            <Header />
            <main>
                <HeroSection />
                <StatsSection />
                <ClassesSection />
                <TestimonialsSection />
                <MembershipSection />
                <TrainersSection />
                <AboutSection />
            </main>
            <Footer />
            <Chatbot />
        </div>
    );
};

export default App;