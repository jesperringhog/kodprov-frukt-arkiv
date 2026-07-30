import { Fruit } from "../types/Fruit";
import { FruitCard } from "./FruitCard";

type NutritionsSpecsProps = {
  category: string;
  value: number;
};

const NutritionsSpecs = ({ category, value }: NutritionsSpecsProps) => (
  <p className="flex justify-between">
    {category} <strong>{value}</strong>
  </p>
);

type FruitDetailsProps = {
  fruit: Fruit;
};

export const FruitDetails = ({ fruit }: FruitDetailsProps) => (
  <section className="w-full">
    <div className="md:flex">
      <FruitCard
        fruit={fruit}
        nameContainerClass="rounded-t-xl md:rounded-tr-none"
        imgContainerClass="h-auto md:rounded-tr-xl"
      />
    </div>
    <article className="p-10 flex text-sm bg-white rounded-b-xl">
      <div className="flex-1">
        <h4 className="font-bold underline">Nutritions:</h4>
        <NutritionsSpecs
          category="Calories:"
          value={fruit.nutritions.calories}
        />
        <NutritionsSpecs
          category="Carbohydrates:"
          value={fruit.nutritions.carbohydrates}
        />
        <NutritionsSpecs category="Fat:" value={fruit.nutritions.fat} />
        <NutritionsSpecs category="Protein:" value={fruit.nutritions.protein} />
        <NutritionsSpecs category="Sugar:" value={fruit.nutritions.sugar} />
      </div>
      <div className="hidden md:block md:flex-1 lg:flex-2 xl:flex-3"></div>
    </article>
  </section>
);
