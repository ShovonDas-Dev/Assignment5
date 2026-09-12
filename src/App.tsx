

import './index.css'
import type { ITechItem } from './Type/TechItem'
import Navber from "./Components/Navber"
import HeroSection from './Components/HeroSection'
import TechnologySection from './Components/TechnologySection'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'
import { SyncLoader } from "react-spinners";



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
      <Suspense fallback={<div className="flex justify-center  h-screen"><SyncLoader color="#6366f1" size={10} /></div>}>
        <TechnologySection techPromise={techPromise} />
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
