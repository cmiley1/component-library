export default function FinanceHero() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white py-12 md:py-24 relative overflow-hidden">
      {/* Decorative pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: "-1" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        <defs>
          <pattern
            id="dot-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="5" fill="rgba(255, 255, 255, 0.2)" />
          </pattern>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center">
        <div className="md:w-1/2 flex flex-col items-start mb-4 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 scale-100 hover:scale-105 transition-transform duration-300">
            DO MORE WITH YOUR MONEY
          </h1>
          <p className="text-lg md:text-xl mb-8 scale-100 hover:scale-105 transition-transform duration-300">
            Send and spend, bank, and buy stocks or bitcoin
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <a
              href="#download"
              className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full mb-4 sm:mb-0 sm:mr-4 hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Download Cash App
            </a>
            <a
              href="#learn-more"
              className="mt-4 sm:mt-0 py-3 px-8 rounded-full border-2 border-white transition-all duration-300 hover:border-gray-300 hover:text-gray-300"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_1280.png"
            alt="Phone with finance app"
            className="w-full pt-10 max-w-xs lg:max-w-md scale-100 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
