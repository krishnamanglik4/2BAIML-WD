let fname = "Krishna";
let lname = "Manglik";
console.log("My First Name is " + fname + " and My Last Name is " + lname);
console.log(`My Mirst Name is ${fname} and My Last Name is ${lname}`);
console.log(`My Name is ${fname} ${lname}`);


function fullname(first , last){
        return `${first}${last}`;
}
let name = `Hello ${fullname(fname , lname)}`;

console.log(name);
