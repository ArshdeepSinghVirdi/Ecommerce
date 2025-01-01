import { Outlet } from "react-router-dom";
import Image from "../../assets/bg2.webp"; 

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div
        className="hidden lg:flex items-center justify-center w-1/2 px-12 relative"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="absolute  w-full text-center text-primary-foreground px-4">
          <h1 className="text-5xl font-extrabold tracking-wide text-black drop-shadow-lg">
            Welcome to <span className="text-black">ECommerce Shopping</span>
          </h1>
          <p className="text-lg text-gray-700 font-medium mt-2">
            Experience the best deals and products, curated just for you!
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
