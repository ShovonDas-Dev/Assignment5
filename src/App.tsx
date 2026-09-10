

import './index.css'
import type { ITechItem } from './Type/TechItem'
import Navber from "./Components/Navber"

function App() {
  const techData = async() : Promise<ITechItem> =>{
    const fatch = await fetch("/data.json")
    return await fatch.json()
    
  }
  const techPromise = techData()
  
 
  
  return (
    <>
      <Navber/>
      
    </>
  )
}

export default App
