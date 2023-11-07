class Customer{
    firstname:string;
    lastname:string;
    gender:string;
    age:number;
    mobile_number:number;
    

    constructor(firstname:string,lastname:string,gender:string,age:number,mobile_number:number){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.gender=gender;
        this.mobile_number=mobile_number;
    }    
customer_info(){
        return `Name : ${this.firstname} ${this.lastname}\nage : ${this.age}\tgender : ${this.gender}\nmobile number : ${this.mobile_number} `
    } 


}

class Account_balance extends Customer {
    account_balance: number=100
    
    constructor(account_balance:number,    firstname:string,
        lastname:string,
        gender:string,
        age:number,
        mobile_number:number) {
        super(firstname,lastname,gender,age,mobile_number);
        this.account_balance = account_balance;
    }

    getWithdraw(
        amount:number
    ) {
        let statement=""
        if (this.account_balance < amount){
            return statement="Insufficient balance"
        }
        else if(amount < 0){
            return statement="the ammount you entered is wrong!"
        }
        else{
            this.account_balance-=amount
            return statement=`---------------------Transaction is successfull \n your balance is ${this.account_balance}      --------------------------`
        }}

        
    getCredit(
        amount:number
    ) {
        let statement="Transaction failed"
        
        if (amount > 0){
            if (amount > 100){
                this.account_balance+=amount-1
                return statement=`---------------------Thankyou for credit  \n your balance is ${this.account_balance}      --------------------------`}
            else{
                    return statement=`---------------------Thankyou for credit  \n your balance is ${this.account_balance+=amount}      --------------------------`}}
        else if(amount < 0){
            return statement="the ammount you entered is wrong!"
            }
                else{
            return statement
        }}}

const obj1=new Account_balance(1000,"ammar","waseem","male",20,+923002337990)


console.log
(obj1.customer_info())

console.log
(obj1.getWithdraw(500))
console.log
(obj1.getCredit(5000))
