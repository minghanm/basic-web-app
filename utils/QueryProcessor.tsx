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
      return "None";
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

  const primeRegex = /which\s+of\s+the\s+following\s+numbers\s+are\s+primes:\s*([\d,\s]+)\?/i;
  const primeMatch = query.match(primeRegex);
  if (primeMatch) {
    const numbers = primeMatch[1].split(',').map(num => parseInt(num.trim(), 10));

    // Helper function to check if a number is prime
    const isPrime = (num: number) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };

    // Iterate through the numbers and collect primes
    const primes: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        primes.push(numbers[i]);
      }
    }

    if (primes.length > 0) {
      return `${primes.join(', ')}`;
    } else {
      return "None";
    }
  }

  const subtractionRegex = /what\sis\s(\d+)\sminus\s(\d+)\?/i;
  const subtractionMatch = query.match(subtractionRegex);
  if (subtractionMatch) {
    const num1 = parseInt(subtractionMatch[1], 10);
    const num2 = parseInt(subtractionMatch[2], 10);
    const result = num1 - num2;
    return `${result}`;
  }

  const powerRegex = /what\sis\s(\d+)\sto\s+the\s+power\s+of\s(\d+)\?/i;
  const powerMatch = query.match(powerRegex);
  if (powerMatch) {
    const base = parseInt(powerMatch[1], 10);
    const exponent = parseInt(powerMatch[2], 10);
    const result = Math.pow(base, exponent);
    return `${result}`;
  }

  const additionRegex = /what\sis\s(\d+)\splus\s(\d+)\splus\s(\d+)\?/i;
  const additionMatch = query.match(additionRegex);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1], 10);
    const num2 = parseInt(additionMatch[2], 10);
    const num3 = parseInt(additionMatch[3], 10);
    const result = num1 + num2 + num3;
    return `${result}`;
  }



  return "";
}
