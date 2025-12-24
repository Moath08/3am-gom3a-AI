
import React from 'react';
import { Settings, Bot, Database, Search, Shield, Cpu, MessageSquare, LineChart, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const allServices = [
    {
      title: 'Business Automation',
      icon: <Settings size={32} />,
      features: ['Robotic Process Automation', 'Smart CRM Integration', 'Autonomous Scheduling', 'Workflow Optimization']
    },
    {
      title: 'Custom LLMs',
      icon: <Bot size={32} />,
      features: ['Private Knowledge Bases', 'Internal Fine-tuning', 'Multilingual Support', 'Secure Local Deployment']
    },
    {
      title: 'Data Strategy',
      icon: <Database size={32} />,
      features: ['ETL Pipeline Building', 'Predictive Modeling', 'Big Data Architecture', 'Insight Visualization']
    },
    {
      title: 'AI Auditing',
      icon: <Shield size={32} />,
      features: ['Model Bias Testing', 'Security Vulnerability scans', 'Efficiency Benchmarking', 'Compliance Review']
    },
    {
      title: 'AI Training',
      icon: <Cpu size={32} />,
      features: ['Team Upskilling', 'Prompt Engineering', 'Executive Workshops', 'Deployment Roadmapping']
    },
    {
      title: 'Intelligent Search',
      icon: <Search size={32} />,
      features: ['Semantic Discovery', 'Document RAG Systems', 'Vector Databases', 'Neural Information Retrieval']
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-5xl lg:text-7xl font-black">Our Expertise</h1>
        <p className="text-gray-400 text-xl leading-relaxed">
          From the startup stage to enterprise-level dominance, our AI modules are built to scale and adapt to your unique business DNA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allServices.map((service, i) => (
          <div key={i} className="glass-card p-10 rounded-[2rem] border border-white/10 hover:border-yellow-500/50 transition-all group">
            <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center text-black mb-8 transform group-hover:rotate-6 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
            <ul className="space-y-4">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-yellow-500 p-12 lg:p-20 rounded-[3rem] text-black">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight">Need a custom AI build?</h2>
            <p className="text-black/70 text-lg font-medium">
              We don't just use AI; we engineer proprietary systems that are uniquely yours. Let's discuss your specific requirements.
            </p>
            <button className="bg-black text-white px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl">
               Start Custom Project
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <div className="bg-white/20 p-8 rounded-2xl text-center">
                <span className="block text-4xl font-black">200+</span>
                <span className="text-xs uppercase font-bold">Custom Models</span>
             </div>
             <div className="bg-white/20 p-8 rounded-2xl text-center">
                <span className="block text-4xl font-black">15M</span>
                <span className="text-xs uppercase font-bold">Requests/Day</span>
             </div>
             <div className="bg-white/20 p-8 rounded-2xl text-center">
                <span className="block text-4xl font-black">99.9%</span>
                <span className="text-xs uppercase font-bold">Uptime</span>
             </div>
             <div className="bg-white/20 p-8 rounded-2xl text-center">
                <span className="block text-4xl font-black">&lt;200ms</span>
                <span className="text-xs uppercase font-bold">Latency</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
