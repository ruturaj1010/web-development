// let arr = [ 2 , 4, 6 , 3 , 9]

// arr[2] = 34;

// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[4])

// // for converting array into string
// console.log(arr.toString())

// console.log(arr.join(" and "))

// console.log(arr.pop())

// console.log(arr.push(100))
// console.log(arr.push("Ruturaj"))



// let list = [ 1 , 2, 3 , 4, 5, 6 ,7 ,8 ]

// console.log(list.shift())
// console.log(list.unshift("jack"))

// console.log(delete list[5])
// console.log(list)

// console.log(list.splice(1, 3))
// console.log(list)

// console.log(list.splice(1, 2 , 233 ,433))
// console.log(list)


let numbers = [ 1 , 3, 5, 6 ,  7 , 8]

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element)
// }

// numbers.forEach((value , index , arr ) => {
//     console.log(value , index  , arr)
// })


for (const iterator of numbers) {
    console.log(iterator)
}