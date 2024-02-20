import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons"; // Import the cog icon

const Inprogress = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-rose-600 to-indigo-600 text-white">
      <div className="flex flex-col items-center justify-center border-2 border-white p-10 rounded-lg shadow-lg">
        <p className="text-3xl font-semibold mb-6">We Apologize!</p>
        <p className="text-lg mb-8">Our server is currently undergoing maintenance.</p>
        <div className="flex items-center justify-center space-x-4">
          {/* Icon Animation */}
          <FontAwesomeIcon icon={faCog} className="animate-spin text-5xl" />
          <FontAwesomeIcon icon={faCog} className="animate-spin text-3xl" />
        </div>
        <p className="text-lg mt-8">Our portfolio will be back online shortly.</p>
      </div>
    </div>
  );
};

export default Inprogress;
