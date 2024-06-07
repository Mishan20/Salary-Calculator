export const calculateNetSalary = ({ basicSalary, earnings, deductions }) => {
    let totalEarnings = basicSalary + earnings.reduce((sum, earning) => sum + earning.amount, 0);
    let totalDeductions = deductions.reduce((sum, deduction) => sum + deduction.amount, 0);
    let totalEarningsForEPF = basicSalary + earnings.reduce((sum, earning) => sum + (earning.epf ? earning.amount : 0), 0);
    let grossEarnings = totalEarnings - totalDeductions;
    let grossSalaryForEPF = totalEarningsForEPF - totalDeductions;
  
    let employeeEPF = grossSalaryForEPF * 0.08;
    let employerEPF = grossSalaryForEPF * 0.12;
    let employerETF = grossSalaryForEPF * 0.03;
  
    let APIT = (grossEarnings * 0.18) - 25500; // Example calculation; adjust as needed.
  
    let netSalary = grossEarnings - employeeEPF - APIT;
  
    return {
      totalEarnings,
      totalDeductions,
      grossEarnings,
      employeeEPF,
      employerEPF,
      employerETF,
      APIT,
      netSalary,
      costToCompany: grossEarnings + employerEPF + employerETF
    };
  };
  