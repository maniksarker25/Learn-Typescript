{
// Learn type guard / type narrowing ---------

// type guard with type of operator ---------------

type AlphaNumeric = number | string; 
const add = (param1:AlphaNumeric,param2:AlphaNumeric):AlphaNumeric=>{
    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2;
    }
    else{
        return param1.toString() + param2.toString();
    }
}
const result1 = add(2,5)
console.log(result1)


// type guard with in operator ---------------------------

type NormalUser = {
    name:string
}

type AdminUser = {
    name:string;
    role:"admin"
}

const getUser = (user:NormalUser | AdminUser)=>{
    if("role" in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    }
    else{
        console.log(`My name is ${user.name}`)
    }
}

const normalUser : NormalUser = {
    name:"Mr Normal"
}
const adminUser : AdminUser = {
    name:"Mr Admin",
    role:"admin"
}

getUser(normalUser)
getUser(adminUser)




//




}