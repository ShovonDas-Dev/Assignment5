
import { toast } from "react-toastify";
import type { ITechItem } from "../Type/TechItem";

interface TechnologyStackProps {
    stackItems: ITechItem[];
    setStackItems: React.Dispatch<React.SetStateAction<ITechItem[]>>;
}

const TechnologyStack = ( { stackItems, setStackItems }: TechnologyStackProps ) => {
  
  const handleRemoveTech = (tech: ITechItem) => {
    toast.dark("Removed from Stack!")
    setStackItems(stackItems.filter((t) => t !== tech));
  } 
  
    
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      {/* Heading */}
      <h2 className=" text-lg md:text-xl font-bold text-slate-900">
        Your Stack
      </h2>

      {/* Subtitle */}
      {stackItems.length === 0 ? (
       <div>
         <p className="mt-2 text-sm md:text-base text-slate-500">No technologies selected yet.</p>
        <div className="mt-5 flex h-16 md:h-22 items-center justify-center rounded-2xl border border-dashed border-slate-300">
        <p className="text-base text-slate-500">
          Your stack is empty.
        </p>
      </div>
       </div>
      ): <div>
        <p className="mt-2  text-slate-500">{stackItems.length} Technology Selected</p>
        {stackItems.map((tech) => (
          <div>
            <div key={tech.name} className="mt-5 flex items-center gap-4 rounded-2xl border  justify-around border-slate-200 p-4">
            <img src={tech.icon} alt={tech.name} className="h-8 w-8" /> 
            <div>
              <h3 className="font-bold text-slate-900">{tech.name}</h3>
              <p className="text-sm text-slate-500">{tech.category}</p>
            </div>
            <div>
              <button
              onClick={() => handleRemoveTech(tech)}
              className="px-3 py-1  text-3xl font-bold  cursor-pointer hover:scale-110 hover:text-red-500 ">
                ×
              </button>
            </div>
          </div>

          </div>
        ))}
                  <div>
            <button
            onClick={() => {
              toast.warning("Stack Cleared!");
              setStackItems([]);
            }}
            className="mt-4 w-full rounded-md  py-2 text-sm font-bold text-red-600 border border-red-500 transition-colors duration-300 hover:bg-red-50 hover:text-red-700">
              Clear Stack
            </button>
          </div>
      </div>}
      {/* Empty Stack Box */}
      
    </div>
  )
}

export default TechnologyStack