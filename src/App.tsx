

import './index.css'
import type { ITechItem } from './Type/TechItem'
import Navber from "./Components/Navber"
import HeroSection from './Components/HeroSection'
import TechnologySection from './Components/TechnologySection'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'



function App() {
  const techData = async() : Promise<ITechItem[]> =>{
    const response = await fetch("/data.json")
    return await response.json()
  }
  const techPromise = techData()
  
 
  
  return (
    <>
    {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        draggable
        theme="light"
      />

      <Navber/>
      <HeroSection/>
      <Suspense fallback={<div className='text-center text-2xl font-bold text-gray-900'>Loading...</div>}>
        <TechnologySection techPromise={techPromise} />
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
