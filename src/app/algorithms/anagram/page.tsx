/* eslint-disable react/no-unescaped-entities */
const Anagram = () => {

  /* My solution without frequency counter */

  // const validAnagram = (str1: string, str2: string): boolean => {
  //   //If the strings are not the same length, return false.
  //   if (str1.length !== str2.length) return false;

  //   //Sort the strings in ascending order.
  //   const sortedStr1 = str1
  //     .split("")
  //     .sort()
  //     .join("");
  //   const sortedStr2 = str2
  //     .split("")
  //     .sort()
  //     .join("");

  //   //Compare the sorted strings.
  //   for (let i = 0; i < sortedStr1.length; i++) {
  //     if (sortedStr2[i] !== sortedStr1[i]) return false;
  //   }

  //   //If the strings are the same, return true, else return false.
  //   return true;
  // };

  /* My solution with frequency counter */

  const validAnagram2 = (str1: string, str2: string): boolean => {
    if (str1.length !== str2.length) return false;

    const freqCounter1: { [key: string]: number } = {};
    const freqCounter2: { [key: string]: number } = {};

    //Loop over the first string, for each character if it doesn't exist on the first object, add it with a value of 1. If it does exist, increment its value by 1.

    for (let i = 0; i < str1.length; i++) {
      freqCounter1[str1[i]] = (freqCounter1[str1[i]] || 0) + 1;
    }

    //Do the same for the second string

    for (let i = 0; i < str2.length; i++) {
      freqCounter2[str2[i]] = (freqCounter2[str2[i]] || 0) + 1;
    }

    //Loop over the first object, check if the value of the key is the same as the value of the key on the second object. 
    //If not, return false, else return true.

    // console.log("Frequency counter 1", freqCounter1);
    // console.log("Frequency counter 2", freqCounter2);

    for (let key in freqCounter1) {
      if (freqCounter1[key] !== freqCounter2[key]) return false;
    }

    return true;
  };



  // console.log(validAnagram2("rat", "art")); //true
  // console.log(validAnagram2("", "")); //true
  // console.log(validAnagram2("rat", "bar")); //false
  // console.log(validAnagram2("bart", "art")); //false
  // console.log(validAnagram2("futaba", "abafut")); //true

  /* There's another solution, check the course */

  return (
    <main>
      Given two strings write a function to determine if the second string is an
      anagram of the first. An anagram is a word, phrase, or name formed by
      rearranging the letters of another. Example: "rat" is an anagram of "art".
      Try to use the frequenecy counter method to solve this.
    </main>
  );
};

export default Anagram;
