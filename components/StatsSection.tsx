
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { STATS_DATA } from '../constants';
import Card from './ui/Card';

const StatItem: React.FC<{ value: string; label: string; className?: string }> = ({ value, label, className }) => (
    <div className={`text-center scroll-reveal ${className}`}>
        <p className="font-heading text-4xl md:text-6xl font-black gradient-text">{value}</p>
        <p className="mt-2 text-sm md:text-base text-gray-400 uppercase tracking-widest">{label}</p>
    </div>
);


const StatsSection: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 text-center">
                    <StatItem value="500K+" label="Lbs Lost" className="stagger-1"/>
                    <StatItem value="5,000+" label="Members" className="stagger-2"/>
                    <StatItem value="10K+" label="Classes Completed" className="stagger-3"/>
                </div>
                <Card className="p-4 sm:p-8 scroll-reveal stagger-4">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-6 text-center">Monthly Member Attendance</h3>
                     <div className="w-full h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={STATS_DATA} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                                <XAxis dataKey="name" tick={{ fill: '#9CA3AF' }} axisLine={{ stroke: '#4B5563' }} tickLine={{ stroke: '#4B5563' }} />
                                <YAxis tick={{ fill: '#9CA3AF' }} axisLine={{ stroke: '#4B5563' }} tickLine={{ stroke: '#4B5563' }} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(0, 245, 255, 0.1)' }}
                                    contentStyle={{ 
                                        backgroundColor: '#1F2937', 
                                        borderColor: '#00F5FF',
                                        color: '#FFFFFF'
                                    }} 
                                />
                                <Bar dataKey="attendance" fill="#00F5FF" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default StatsSection;
