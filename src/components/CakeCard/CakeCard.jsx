import React from 'react';

const CakeCard = ({cake}) => {
      return (
            <div>
                  <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src=""
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cake Name:{cake.name}</h2>
          <p>Category:</p>
          <p>Description:</p>
          <p>Price:</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
            </div>
      );
};

export default CakeCard;