import React, { useState } from 'react'
import type { ITechItem } from '../Type/TechItem';
import { toast } from "react-toastify";
interface CardProps {
    tech: ITechItem;
    
}
const Card = ({ tech } : CardProps ) => {
    const [isAdded, setIsAdded] = useState(false);
    const handleAddToStack = () => {
         toast.success("Added to Stack!")
        setIsAdded(true);

    };
  return (
    <div
          key={tech.id}
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          {/* Badge */}
          <div className="flex justify-end">
            <span
              className={`rounded-full px-3 py-2 text-xs font-medium ${
                tech.badge === "Popular"
                  ? "bg-blue-100 text-blue-500"
                  : tech.badge === "Standard"
                    ? "bg-green-100 text-green-500"
                    : tech.badge === "Essential"
                      ? "bg-purple-100 text-purple-500"
                      : "bg-orange-100 text-orange-500"
              }`}
            >
              {tech.badge}
            </span>
          </div>

          {/* Icon */}
          <img src={tech.icon} alt={tech.name} className="h-9 w-9" />

          {/* Name */}
          <h2 className="mt-3 text-lg font-bold">{tech.name}</h2>
            
          {/* Description */}
          <p className="mt-1 text-sm py-2 text-wrap text-gray-500 ">
            {tech.description}
          </p>

          {/* Info */}
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
              {tech.category}
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
              {tech.difficulty}
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
              ⭐ {tech.rating}
            </span>
          </div>

          {/* Button */}
          <button 
            className={`mt-6 w-full rounded-md ${isAdded ? "bg-gray-100 border border-gray-300 text-black" : "bg-gray-950 text-white"} py-2 text-xs font-bold  transition-colors duration-300 hover:`}
            onClick={() => handleAddToStack()}
          >
            {isAdded ? "Added to Stack" : "Add to Stack"}
          </button>
        </div>
  )
}

export default Card