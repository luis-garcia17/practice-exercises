"use client";
import { useEffect } from "react";
import Prism from "../../../utils/prism";

const AveragePairPage = () => {

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism
    };
    highlight(); // <--- call the async function
  });

  const averagePairExamples = `
    averagePair([1, 2, 3], 2.5); // true
    averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
    averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
    averagePair([], 4); // false
    `
const averagePair = (numberArr: number[], targetAvg: number): boolean => {
  
  // If the array is empty or if it only has one element return false.

  if (numberArr.length === 0 || numberArr.length === 1) return false;

  // Create a pointer to the end of the array.

  let pointer = numberArr.length - 1;

  // Loop over the array, add the current element to the pointer and divide it by two.

  for (let i = 0; i < pointer; i++ ) {

    let average = (numberArr[i] + numberArr[pointer]) / 2

    // If the average is equal to the target average return true.
    if (average === targetAvg) return true
    // Else, if the average is less than the target average i++, else pointer--
    if (average < targetAvg) continue
    if (average > targetAvg) pointer--

  }

  // Return false if the loop doesn't return true

  return false 

};

  console.log(averagePair([1, 2, 3], 2.5)); // true
  console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
  console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
  console.log(averagePair([], 4)); // false 

  return (
    <main>
      Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
      <pre>
        <code className="language-jsx">
          {Prism.highlight("", Prism.languages.jsx)}{" "}
          {averagePairExamples}{" "}
        </code>
      </pre>
    </main>
  );
};

export default AveragePairPage;


