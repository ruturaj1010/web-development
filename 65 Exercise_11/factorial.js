let num = 1;

let fact = 1;
for ( let index = 1; index <= num; index++ ) {

    fact = fact * index
}
console.log( fact )



function factorial ( num ) {

    let arr = Array.from( Array( num + 1 ).keys() )
    let result = arr.slice( 1, ).reduce( ( a, b ) => a * b )
    return result
}