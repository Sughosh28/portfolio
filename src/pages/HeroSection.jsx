const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 via-slate-700/10 to-slate-800/10 animate-gradient-shift bg-[length:200%_200%]"></div>
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-slate-800/20 rounded-full blur-[128px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-700/20 rounded-full blur-[128px] animate-pulse-slow delay-700"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-100">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
                  Sughosh Athreya
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed">
              A passionate developer crafting exceptional digital experiences with Java, Spring Boot, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-slate-800 rounded-xl font-semibold text-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-800/25 border border-slate-700 hover:bg-slate-700"
              >
                <span className="relative z-10">Get in touch</span>
              </a>
              
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl font-semibold text-gray-400 border border-slate-800 hover:border-slate-600 hover:text-gray-200 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full blur-md opacity-75 
                            group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></div>
              <div className="relative">
                <div className="rounded-full p-1 bg-gradient-to-r from-slate-700 to-slate-800">
                  <div className="relative rounded-full overflow-hidden w-56 h-56 lg:w-72 lg:h-72">
                    <img
                      src="/myImage2.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
