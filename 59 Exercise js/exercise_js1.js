const a = Math.random() * 100
// console.log(a)



/* first solution */
// let num_1 = parseInt( prompt( "Enter your first number :" ) )
// let num_2 = parseInt( prompt( "Enter your second number :" ) )

// console.log( "Choose the Operation you want to perform\n1.addition\n2.substraction\n3.Multplication\n4.Division" )
// let op = parseInt(prompt( "choose operation to perform" ))

// if ( a > 10 ) {
       /* correct solution */ 
//     if ( op == 1 ) {
//         console.log( "result : " num_1 + num_2 )
//     } else if ( op == 2 ) {
//         console.log( "result : ", num_1 - num_2 )
//     } else if ( op == 3 ) {
//         console.log( "result : ", num_1 * num_2 )
//     } else {
//         console.log( "result : ", num_1 / num_2 )
//     }
// } else {
        /* Wrong solution */
//     if ( op == 1 ) {
//         console.log( "result : ", num_1 - num_2 )
//     } else if ( op == 2 ) {
//         console.log( "result : ", num_1 / num_2 )
//     } else if ( op == 3 ) {
//         console.log( "result : ", num_1 + num_2 )
//     } else {
//         console.log( "result : ", num_1 ** num_2 )
//     }
// }


/* second solution */

let num_1 = prompt( "Enter your first number :" )
let op = prompt( "choose operation to perform" )
let num_2 = prompt( "Enter your second number :" )

let obj = {
    "+" : "-",
    "-" : "/",
    "*" : "+",
    "/" : "**"
}

if( a > 10 ){
    /* correct solution */
    alert(`Your answer is ${eval(`${num_1} ${op} ${num_2}`)}`);

} else {
    /* Wrong solution */
    op = obj[op]
    alert(`Your answer is ${eval(`${num_1} ${op} ${num_2}`)}`);
}