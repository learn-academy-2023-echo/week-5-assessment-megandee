// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided. 

// describe("codedMessage", () => {
//     it("returns a string with a coded message", () => {
//         const secretCodeWord1 = "Lackadaisical"
//         const secretCodeWord2 = "Gobbledygook"
//         const secretCodeWord3 = "Eccentric"
//       expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//       expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//       expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
//   })

//   FAIL  ./code-challenges.test.js
//   codedMessage
//     ✕ returns a string with a coded message (1 ms)
//   ● codedMessage › returns a string with a coded message
//     ReferenceError: codedMessage is not defined
//  PASS  ./code-challenges.test.js
//   codedMessage
//   ✓ returns a string with a coded message (24 ms)

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// 1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// Pseudo code:
// input: a string "Lackadaisical"
// output: a string with the numbers converted to numbers returning a mix of numbs and letters 
//         "L4ck4d41s1c4l", "G0bbl3dyg00k", "3cc3ntr1c"
// process: turn string to array, .split()
//          iteration is key here, need to access each value
//          how to know if/what letter is what
//          set a,e,i,o to absolutely equal the numbers 4,3,1,0
//          for loop or .map() since i am trading out letters for numbers
//          maybe conditional? Do conditionals solve all problems lol
//          turn arr back to strign .join()


// const codedMessage = (string) => {
//     // let newArray = []
//     let stringToArr = string.split("")
//     // console.log(stringToArr)
//     for (let i = 0; i < stringToArr.length; i++) { 
//         console.log(stringToArr[i])
//         if (stringToArr[i] === "a" || stringToArr[i] === "A") { 
//         // reassign the value at the index to 4
//             stringToArr[i] = 4
//         } else if (stringToArr[i] === "e" || stringToArr[i] === "E") {
//             stringToArr[i] = 3
//         } else if (stringToArr[i] === "i" || stringToArr[i] === "I") {
//             stringToArr[i] = 1
//         } else if (stringToArr[i] === "o" || stringToArr[i] === "O") {
//             stringToArr[i] = 0
//         } else {
//             "whoopsie"
//         }
//     }
//     return stringToArr.join("")
// }

// console.log(codedMessage(secretCodeWord2))

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe("particularLetter", () => {
//     it("returns an array of all the words containing that particular letter", () => {
//         const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
//         expect(particularLetter(filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
//         expect(particularLetter(filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// FAIL  ./code-challenges.test.js
// particularLetter
//   ✕ returns an array of all the words containing that particular letter (1 ms)
// ● particularLetter › returns an array of all the words containing that particular letter
//   ReferenceError: particularLetter is not defined


const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// Create a function that takes in an array of words and a single letter and returns an array of
// all the words containing that particular letter.

// Pseudo code:
// input: array of words ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
// output: an array of all the words containing that particular letter
//         'a' ["Mango", "Apricot", "Peach"] 
//         'e' ["Cherry", "Blueberry", "Peach"]
// process: will need to iterate over array to return requested words
//          .filter immediately comes to mind, though not as good with this one 
//          could use for loop?
//          will need to include looking for capital letters as well, 
//          keyword 'if' so maybe conditional instead

const particularLetter = (array) => {
    // let newArray = []
    for(let i = 0; i < array.length; i++) {
        // I dont think && 'e' || 'E' is correct because im telling it to look for both at once
        if(array[i].includes('a' || 'A' && 'e' || 'E')){
            // console.log(array[i])
        }
        return array[i]
    }
}

console.log(particularLetter(filterLetterA))
// output : 
// a
console.log(particularLetter(filterLetterE))
// output:
// e


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// describe("fullHouse", () => {
//     it("returns whether or not the array is a full house", () => {
//         const hand1 = [5, 5, 5, 3, 3]
//         const hand2 = [5, 5, 3, 3, 4]
//         const hand3 = [5, 5, 5, 5, 4]
//         const hand4 = [7, 2, 7, 2, 7]
//         expect(fullHouse(hand1)).toEqual("true")
//         expect(fullHouse(hand2)).toEqual("false")
//         expect(fullHouse(hand3)).toEqual("false")
//         expect(fullHouse(hand4)).toEqual("true")
//     })
// })

// a) Create a test with expect statements using the variable provided.

// FAIL  ./code-challenges.test.js
// fullHouse
//   ✕ returns whether or not the array is a full house
// ● fullHouse › returns whether or not the array is a full house
//   ReferenceError: fullHouse is not defined
// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ returns whether or not the array is a full house (2 ms)

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// Pseudo code:
// input: array of numbers [5, 5, 5, 3, 3], [5, 5, 3, 3, 4], [5, 5, 5, 5, 4], [7, 2, 7, 2, 7]
// output: array with two and three of kind to equal full house [5, 5, 5, 3, 3], [7, 2, 7, 2, 7]
// process: sort numbers
//          index 0,1 and 2,3,4 or 0,1,2 and 3,4 returns t if not return f 
//          conditionals        
//          determining the value in the array
//          
// //          
// const fullHouse = (array) => {
//     let sortedArray = array.sort()
//     // console.log(sortedArray)
//     if ((sortedArray[0] === sortedArray[1] && sortedArray[2] === sortedArray[3] && sortedArray[3] === sortedArray[4]) || (sortedArray[0] === sortedArray[1] && sortedArray[1] === sortedArray[2] && sortedArray[3] === sortedArray[4]) ){
//         return "true" 
//     } else {
//         return "false"
//     }
// }
// console.log(fullHouse(hand4))    
