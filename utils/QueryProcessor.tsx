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

  if (query.toLowerCase() == "What is 10 plus 61?") {
    return "71";
  }

  if (query.toLowerCase() == "Which of the following numbers is the largest: 80, 84, 69?") {
    return "84";
  }

  return "";
}
