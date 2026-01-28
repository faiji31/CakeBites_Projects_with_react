import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard'; 

const SelectedCake = ({ purchasedCakes, removeCake, setToggle }) => {
  return (
    <div className='max-w-7xl mx-auto mt-10 mb-20'>

      {purchasedCakes.length === 0 ? (
        <div className="text-center py-20 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
          <h3 className="text-2xl font-bold opacity-50">Your cart is empty! 🍰</h3>
          <button onClick={() => setToggle(true)} className="btn btn-primary mt-4">Go Shopping</button>
        </div>
      ) : (

        purchasedCakes.map((cake) => (
          <SelectedCard 
            key={cake.id} 
            cake={cake} 
            removeCake={removeCake} 
          />
        ))
      )}
      

      {purchasedCakes.length > 0 && (
        <button 
          onClick={() => setToggle(true)} 
          className="btn btn-secondary mt-8 font-bold"
        >
          Add More Cake
        </button>
      )}
    </div>
  );
};

export default SelectedCake;