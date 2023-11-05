{
  // learn type guard with opp with instanceOf  -------------------

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`I am making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log(`I am barking`);
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMaw() {
      console.log(`I am mawing`);
    }
  }


  // we can use function for smartly handle instance of 
  const isDog = (animal:Animal) : animal is Dog=>{
    return animal instanceof Dog
  }
  const isCat = (animal:Animal)=>{
    return animal instanceof Cat
  }

  const getAnimal = (animal:Animal)=>{
    // use smart way ----
   if(isDog(animal)){
    animal.makeBark()
   }
   // use normal way ---------
   else if(animal instanceof Cat){
    animal.makeMaw()
   }
   else{
    animal.makeSound();
   }
  }


  //
  const dog = new Dog("Dog bhai", "Dog");
  const cat = new Cat("Mr Tom", "Cat");

  getAnimal(dog)

  //
}
