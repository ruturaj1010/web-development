let a = prompt( "Enter first number :" )

let b = prompt( "Enter second number :" )

// let sum  =  a + b;      joins string + string

if ( isNaN( a ) || isNaN( b ) ) {
    throw SyntaxError( "Enter a correct value" )
}

let sum = parseInt( a ) + parseInt( b )        // converting string to integer

let x = 5
function main () {
    try {
        console.log( 'The sum of numbers is ', sum * x );
        return true
    } catch ( error ) {
        console.log( "Brother there is an error in code" )
        return false
    } finally {
        console.log( "This block of code will definitely Execute" )
    }
}

main()