{
    // Learn getter and setter ------------------------
  
    class BankAccount {
      public readonly id: number;
      public name: string;
      // here we use private for privacy ,for that a we can not access it with out this call , amon ki aii class onno class a extends korlaw paua jaba na
      // private _balance: number;-----------------
  
      // tai amra protected use korbo protected use korla baira thaka access paua jaba na kintu onno class use korta parba
  
      protected _balance: number;
  
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
      // normal function without getter --------------------
    //  public addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    //   }

    // use setter ------------

    set deposit(amount:number){
        this._balance = this._balance + amount;
    }

    // normal function without getter-----------------
    //  public getBalance() {
    //     return this._balance;
    //   }

    // use getter ------------------------------------------------------
    get balance(){
        return this._balance;
    }

    }
  
    const goribManusherAccount = new BankAccount(111, "Mr Gorib", 1000);
    // we can not do that for private ---------------
    // goribManusherAccount.balace = 100;
  
    // here we can deposit money cz we define method in class -

    // here use normal function call ----------------------
    // goribManusherAccount.addDeposit(200); 

    // property ar moto kora use kora jaba jokon setter use korbo 
    goribManusherAccount.deposit = 500; // property ar moto use ------------

    // here use normal function call --------------------------------
    // const myBalance = goribManusherAccount.getBalance();

    // when use getter ----------------
    const myBalance = goribManusherAccount.balance; // property ar moto kora ------------
    console.log(myBalance);
  
    //
  }
  