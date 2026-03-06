import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

export default function Banner({ tickets, resolvedTickets }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* banner card 1 */}
      <div className="card card-border relative bg-linear-65 from-[#422AD5] to-[#9F62F2] py-10">
        <img
          className="absolute left-0 top-0 object-contain"
          src={vector1}
          alt="Vector 1"
        />
        <img
          className="absolute right-0 top-0 object-contain"
          src={vector2}
          alt="Vector 2"
        />
        <div className="card-body text-white text-center items-center">
          <h2 className="text-2xl">In-Progress</h2>
          <h1 className="text-6xl font-semibold">{tickets.length}</h1>
        </div>
      </div>
      {/* banner card 2 */}
      <div className="card card-border relative bg-linear-65 from-[#54CF68] to-[#00827A] py-10">
        <img
          className="absolute left-0 top-0 object-contain"
          src={vector1}
          alt="Vector 1"
        />
        <img
          className="absolute right-0 top-0 object-contain"
          src={vector2}
          alt="Vector 2"
        />
        <div className="card-body text-white text-center items-center">
          <h2 className="text-2xl">Resolved</h2>
          <h1 className="text-6xl font-semibold">{resolvedTickets.length}</h1>
        </div>
      </div>
    </div>
  );
}
