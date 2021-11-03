/*In this task I will try
work with Git and operators
First task is comment*/
// Output of the result
let a = 5;
let b ='b';
console.log("Variable",a ," is number" ,"Variable" , b,"is string");

//Task with operators
let x= 7;
let y= 8;
let temp= 3;
y=temp;
function sum (a, b){
    console.log('x+y', a+b);
}
function min (a, b){
    console.log('x-y', a-b);
}
function dob (a, b){
    console.log('x*y', a*b)
}
function div (a, b){
    console.log('x/y', a/b);
}
function ost (a, b){
    console.log('x%y', a%b);
}
function pow (a, b){
    console.log('x**y', a**b)
}
sum(x,y)
min(x,y)
dob(x,y)
div(x,y)
ost(x,y)
pow(x,y)
// use x+=y
console.log("When we use this operatirs this mean we change x " ,x+=y,"And we get x=10");
// use x-=y in previos step we have x=10
console.log("When we use this operatirs this mean we change x " ,x-=9,"And we get x=10-9 => x=1");
// use x=*y in previos step we have x=1
console.log("When we use this operatirs this mean we change x " ,x*=12,"And we get x=1*12 => x=12");
// use x=/y in previos step we have x=12
console.log("When we use this operatirs this mean we change x " ,x/=4,"And we get x=12/4 => x=3");
// use x=*y in previos step we have x=3
console.log("When we use this operatirs this mean we change x " ,x**=y,"And we get x=3^3> x=27");
// use x=*y in previos step we have x=27
console.log("When we use this operatirs this mean we change x " ,x%=4,"And we get x=27%4> x=3");
let num1=434;
let num2=343;
let num3 =434;
let text1="Toyota";
let text2="BMW"

if (num1===num2){
    console.log('number 2 = number 3')
}else if (num1===num3){
    console.log('number 1 = number 3')
}else if (num1===num3){
    console.log('number 1 = number 3')
}
if(num1!=num2){
    console.log("number 1 is not equal number 2")
}else{
    console.log("numbers  equal")
}
if(num1 !==text1){
    console.log("Wrong type and not qual")
}else{
    console.log('type and value is right')
}
let object1="";
switch(object1){
    case "Apples":
        console.log("Apples cost 12$")
        break;
    case "Bananas":
        console.log("Bananas cost 14$")
        break;
    case "Waterlemon":
        console.log("Waterlemon  cost 10$")
        break;
    case "cheri":
        console.log("cheri ples cost 3$")
        break;
    default:{
        console.log("Fruits is exsist")
    }
}