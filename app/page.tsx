import { getFruits } from "./services/fruitService";
import { FruitCard } from "./components/FruitCard";
import Link from "next/link";
import { FruitsCalculation } from "./components/FruitsCalculation";

export default async function Home() {
  const fruits = await getFruits();
 
  return (
    <section className="flex flex-col items-center gap-5">
      <FruitsCalculation fruits={fruits} />
      <div className="flex flex-wrap justify-center gap-5">
        {fruits.map((f) => (
          <div key={f.id} className="w-60 h-80 flex flex-col">
            <FruitCard
              fruit={f}
              nameContainerClass="rounded-t-xl"
              imgContainerClass="h-full"
            />
            <Link
              href={`/fruits/${f.id}`}
              className="p-5 bg-green-300 hover:bg-white text-center 
              rounded-b-xl transition-colors duration-300"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
