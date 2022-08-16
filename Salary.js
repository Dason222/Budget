function calculateSalary(hourly, hours, tax){
    const salaryAfterTax = (hourly * hours) * tax;
    console.log("Your salary after taxes: " + salaryAfterTax + " $" );
    return salaryAfterTax;
}

function calculateMonthlyBudget (salary, workingAmount){
    const finalPay = salary * workingAmount;
    console.log("Your money: " + finalPay + " in bank");
    return finalPay;
}

function calculateMaxSpending(money, rent, food, medical, misc){
    const remainingMoney = money - rent - food - medical - misc;
    console.log("This month your money " + remainingMoney + " after spendings");

    const spendingDay = remainingMoney / 30;
    console.log("Per day you can spend " + spendingDay + " $")
}


const salary = calculateSalary (7, 160, 0.7);
const money = calculateMonthlyBudget ( salary, 0.84)
calculateMaxSpending(money, 55, 300, 20, 50);