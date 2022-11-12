/**
 * This recursion process calculates a factorial
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-11-12
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 * @param {number} userNumber parameter
 * @returns {number} return factorialNumber
 */
function factorialCalculation (userNumber: number): number {
  // process
  if (userNumber === 0) {
    return 1
  } else if (userNumber < 0) {
    return -1
  } else if (isNaN(userNumber)) {
    return -1
  } else {
    return userNumber * factorialCalculation(userNumber - 1)
  }
}

// input
const userInput = prompt('Enter a number: ')
const numberInput = parseFloat(userInput)

// output
console.log(
  `The factorial of ${numberInput} is ${factorialCalculation(numberInput)}`
)

console.log('\nDone.')
