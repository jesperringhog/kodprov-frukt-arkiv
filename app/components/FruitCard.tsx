import { Fruit } from "../types/Fruit";

type FruitCardProps = {
  fruit: Fruit;
};

export const FruitCard = ({ fruit }: FruitCardProps) => (
  <>
    <div>
      <h2 className="text-lg font-bold">{fruit.name}</h2>
      <p>{fruit.family}</p>
    </div>
    <div className="size-30 flex justify-center items-center text-5xl bg-gray-300">
      🍎
    </div>
  </>
);
