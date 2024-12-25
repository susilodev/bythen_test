export const generateData = () => {
  const baseData = [
    { name: 'Page B', uv: 60 },
    { name: 'Page C', uv: 20 },
    { name: 'Page D', uv: 60 },
    { name: 'Page E', uv: 20 },
  ];

  const repeatedData = Array.from({ length: 4 }).flatMap((_, i) =>
    baseData.map((item) => ({
      ...item,
      name: `${item.name} - Batch ${i + 1}`,
    })),
  );

  return repeatedData.concat({ name: 'max page', uv: 60 });
};

export const greenLight = generateData();
