type NutritionsSpecsProps = {
  category: string;
  value: number;
};

export const NutritionsSpecs = ({ category, value }: NutritionsSpecsProps) => (
  <p className="flex justify-between">
    {category} <strong>{value}</strong>
  </p>
);
