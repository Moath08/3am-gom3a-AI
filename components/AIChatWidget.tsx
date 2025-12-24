
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { getAIResponse } from '../services/gemini';
import { Message } from '../types';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Salam! I am your AI Opportunity Assessor. Tell me about your business, and I will show you how to "dall2" it with AI.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = await getAIResponse(input);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-yellow-500 text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-90 transition-all z-[60] glow-yellow"
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-48px)] h-[500px] bg-[#0a0a0a] border border-white/10 rounded-2xl flex flex-col shadow-2xl z-[60] overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-yellow-500 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <Bot size={18} className="text-yellow-500" />
              </div>
              <span className="text-black font-bold text-sm">Opportunity Assessor</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black/70 hover:text-black">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-yellow-500 text-black rounded-tr-none' 
                  : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none'
                }`}>
                  {msg.content.split('\n').map((line, idx) => (
                    <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tell us about your business..."
              className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-yellow-500 text-white placeholder:text-gray-600"
            />
            <button
              onClick={handleSend}
              disabled={isTyping}
              className="w-10 h-10 bg-yellow-500 text-black rounded-lg flex items-center justify-center hover:bg-yellow-400 disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatWidget;
