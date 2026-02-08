import { Link } from "react-router";
import envelope from "../assets/envelope.png";

const Envelope = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-red-500 to-pink-500">
      <div className="text-center">
        <Link to="/msg">
          <img
            className="lg:w-[500px] lg:h-[500px] mx-auto cursor-pointer shake hover:scale-105 transition-transform duration-300"
            src={envelope}
            alt="Envelope"
          />
        </Link>

        <h2 className="text-3xl lg:text-4xl font-bold text-center relative top-[-80px]  lg:top-[-100px] text-white">
          You got a Message. <br />
          Tap on the envelope, please 💌
        </h2>
      </div>
    </div>
  );
};

export default Envelope;
