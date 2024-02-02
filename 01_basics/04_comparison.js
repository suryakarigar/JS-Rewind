// console.log( 2 > 1 );
// console.log( 2 >= 1 );
// console.log( 2 < 1 );
// console.log( 2 <= 1 );
// console.log( 2 != 1 );
// console.log( 2 == 1 );
// console.log( 2 === 1 );

// console.log( "2" > 1 );
// console.log( 2 > "1" );
// These types of conversion can result in faulty output. Never compare same datatypes (recommended)

// console.log( null > 0 );
// console.log( null < 0 );
// console.log( null >= 0 );
// console.log( null <= 0 );
// console.log( null == 0 );

// console.log( undefined > 0 );
// console.log( undefined < 0 );
// console.log( undefined >= 0 );
// console.log( undefined <= 0 );
// console.log( undefined == 0 );

/* --- STRICT CHECK --- */
// console.log("2" == 2);   (== ignores datatype in comparison)
// console.log("2" === 2);  (=== stricktly checks datatype in comparison)

console.log( 2 === 2 );         // true
console.log( 2 === "2" );       // false
console.log( "2" === "2" );     // true
console.log( "2" === 2 );       // false