import React, { use } from "react";
import CakeCard from "../CakeCard/CakeCard";

const AvilableCake = ({ fetchcake }) => {
  const cakeData = use(fetchcake);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Available Cakes</h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cakeData.map((cake) => ( 
          <CakeCard cake={cake}></CakeCard>
        ))}
      </div>
    </div>
  );
};

export default AvilableCake;