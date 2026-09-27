const ProductCards = ({ item }) => {
  return (
    <>
      <div className="group relative overflow-hidden bg-gray-100">
        <div className="relative">
          <img
            src={item.img}
            alt={item.heading}
            className="h-80 w-full object-cover"
          />

          {item.discount && (
            <span className="absolute right-4 top-4 rounded-full bg-red-400 px-3 py-3 text-sm text-white">
              -{item.discount}%
            </span>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
            <button className="bg-white px-10 py-4 font-semibold text-yellow-600 cursor-pointer">
              Add to cart
            </button>

            <div className="mt-5 flex gap-4 text-sm font-medium text-white">
              <button type="button " className="cursor-pointer">
                ♡ Like
              </button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold">{item.heading}</h2>

          <p className="mt-1 text-gray-500">{item.description}</p>

          <div className="mt-2 flex items-center gap-3">
            <span className="text-lg font-semibold">Rs {item.price}</span>

            {item.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                Rs {item.oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
