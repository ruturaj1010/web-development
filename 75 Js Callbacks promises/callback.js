console.log( "Ruturaj is Good programmer" )
console.log( "Ayush is Better programmer" )

setTimeout( () => {
    console.log( "I am 2 seconds late" )
}, 2000 )

console.log( "I am ready to compete" )

setTimeout( () => {
    console.log( "Wait....! I am coming Guys" )
}, 0 )

const fn = () => {
  console.log("Nothing")
}


const callback = ( arg , fn) => {
    console.log( arg )
    fn()
}

const loadscript = ( src, callback ) => {
    let sc = document.createElement( "script" );
    sc.src = src;
    sc.onload = callback( "Ruturaj" , fn)
    document.head.append(sc)
}


loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)