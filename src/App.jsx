
import './App.css'
import AvilableCake from './components/AvilableCake/AvilableCake'
import NavBar from './components/NavBar/NavBar'
import SelectedCake from './components/SelectedCake/SelectedCake'
import { Suspense } from 'react'



const fetchcake =fetch('/cake.json').then(res=>res.json())


function App() {


  return (
    <>
      <NavBar></NavBar>
      <div className='justify-between flex max-w-7xl mx-auto mt-5'>
        <h2>Avilable Cake</h2>
        <div>
          <button>Avilable Cake</button>
           <button>Seleted Cake</button>
        </div>
      </div>
      
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
           <AvilableCake fetchcake={fetchcake}></AvilableCake>
        </Suspense>
        {/* <SelectedCake></SelectedCake> */}
     
    </>
  )
}

export default App
