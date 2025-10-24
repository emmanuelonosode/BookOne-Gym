
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    const cardClasses = `bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl ${className}`;
    
    return (
        <div className={cardClasses}>
            {children}
        </div>
    );
};

export default Card;
