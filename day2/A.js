console.log("=====Variables=====");

let c = "Something";
console.log(c);

let a = 40;
let b = 30;
if(a>b){
    console.log(`A is  greater and value is ${a}`);
} 
else{
    console.log(`B is  greater and value is ${b}`);
    
}

function greet(fname ,lname){
    console.log("Hello" , fname , lname);
    
}
greet("Utkarsh" , "Dixit");
greet("Waseem" , "Sir");


function add(x,y){
    return x+y;

}
let result=add(20,30);
console.log(result);
console.log("\n===== Default Arguments =====");
function fullname(fname="Abes",lname="Engineering college"){
    return fname +""+ lname;
}
console.log(fullname());
console.log(fullname("krishna","manglik"));

function tmarks(m,e,s){
    return m+e+s;
}

function percentage(total){
    return (total/300)*100;
}

let total = tmarks(80,75,90);
console.log("Total Marks = " , total);
console.log("Precentage" , percentage(total));


let count = 1;
while(count<=10){
    console.log(count);
    count++;
}


let num = 1;
do{
    console.log("Hello");
    num++;
}while(num<=5);



