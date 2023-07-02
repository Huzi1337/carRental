export const transformLabel = (label: string) => {
  const words = label.split(/(?=[A-Z])/);

  const transformedLabel = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return transformedLabel;
};
