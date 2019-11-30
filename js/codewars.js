/* eslint-disable no-console */

// 1
// function betterThanAverage(classPoints, yourPoints) {
//   let total = 0;
//   for (let i = 0; i < classPoints.length; i += 1) {
//     total += classPoints[i];
//   }
//   total /= classPoints.length;
//   return total < yourPoints;
// }
// console.log(betterThanAverage([2, 3, 7, 10], 8));
// console.log(betterThanAverage([3, 10, 12], 8));
// console.log(betterThanAverage([1, 2, 3, 14], 6));

// // 2
// function addBinary(a, b) {
//   // c = a + b;
//   return (a + b).toString(2);
// }
// console.log(addBinary(3, 2));

// // 3
// for (let i = 0; i <= 100; i += 1) {
//   let result = '';
//   if (i % 3 === 0 && i > 0) {
//     result += 'Fizz';
//   }
//   if (i % 5 === 0 && i > 0) {
//     result += 'Buzz';
//   }
//   if (result === '') {
//     result = i;
//   }
//   console.log(result);
// }

// 4
// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     const c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// const t0 = performance.now();
// console.log(fib(50));
// const t1 = performance.now();
// console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

// 5
// function sqInRect(lng, wdth) {
//   if (lng === wdth) return null;
//   let a = lng;
//   let b = wdth;
//   const c = [];
//   while (a && b) {
//     if (a < b) {
//       c.push(b - a);
//       b -= a;
//     } else {
//       c.push(a - b);
//       a -= b;
//     }
//   }
//   return c;
// }
// console.log(sqInRect(5, 10));

// 6
// String.prototype.camelCase = function() {
//   if (!this.length) return "";
//   return this.trim()
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join('');
//   }
// ;
// console.log(" camel case word".camelCase());
// console.log("".camelCase());

// 7
// function openOrSenior(data){
//   return data.map((arr) => arr[0] >= 55 && arr[1] > 7 ? 'Senior' : 'Open')
// }
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));

// 8
// function getSum(a, b) {
//   const max = Math.max(a, b);
//   const min = Math.min(a, b);
//   return ((max - min + 1) * (min + max)) / 2;
// }
// console.log(getSum(0, 5));
// console.log(getSum(-2, 5));
// console.log(getSum(5, -3));
// console.log(getSum(5, 7));

// 9
// function getCount(str) {
//   let vowelsCount = 0;
//   const vowels = ['a', 'e', 'i', 'o'];
//   for (const item of str) {
//     if (vowels.includes(item)) vowelsCount++;
//   }
//   return vowelsCount;
// }
// console.log(getCount('asfsdgojrefjdskweaaaa'));

// // 10
// function getMiddle(s){
//   return (s.length % 2) ? s[(s.length-1)/2] : s[s.length/2 - 1] + s[s.length/2]
// }
// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));

// 11
// function highAndLow(numbers) {
//   const num = numbers.split(' ');
//   return `${Math.max(...num)} ${Math.min(...num)}`;
// }
// console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));

// 12
// function findShort(s) {
//   const n = s.split(' ');
//   let count = n[0].length;
//   for (const item of n) {
//     if (item.length <= count) {
//       count = item.length;
//     }
//   }
//   return count;
// }
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// 13
// function descendingOrder(n) {
//   const res = String(n)
//     .split('')
//     .sort((a, b) => b - a)
//     .join('');

//   return res;
// }
// console.log(descendingOrder(123456789));

// 14
// let n = '.... . -.--   .--- ..- -.. .';
// let c = n.split('  ').map((item) => item.split(' '));
// console.log(c);

// 15
// function nextBigger(n){
//   let  num = +String(n).split('').sort((a,b)=> b-a).join('');
//   return num > n ? num : -1
// }

// function nextBigger(n) {
//   let arr = n.toString().split('');
//   for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i] > arr[i - 1]) {
//       const end = arr.splice(i).sort((a, b) => a - b);
//       const a = end.findIndex(el => el > arr[i - 1]);
//       arr = [...arr, ...end];
//       [arr[i - 1], arr[i + a]] = [arr[i + a], arr[i - 1]];
//       return +arr.join('');
//     }
//   }
//   return -1;
// }

// console.log(nextBigger(12));
// console.log(nextBigger(1323));
// console.log(nextBigger(387286));

// 16
// const sum_pairs = function(ints, s) {
//   const viewedValues = [];
//   for (let i = 0; i <= ints.length; i++) {
//     const currentValue = ints[i];
//     const difference = s - currentValue;
//     if (viewedValues[difference]) {
//       return [difference, currentValue];
//     }
//     viewedValues[currentValue] = true;
//   }
//   return undefined;
// };
// l1 = [1, 4, 8, 7, 3, 15];
// console.log(sum_pairs(l1, 8));

