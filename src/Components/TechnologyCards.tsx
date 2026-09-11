import { useState } from "react";
import type { ITechItem } from "../Type/TechItem";
import Card from "./Card";
interface TechnologyCardsProps {
  techData: ITechItem[];
}
const TechnologyCards = ({ techData }: TechnologyCardsProps) => {
    const [isAdded, setIsAdded] = useState(false);
    const handleAddToStack = () => {
        setIsAdded(true);
    };
    console.log(isAdded);
  return (
    <div className="grid grid-cols-3 gap-4">
      {techData.map((tech) => (
        <Card key={tech.id} tech={tech} />
      ))}
    </div>
  );
};

export default TechnologyCards;
