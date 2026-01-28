import React, { use } from "react";
import CakeCard from "../CakeCard/CakeCard";

const AvilableCake = ({ fetchcake, setPurchasedCakes, purchasedCakes, availableBalance, setAvailableBalance }) => {
  const cakeData = use(fetchcake);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cakeData.map((cake) => ( 
          <CakeCard 
            key={cake.id} 
            cake={cake}
            setPurchasedCakes={setPurchasedCakes}
            purchasedCakes={purchasedCakes}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
          />
        ))}
      </div>
    </div>
  );
};

export default AvilableCake;