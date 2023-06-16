//calculates the Net salary of an employee

let salary = parseFloat(prompt("Input your salary please"));
let benefits = parseFloat(prompt("Input your benefits please"));

// Calculate the gross salary
let grossSalary = salary + benefits;
let NSSF = 1080;

// Calculate taxable income
let taxableIncome = grossSalary - NSSF;

// Calculate tax using the PAYE function
function PAYE(salary) {
  let rate;
  let tax;
  
  if (salary < 24000) {
    rate = 0.1;
  } else if (salary >= 24000 && salary < 32333) {
    rate = 0.25;
  } else {
    rate = 0.3;
  }

  tax = salary * rate;
  return tax;
}

let tax = PAYE(taxableIncome);

// Calculate personal relief
function personalReliefcheck(taxable) {
  let relief = 2400;
  
  if (taxable <= relief) {
    return 0;
  } else {
    return taxable - relief;
  }
}

let taxNet = personalReliefcheck(tax);

//the following function calculates the amount of nhif you are supposed to pay
let NHIFcontribution;
function NHIF(salary) {
  let deductions;
  if (salary < 5999) {
    return (deduction = 150);
  } else if (salary > 6000 && salary < 7999) {
    return (deductions = 300);
  } else if (salary > 8000 && salary < 11999) {
    return (deductions = 400);
  } else if (salary > 12000 && salary < 14999) {
    return (deductions = 500);
  } else if (salary > 15000 && salary < 19999) {
    return (deductions = 600);
  } else if (salary > 20000 && salary < 24999) {
    return (deductions = 750);
  } else if (salary > 25000 && salary < 29999) {
    return (deductions = 850);
  } else if (salary > 30000 && salary < 34999) {
    return (deductions = 900);
  } else if (salary > 35000 && salary < 39999) {
    return (deductions = 950);
  } else if (salary > 40000 && salary < 44999) {
    return (deductions = 1000);
  } else if (salary > 45000 && salary < 49999) {
    return (deductions = 1100);
  } else if (salary > 50000 && salary < 59999) {
    return (deductions = 1200);
  } else if (salary > 60000 && salary < 69999) {
    return (deductions = 1300);
  } else if (salary > 70000 && salary < 79999) {
    return (deductions = 1400);
  } else if (salary > 80000 && salary < 89999) {
    return (deductions = 1500);
  } else if (salary > 90000 && salary < 99999) {
    return (deductions = 1600);
  } else if (salary > 100000) {
    return (deductions = 1700);
  }
}
NHIFcontribution = NHIF(taxableIncome);

//calculate you net salary
let NetSALARY = taxableIncome - taxNet - NHIFcontribution;
console.log(NetSALARY);
