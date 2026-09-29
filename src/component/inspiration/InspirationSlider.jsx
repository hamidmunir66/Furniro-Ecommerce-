import { useState } from "react";
import { rooms } from "../../data/data";

const InspirationSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === rooms.length - 1 ? 0 : prev + 1
    );
  };


  return (
    <section className="flex items-center gap-10 overflow-hidden bg-[#fcf8f3] px-10 py-16 mt-4">

      {/* Left content */}
      <div className="w-1/3 shrink-0">
        <h2 className="text-4xl font-bold">
          50+ Beautiful rooms inspiration
        </h2>

        <p className="mt-4 text-gray-600">
          Our designer already made a lot of beautiful
          prototype of rooms that inspire you
        </p>

        <button className="mt-6 bg-yellow-700 px-8 py-3 text-white cursor-pointer">
          Explore More
        </button>
      </div>

      {/* Slider */}
      <div className="relative flex-1 overflow-hidden">

        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${current * 50}%)`,
          }}
        >
          {rooms.map((room) => (
            <div
              key={room.id}
              className="relative min-w-[65%]"
            >
              <img
                src={room.image}
                alt={room.title}
                className="h-[500px] w-full object-cover"
              />

              <div className="absolute bottom-5 left-5 bg-white/90 p-5">
                <p className="text-sm text-gray-500">
                  {room.category}
                </p>

                <h3 className="text-2xl font-semibold">
                  {room.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl shadow"
        >
          →
        </button>

      </div>

    </section>
  );
};

export default InspirationSlider;