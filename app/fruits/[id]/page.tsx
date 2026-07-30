import { FruitCard } from "@/app/components/FruitCard";
import { NutritionsSpecs } from "@/app/components/NutritionsSpecs";
import { getFruitById } from "@/app/services/fruitService";

type FruitByIdProps = {
  params: Promise<{ id: string }>;
};

export default async function FruitById({ params }: FruitByIdProps) {
  const { id } = await params;

  const fruit = await getFruitById(id);

  return (
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
          <NutritionsSpecs
            category="Protein:"
            value={fruit.nutritions.protein}
          />
          <NutritionsSpecs category="Sugar:" value={fruit.nutritions.sugar} />
        </div>
        <div className="hidden md:block md:flex-1 lg:flex-2 xl:flex-3"></div>
      </article>
    </section>
  );
}
