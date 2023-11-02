// learn type alias --------------------


// declare type --------------------
type Student = {
    name:string;
    age:number;
    gender:string;
    address:string;
    contactNo?:string
}

const student1 :Student={
    name:"manik sarker",
    age:20,
    gender:"male",
    address:"Bangladesh",
    contactNo:"01800000000"
}

const student2 : Student = {
    name:"asikur",
    age:22,
    gender:"male",
    address:"Jashore"
}

/// 
type UserName = string;
type IsAdmin = boolean;

const userName : UserName = "manik";
const isAdmin : IsAdmin = true;


// type alias with function --------------------------------

type Add = (num1:number,num2:number) => number;

const add2Number : Add = (num1,num2) => num1 + num2;