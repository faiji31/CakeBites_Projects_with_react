import React, { use } from "react";
import CakeCard from "../CakeCard/CakeCard";

const AvilableCake = ({ fetchcake }) => {
  const cakeData = use(fetchcake);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cakeData.map((cake) => ( 
          <CakeCard cake={cake}></CakeCard>
        ))}
      </div>
    </div>
  );
};

export default AvilableCake;