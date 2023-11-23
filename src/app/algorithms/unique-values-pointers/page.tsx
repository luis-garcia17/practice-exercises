import next from "next/types";

const UniqueValuesPointers: () => React.JSX.Element = () => {

  const countUniqueValues = (arr: number[]): number => {

    // Create a counter variable that keeps track of how many unique values we have
    let counter = 0;

    // Create a pointer for the first element in the array
    let pointer = 0;

    // Create a pointer for the second element in the array
    let nextPointer = pointer + 1
    
    // Do a while loop, while nextPointer is less or equal than the length of the array, keep looping

    while (nextPointer <= arr.length) {
      if (arr[pointer] !==  arr[nextPointer]) {
        counter++
      }
      pointer++
      nextPointer++
    }

    return counter

  }

  // console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 4, 7, 7])) // 5
  // console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
  // console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 3, 5, 6, 13])) // 6
  // console.log(countUniqueValues([])) // 0
  // console.log(countUniqueValues([3])) // 1 

  // Understood the problem wrong, let's re do it



  return (
    <main>
      Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. 
      There can be negative numbers in the array, but it will always be sorted.
    </main>
  )
}

export default UniqueValuesPointers