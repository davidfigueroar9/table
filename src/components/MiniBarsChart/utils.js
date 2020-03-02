export function parseToPersents(values) {
  const hasNegative = !!values.find(value => value < 0);
  const hasPositive = !!values.find(value => value > 0);

  const biggest = Math.max(...values.map(v => Math.abs(v)));

  const positivePercents = values.map(n => {
    if (!n || n < 0) return 0;

    const percent = (n * 100) / biggest;
    return percent.toFixed();
  });

  const negativePercents = values.map(n => {
    if (!n || n > 0) return 0;
    const percent = (Math.abs(n) * 100) / biggest;
    return percent.toFixed();
  });

  return {
    hasNegative,
    hasPositive,
    positivePercents,
    negativePercents
  };
}
