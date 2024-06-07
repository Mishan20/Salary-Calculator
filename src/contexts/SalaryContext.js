import React, { createContext, useReducer } from 'react';
import salaryReducer from '../reducers/salaryReducer';

const initialState = {
  basicSalary: 0,
  earnings: [],
  deductions: [],
  netSalary: 0
};

export const SalaryContext = createContext(initialState);

export const SalaryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(salaryReducer, initialState);

  return (
    <SalaryContext.Provider value={{ state, dispatch }}>
      {children}
    </SalaryContext.Provider>
  );
};
