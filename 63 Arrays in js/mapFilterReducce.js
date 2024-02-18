let arr = [ 2 ,5 ,6 , 14 , 17 , 18 ]


// let sqOfArr = []

// for(let index = 0 ; index < arr.length ; index++) {
//     const element = arr[index]
//     sqOfArr.push(element**2)
// }
// console.log(sqOfArr)


// let sqOfArr = arr.map((e) => {
//     return e**2
// })
// console.log(sqOfArr)

const greaterThanSeven = (e) => {
    if ( e > 7 ) {
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))



const arr_2 = [ 1  , 2, 3 , 4, 5 ,6 ,7]

function red(a , b ) {
    return a*b ;
}
console.log(arr_2.reduce(red))



let Iam = "Ruturaj"
console.log(Array.from(Iam))