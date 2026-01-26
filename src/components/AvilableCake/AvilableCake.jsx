import React, { use } from "react";
import CakeCard from "../CakeCard/CakeCard"

const AvilableCake = ({ fetchcake }) => {
  const cakeData = use(fetchcake)
 
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2>Avilable cake</h2>

      {
           cakeData.map(cake => <CakeCard cake={cake.id}></CakeCard>)
      }

      

      
    </div>
  );
};

export default AvilableCake;
