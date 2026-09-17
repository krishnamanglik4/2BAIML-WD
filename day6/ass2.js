class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }
    
    deposit(amount) {
        this.balance += amount;
        console.log(amount, "deposited successfully");
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(amount, "withdrawn successfully");
        } else {
            console.log("Insufficient balance");
        }
    }

    displayBalance() {
        console.log("Account No =", this.accountNo);
        console.log("Holder Name =", this.holderName);
        console.log("Balance =", this.balance);
        console.log();
    }

    static bankInfo() {
        console.log("Bank Name = ABC Bank");
        console.log("General Information = We provide savings, deposits and withdrawal services.");
        console.log();
    }
}

BankAccount.bankInfo();

let a1 = new BankAccount(101, "Krishna", 10000);
let a2 = new BankAccount(102, "Harsh", 5000);

a1.deposit(2000);
a1.withdraw(3000);
a1.displayBalance();

a2.deposit(1000);
a2.withdraw(7000);
a2.displayBalance();