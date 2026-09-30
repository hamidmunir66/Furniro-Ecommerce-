import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";

import { lazy, Suspense } from "react";
const Login = lazy(() => import("./pages/auth/Login"));
const Signup = lazy(() => import("./pages/auth/Signup"));
const ProductCart = lazy(() => import("./component/cart/ProductCart"));
const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<ProductCart />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
