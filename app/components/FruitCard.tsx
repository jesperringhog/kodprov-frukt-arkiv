import Image from "next/image";
import { Fruit } from "../types/Fruit";

type FruitCardProps = {
  fruit: Fruit;
  nameContainerClass: string;
  imgContainerClass: string;
};

export const FruitCard = ({
  fruit,
  nameContainerClass,
  imgContainerClass,
}: FruitCardProps) => (
  <>
    <div
      className={`w-full h-auto px-10 py-5 bg-green-300 
        ${nameContainerClass}`}
    >
      <h2 className="text-lg font-bold">{fruit.name}</h2>
      <p>{fruit.family}</p>
    </div>
    <div className={`w-full p-10 flex justify-center items-center text-5xl bg-gray-300
      ${imgContainerClass}`}>
      {fruit.image ? (
        <Image src={fruit.image} alt={fruit.name} width={100} height={100} />
      ) : (
        "🍎"
      )}
    </div>
  </>
);
