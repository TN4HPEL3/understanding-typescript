type CreditCard = {
  type: "credit";
  cardNumber: string;
  expiryDate: string;
};

type PayPal = {
  type: "paypal";
  email: string;
};

type PaymentMethod = CreditCard | PayPal;

function processPayment(payment: PaymentMethod): void {
  switch (payment.type) {
    case "credit":
      console.log(
        `Processing credit card payment for card number: ${payment.cardNumber}`
      );
      break;
    case "paypal":
      console.log(`Processing Paypal payment for email: ${payment.email}`);
      break;
    default:
      console.log(`Error with payment method.`);
  }
}

const creditPayment: CreditCard = {
  type: "credit",
  cardNumber: "123456789",
  expiryDate: "12/25",
};

const paypalPayment: PayPal = {
  type: "paypal",
  email: "paypal@payment.com",
};

processPayment(creditPayment);
processPayment(paypalPayment);

//
//
//

type BasicUser = {
  name: string;
  age: number;
};

type Admin = {
  adminId: number;
  permissions: string[];
};

type AdminUser = BasicUser & Admin;

const adminUser: AdminUser = {
  name: "Admin",
  age: 30,
  adminId: 1,
  permissions: ["create", "edit", "delete"],
};

console.log(adminUser);
