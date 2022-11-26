export function mapCategory(categories) {
  return categories.map((category) => {
    return {
      name: category,
      image: `../Images/${category}.png`,
      label: category.toUpperCase(),
    };
  });
}
