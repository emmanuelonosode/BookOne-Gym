
import React, { useState } from 'react';
import { CLASSES_DATA } from '../constants';
import { ClassInfo } from '../types';
import Button from './ui/Button';

type Category = 'All' | 'Strength' | 'Cardio' | 'Yoga' | 'HIIT';
const categories: Category[] = ['All', 'Strength', 'Cardio', 'Yoga', 'HIIT'];

const ClassCard: React.FC<{ classInfo: ClassInfo }> = ({ classInfo }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={classInfo.videoPreview} alt={classInfo.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="font-heading text-2xl font-bold">{classInfo.name}</h3>
            <p className="text-cyan-400">{classInfo.instructor}</p>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className={`px-3 py-1 text-sm rounded-full inline-block ${classInfo.availability === 'Full' ? 'bg-red-500' : 'bg-green-500'}`}>
                    {classInfo.availability}
                </div>
                 <Button size="sm" className="mt-2 block w-full text-center">Book Now</Button>
            </div>
        </div>
    </div>
);

const ClassesSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');

    const filteredClasses = activeCategory === 'All'
        ? CLASSES_DATA
        : CLASSES_DATA.filter(c => c.category === activeCategory);

    return (
        <section id="classes" className="py-20 sm:py-28 bg-[#0A0A0A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 scroll-reveal">
                    <h2 className="font-heading text-4xl md:text-5xl font-black uppercase">Find Your Class</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">From high-intensity training to mindful yoga, we have a class for every goal.</p>
                </div>

                <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12 scroll-reveal stagger-1">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${activeCategory === category ? 'bg-cyan-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredClasses.map((classInfo, index) => (
                        <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                            <ClassCard classInfo={classInfo} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClassesSection;
