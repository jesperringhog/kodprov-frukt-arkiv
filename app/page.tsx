import { getFruits } from "./services/fruitService";
import { Fruit } from "./types/Fruit";
import { FruitCard } from "./components/FruitCard";
import Link from "next/link";

export default async function Home() {
  const fruits: Fruit[] = await getFruits();

  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {fruits.map((f) => (
        <div key={f.id} className="w-60 h-80 p-10 flex flex-col gap-5 border">
          <FruitCard fruit={f} />
          <Link
            href={`/fruits/${f.id}`}
            className="p-3 bg-black text-white text-center"
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}
