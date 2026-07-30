import { Fruit } from "../types/Fruit";

type FruitsCalculationProps = {
  fruits: Fruit[];
};

export const FruitsCalculation = ({ fruits }: FruitsCalculationProps) => {
  const fruitsTotal = fruits.length;

  const averageCalories = Math.ceil(
    fruits.reduce((sum, fruit) => sum + fruit.nutritions.calories, 0) /
      fruitsTotal,
  );

  return (
    <article className="flex gap-10">
      <div>
        <h3>Fruits total:</h3>
        <strong>{fruitsTotal}</strong>
      </div>
      <div>
        <h3>Average calories:</h3>
        <strong>{averageCalories}</strong>
      </div>
    </article>
  );
};
