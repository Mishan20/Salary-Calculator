import React, { useContext } from 'react';
import { SalaryContext } from '../contexts/SalaryContext';

const SalarySummary = () => {
  const { state } = useContext(SalaryContext);
  const { basicSalary, earnings, deductions, netSalary } = state;

  const totalEarnings = earnings.reduce((sum, earning) => sum + earning.amount, 0);
  const totalDeductions = deductions.reduce((sum, deduction) => sum + deduction.amount, 0);

  return (
    <div>
      <p><strong>Basic Salary:</strong> {basicSalary}</p>
      <p><strong>Total Earnings:</strong> {totalEarnings}</p>
      <p><strong>Total Deductions:</strong> {totalDeductions}</p>
      <p><strong>Net Salary:</strong> {netSalary}</p>
    </div>
  );
};

export default SalarySummary;
