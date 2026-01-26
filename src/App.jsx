
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
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
           <AvilableCake fetchcake={fetchcake}></AvilableCake>
        </Suspense>
        {/* <SelectedCake></SelectedCake> */}
     
    </>
  )
}

export default App
