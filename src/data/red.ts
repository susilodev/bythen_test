export const generateData = () => {
  const baseData = [
    { name: 'Page A', uv: 0 },
    { name: 'Page B', uv: 32 },
    { name: 'Page C', uv: 32 },
    { name: 'Page D', uv: 0 },
  ];

  const repeatedData = Array.from({ length: 6 }).flatMap((_, i) =>
    baseData.map((item) => ({
      ...item,
      name: `${item.name} - Batch ${i + 1}`,
    })),
  );

  return repeatedData.concat({ name: 'max page', uv: 50 });
};

export const red = generateData();
