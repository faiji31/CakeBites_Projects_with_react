import React from 'react';
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ cake, removeCake }) => {

  if (!cake) return null;

  const handleRemove = () => {
    removeCake(cake);
  };

  return (
    <div className="px-2">
      <div className="flex justify-between items-center border-base-300 border p-4 rounded-2xl mt-4 bg-base-100 shadow-sm hover:border-error/30 transition-colors">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-16 h-16 rounded-xl ring ring-base-200 ring-offset-base-100 ring-offset-2">
              <img src={cake.image_url} alt={cake.name} />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-base-content">{cake.name}</h2>
            <p className="text-sm text-base-content/60 font-semibold">${cake.price}</p>
          </div>
        </div>

        <div 
          onClick={handleRemove} 
          className="text-error cursor-pointer hover:bg-error/10 p-3 rounded-full transition-all active:scale-90"
          title="Remove from cart"
        >
          <MdDelete size={28} />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;