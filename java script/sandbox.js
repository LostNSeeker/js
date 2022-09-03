// alert('hello, world');
console.log(1);
let age = 25;
let year = 2020;
console.log(age, year);

age = 30;
console.log(age);

const points = 100;
// points=50;
console.log(points);

var score = 75;   /*this is older method before let was introduced*/
console.log(score);

//string
let email = "target.28.11.2025@gmail.com";
console.log(email);

let first = 'akshat';
let last = 'srivastava';
let full = first + ' ' + last;
console.log(full);
console.log(full[3]);

console.log(full.length);
console.log(full.toUpperCase());

let index = email.indexOf('@');
console.log(index);
// let result=email.lastIndexOf('g');
// let result=email.slice(2,5);
// let result=email.substring(4,10);
let result=email.replace('r','b');
console.log(result);

//** means power of

console.log(10**2);
var aman=10;
aman/=10;
console.log(aman/=10);

let sent='the blog has ' + aman + ' stars';
console.log(sent);


//__________________________________
const title='best reads of 2019';
const author='mario';
const likes=30;

let sentance='the book named '+ title+' by  '+ author+' has '+likes + 'likes';//---method1
let sentance2=`The book named ${title} by ${author} has ${likes} likes`;//--method by template
console.log(sentance);
console.log(sentance2);
    
let html=`
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes </span>
`;
console.log(html);

//___________________________________

let ninjas=['shaun','ryu','chun-li'];
console.log(ninjas);
//ninjas='ken';
console.log(ninjas[1]);
ninjas=ninjas.join('-');
console.log(ninjas);
let ans=ninjas.concat(['ken','crystal']);
console.log(ans);

let random=['shaun','ryu',70,3.14];
console.log(random.length);
let papa=random.push('dhalsism');
console.log(random);
papa=random.pop();
console.log(random);
//______________________________________

let mamma=null;
console.log(mamma,mamma+3,`the mamma is ${mamma}`);

//______________________________________

let truth=email.includes('@');
console.log(truth); //here truth is boolean
truth=random.includes('akshat'); 
console.log(truth); //here truth is boolean
console.log(age==30); //here truth is boolean

let check='name';
console.log(check>'crystal');
console.log(check >'Name');
console.log(check >'name');
console.log(check>'Crystal');


console.log(age == 30);
console.log(age == '30');
console.log(age === 30);//=== checks value as well as type
console.log(age === '30');
//__________________________________

const names=['shaun','mario','lugia'];
for(let i=0;i<names.length;i++)
{
// console.log(names[i]);
let html1=`<div>${names[i]}</div>`
console.log(html1);//if , while , d0-while , break , loical operators ,  switch work the same way
}

//____________________________________

function greet(){
    console.log('hello there');
}
 greet();

 //function expression
 const speak = function()
 {
    console.log('good day !');
 };

 speak();

//  const calArea= function(radius)
//  {
//     let area = 3.14 * radius**2 ;
//     return area ;
//  }
//  const area = calArea(5);
//  console.log(area);//method 1

//arrow function

// const calArea = (radius)=>{
//     return 3.14* radius**2;
// }
// const area = calArea(5);
//  console.log('area is ',area);//method 2

const calArea = (radius)=> 3.14* radius**2;
const area = calArea(5);
 console.log('area is ',area);//method 2, but smaller approach

 //method , invoked by " . "
const naam =' shaun';
let answ= naam.toUpperCase();
console.log(answ);

let people=['mario', ' luigi' , ' ryu' , ' shaun ' , ' chun-li'];
// people.forEach/*(function*/((person,index)=>{
//     console.log(index,person);
// });//making arrow function from nornal function

//cal back 
const logPerson=(person,index)=>{
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

//______________________________now injecting js code into html and asking to show output in  browser

const ul= document.querySelector('.people');
const people1 =['mario', ' luigi' , ' ryu' , ' shaun ' , ' chun-li'];
let html1=``;
people.forEach(function(person)
{
    //creating a html template
    html1+=`<li style = "color:purple"> ${person}</li>`;
});

console.log(html1);
ul.innerHTML=html1;