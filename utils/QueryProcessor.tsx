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


  return "";
}
