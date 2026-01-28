import './App.css';
import AvilableCake from './components/AvilableCake/AvilableCake';
import NavBar from './components/NavBar/NavBar';
import SelectedCake from './components/SelectedCake/SelectedCake'; 
import { Suspense, useState } from 'react';




const fetchcake = fetch('/cake.json').then(res => res.json());

function App() {
  const [toggle, setToggle] = useState(true); 
  const [availableBalance, setAvailableBalance] = useState(400);
  const [purchasedCakes, setPurchasedCakes] = useState([]);


  const removeCake = (cakeToRemove) => {
    const remainingCakes = purchasedCakes.filter(cake => cake.id !== cakeToRemove.id);
    setPurchasedCakes(remainingCakes);
    

    setAvailableBalance(availableBalance + parseInt(cakeToRemove.price));
 
  };

  return (
    <>
     
      <NavBar availableBalance={availableBalance}></NavBar>

      <div className='justify-between flex items-center max-w-7xl mx-auto mt-10 font-bold px-4'>
        <h2 className='text-2xl font-semibold'>
          {toggle === true ? "Available Cakes" : `Selected Cakes (${purchasedCakes.length})`}
        </h2>
        
        <div className="flex">
          <button 
            onClick={() => setToggle(true)} 
            className={`px-6 py-3 border border-gray-400 rounded-l-2xl ${toggle === true ? 'bg-secondary text-white' : "bg-transparent"}`}
          >
            Available
          </button>
          <button 
            onClick={() => setToggle(false)} 
            className={`px-6 py-3 border border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? 'bg-secondary text-white' : "bg-transparent"}`}
          >
            Selected ({purchasedCakes.length})
          </button>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto p-4">
        {toggle === true ? (
          <Suspense fallback={<div className="flex justify-center mt-20"><span className="loading loading-dots loading-lg"></span></div>}>
            <AvilableCake 
              fetchcake={fetchcake} 
              setPurchasedCakes={setPurchasedCakes} 
              purchasedCakes={purchasedCakes} 
              availableBalance={availableBalance} 
              setAvailableBalance={setAvailableBalance} 
            />
          </Suspense>
        ) : (
          <SelectedCake 
            removeCake={removeCake} 
            purchasedCakes={purchasedCakes} 
            setToggle={setToggle} 
          />
        )}
  
      </main>

     
    </>
  );
}

export default App;