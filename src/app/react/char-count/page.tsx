'use client'
import {useState, useEffect} from 'react'

const CharCount = () => {
  const [str, setStr] = useState("");
  const [charObj, setCharObj] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    //Create an empty object

    interface CharCount {
      [key: string]: number;
    }

    const emptyObj: CharCount = {};
    //Loop over the str

    for (let char of str) {
      //If the string does not exist in the object, add the letter as a key and set it to 1.
      if (!(char in emptyObj)) {
        emptyObj[char as keyof CharCount] = 1;
      } else {
        emptyObj[char as keyof CharCount]++;
      }
    }

    setCharObj(emptyObj);
  }, [str]);

  return (
    <main>
      <form>
        <input
          name="stringText"
          type="text"
          onChange={(e) => {
            setStr(e.target.value);
          }}
        />
        {Object.entries(charObj)
          .sort((a, b) => {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
          })
          .map(([char, count]) => {
            return (
              <p key={char}>
                {char} : {count}
              </p>
            );
          })}
      </form>
    </main>
  );
};

export default CharCount