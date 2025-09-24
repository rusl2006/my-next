

const Headlines = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-center">
          
          
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              Today's Headlines: Stay Informed
            </h1>
          </div>

          
          <div className="text-center lg:text-left">
            <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto lg:mx-0">
              Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Headlines;