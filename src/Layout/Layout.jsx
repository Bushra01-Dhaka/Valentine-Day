import { Link, Outlet, ScrollRestoration } from "react-router";

const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/heart.mp4" type="video/mp4" />
      </video>

      {/* Optional overlay (recommended for readability) */}
      <div className="absolute inset-0 bg-red-500/40 -z-10"></div>

      {/* Page Content */}
      <div className="relative z-10">
        <Outlet />
      </div>
      <div>
        <p className="text-end text-xs px-4 bg-linear-to-br from-red-500 to-pink-500">Created by <Link to="https://bushra-portfolio.surge.sh/">Bushra</Link></p>
      </div>
       <ScrollRestoration/>
    </div>
  );
};

export default Layout;
