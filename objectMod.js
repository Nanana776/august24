//Ex 3.1
const person={
    firstName:"John" ,
        lastName:"Doe",
    age:30,
    }
person.toString = function(obj){
    console.log(`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`)}
console.log(String(person));

//Ex 3.2
const product={
    price:1000,
}
product.valueOf=function(){
    return product.price}

function priceCalc(added){
    console.log((+product) +added)}
priceCalc(500);

//Ex 3.3
const date = {
    day: 18,
    month: 8,
    year: 2024,
};

date.toString=function(){
if(date.day<10){date.day=('0'+date.day)}
    if(date.month<10){date.month=('0'+date.month)}
    return (`${date.month}/${date.day}/${date.year}`)}

date.valueOf=function(){
    const currDate=new Date(this.year, this.month - 1, this.day);
    const refDate=new Date(2023, 7, 12);
    const milis_Day = 24 * 60 * 60 * 1000;
    return Math.floor((currDate - refDate) / milis_Day);
}

console.log(String(date)); 
console.log(+date);

//Ex 3.4
const obj={
    0:"item1",
    1:"item2",
    2:"item3",
    length:3,
toString: function(){
    let str='';
    for (let key in obj){
    if(!isNaN(key)){
    str+=(obj[key]+',')}
}
    return str;
}
}
console.log(String(obj))

//Ex 3.5
const bankAcc={
    balance:1000,
    interest:'5%',
valueOf:function(){
    this.balance+=this.balance*parseInt(this.interest,10)/100;
    return this.balance;},
}
console.log(+bankAcc);

