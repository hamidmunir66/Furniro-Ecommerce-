import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../../redux/cartSlice";
import { CgAdd, CgRemove } from "react-icons/cg";
import { FiTrash2, FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <section className="min-h-screen bg-[#FFF3E3] px-4 py-10 md:px-8 lg:px-16">
      
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl">
        <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl">
          Shopping Cart
        </h1>

        <p className="mt-2 text-gray-500">
          Review your items before checkout
        </p>
      </div>

      {cart.length === 0 ? (
        /* Empty Cart */
        <div className="mx-auto flex min-h-[500px] max-w-7xl flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF3E3]">
            <FiShoppingBag className="text-3xl text-yellow-600" />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800">
            Your cart is empty
          </h2>

          <p className="mt-2 max-w-md text-gray-500">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/"
            className="mt-7 flex items-center gap-2 bg-[#B88E2F] px-7 py-3 font-medium text-white transition hover:bg-[#9d7926]"
          >
            <FiArrowLeft />
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]">

         
          <div className="space-y-5">

            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
              >

               
                <div className="h-40 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-36 sm:w-36">
                  <img
                    src={product.img}
                    alt={product.heading}
                    className="h-full w-full object-cover"
                  />
                </div>

                
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {product.heading}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {product.description}
                  </p>

                  <p className="mt-2 text-sm capitalize text-gray-400">
                    {product.category}
                  </p>

                  <p className="mt-3 font-medium text-gray-700">
                    Rs. {product.price.toLocaleString()}
                  </p>
                </div>

               
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleRemove(product)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-100"
                  >
                    <CgRemove />
                  </button>

                  <span className="flex h-9 min-w-10 items-center justify-center rounded-lg border border-gray-200 px-3 font-medium">
                    {product.quantity}
                  </span>

                  <button
                    onClick={() => handleAdd(product)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-100"
                  >
                    <CgAdd />
                  </button>
                </div>

                
                <div className="flex items-center justify-between gap-5 sm:block sm:text-right">
                  <div>
                    <p className="text-xs text-gray-400">
                      Subtotal
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      Rs.{" "}
                      {(product.price * product.quantity).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      for (let i = 0; i < product.quantity; i++) {
                        dispatch(removeItem(product));
                      }
                    }}
                    className="text-gray-400 transition hover:text-red-500"
                    title="Remove item"
                  >
                    <FiTrash2 className="text-lg" />
                  </button>
                </div>

              </div>
            ))}

            
            <Link
              to="/"
              className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-gray-600 transition hover:text-[#B88E2F]"
            >
              <FiArrowLeft />
              Continue Shopping
            </Link>
          </div>

          
          <div className="h-fit rounded-2xl bg-white p-7 shadow-sm lg:sticky lg:top-24">
            
            <h2 className="text-2xl font-semibold text-gray-800">
              Cart Summary
            </h2>

            <div className="my-6 border-t border-gray-100" />

            <div className="space-y-4">

              <div className="flex justify-between text-gray-500">
                <span>Items</span>
                <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>
                  Rs. {total.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className="font-medium text-green-600">
                  Free
                </span>
              </div>

            </div>

            <div className="my-6 border-t border-gray-100" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-700">
                Total
              </span>

              <span className="text-2xl font-bold text-[#B88E2F]">
                Rs. {total.toLocaleString()}
              </span>
            </div>

            <button className="mt-7 w-full bg-[#B88E2F] py-4 font-semibold text-white transition hover:bg-[#9d7926]">
              Proceed to Checkout
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCart;