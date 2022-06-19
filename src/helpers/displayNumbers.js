let formatter = Intl.NumberFormat("en", {
  notation: "compact",
  compactDisplay: "long",
});

export const bigNumberFormatter = (numberToFormat) => {
  return formatter.format(Math.round(numberToFormat));
};
