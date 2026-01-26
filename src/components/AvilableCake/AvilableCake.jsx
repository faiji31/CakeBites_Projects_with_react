import React, { use } from "react";
import CakeCard from "../CakeCard/CakeCard";

const AvilableCake = ({ fetchcake }) => {
  const cakeData = use(fetchcake);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Available Cakes</h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cakeData.map((cake) => (
          
          <div key={cake.id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={cake.image_url} alt={cake.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Cake Name: {cake.name}</h2>
              <p>Category: {cake.category}</p>
              <p>Description: {cake.description}</p>
              <p>Price: ${cake.price}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvilableCake;