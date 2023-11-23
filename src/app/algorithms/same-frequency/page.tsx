'use client'
import { useEffect } from 'react'
import Prism from "../../../utils/prism";

const SameFrequencyPage = () => {
        useEffect(() => {
          const highlight = async () => {
            await Prism.highlightAll(); // <--- prepare Prism
          };
          highlight(); // <--- call the async function
        });

        const sameFrequencyExamples = `
          sameFrequency(182,281) // true
          sameFrequency(34,14) // false
          sameFrequency(3589578, 5879385) // true
          sameFrequency(22,222) // false
        `;

        const sameFrequency = (num1: number, num2: number): boolean => {
          /* My solution */

          //If the numbers are not the same length, return false.

          // if (num1.toString().length !== num2.toString().length) return false;

          // //Convert the two numbers to strings

          // let string1: string = num1.toString();
          // let string2: string = num2.toString();

          // //Split the two strings, see if sorting them works as is, if not, convert each string to numbers and sort them.
          // //Convert back to strings, join them, convert back to numbers and compare the two numbers.

          // let sortedString1: number = Number(
          //   string1
          //     .split("")
          //     .sort((a: string, b: string) => Number(a) - Number(b))
          //     .join("")
          // );

          // let sortedString2: number = Number(
          //   string2
          //     .split("")
          //     .sort((a: string, b: string) => Number(a) - Number(b))
          //     .join("")
          // );

          // return Object.is(sortedString1, sortedString2);

          /* Frequency counter solution */

          if (num1.toString().length !== num2.toString().length) return false;

          //Convert numbers to strings

          let string1: string = num1.toString();
          let string2: string = num2.toString();

          //Create two empty objects 
          interface FrequencyCounter {
            [key: number | string]: number;
          }

          let frequencyCounter1: FrequencyCounter = {};
          let frequencyCounter2: FrequencyCounter = {};

          //Loop over each string, for each character, add it to the object. if it already exists, add one to the key, if not set it to 1.
          
          for (let char of string1) {
            if (char in frequencyCounter1) {
              frequencyCounter1[char] += 1 
            } else {
              frequencyCounter1[char] = 1;
            }
          }

          for (let char of string2) {
            if (char in frequencyCounter2) {
              frequencyCounter2[char] += 1 
            } else {
              frequencyCounter2[char] = 1;
            }
          }

          //Loop over any of the objects, compare each key, if any of them is a mismatch, return false, if not return true.

          for (let key in frequencyCounter1) {
            if (!(key in frequencyCounter2) || frequencyCounter1[key] !== frequencyCounter2[key]) {
              return false;
            }
          }

          return true

        };

        // console.log(sameFrequency(182, 281)); // true
        // console.log(sameFrequency(34, 14)); // false
        // console.log(sameFrequency(3589578, 5879385)); // true
        // console.log(sameFrequency(22, 222)); // false

        return (
          <main>
            Frequency Counter - sameFrequency Write a function called
            sameFrequency. Given two positive integers, find out if the two
            numbers have the same frequency of digits. Your solution MUST have
            the following complexities: Time: O(N) Sample Input:
            <pre>
              <code className="language-jsx">
                {Prism.highlight("", Prism.languages.jsx)}{" "}
                {sameFrequencyExamples}{" "}
              </code>
            </pre>
          </main>
        );
      };;

export default SameFrequencyPage;
