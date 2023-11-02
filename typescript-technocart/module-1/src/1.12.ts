// never, unknown , nullable types -----------------------

// nullable type --------------

const searchName = (value:string | null)=>{
    if(value){
        console.log("Searching")
    }
    else{
        console.log("There is noting to search")
    }
}

searchName(null)


// unknown type ---------------------

const getSpeedInMeterPerSecond = (value:unknown)=>{
    if(typeof value === "number"){
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed}ms^-1`)
    }
   else if(typeof value === "string"){
        const [result,unit] = value.split(" ");
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed}ms^-1`)
    }
    else{
        console.log("wrong input")
    }
}

getSpeedInMeterPerSecond(100);


// never types -------------------------------

const throwError = (msg:string):never=>{
    throw new Error(msg);
}

throwError("muskil sa error hogiya")