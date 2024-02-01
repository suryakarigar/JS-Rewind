    const score  = 123;
    const pass  = "123";
    const passTwo  = "123abc";
    const value  = null;
    const valueTwo  = undefined;
    const isPresent  = true;
    const isAbsent  = false;

    // console.log(typeof score); //number
    // console.log(typeof pass); //string

    // change data type
    /* ---------------- */
    const valueInNumber = Number(pass) //changes data type to Number
    const valueInString = String(score) // chages data type to String
    const valueInNaN = Number(passTwo) // chages data type to Number

    // Check data types
    /* ---------------- */
    // console.log(valueInString); //string
    // console.log(typeof valueInString); //string

    // console.log(valueInNumber); //number
    // console.log(typeof valueInNumber); //number

    // console.log(valueInNaN); //NaN
    // console.log(typeof valueInNaN); //number

    // console.log(value); //NULL
    // console.log(typeof value); //object

    // console.log(valueTwo); //undefined
    // console.log(typeof valueTwo); //undefined

    // console.log(isPresent); //boolean
    // console.log(typeof isPresent); //boolean

    // console.log(isAbsent); //boolean
    // console.log(typeof isAbsent); //boolean

    // conversion of boolean
    const isBoolean = 1
    const isBooleanValue = Boolean(isBoolean)

    // console.log(isBoolean);
    // console.log(typeof isBoolean);

    // console.log(isBooleanValue);
    // console.log(typeof isBooleanValue);

    // converison of empty/value string
    const emptyString = ""
    const valueString = "surya"

    const stringTestOne = Boolean(emptyString)
    const stringTestTwo = Boolean(valueInString)

    // console.log(stringTestOne);
    // console.log(typeof stringTestOne);

    // console.log(stringTestTwo);
    // console.log(typeof stringTestTwo);

    // Boolean conversion
    /* ----------------- */ 
    // 1        => true
    // 0        => false
    // "value"  => true
    // ""       => false

    // ********************* OPERATIONS ********************* //

    const posValue = 5;
    const negValue = -posValue
    // console.log(negValue);

    // console.log(2 + 2);
    // console.log(2 - 2);
    // console.log(2 * 2);
    // console.log(2 ** 3); // power
    // console.log(2 / 2);
    // console.log(2 % 2); //remainder

    let str1 = "hello"
    let str2 = " surya"

    let str3 = str1 + str2
    // console.log(str3);

    // console.log( 1 + "2" );
    // console.log( "1" + 2 );
    // console.log( "1" + "2" );
    // console.log( "1" + 2 + 2 );
    // console.log( 1 + 2 + "2" );

    const strNum = 1 + "2"
    const numStr = "1" + 2
    const numNumStr = 1 + 2 + "3"

    // console.log(strNum);
    // console.log(typeof strNum);
    // console.log(numStr);
    // console.log(typeof numStr);
    // console.log(numNumStr);
    // console.log(typeof numNumStr);

    // Some unexpected conversions 😎
    // console.log(true);
    // console.log(+true);
    // console.log(true + true);
    // console.log(true - true);
    // console.log(+"");
    // console.log(+"surya");

    let gameCounter = 100;
    gameCounter++;

    // console.log(gameCounter);

    // Prefix and Postfix examples
    /* --------------------------- */
    let a = 1;
    a = a++;            //value changes after operation
    console.log(a);

    let x = 1;
    x = ++x             // value changes before operation
    console.log(x);