/* --- COMMON TYPES OF COMPARISON --- */
console.log( 2 > 1 );                // true
console.log( 2 >= 1 );               // true
console.log( 2 < 1 );                // false
console.log( 2 <= 1 );               // false
console.log( 2 != 1 );               // true
console.log( 2 == 1 );               // false
console.log( 2 === 1 );              // false

/* --- DIFFERENT DATATYPES COMPARISON --- */
console.log( "2" > 1 );              // true
console.log( 2 > "1" );              // true
/*  These types of conversion can result in faulty output. 
    Never compare different datatypes (recommended) */

/* --- NULL COMPARISON --- */
console.log( null > 0 );             // false
console.log( null < 0 );             // false
console.log( null >= 0 );            // true
console.log( null <= 0 );            // true
console.log( null == 0 );            // false

/* --- UNDEFINED COMPARISON --- */
console.log( undefined > 0 );        // false
console.log( undefined < 0 );        // false
console.log( undefined >= 0 );       // false
console.log( undefined <= 0 );       // false
console.log( undefined == 0 );       // false

/* --- STRICT CHECK --- */
console.log("2" == 2);   // (== ignores datatype in comparison)
console.log("2" === 2);  // (=== stricktly checks datatype in comparison)

console.log( 2 === 2 );              // true
console.log( 2 === "2" );            // false
console.log( "2" === "2" );          // true
console.log( "2" === 2 );            // false