

import './index.css'
import type { ITechItem } from './Type/TechItem'
import Navber from "./Components/Navber"
import HeroSection from './Components/HeroSection'
import TechnologySection from './Components/TechnologySection'
import { Suspense } from 'react'

function App() {
  const techData = async() : Promise<ITechItem[]> =>{
    const response = await fetch("/data.json")
    return await response.json()
  }
  const techPromise = techData()
  
 
  
  return (
    <>
      <Navber/>
      <HeroSection/>
      <Suspense fallback={<div className='text-center text-2xl font-bold text-gray-900'>Loading...</div>}>
        <TechnologySection techPromise={techPromise} />
      </Suspense>
    </>
  )
}

export default App
