
import React from 'react';
import { MEMBERSHIP_PLANS } from '../constants';
import Button from './ui/Button';

const MembershipSection: React.FC = () => {
    return (
        <section id="memberships" className="py-20 sm:py-28 bg-[#0A0A0A]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 scroll-reveal">
                    <h2 className="font-heading text-4xl md:text-5xl font-black uppercase">Choose Your Plan</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Transparent pricing for unparalleled results. Find the perfect fit for your fitness journey.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {MEMBERSHIP_PLANS.map((plan, index) => (
                        <div key={plan.name} className={`scroll-reveal stagger-${index + 1} relative`}>
                            <div className={`bg-gray-900/50 border border-gray-700 rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:border-cyan-500 ${plan.isPopular ? 'membership-card-popular border-cyan-500' : ''}`}>
                                {plan.isPopular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black font-bold text-xs uppercase px-4 py-1 rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="font-heading text-3xl font-bold text-center">{plan.name}</h3>
                                <div className="text-center my-6">
                                    <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                                    <span className="text-gray-400">/mo</span>
                                </div>
                                <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
                                    {plan.features.map(feature => (
                                        <li key={feature} className="flex items-start">
                                            <svg className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant={plan.isPopular ? 'primary' : 'secondary'} className="w-full">
                                    Select Plan
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MembershipSection;
