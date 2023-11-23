"use client";
import { useEffect } from "react";
import Prism from "../../../utils/prism";

const AreThereDuplicatesPage = () => {
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism
    };
    highlight(); // <--- call the async function
  });

  const areThereDuplicatesExamples = `
    areThereDuplicates(1, 2, 3); // false
    areThereDuplicates(1, 2, 2); // true
    areThereDuplicates("a", "b", "c", "a"); // true
    `;
  const areThereDuplicates = (...args: (number | string)[]): boolean => {
    /* My solution */
    let isNumbers = true;
    let isStrings = true;

    for (let arg of args) {
      if (typeof arg === "string") {
        isNumbers = false;
      } else if (typeof arg !== "number") {
        isStrings = false;
      }
    }

    // If the args is an array of numbers, sort by ascending order, if not, sort alphabetically.

    let sortedArray = args;

    if (isNumbers) {
      sortedArray = args.sort(
        (a: number | string, b: number | string) => Number(a) - Number(b)
      );
    } else if (isStrings) {
      args.sort();
    } else {
      console.error("Mixed types array!");
    }

    //Loop over the sorted array, start the loop at index 1 and compare with the previous index, if they are equal return true, else return false.

    for (let i = 1; i < sortedArray.length; i++) {
      if (Object.is(sortedArray[i], sortedArray[i - 1])) return true;
    }

    return false;
  };

  const areThereDuplicatesFrequency = (...args: (number | string)[]): boolean => {
    
     //Turn the arguments into an array: DONE!

     //Create an empty object

     type FrequencyCounter = {
      [key: number | string]: number
     }

     
     //Loop over the array, throw the arguments into the object if they don't exist there and set the argument to 1.
     const frequencyCounter: FrequencyCounter = {}

     for (let arg of args) {
      if (frequencyCounter[arg]) return true

      frequencyCounter[arg] = 1
      // console.log("Is arg in frequency counter? ", (frequencyCounter[arg] in frequencyCounter))
      // console.log("Frequency counter: ", frequencyCounter)
     }

     return false

     //If an argument already exists there return true, if you finish the loop and you didn't return, return false.
  }

  console.log(areThereDuplicatesFrequency(1, 2, 2)); // true
  console.log(areThereDuplicatesFrequency(1, 2, 3)); // false
  console.log(areThereDuplicatesFrequency("a", "a", "b", "a", "c", "b", "d")); // true

  return (
    <main>
      Implement a function called, areThereDuplicates which accepts a variable
      number of arguments, and checks whether there are any duplicates among the
      arguments passed in. You can solve this using the frequency counter
      pattern OR the multiple pointers pattern.
      <pre>
        <code className="language-jsx">
          {Prism.highlight("", Prism.languages.jsx)}{" "}
          {areThereDuplicatesExamples}{" "}
        </code>
      </pre>
    </main>
  );
};


export default AreThereDuplicatesPage;
