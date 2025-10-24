
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', size = 'md', ...props }) => {
    const baseClasses = 'font-bold rounded-full transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-cyan-500/50 active:scale-95';

    const variantClasses = {
        primary: 'glow-button bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20',
        secondary: 'bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black',
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
