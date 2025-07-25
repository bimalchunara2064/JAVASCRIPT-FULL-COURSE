class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    acc_Min_Bal;

    constructor(id,name,amount,min_bal){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
        this. acc_Min_Bal=min_bal;

    }
    open_Account(){}
    deposit_Amount(amount){}
    withdrawl_Amount(amount){}
    get_Bal(){  return 0;}
}
let a1=new Account(101,'Bimal',5000,22000)
a1.deposit_Amount(500);
a1.deposit_Amount(50);
a1.withdrawl_Amount(15);
console.log(a1.get_Bal());

let a2=new Account(102,'Basant',25000,6757)
a1.deposit_Amount(50000);
a1.withdrawl_Amount(5500);
console.log(a1.get_Bal());

console.log(a1)
console.log(a2)
