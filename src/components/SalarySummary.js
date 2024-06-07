import React, { useContext } from 'react';
import { SalaryContext } from '../contexts/SalaryContext';
import { calculateNetSalary as calcNetSalary } from '../utils/salaryCalculations';

const SalarySummary = () => {
  const { state } = useContext(SalaryContext);
  const { basicSalary, earnings, deductions } = state;

  const {
    totalEarnings,
    totalDeductions,
    grossEarnings,
    employeeEPF,
    employerEPF,
    employerETF,
    APIT,
    netSalary,
    costToCompany
  } = calcNetSalary(state);

  return (
    <div>
      <p><strong>Basic Salary:</strong> {basicSalary}</p>
      <p><strong>Total Earnings:</strong> {totalEarnings}</p>
      <p><strong>Total Deductions:</strong> {totalDeductions}</p>
      <p><strong>Gross Earnings:</strong> {grossEarnings}</p>
      <p><strong>Employee EPF (8%):</strong> {employeeEPF}</p>
      <p><strong>Employer EPF (12%):</strong> {employerEPF}</p>
      <p><strong>Employer ETF (3%):</strong> {employerETF}</p>
      <p><strong>APIT:</strong> {APIT}</p>
      <p><strong>Net Salary:</strong> {netSalary}</p>
      <p><strong>Cost to Company:</strong> {costToCompany}</p>
    </div>
  );
};

export default SalarySummary;
