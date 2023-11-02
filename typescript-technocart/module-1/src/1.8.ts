// destructuring----------------


// object destructuring-----------
const person = {
 id :215,
 name:{
    firstName:"manik",
    middleName:"sarker",
    last:"sarker"
 },
 address:"bangladesh",
 contact:"017000000"
}

const {contact,name:{middleName}} = person;

// array destructuring----------
const myFriends : string[] = ["omi","oysi",'naha','himu','sadia'];
const [,, bestFriend, ...rest] = myFriends;