
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Zap, Settings, Database, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { label: 'Efficiency Increase', value: '50%', icon: <Zap className="text-yellow-500" size={20} /> },
    { label: 'Projects Delivered', value: '100+', icon: <Settings className="text-yellow-500" size={20} /> },
    { label: 'Cost Reduction', value: '30%', icon: <Database className="text-yellow-500" size={20} /> },
    { label: 'Automated Support', value: '24/7', icon: <CheckCircle2 className="text-yellow-500" size={20} /> },
  ];

  const services = [
    {
      id: 'automation',
      title: 'Business Automation',
      description: 'Optimize workflows with intelligent automated systems that handle repetitive tasks, freeing your team for strategic work.',
      icon: <Settings size={40} className="text-yellow-500" />
    },
    {
      id: 'llms',
      title: 'Custom LLMs',
      description: 'Deploy private, secure GPTs trained on your proprietary data. Ensure total ownership while leveraging cutting-edge NLP.',
      icon: <BotIcon />
    },
    {
      id: 'strategy',
      title: 'Data Strategy',
      description: 'Turn raw information into actionable insights. We build the architecture that lets your data speak.',
      icon: <Database size={40} className="text-yellow-500" />
    }
  ];

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center lg:items-start lg:text-left py-20 lg:py-40 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-red-500/5 blur-[100px] rounded-full -z-10"></div>

        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          <div className="flex-1 space-y-8 z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-xs font-bold tracking-widest uppercase animate-pulse">
              AI FOR THE EGYPTIAN ENTERPRISE
            </div>
            <h1 className="text-5xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
              Your Business, <br />
              <span className="text-yellow-500">Supercharged</span> <br />
              by 3am Goma3a AI
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 font-medium max-w-xl">
              Dall2 el business btaak with Egypt's most sophisticated AI ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all transform hover:scale-105 active:scale-95 glow-yellow group"
              >
                Book a Discovery Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/5 border border-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
              {/* Mascot Representation */}
              <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/ai-mascot/600/600" 
                alt="3am Goma3a Mascot" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 border border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0a0a0a] border border-yellow-500/30 p-6 rounded-2xl shadow-2xl z-20 hidden md:block animate-bounce">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-bold">Optimization Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white/5 py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2 group">
                <div className="text-4xl lg:text-5xl font-black text-white group-hover:text-yellow-500 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black mb-6">Our Core Services</h2>
            <p className="text-gray-400 text-lg">
              Tailored AI solutions designed to elevate your enterprise operations and secure your competitive edge in the market.
            </p>
          </div>
          <Link to="/services" className="text-yellow-500 font-bold flex items-center gap-2 hover:underline">
            View All Services <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              to="/services" 
              key={service.id}
              className="glass-card group p-8 rounded-3xl transition-all hover:bg-white/5 hover:-translate-y-2 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-3xl rounded-full -z-10 group-hover:bg-yellow-500/10 transition-colors"></div>
              <div className="mb-8 transform group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-yellow-500 font-bold text-sm">
                Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Total Visibility Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white text-black rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="flex-1 p-8 lg:p-20 order-2 lg:order-1">
            <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-xs font-bold mb-8">
               FULL-STACK ANALYTICS
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">
              Total Visibility Over Your <br />
              AI Operations
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Monitor your AI infrastructure in real-time with our comprehensive analytics suite. Track efficiency gains, cost savings, and last performance metrics.
            </p>
            <ul className="space-y-4 mb-10">
              {['Live Token Usage Monitoring', 'Sentiment Analysis Reports', 'Custom ROI Dashboards'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold">
                  <CheckCircle2 size={24} className="text-yellow-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link 
              to="/services" 
              className="bg-black text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-gray-800 transition-all"
            >
              Explore Dashboard Demo
            </Link>
          </div>
          <div className="flex-1 h-full min-h-[400px] order-1 lg:order-2 bg-gray-100 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <img 
              src="https://picsum.photos/seed/dashboard/800/800" 
              alt="AI Dashboard Mockup" 
              className="w-[80%] h-[80%] object-cover rounded-2xl shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Ready to Supercharge */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter">
          Ready to Supercharge?
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Join the leading Egyptian enterprises leveraging 3am Goma3a AI to dominate their sectors.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link 
            to="/contact" 
            className="bg-yellow-500 text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-400 transition-all glow-yellow"
          >
            Book Your Discovery Call
          </Link>
          <Link 
            to="/contact" 
            className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
};

const BotIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-500">
    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 22 12 2Z" fill="currentColor" fillOpacity="0.1" />
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M9 14C9 14 10.5 16 12 16C13.5 16 15 14 15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" />
    <circle cx="15.5" cy="10.5" r="1.5" fill="currentColor" />
  </svg>
);

export default Home;
