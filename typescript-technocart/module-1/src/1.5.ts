// reference type -> object
// optional type -> literal type

let user : {
    company:"Programming Hero"; // literal type
   readonly location:string;  // you can not change it like user.location = "india"
    firstName:string;
    middleName?:string; // optional type 
    lastName:string;
    isMarried:boolean;
} = {
    company:"Programming Hero",
    location:"Bangladesh",
    firstName:"Manik",
    middleName:"chandra",
    lastName : "Sarker",
    isMarried:false
}

/// you can not do that because it is read only ---------

// user.location = "usa":

