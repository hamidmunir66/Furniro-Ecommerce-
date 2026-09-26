import hero_bg from "../../assets/main_banner.jpg";

const Hero = () => {
  return (
    <>
      <main className="w-full relative ">
        <img src={hero_bg} alt="" className="object-center" />
        <div className={`bg-[#FFF3E3] w-2xl absolute right-28 top-96 m-5 px-8 py-16`}>
          <h5>New Arrival</h5>
          <h1 className="text-4xl my-3 text-[#B98E2F] font-bold">
            Discover Our{" "}
          </h1>
          <h1 className="text-4xl my-3 text-[#B98E2F] font-bold">
            New Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            repellendus deserunt repudiandae deleniti? Error cumque quas
          </p>
          <div className="bg-[#B98E2F] p-4 w-36 items-center mt-8 ">
            <button className="  text-[#FFF3E3] cursor-pointer font-semibold ">
              Buy Now
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
