
import React, { useState } from 'react';
import { Mail, Phone, Calendar, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  if (formState === 'success') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto shadow-2xl glow-yellow">
            <CheckCircle size={48} className="text-black" />
          </div>
          <h1 className="text-4xl font-black">Application Received!</h1>
          <p className="text-gray-400">3am Goma3a is reviewing your business details. One of our AI Strategists will contact you within 24 hours.</p>
          <button 
            onClick={() => setFormState('idle')}
            className="text-yellow-500 font-bold hover:underline"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl font-black tracking-tighter">Let's Talk <span className="text-yellow-500">Future.</span></h1>
            <p className="text-xl text-gray-400">
              Stop guessing. Start automating. Book your free AI discovery call today and identify $100k+ in potential efficiency gains.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-yellow-500">
                <Calendar />
              </div>
              <div>
                <h4 className="font-bold text-lg">Discovery Call</h4>
                <p className="text-gray-400 text-sm">A 30-min technical strategy session to audit your business.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-yellow-500">
                <Mail />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email Inquiry</h4>
                <p className="text-gray-400 text-sm">For partnerships or custom R&D requests.</p>
                <a href="mailto:hello@3amgoma3a.ai" className="text-yellow-500 text-sm hover:underline">hello@3amgoma3a.ai</a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
            <p className="italic text-gray-400 mb-6">"3am Goma3a didn't just give us a bot; they rebuilt our entire customer funnel. The ROI was visible in weeks."</p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/seed/person1/100/100" className="w-12 h-12 rounded-full object-cover" alt="Client" />
              <div>
                <span className="block font-bold">Ahmed Mansour</span>
                <span className="block text-xs text-gray-500 uppercase font-black">CEO, Cairo Logistics</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 lg:p-16 text-black shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/20 blur-3xl rounded-full"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <h2 className="text-3xl font-black mb-10">Book a Call</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-500 tracking-widest">Full Name</label>
                <input required type="text" className="w-full bg-gray-100 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-yellow-500" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-500 tracking-widest">Email Address</label>
                <input required type="email" className="w-full bg-gray-100 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-yellow-500" placeholder="john@company.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-500 tracking-widest">Company Sector</label>
              <select className="w-full bg-gray-100 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-yellow-500">
                <option>Tech / SaaS</option>
                <option>Manufacturing</option>
                <option>Real Estate</option>
                <option>E-commerce</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-500 tracking-widest">Business Challenge</label>
              <textarea required className="w-full bg-gray-100 border-none rounded-xl px-4 py-4 h-32 focus:ring-2 focus:ring-yellow-500" placeholder="Tell us what you're looking to automate..."></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formState === 'submitting'}
              className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {formState === 'submitting' ? 'Processing...' : (
                <>
                  Confirm Discovery Call
                  <Send size={20} />
                </>
              )}
            </button>
            <p className="text-center text-xs text-gray-400 font-medium">No credit card required. Pure strategy.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
