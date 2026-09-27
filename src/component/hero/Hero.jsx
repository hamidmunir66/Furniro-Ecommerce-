import hero_bg from "../../assets/main_banner.jpg";

const Hero = () => {
  return (
    <main
      className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${hero_bg})` }}
    >
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end px-5 md:px-10 lg:px-20">
        <div className="bg-[#FFF3E3] w-full max-w-xl p-8 md:p-12 lg:p-16">
          <h5 className="text-sm md:text-base">
            New Arrival
          </h5>

          <h1 className="text-3xl md:text-4xl lg:text-5xl my-3 text-[#B98E2F] font-bold">
            Discover Our
          </h1>

          <h1 className="text-3xl md:text-4xl lg:text-5xl my-3 text-[#B98E2F] font-bold">
            New Collection
          </h1>

          <p className="text-sm md:text-base leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut repellendus deserunt repudiandae deleniti? Error
            cumque quas.
          </p>

          <button className="bg-[#B98E2F] text-[#FFF3E3] px-6 py-4 mt-8 font-semibold cursor-pointer hover:bg-[#a17b27] transition">
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;