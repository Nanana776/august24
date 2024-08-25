var a = {
    valueOf: function() {
        return 'hello';
    }
};
var b = {
    valueOf: function() {
        return 3;
    }
};
var c = {
    valueOf: function() {
        return new Number(3);
    }
};
var d = {
    toString: function() {
        return 123;
    }
};
var e = {
    toString: function() {
        return new Number(3);
    }
}
//f isn't declared
null + undefined //0+NaN=NaN
null + true//0+1=1
null + false//0+0=0
null + 3//0+3=3
null + NaN//0+NaN=NaN (any num+NaN=NaN)
null + 'hello'//'nullhello'(+sign unlike other mathematical operators concatenates)
null + a + b + c + d + e + f// Reference error 'hello331233'+f, since f is not defined
undefined + true//NaN+1=NaN
undefined + false//NaN+0=NaN
undefined + 5//NaN+5=NaN
undefined + NaN//NaN+NaN=NaN
undefined + 'hello'//'undefinedhello'(concatenation)
undefined + a + b + c + d + e + f//again reference error , use of not defined f ("undefinedhello331233+f")
true + false//1+0=1
true + 2//1+2=3
true + NaN//NaN
true + 'hello'//'truehello'
true + a + b + c + d + e + f//reference error , "1hello331233" +f
false + 4//0+4=4
false + NaN//NaN
false + 'hello'//'falsehello'
false + a + b + c + d + e + f//again a reference error , 'hello331233'+f
5 + 3//8
5 + NaN//NaN
5 + 'hello'//'5hello'
5 + a + b + c + d + e + f//
'hello' + NaN//'helloNaN'
'hello' + a + b + c + d + e + f//referemce error at '5hello331233'+f

-null//-0
-undefined//NaN
-true//-1
-false//-0
-5//-5
-'hello'//NaN , - tries to coerce into a number but 'hello' is not a num
-'234'//-234
-'234.32e3'//-234320
-new Number(NaN)//NaN
-new String('hello')//NaN
-(/google.com/)//NaN
-([])//-0 or 0
-([2])//-2
-([2, 3])//NaN
-(function() { })//NaN
-(a) //NaN
-(b)//-3
-(c)//-3
-(d)//-123
-(e)//-3
