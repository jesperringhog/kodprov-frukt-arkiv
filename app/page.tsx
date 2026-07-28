import { getFruits } from "./services/fruitService";

export default async function Home() {
  const fruits = await getFruits();

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {fruits.map((f) => (
        <div key={f.id} className="w-60 p-10 flex flex-col gap-5 border">
          <div>
            <h2 className="text-xl font-bold">{f.name}</h2>
            <p>{f.family}</p>
          </div>
          <div className="size-30 flex justify-center items-center text-5xl bg-gray-300">🍎</div>
          <div className="text-sm">
          <h4 className="font-bold underline">Nutritions:</h4>
            <p className="flex justify-between">
              Calories: <strong>{f.nutritions.calories}</strong>
            </p>
            <p className="flex justify-between">
              Carbohydrates: <strong>{f.nutritions.carbohydrates}</strong>
            </p>
            <p className="flex justify-between">
              Fat: <strong>{f.nutritions.fat}</strong>
            </p>
            <p className="flex justify-between">
              Protein: <strong>{f.nutritions.protein}</strong>
            </p>
            <p className="flex justify-between">
              Sugar: <strong>{f.nutritions.sugar}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
