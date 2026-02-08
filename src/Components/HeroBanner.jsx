import { useEffect, useRef, useState } from "react";
import flowerImg from "../assets/pls.gif";
import hugImg from "../assets/hug.gif";

const HeroBanner = () => {
  const [noPosition, setNoPosition] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false); // new state
  const noBtnRef = useRef(null);


  useEffect(() => {
  const timer = setTimeout(() => {
    if (noBtnRef.current) {
      const rect = noBtnRef.current.getBoundingClientRect();
      setNoPosition({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
      });
    }
  }, 700); // wait until AOS animation finishes

  return () => clearTimeout(timer);
}, []);


  const moveNoButton = () => {
    const padding = 120;

    const randomTop = Math.random() * (window.innerHeight - padding);
    const randomLeft = Math.random() * (window.innerWidth - padding);

    setNoPosition({
      top: randomTop,
      left: randomLeft,
    });
  };

  // ✅ handle Yes click
  const handleYesClick = () => {
    setShowCelebration(true);
  };

  // ----- CELEBRATION PAGE -----
  if (showCelebration) {
    return (
      <div 
      className="flex flex-col justify-center items-center min-h-screen ">
       <div   data-aos="flip-in" data-aos-delay="100">
         <h1   data-aos="zoom-in" data-aos-delay="100" className="text-4xl  p-6 mx-auto  lg:p-0 lg:text-6xl font-extrabold text-center text-white ">
        Happy Valentine’s Day! 💖
        </h1>
        <p className="text-center">From this moment on, you’re my Valentine 💕</p>
       </div>
        <img
           data-aos="fade-up" data-aos-delay="500"
          src={hugImg}
          alt="Flowers"
          className="w-[300px] h-[300px] mt-6 object-cover animate-bounce"
        />
      </div>
    );
  }

  // ----- HERO PAGE -----
  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <div>
        <div className="w-[200px] h-[200px] mx-auto rounded-2xl overflow-hidden ">
          <img
            data-aos="zoom-in" data-aos-delay="100"
            src={flowerImg}
            alt="Dudu Giving Flowers"
            className="w-full h-full object-cover"
          />
        </div>
       <div data-aos="fade-up" data-aos-delay="500">
         <h1 className="text-4xl mx-auto text-center lg:text-6xl font-extrabold">
          Wanna Be My Valentine?
        </h1>
        <p className="py-2 text-lg text-center">Think Carefully</p>
        <div className="py-4 flex justify-center items-center gap-4">
          <button
            className="btn btn-lg bg-red-500 hover:bg-red-600 mr-16 text-white mt-10 shadow-md border-0 btn-primary"
            onClick={handleYesClick} // <-- add click
          >
            Yes 💖
          </button>

          {/* Initial NO button (normal flow first) */}
          {!noPosition && (
            <button
              ref={noBtnRef}
              className="btn btn-lg bg-white text-red-500 border-0 shadow-md"
            >
              No 😉
            </button>
          )}
        </div>

       </div>
        {/* Floating NO button (after position is known) */}
        {noPosition && (
          <button
            className="btn btn-lg bg-white text-red-500 border-0 shadow-md fixed transition-all duration-300"
            style={{
              top: noPosition.top,
              left: noPosition.left,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
          >
            No 😉
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
