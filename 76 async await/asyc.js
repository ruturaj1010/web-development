// async function getdata () {
//     return new Promise( ( resolve, reject ) => {
//         setTimeout( () => {
//             resolve( '455' )
//         }, 3000 )
//     } )
// }

async function getdata () {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await fetch( 'https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify( {
            title: 'foo',
            body: 'bar',
            userId: 1,
        } ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    } )
    let data = await x.json()
    console.log( data );
}

async function main () {
    console.log( 'entering to screen' );

    console.log( 'code is being generated' );

    console.log( 'load data' );

    let data = await getdata()

    console.log( data );

    console.log( 'Process data' );

    console.log( 'Task 2' );
}

main()

// data.then( v => {
//     console.log( data );

//     console.log( 'Process data' );

//     console.log( 'Task 2' );
// } )

