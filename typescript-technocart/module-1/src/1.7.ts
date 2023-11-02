// learn spreed operator, rest operator and destructuring

// spreed operator-----------------
const bros1 : string[]=["manik","mehedi","shuvo"];
const bros2 : string[]=["raju","setu","mizan"];

// we can not do that for typescript -----
// bros1.push(bros2)

// we should need to do that thing
bros1.push(...bros2);
// console.log(bros1)


// object ------------------
const mentors1 = {
    typescript:"Mezba",
    redux:"Mir",
    dbms:"Mizan"
}
const mentors2 = {
    prisma:"Firoz",
    next:"Tonmoy",
    cloud:"Nahid"
}

const mentorList = {
    ...mentors1,...mentors2
}

// rest operator -----------------------

const greetFriends = (...friends:string[])=>{
    friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
}

greetFriends("manik","hasib","taufic")
