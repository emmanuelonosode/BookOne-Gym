
import React from 'react';
import { TRAINERS_DATA } from '../constants';

const TrainersSection: React.FC = () => {
    return (
        <section id="trainers" className="py-20 sm:py-28 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 scroll-reveal">
                    <h2 className="font-heading text-4xl md:text-5xl font-black uppercase">Meet Our Elite Trainers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Certified professionals dedicated to helping you achieve your goals.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TRAINERS_DATA.map((trainer, index) => (
                        <div key={trainer.name} className={`group relative overflow-hidden rounded-lg text-center scroll-reveal stagger-${index + 1}`}>
                            <img src={trainer.imageUrl} alt={trainer.name} className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center p-6">
                                <div>
                                    <h3 className="font-heading text-2xl font-bold">{trainer.name}</h3>
                                    <p className="text-cyan-400 text-sm">{trainer.specialization}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainersSection;
