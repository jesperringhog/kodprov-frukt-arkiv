import React from "react";
import { Fruit } from "../types/Fruit";

type InfoContainerProps = {
  title: string;
  value: number;
};

const InfoContainer = ({ title, value }: InfoContainerProps) => (
  <div className="p-10 bg-white rounded-xl">
    <h3>{title}</h3>
    <strong>{value}</strong>
  </div>
);

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
    <article className="flex flex-col md:flex-row gap-5">
      <InfoContainer title="Fruits total:" value={fruitsTotal} />
      <InfoContainer title="Average calories:" value={averageCalories} />
    </article>
  );
};
