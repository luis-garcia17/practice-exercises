/* eslint-disable react/no-unescaped-entities */
'use client'
import {useEffect} from 'react'
import Prism from '../../../utils/prism';
import Details from '../../../components/details';

const ScheduleMeeting = () => {

  type zeroToNine = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  type SingleDigitHour = `${zeroToNine}:${zeroToNine}${zeroToNine}`;
  type DoubleDigitHour = `${'0' | '1'}${zeroToNine}:${zeroToNine}${zeroToNine}`;
  type ValidTime = SingleDigitHour | DoubleDigitHour;
  const workDayStart: ValidTime = "09:00";
  const workDayEnd: ValidTime = "17:00";

  const scheduleMeetingCode = `
    const workDayStart = "09:00";
    const workDayEnd = "17:00";

    const scheduleMeeting = (startTime, duration) => {
        // Write your code here
    }

    scheduleMeeting("8:45",15);     // false
    scheduleMeeting("9:40",40);     // true
    scheduleMeeting("08:15",20);    // false
    scheduleMeeting("11:00",90);    // true
    scheduleMeeting("16:30",40);    // false
    scheduleMeeting("16:00",30);    // true
    scheduleMeeting("17:00",15);    // false
  `
  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism 
    };
    highlight(); // <--- call the async function
  })

  const solution = `
    function scheduleMeeting(startTime: ValidTime, duration: number) {
    // 1. Convert time to minutes in the day
    // 2. If start time is more than workDayStart and less than workDayEnd, add the duration to startTime and see if it is less than workDayEnd. 
    // 3. If the previous condition is met return true, else return false.

    // Convert the time string to number of minutes
    const convertToNumber = (time: ValidTime): number => {
      const [hour, minutes]: string[] = time.split(":")
      const totalMinutes: number = (Number(hour) * 60) + Number(minutes) //Add validation for "00"
      return totalMinutes
    }

    const workDayStartMinutes = convertToNumber(workDayStart)
    const workDayEndMinutes = convertToNumber(workDayEnd)
    const startTimeMinutes = convertToNumber(startTime)

    return ((startTimeMinutes >= workDayStartMinutes) && (startTimeMinutes + duration <= workDayEndMinutes))
    
  }
  `

  function scheduleMeeting(startTime: ValidTime, duration: number) {
    // 1. Convert time to minutes in the day
    // 2. If start time is more than workDayStart and less than workDayEnd, add the duration to startTime and see if it is less than workDayEnd. 
    // 3. If the previous condition is met return true, else return false.

    // Convert the time string to number of minutes
    const convertToNumber = (time: ValidTime): number => {
      const [hour, minutes]: string[] = time.split(":")
      const totalMinutes: number = (Number(hour) * 60) + Number(minutes) //Add validation for "00"
      return totalMinutes
    }

    const workDayStartMinutes = convertToNumber(workDayStart)
    const workDayEndMinutes = convertToNumber(workDayEnd)
    const startTimeMinutes = convertToNumber(startTime)

    return ((startTimeMinutes >= workDayStartMinutes) && (startTimeMinutes + duration <= workDayEndMinutes))
    
  }

    // console.log(scheduleMeeting("8:45",15));     // false
    // console.log(scheduleMeeting("9:40",40));     // true
    // console.log(scheduleMeeting("08:15",20));    // false
    // console.log(scheduleMeeting("11:00",90));    // true
    // console.log(scheduleMeeting("16:30",40));    // false
    // console.log(scheduleMeeting("16:00",30));    // true
    // console.log(scheduleMeeting("17:00",15));    // false

  return (
    <main>
      <h1>Schedule meeting</h1>
      <p>
        For this exercise you will create a function that schedules a meeting. It takes two parameters; a start time and a duration. The start time will be a string in the format "hh:mm" (24-hour format) and the duration a number.
        At the top we will have two variables a start time for the work schedule and an end time. If the start time plus the duration is within the boundaries of the work schedule, return true, else return false.
      </p>
      <pre>
        <code className="language-jsx">{Prism.highlight("", Prism.languages.jsx)} {scheduleMeetingCode} </code>
      </pre>
      <Details summary="See solution">
        <pre>
          <code className="language-jsx">{Prism.highlight("", Prism.languages.jsx)} {solution} </code>
        </pre>
      </Details>
    </main>
  )
};

export default ScheduleMeeting