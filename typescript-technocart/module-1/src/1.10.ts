// learn union and intersection type -------------------

// union operator

type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper";
type FullStackDeveloper = "FrontendDeveloper" | "ExpertDeveloper";
type Developer = FrontendDeveloper | FullStackDeveloper;
const newDeveloper: FrontendDeveloper = "FakibazDeveloper";

///
type User = {
  name: string;
  email: string;
  gender: "male" | "female";
  bloodGroup: "o+" | "ab+" | "ab-" | "b+";
};

const newUser: User = {
  name: "susmita",
  email: "susmita@gmail.com",
  gender: "female",
  bloodGroup: "ab+",
};


// Intersection -----------------------

type FrontendDeveloper1 = {
    skills: string[],
    designation1:"Frontend Developer"
}
type BackendDeveloper1 = {
    skills:string[],
    designation2:"Backend Developer"
}

type FullStackDeveloper1 = FrontendDeveloper1 & BackendDeveloper1;

const fullStackDeveloper1 : FullStackDeveloper1 = {
    skills:["html","css","express"],
    designation1:"Frontend Developer",
    designation2:"Backend Developer"
}