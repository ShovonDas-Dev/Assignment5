
import type { ITechItem } from "../Type/TechItem";
import Card from "./Card";
interface TechnologyCardsProps {
  techData: ITechItem[];
  stackItems: ITechItem[];
  setStackItems: React.Dispatch<React.SetStateAction<ITechItem[]>>;
}
const TechnologyCards = ({ techData, stackItems, setStackItems }: TechnologyCardsProps) => {


  return (
    <div className="grid grid-cols-3 gap-4">
      {techData.map((tech) => (
        <Card key={tech.id} tech={tech} stackItems={stackItems} setStackItems={setStackItems} />
      ))}
    </div>
  );
};

export default TechnologyCards;
