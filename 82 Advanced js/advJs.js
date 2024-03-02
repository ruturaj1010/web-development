async function sleep () {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( "45" )
        }, 2000 )
    } )
}

function add ( a, b, c ) {
    return a + b + c
}

( async function main () {
    let a = await sleep()
    console.log( a )
    let b = await sleep()
    console.log( b )


    // concept No 2
    let [x, y, ...rest] = [1, 5, 2, 3, 6, 7]
    console.log( x, y, rest )


    let obj = {
        p: 34,
        q: 12,
        r: 24
    }
    let { p, q } = obj;
    console.log( p, q )


    // concept number 3
    let arr = [10, 12, 18]
    // console.log(add(arr[0] , arr[1] , arr[2]));
    console.log( add( ...arr ) );

} )()