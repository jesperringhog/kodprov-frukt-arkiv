import { FruitDetails } from "@/app/components/FruitDetails";
import { getFruitById } from "@/app/services/fruitService";

type FruitByIdProps = {
  params: Promise<{ id: string }>;
};

export default async function FruitById({ params }: FruitByIdProps) {
  const { id } = await params;

  const fruit = await getFruitById(id);

  return (
    <FruitDetails fruit={fruit}/>
  );
}
