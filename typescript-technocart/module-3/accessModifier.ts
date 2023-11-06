{
  // Learn access modifiers ------------------------

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

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr Gorib", 2000);
  // we can not do that for private ---------------
  // goribManusherAccount.balace = 100;

  // here we can deposit money cz we define method in class -
  goribManusherAccount.addDeposit(200);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  //
}
