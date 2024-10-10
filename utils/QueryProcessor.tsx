export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase() == "what is your andrew id?") {
    return "minghanm";
  }

  if (query.toLowerCase() == "what is your name?") {
    return "IMFINE";
  }

  const arithmeticRegex = /what\sis\s(\d+)\splus\s(\d+)\?/i;
  const match = query.match(arithmeticRegex);
  if (match) {
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);
    const result = num1 + num2;
    return `${result}`;
  }

  const largestNumberRegex = /which\s+of\s+the\s+following\s+numbers\s+is\s+the\s+largest:\s*(\d+),\s*(\d+),\s*(\d+)\?/i;
  const largestMatch = query.match(largestNumberRegex);
  if (largestMatch) {
    const numbers = largestMatch.slice(1).map(num => parseInt(num, 10));
    const largest = Math.max(...numbers);
    return `${largest}`;
  }

  const squareCubeRegex = /which\s+of\s+the\s+following\s+numbers\s+is\s+both\s+a\s+square\s+and\s+a\s+cube:\s*([\d,\s]+)\?/i;
  const squareCubeMatch = query.match(squareCubeRegex);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));

    const isPerfectSixthPower = (num: number) => {
      const root = Math.pow(num, 1 / 6);
      return Number.isInteger(root);
    };

    const perfectSixthPowers = numbers.filter(isPerfectSixthPower);

    if (perfectSixthPowers.length > 0) {
      return `${perfectSixthPowers.join(', ')}`;
    } else {
      return "None of the given numbers are both a square and a cube.";
    }
  }

  const multiplicationRegex = /what\sis\s(\d+)\smultiplied\sby\s(\d+)\?/i;
  const multiplicationMatch = query.match(multiplicationRegex);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    const result = num1 * num2;
    return `${result}`;
  }

  return "";
}
