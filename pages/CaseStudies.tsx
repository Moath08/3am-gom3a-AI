
import React from 'react';

const CaseStudies: React.FC = () => {
  const projects = [
    {
      title: 'FinTech Automation',
      client: 'Al-Masry Bank',
      result: '80% faster processing',
      image: 'https://picsum.photos/seed/fintech/800/600',
      tag: 'Automation'
    },
    {
      title: 'Supply Chain AI',
      client: 'Nile Logistics',
      result: '20% cost reduction',
      image: 'https://picsum.photos/seed/logistics/800/600',
      tag: 'Data Strategy'
    },
    {
      title: 'Legal GPT',
      client: 'Gomaa & Associates',
      result: 'Instant document review',
      image: 'https://picsum.photos/seed/legal/800/600',
      tag: 'Custom LLM'
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      <div className="space-y-6">
        <h1 className="text-6xl font-black tracking-tighter">Impact in <span className="text-yellow-500">Action</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl">
          Real results for real businesses across the Middle East. See how 3am Goma3a AI transforms legacy operations into future-ready powerhouses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div key={i} className={`group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 ${i === 0 ? 'lg:col-span-2' : ''}`}>
            <div className="absolute top-6 left-6 z-10 px-4 py-1 rounded-full bg-yellow-500 text-black text-xs font-black uppercase">
              {p.tag}
            </div>
            <img 
              src={p.image} 
              alt={p.title} 
              className="w-full h-[400px] lg:h-[600px] object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
              <span className="text-yellow-500 font-bold mb-2">{p.client}</span>
              <h2 className="text-4xl font-black text-white mb-4">{p.title}</h2>
              <div className="flex items-center gap-2">
                <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-xl text-white font-bold">
                  {p.result}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
