#! /usr/bin/env node
import inquirer from 'inquirer';
console.log("\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
console.log(`-*-*-/________Welcome to currency_Convertor by '07'________/-*-*`);
console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n");

// Define currency exchange rates as an object
const currency: { [key: string]: number } = {
  USD: 1, //Base currency
  PKR: 277.86,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
  JPY: 156.96,
  TRY: 32.2,
};

// Prompt the user for input using inquirer
const userAnswer = await inquirer.prompt([
  {
    name: "from",
    message: "Currency from convert",
    type: "list",
    // Use Object.keys to get an array of currency codes
    choices: Object.keys(currency),
  },
  {
    name: "to",
    message: "Currency to convert",
    type: "list",
    // Use Object.keys to get an array of currency codes
    choices: Object.keys(currency),
  },
  {
    name: "amount",
    message: "Enter amount to convert",
    type: "number",
  },
]);

// Get the exchange rates for the selected currencies
const fromAmount = currency[userAnswer.from];
const toAmount = currency[userAnswer.to];

// Calculate the converted amount
const baseAmount = userAnswer.amount / fromAmount;
const convertedAmount = baseAmount * toAmount;

// Display the converted amount
console.log(
  `${userAnswer.amount} ${userAnswer.from} = ${convertedAmount} ${userAnswer.to}`
);

// Thank you...
console.log("\nThank you for using cash_convertor_07");
console.log('Made by "Hmoavia.07"');