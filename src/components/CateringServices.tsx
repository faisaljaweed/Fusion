import React from 'react';
import { Cake, Users2, PartyPopper } from 'lucide-react';

const services = [
  {
    icon: <Cake className="w-16 h-16 text-rose-300" />,
    title: 'Birthday Party',
    description: 'Make your special day memorable with our catering service'
  },
  {
    icon: <Users2 className="w-16 h-16 text-rose-300" />,
    title: 'Business Meetings',
    description: 'Professional catering for your corporate events'
  },
  {
    icon: <PartyPopper className="w-16 h-16 text-rose-300" />,
    title: 'Wedding Event',
    description: 'Create unforgettable moments with our wedding catering'
  }
];

const CateringServices = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-rose-300 mb-4">
            Catering Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-rose-200 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CateringServices;