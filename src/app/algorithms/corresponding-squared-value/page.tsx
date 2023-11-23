/* eslint-disable react/no-unescaped-entities */
'use client'
import { useEffect } from "react";
import Prism from "../../../utils/prism";

const CorrespondingSquaredValue = (): JSX.Element => {
  const sameFunctioncode = `
    same([1, 2, 3], [4, 1 ,9]) //true
    same([1, 2, 3], [1 ,9]) //false
    same([1, 2, 1], [4, 4, 1]) //false
  `;

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism
    };
    highlight(); // <--- call the async function
  });

  //Write code here

  //Write a function that accepts two parameters, both arrays of numbers.
  const same = (arr1: number[], arr2: number[]): boolean => {
    //If the arrays are not the same length, return false.
    if (arr1.length !== arr2.length) return false;

    //Sort both arrays in ascending order.
    const sortedArr1 = arr1.sort((a, b) => a - b);
    const sortedArr2 = arr2.sort((a, b) => a - b);

    //Compare the two arrays, for each value, check if the value in the other array's same index is the same. If not return false, else return true.
    for (let i = 0; i < sortedArr1.length; i++) {
      if (sortedArr1[i] ** 2 !== sortedArr2[i]) return false;
    }

    return true;
  };

  // console.log(same([1, 2, 3], [4, 1, 9])); //true
  // console.log(same([1, 2, 3], [1, 9])); //false
  // console.log(same([1, 2, 1], [4, 4, 1])); //false
  // console.log(same([1, 2, 1], [1, 1, 4, 4])); //false
  // console.log(same([1, 2, 3, 4], [1, 16, 4, 9])); //true

  return (
    <main>
      Write a function called same, which accepts to arrays. The function should
      return true if every value in the array has it's corresponding value
      squared in the second array. The frequency of the values must be the same.
      <pre>
        <code className="language-jsx">
          {Prism.highlight("", Prism.languages.jsx)} {sameFunctioncode}{" "}
        </code>
      </pre>
    </main>
  );
};

export default CorrespondingSquaredValue;
