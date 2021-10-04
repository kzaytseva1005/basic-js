import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 export default function deleteDigit(n) {
  const numArray = String(n).split('').map(Number);
  const minIndex = numArray.indexOf(Math.min(...numArray));
  numArray.splice(minIndex, 1);
  return parseInt(numArray.join(''), 10);
}
