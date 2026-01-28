
import './App.css'
import AvilableCake from './components/AvilableCake/AvilableCake'
import NavBar from './components/NavBar/NavBar'
import SelectedCake from './components/SelectedCake/SelectedCake'
import { Suspense,  useState } from 'react'



const fetchcake =fetch('/cake.json').then(res=>res.json())


function App() {

  const [toggle,setToggle]=useState(false)


  return (
    <>
      <NavBar></NavBar>
      <div className='justify-between flex max-w-7xl mx-auto mt-5 font-bold '>
        <h2 className='text-2xl font-semibold'>{toggle === true ? "Available Cake" : "Selected Cake"}</h2>
        <div>
          <button onClick={()=>setToggle(true)} className={`px-3 py-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? 'bg-secondary':""}`}>Avilable Cake</button>
           <button onClick={()=>setToggle(false)} className={`px-3 py-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? 'bg-secondary':""}`}>Seleted Cake</button>
        </div>
      </div>
      
        {
          toggle === true ? <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
           <AvilableCake fetchcake={fetchcake}></AvilableCake>
        </Suspense>:   <SelectedCake></SelectedCake>
      
        }
     
    </>
  )
}

export default App
