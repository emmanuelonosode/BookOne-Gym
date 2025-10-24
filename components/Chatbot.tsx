
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';

type Message = {
    text: string;
    sender: 'user' | 'ai' | 'system';
};

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ai', text: "Hello! I'm your AI Fitness Assistant. How can I help you with your fitness goals today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const newChat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                      systemInstruction: "You are 'Apex', the elite AI coach for ELITE GYM. Your tone is motivational, high-energy, and confident, reflecting our premium brand. Your goal is to guide users toward starting their transformation with us. Answer all questions about fitness, nutrition, and our gym's classes, memberships, and trainers. When appropriate, proactively encourage users to sign up for a Free Trial to experience ELITE GYM firsthand. When discussing memberships, highlight the benefits of our popular Premium plan. Frame our services as the solution to their fitness goals. Keep responses inspiring and use markdown for readability.",
                    },
                });
                setChat(newChat);
            } catch (error) {
                console.error("Failed to initialize chatbot:", error);
                setMessages(prev => [...prev, { sender: 'system', text: "Sorry, I'm having trouble connecting right now." }]);
            }
        };
        initChat();
    }, []);
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: currentInput });
            const aiMessage: Message = { sender: 'ai', text: response.text };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Gemini API error:", error);
            const errorMessage: Message = { sender: 'system', text: "Oops! Something went wrong. Please try again." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={`fixed bottom-24 right-4 sm:right-8 w-[calc(100%-2rem)] max-w-sm h-[70vh] max-h-[600px] bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-[100] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
                    <h3 className="font-heading text-lg font-bold gradient-text">AI Fitness Assistant</h3>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex-grow p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'ai' && (
                                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center font-bold flex-shrink-0 text-black">
                                    E
                                </div>
                            )}
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                                msg.sender === 'user' ? 'bg-cyan-500 text-black rounded-br-none' :
                                msg.sender === 'ai' ? 'bg-gray-800 text-white rounded-bl-none' :
                                'bg-red-500/20 text-red-300 border border-red-500/50 w-full text-center'
                            }`}>
                                <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-end gap-2 justify-start">
                             <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center font-bold flex-shrink-0 text-black">E</div>
                            <div className="bg-gray-800 rounded-2xl rounded-bl-none px-4 py-3">
                                <div className="flex items-center justify-center space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 flex-shrink-0">
                    <div className="flex items-center bg-gray-800 rounded-full">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about fitness..."
                            className="w-full bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:outline-none"
                            disabled={isLoading}
                            aria-label="Chat input"
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="p-2 text-cyan-400 hover:text-cyan-300 disabled:text-gray-600 rounded-full transition-colors mr-1" aria-label="Send message">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 sm:right-8 w-16 h-16 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/30 flex items-center justify-center text-black hover:bg-cyan-400 transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 z-[100] glow-button"
                aria-label="Toggle chatbot"
            >
                 {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.586l-1.707 1.707A1 1 0 0114 18v-3H4a2 2 0 01-2-2V5z" />
                    </svg>
                )}
            </button>
        </>
    );
};

export default Chatbot;
