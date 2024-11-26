import React from "react";

const AboutSection = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-xl aspect-w-1">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Restaurant table setting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Image */}
          <div className="relative overflow-hidden rounded-xl aspect-w-1">
            <img
              src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Elegant dining setup"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold text-rose-300">Fusion</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <div className="pt-4">
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
