import { Fruit } from "../types/Fruit";
import { FruitCard } from "./FruitCard";

type FruitDetailsProps = {
  fruit: Fruit;
};

export const FruitDetails = ({ fruit }: FruitDetailsProps) => (
  <div className="w-full p-10 flex flex-col items-center border">
    <FruitCard fruit={fruit} />
    <div className="text-sm">
      <h4 className="font-bold underline">Nutritions:</h4>
      <p className="flex justify-between">
        Calories: <strong>{fruit.nutritions.calories}</strong>
      </p>
      <p className="flex justify-between">
        Carbohydrates: <strong>{fruit.nutritions.carbohydrates}</strong>
      </p>
      <p className="flex justify-between">
        Fat: <strong>{fruit.nutritions.fat}</strong>
      </p>
      <p className="flex justify-between">
        Protein: <strong>{fruit.nutritions.protein}</strong>
      </p>
      <p className="flex justify-between">
        Sugar: <strong>{fruit.nutritions.sugar}</strong>
      </p>
    </div>
  </div>
);
