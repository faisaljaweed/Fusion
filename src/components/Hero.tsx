const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to
              <span className="block text-rose-300">Fusion</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Delicacies Fast Food & Catering!
            </p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-lg transition">
              Check Menu
            </button>
          </div>

          {/* Circular Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-rose-300/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-rose-300/20"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Featured dish"
                  className="w-full h-full object-cover animate-spin duration-1000 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
