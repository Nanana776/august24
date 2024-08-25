/*1.Number('0x77') === 0x77 //true 0===0
 Number('077') === 077 //false 77!==077
 Number(' 12') // 12-> the space in front is trimmed 
 isNaN(' ') // false -> the ' ' is empty so after coercion it is converted to a number, since an empty string is falsy it is converted to 0 , which is a number , not NaN 
 +'' // 0--> empty string is coerced and as a falsy element returns 0
 .1 + .2 == .3 // false because floating-point causes accuracy issues
 9007199254740992 + 1 == 9007199254740992  true,  numbers are accurately represented from -2^53+1 to 2^53-1, 2^53 is considered the limit of floating point precision, 
the next larger double-precision floating point value is 2^53+2. The integer 2^53+1 in between is not representable as a double
 9007199254740992 + 2 == 9007199254740992// false-> 9007199254740992 + 2 == 9007199254740994 can accurately represent as a double since the next large floating-point value is 2^53+2
0 === +0 //true
 +0 === -0// true
1 / '2' // 1/'2'= 1/2= 0.5
1 / 0 // Infinity, returns limit rather than actual division
 1 / -0 // -Infinity
  Infinity / 6 // Infinity
   Infinity / -256 // Infinity
  Infinity / Infinity // NaN
 0 / 0 // NaN
     +true // 1
 +false // 0
 +null // 0
 +undefined //NaN
 parseInt('.2')// 0.2
 parseInt('077a')//77
 parseInt('0x77a')//0x is base 16( hexadecimal) and according to it 77a is 1914
 parseInt('I’m the best value - said Infinity.')//invalid  number start->NaN
 parseFloat('I’m the best value - said Infinity.')//NaN
 parseInt('Infinity is the best value!')//->NaN
 parseFloat('Infinity is the best value!')//takes Infinty and disregards the rest->Infinity
 parseFloat('12.78ff')//takes 12.78 and disregards ff->12.78

2. "" + 1 + 0// + concatenates rather than coercing to number->"10"
 "" - 1 + 0// except for + other Mathematical operators coerce to number->because it's minus the empty string is converted to a number->-1
 true + false//converts to number-> 1
 6 / "3"// 2
 "2" * "3"// 6
 4 + 5 + "px"//9+"px"->"9px"
 "$" + 4 + 5// "$45"
 "4" - 2// 4-2 =>2
 "4px" - 2// 4px -2=> NaN
 7 / 0// any num divided by 0 returns Infinity as it is an undetermined value
 " -9 " + 5 // " -9 5" (+ concatenates and the spaces are kept inside the string)
 " -9 " - 5// string is converted into number =>-14
 null + 1 // null is converted to number =>1
 undefined + 1// undefined is converted to a number (NaN) , so NaN+1 return NaN*/
