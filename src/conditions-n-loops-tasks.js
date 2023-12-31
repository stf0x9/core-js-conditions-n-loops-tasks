/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  function checkDiagonal(queenX, queenY, direction) {
    let [x, y] = [queenX, queenY];
    while (x > 0 && x < 9 && y > 0 && y < 9) {
      if (king.x === x && king.y === y) {
        return true;
      }
      if (direction === 'up-left') {
        x -= 1;
        y += 1;
      }
      if (direction === 'up-right') {
        x += 1;
        y += 1;
      }
      if (direction === 'down-right') {
        x += 1;
        y -= 1;
      }
      if (direction === 'down-left') {
        x -= 1;
        y -= 1;
      }
    }
    return false;
  }

  if (king.x > queen.x) {
    if (king.y > queen.y) {
      return !!checkDiagonal(queen.x, queen.y, 'up-right');
    }
    if (king.y < queen.y) {
      return !!checkDiagonal(queen.x, queen.y, 'down-right');
    }
  } else {
    if (king.y > queen.y) {
      return !!checkDiagonal(queen.x, queen.y, 'up-left');
    }
    if (king.y < queen.y) {
      return !!checkDiagonal(queen.x, queen.y, 'down-left');
    }
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b) {
    return a + b > c ? c !== 0 : false;
  }
  if (a === c) {
    return a + c > b ? b !== 0 : false;
  }
  if (b === c) {
    return b + c > a ? a !== 0 : false;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNumeral = '';
  const tens = Math.floor(num / 10);
  const ones = num - tens * 10;

  function repeatLetter(letter, times) {
    let str = '';
    for (let i = 0; i < times; i += 1) {
      str += letter;
    }
    return str;
  }

  function generateNumeral(placeOfDigit, next, current, five) {
    let digit = '';
    switch (placeOfDigit) {
      case 9:
        digit += `${current}${next}`;
        break;
      case 8:
        digit += `${five}${repeatLetter(current, 3)}`;
        break;
      case 7:
        digit += `${five}${repeatLetter(current, 2)}`;
        break;
      case 6:
        digit += `${five}${current}`;
        break;
      case 5:
        digit += `${five}`;
        break;
      case 4:
        digit += `${current}${five}`;
        break;
      case 3:
        digit += `${repeatLetter(current, 3)}`;
        break;
      case 2:
        digit += `${repeatLetter(current, 2)}`;
        break;
      case 1:
        digit += `${current}`;
        break;
      default:
        return '';
    }
    return digit;
  }

  romanNumeral += generateNumeral(tens, 'C', 'X', 'L');
  romanNumeral += generateNumeral(ones, 'X', 'I', 'V');
  return romanNumeral;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  function convert(digit) {
    switch (digit) {
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case '0':
        return 'zero';
      case ',':
        return 'point';
      case '.':
        return 'point';
      case '-':
        return 'minus';
      default:
        return false;
    }
  }

  let str = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const digit = numberStr[i];

    switch (str.length) {
      case 0:
        str += convert(digit);
        break;
      default:
        str += ` ${convert(digit)}`;
    }
  }

  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    const j = str.length - 1 - i;
    const letterOne = str[i];
    const letterTwo = str[j];
    if (letterOne !== letterTwo) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const strNum = `${num}`;
  const strDigit = `${digit}`;
  for (let i = 0; i < strNum.length; i += 1) {
    if (strNum[i] === strDigit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let totalSum = 0;
  let leftSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    totalSum += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    totalSum -= arr[i];
    if (totalSum === leftSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let counter = 0;

  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  let [left, right] = [0, size];
  let [top, bottom] = [0, size];

  while (left < right && top < bottom) {
    for (let i = left; i < right; i += 1) {
      counter += 1;
      matrix[top][i] = counter;
    }
    top += 1;

    for (let i = top; i < bottom; i += 1) {
      counter += 1;
      matrix[i][right - 1] = counter;
    }
    right -= 1;

    for (let i = right - 1; i >= left; i -= 1) {
      counter += 1;
      matrix[bottom - 1][i] = counter;
    }
    bottom -= 1;

    for (let i = bottom - 1; i >= top; i -= 1) {
      counter += 1;
      matrix[i][left] = counter;
    }
    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixCopy = matrix;
  let [left, right] = [0, matrix.length - 1];

  while (left < right) {
    const [top, bottom] = [left, right];
    for (let i = 0; i < right - left; i += 1) {
      const topLeft = matrix[top][left + i];

      matrixCopy[top][left + i] = matrixCopy[bottom - i][left];
      matrixCopy[bottom - i][left] = matrixCopy[bottom][right - i];
      matrixCopy[bottom][right - i] = matrixCopy[top + i][right];
      matrixCopy[top + i][right] = topLeft;
    }
    right -= 1;
    left += 1;
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const originalArr = arr;
  if (arr.length < 1) {
    return arr;
  }

  const p = arr[arr.length - 1];
  const l = [];
  const r = [];

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] < p) {
      l[l.length] = arr[i];
    } else {
      r[r.length] = arr[i];
    }
  }
  const sortedArr = [...sortByAsc(l), p, ...sortByAsc(r)];

  for (let i = 0; i < arr.length; i += 1) {
    originalArr[i] = sortedArr[i];
  }
  return originalArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const iterationsCount = iterations;
  let optimizationDataRecieved = false;
  let optimalIterationCount;

  if (iterationsCount === 0) {
    return str;
  }

  let resultStr = '';
  function changeOrderOfChar(modifiedStr, iterationNumber) {
    if (
      iterationNumber >= iterationsCount ||
      iterationNumber >= optimalIterationCount
    ) {
      return resultStr;
    }

    if (resultStr === str && !optimizationDataRecieved) {
      optimizationDataRecieved = true;
      const iterationsLeft = iterations - iterationNumber;
      return [iterationsLeft, iterationNumber];
    }

    resultStr = '';

    for (let i = 0; i < modifiedStr.length; i += 2) {
      resultStr += modifiedStr[i];
    }
    for (let i = 1; i < modifiedStr.length; i += 2) {
      resultStr += modifiedStr[i];
    }

    return changeOrderOfChar(resultStr, iterationNumber + 1);
  }

  const optimizationData = changeOrderOfChar(str, 0);

  let resultOptApplied;
  if (optimizationDataRecieved) {
    const [iterationsLeft, optimalNumOfIterations] = optimizationData;
    optimalIterationCount = iterationsLeft % optimalNumOfIterations;
    if (optimalIterationCount > 0) {
      resultOptApplied = changeOrderOfChar(str, 0);
    } else {
      resultOptApplied = str;
    }
  } else {
    return optimizationData;
  }

  return resultOptApplied;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
