export default function funkyHero() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 max-w-md bg-gradient-to-r from-blue-400 to-purple-500 text-white">
          <h1 className="text-5xl font-bold mb-4">Innovate with Elegance</h1>
          <p className="mb-8 text-xl leading-relaxed">
            Step into a world where technology meets artistry. Experience the
            future today.
          </p>
          <button className="bg-transparent border border-white text-white font-bold py-2 px-6 rounded hover:bg-white hover:text-blue-500 transition duration-300">
            Explore Now
          </button>
        </div>
        <div>
          <img src="/path-to-your-downloaded-image.jpg" alt="Mobile Phone" />
        </div>
      </div>
    </div>
  );
}
