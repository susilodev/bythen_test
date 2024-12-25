export const generateData = () => {
  const baseData = [
    { name: 'Page A', uv: 40 },
    { name: 'Page B', uv: 30 },
    { name: 'Page C', uv: 120 },
    { name: 'Page D', uv: 40 },
  ];

  const repeatedData = Array.from({ length: 6 }).flatMap((_, i) =>
    baseData.map((item) => ({
      ...item,
      name: `${item.name} - Batch ${i + 1}`,
    })),
  );

  return repeatedData.concat({ name: 'max page', uv: 180 });
};

export const blue = generateData();
