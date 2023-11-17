export default function funkyHero() {
  return (
    <section className="relative bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Elevate Your Business
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mb-8">
          Unleash the Power of Technology
        </p>
        <a
          href="#"
          className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full text-lg lg:text-xl transition duration-300 inline-block"
        >
          Get Started
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-red-500 via-yellow-500 to-green-500 opacity-30 z-0"></div>
      <div className="absolute inset-0 flex flex-wrap items-center justify-center space-x-2 z-0">
        {Array.from({ length: 228 }).map((_, index) => (
          <div
            key={index}
            className={`w-6 h-6 bg-gradient-to-tr from-red-500 via-yellow-500 to-green-500 rounded-full transform rotate-45 opacity-30 animate-float delay-${
              index * 50
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
