// EXAMPLE 1 - Convert Seconds to Minutes and Seconds in JavaScript

const totalSeconds = 565;

// 👇️ get the number of full minutes
const minutes = Math.floor(totalSeconds / 60);

// 👇️ get the remainder of the seconds
const seconds = totalSeconds % 60;

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

// ✅ format as MM:SS
const result = `${padTo2Digits(minutes)}:${padTo2Digits(
  seconds,
)}`;
console.log(result); // 👉️ "09:25"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert Seconds to Days, Hours, Minutes and Seconds in JS

// function toDaysMinutesSeconds(totalSeconds) {
//   const seconds = Math.floor(totalSeconds % 60);
//   const minutes = Math.floor((totalSeconds % 3600) / 60);
//   const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
//   const days = Math.floor(totalSeconds / (3600 * 24));

//   const secondsStr = makeHumanReadable(seconds, 'second');
//   const minutesStr = makeHumanReadable(minutes, 'minute');
//   const hoursStr = makeHumanReadable(hours, 'hour');
//   const daysStr = makeHumanReadable(days, 'day');

//   return `${daysStr}${hoursStr}${minutesStr}${secondsStr}`.replace(
//     /,\s*$/,
//     '',
//   );
// }

// function makeHumanReadable(num, singular) {
//   return num > 0
//     ? num + (num === 1 ? ` ${singular}, ` : ` ${singular}s, `)
//     : '';
// }

// console.log(toDaysMinutesSeconds(565)); // 👉️ 9 minutes, 25 seconds
// console.log(toDaysMinutesSeconds(2073600)); // 👉️ 24 days
// console.log(toDaysMinutesSeconds(703800)); // 👉️ 8 days, 3 hours, 30 minutes
