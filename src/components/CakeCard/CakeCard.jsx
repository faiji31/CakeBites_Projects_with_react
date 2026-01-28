import React from 'react';



const CakeCard = ({ cake, setPurchasedCakes, purchasedCakes, availableBalance, setAvailableBalance }) => {
  

  const isSelected = purchasedCakes.find(p => p.id === cake.id);

  const handleSelectCake = (cakeData) => {
    const price = parseInt(cakeData.price);


    if (availableBalance < price) {
      alert("Insufficient balance to buy this cake!");
      return;
    }


    setAvailableBalance(availableBalance - price);
    setPurchasedCakes([...purchasedCakes, cakeData]);
    

    alert(`${cakeData.name} added to your treats!`);
  };

  return (
    <div className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 overflow-hidden">
      
      <figure className="relative overflow-hidden h-64">
        <img 
          src={cake.image_url} 
          alt={cake.name} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <div className="badge badge-secondary font-semibold p-3 shadow-sm">{cake.category}</div>
        </div>
      </figure>

      <div className="card-body gap-3">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-2xl font-bold text-base-content">
            {cake.name}
          </h2>
          <span className="text-xl font-black text-primary">${cake.price}</span>
        </div>

        <p className="text-sm text-base-content/70 line-clamp-2 leading-relaxed">
          {cake.description}
        </p>

        <div className="card-actions justify-end mt-4">
          <button 
            disabled={isSelected} 
            onClick={() => handleSelectCake(cake)} 
            className={`btn btn-block group-hover:scale-[1.02] transition-transform font-bold ${isSelected ? 'btn-disabled' : 'btn-primary'}`}
          >
            {isSelected ? "Purchased" : "Add to Cart"}
            {!isSelected && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;