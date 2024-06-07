import { calculateNetSalary as calcNetSalary } from '../utils/salaryCalculations';

const salaryReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BASIC_SALARY':
      return {
        ...state,
        basicSalary: action.payload,
        netSalary: calcNetSalary({ ...state, basicSalary: action.payload })
      };
    case 'ADD_EARNING':
      const updatedEarnings = [...state.earnings, action.payload];
      return {
        ...state,
        earnings: updatedEarnings,
        netSalary: calcNetSalary({ ...state, earnings: updatedEarnings })
      };
    case 'UPDATE_EARNING':
      const earningsCopy = [...state.earnings];
      earningsCopy[action.payload.index] = action.payload.earning;
      return {
        ...state,
        earnings: earningsCopy,
        netSalary: calcNetSalary({ ...state, earnings: earningsCopy })
      };
    case 'DELETE_EARNING':
      const filteredEarnings = state.earnings.filter((_, index) => index !== action.payload);
      return {
        ...state,
        earnings: filteredEarnings,
        netSalary: calcNetSalary({ ...state, earnings: filteredEarnings })
      };
    case 'ADD_DEDUCTION':
      const updatedDeductions = [...state.deductions, action.payload];
      return {
        ...state,
        deductions: updatedDeductions,
        netSalary: calcNetSalary({ ...state, deductions: updatedDeductions })
      };
    case 'UPDATE_DEDUCTION':
      const deductionsCopy = [...state.deductions];
      deductionsCopy[action.payload.index] = action.payload.deduction;
      return {
        ...state,
        deductions: deductionsCopy,
        netSalary: calcNetSalary({ ...state, deductions: deductionsCopy })
      };
    case 'DELETE_DEDUCTION':
      const filteredDeductions = state.deductions.filter((_, index) => index !== action.payload);
      return {
        ...state,
        deductions: filteredDeductions,
        netSalary: calcNetSalary({ ...state, deductions: filteredDeductions })
      };
    case 'RESET':
      return {
        basicSalary: 0,
        earnings: [],
        deductions: [],
        netSalary: calcNetSalary({ basicSalary: 0, earnings: [], deductions: [] })
      };
    default:
      return state;
  }
};

export default salaryReducer;
