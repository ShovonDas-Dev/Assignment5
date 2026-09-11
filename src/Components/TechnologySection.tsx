import { use } from "react"
import type { ITechItem } from "../Type/TechItem"
import TechnologyCards from "./TechnologyCards";
import TechnologyStack from "./TechnologyStack";

interface TechnologySectionProps {
    techPromise: Promise<ITechItem[]>;
}

const TechnologySection = ({ techPromise }: TechnologySectionProps) => {
    console.log(techPromise);
    const techData = use(techPromise)
    console.log(techData);
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20  '>

        
        {/* Technology Cards header */}
        <div>
            <h1 className='text-3xl font-bold text-gray-900'>Explore the <span className='bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent'>Technologies</span></h1>
            <p className='text-gray-600 mt-4 text-l'>Pick one technology per category to build your ideal stack.</p>
        </div>


        {/* Technology section */}
        <div className='grid grid-cols-12 gap-4 mt-8 justify-center '>
            {/* Technology cards */}
            <div className="col-span-9">
                <TechnologyCards techData={techData} />
            </div>
            {/* Technology Stack */}
            <div className="col-span-3">
                <TechnologyStack/>
            </div>
        </div>



      </div>  
    )
}

export default TechnologySection