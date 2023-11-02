/// ternary operator, optional chaining, nullish coalescing 


// ternary operator------------

const age = 15;

if(age >= 18){
    console.log("adult")
}
else{
    console.log("not adult")
}

const isAdult = age >= 18 ? "adult":"not adult"
console.log({isAdult})


/// nullish coalescing operator ------------------
// use coalescing operator when we make decision based on undefined or null

const isAuthenticated = null;
// const isAuthenticated = "";
const result1 = isAuthenticated ?? "Guest";
// const result2 = isAuthenticated?isAuthenticated:"Guest"
console.log({result1})
// console.log({result2})



/// optional Chaining ------------------------

type NiceUser = {
    name:string;
    address:{
        city:string;
        road:string;
        presentAddress:string;
        permanentAddress?:string;
    }
}

const user1:NiceUser = {
    name:"manik",
    address:{
        city:"Rajshahi",
        road:"osam 211",
        presentAddress:"jashore"
    }
}

const permanentAddress = user1?.address?.permanentAddress ?? "No permanent address";
console.log({permanentAddress});