console.log( 'This is promise' );

let prom_1 = new Promise( ( resolve, reject ) => {
    a = Math.random()
    if ( a > 0.5 ) {
        reject( 'random number is not supporting you' );
    } else {
        setTimeout( () => {
            console.log( 'Yes I am done' );
            resolve( "Rutu" )
        }, 3000 );
    }
} )
// prom_1.then( ( a ) => {
//     console.log( a )
// } ).catch((err)=>{
//     console.log('err'); 
// })


let prom_2 = new Promise( ( resolve, reject ) => {
    a = Math.random()
    if ( a > 0.5 ) {
        reject( 'random number is not supporting you 2' );
    } else {
        setTimeout( () => {
            console.log( 'Yes I am done 2' );
            resolve( "Rutu 2" )
        }, 1000 );
    }
} )

// let p3 = Promise.all( [prom_1, prom_2] )
// p3.then( ( a ) => {
//     console.log( a )
// } ).catch( err => {
//     console.log( 'err' );
// } )

// let p3 = Promise.allSettled( [prom_1, prom_2] )
// p3.then( ( a ) => {
//     console.log( a )
// } ).catch( err => {
//     console.log( 'err' );
// } )

let p3 = Promise.race( [prom_1, prom_2] )
p3.then( ( a ) => {
    console.log( a )
} ).catch( err => {
    console.log( err );
} )