// 17
// function digital_root(n) {
//   while (n > 10) {
//     n = n
//       .toString()
//       .split('')
//       .map(Number)
//       .reduce((a, b) => a + b);
//   }
//   return n;
// }
// console.log(digital_root(4565));

// // 18
// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const left = arr.slice(0, i).reduce((a, b) => a + b, 0);
//     const right = arr.slice(i + 1).reduceRight((a, b) => a + b, 0);
//     if (left === right) return i;
//   }
//   return -1;
// }
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));

// 19
// const maxSequence = function(arr) {
//   let mainCounter = 0;
//   let countSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (countSum < 0) countSum = 0;
//     countSum += arr[i];
//     console.log(countSum);
//     if (countSum > mainCounter) mainCounter = countSum;
//   }
//   return mainCounter;
// };
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSequence([1, 2, 3, 4]));

// 20
// const moveZeros = function(arr) {
//   let a = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       a = [...a, ...arr.splice(i, 1)];
//       i--;
//     }
//   }
//   return [...arr, ...a];
// };
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// 21
// function dirReduc(arr) {
//   const t = 'NORTH';
//   const b = 'SOUTH';
//   const l = 'WEST';
//   const r = 'EAST';
//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] === t && arr[i - 1] === b) || (arr[i - 1] === t && arr[i] === b)) {
//       arr.splice(i - 1, 2);
//       i = 0;
//     }
//     if ((arr[i] === l && arr[i - 1] === r) || (arr[i - 1] === l && arr[i] === r)) {
//       arr.splice(i - 1, 2);
//       i = 0;
//     }
//   }
//   return arr;
// }
// console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));

// 22
// function formatDuration(t) {
//   let seconds = t;
//   if (!seconds) return 'now';
//   let date = '';
//   let minute;
//   let hour;
//   let day;
//   let year;
//   if (seconds >= 31536000) {
//     year = Math.floor(seconds / 31536000);
//     year > 1 ? (date += `${year} years`) : (date += `${year} year`);
//     seconds %= 31536000;
//   }
//   if (seconds >= 86400) {
//     day = Math.floor(seconds / 86400);
//     seconds %= 86400;
//     if (date && !seconds) date += ` and `;
//     if (date && seconds) date += `, `;
//     day > 1 ? (date += `${day} days`) : (date += `${day} day`);
//   }
//   if (seconds >= 3600) {
//     hour = Math.floor(seconds / 3600);
//     seconds %= 3600;
//     if (date && !seconds) date += ` and `;
//     if (date && seconds) date += `, `;
//     hour > 1 ? (date += `${hour} hours`) : (date += `${hour} hour`);
//   }
//   if (seconds >= 60) {
//     minute = Math.floor(seconds / 60);
//     seconds %= 60;
//     if (date && !seconds) date += ` and `;
//     if (date && seconds) date += `, `;
//     minute > 1 ? (date += `${minute} minutes`) : (date += `${minute} minute`);
//   }
//   if (seconds % 60) {
//     if (date) date += ` and `;
//     seconds > 1 ? (date += `${seconds} seconds`) : (date += `${seconds} second`);
//   }
//   return date;
// }
// console.log(formatDuration(52));
// console.log(formatDuration(3662));
// console.log(formatDuration(87888));
// console.log(formatDuration(32079121));

// 23
// const array = [[1, 4, 8, 9], [6, 2, 11, 1], [8, 0, 3, -5], [-2, 10, 8, 1]];
// function matrix(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].splice(i);
//   }
//   return arr.flat().reduce((a, b) => a + b);
// }
// console.log(matrix(array));

// 24
// const array = [-2, 10, 8, 1];
// function reverse(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr.push(...arr.splice(i - 1, 1));
//   }
//   return arr;
// }
// console.log(reverse(array));

//
// function fib(n) {
//   const sqRootOf5 = Math.sqrt(5);

//   const Phi = (1 + sqRootOf5) / 2;
//   const phi = (1 - sqRootOf5) / 2;

//   return Math.round((Math.pow(Phi, n) - Math.pow(phi, n)) / sqRootOf5);
// }
// console.log(fib(3));

// 25
// function inArray(array1, array2) {
//   const arr1 = [...array1];
//   const arr2 = array2.join(',');
//   const arr3 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       arr3.push(arr1[i]);
//     }
//   }
//   return arr3.sort();
// }

// function inArray(array1, array2) {
//   return array1.filter(el => array2.join(' ').includes(el)).sort();
// }

// const a1 = ['xyz', 'live', 'strong'];
// const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
// console.log(inArray(a1, a2));

// 26
// function findNb(m) {
//   let sum = 0;
//   let n = 0;

//   while (sum < m) {
//     n += 1;
//     sum += n ** 3;
//   }

//   return sum === m ? n : -1;
// }

// console.log(findNb(4183059834009));
// console.log(findNb(24723578342962));
