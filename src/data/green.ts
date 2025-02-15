export const generateData = () => {
  const baseData = [
    { name: 'Page A', uv: 40 },
    { name: 'Page B', uv: 30 },
    { name: 'Page C', uv: 80 },
    { name: 'Page D', uv: 30 },
    { name: 'Page E', uv: 120 },
    { name: 'Page F', uv: 30 },
    { name: 'Page G', uv: 30 },
    { name: 'Page H', uv: 30 },
    { name: 'Page I', uv: 80 },
    { name: 'Page J', uv: 30 },
    { name: 'Page K', uv: 30 },
    { name: 'Page L', uv: 30 },
    { name: 'Page M', uv: 30 },
    { name: 'Page N', uv: 30 },
    { name: 'Page O', uv: 30 },
    { name: 'Page P', uv: 30 },
    { name: 'Page Q', uv: 30 },
    { name: 'Page R', uv: 30 },
    { name: 'Page S`', uv: 30 },
    { name: 'Page T', uv: 30 },
  ];

  const repeatedData = Array.from({ length: 3 }).flatMap((_, i) =>
    baseData.map((item) => ({
      ...item,
      name: `${item.name} - Batch ${i + 1}`,
    })),
  );

  return repeatedData.concat({ name: 'max page', uv: 180 });
};

export const green = generateData();
