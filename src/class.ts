class Payment {
  type: string;
  amount: number;

  constructor(type: string, amount: number) {
    this.type = type;
    this.amount = amount;
  }

  getDetails() {
    console.log(`type: ${this.type} amount: ${this.amount}`);
  }
}

const p = new Payment("online", 50000);
p.getDetails();
