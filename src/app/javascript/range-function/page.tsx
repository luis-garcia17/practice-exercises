const RangeFunction = () => {

  const range = (start: number, end: number): number[] => {
    //1. Create an empty array
    //2. Create a for loop from start to end
    //3. Push each number into the array

    const rangeArr = []
    for (let i = start; i <= end; i++) {
      rangeArr.push(i)
    }

    return rangeArr
  }

  // console.log(range(1, 5))
  // console.log(range(3, 0))

  return (
    <div>RangeFunction</div>
  )
}

export default RangeFunction