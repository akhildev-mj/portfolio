export const getSortedCategories = <T extends { category: string }>(
	data: T[]
) => [
	'All',
	...Object.entries(
		data.reduce(
			(acc, { category }) => {
				acc[category] = (acc[category] || 0) + 1;
				return acc;
			},
			{} as Record<string, number>
		)
	)
		.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
		.map(([c]) => c),
];
