import { productData } from "../../data/data";
import useToggle from "../../hooks/useToggle";
import ProductCards from "./ProductCards";


const Products = () => {
  const [toggle, istoggle] = useToggle(false);
  

  const displaydata = toggle ? productData : productData.slice(0, 8);
  return (
    <>
      <div className="text-center m-5">
        <h1 className="text-3xl font-bold">Our Products</h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2 m-8 p-8">
        {displaydata.map((item) => (
          <ProductCards key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-10 text-center">
        {!toggle ? (
          <button
            onClick={() => istoggle(true)}
            className="border border-yellow-600 px-11 py-3 font-semibold text-yellow-600 cursor-pointer"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={() => istoggle(false)}
            className="border border-red-400 px-11 py-3 font-semibold text-red-600 cursor-pointer"
          >
            Show Less
          </button>
        )}
      </div>
    </>
  );
};

export default Products;
