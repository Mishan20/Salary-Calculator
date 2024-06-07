const salaryReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BASIC_SALARY':
      return {
        ...state,
        basicSalary: action.payload,
        netSalary: calculateNetSalary({ ...state, basicSalary: action.payload })
      };
    case 'ADD_EARNING':
      const updatedEarnings = [...state.earnings, action.payload];
      return {
        ...state,
        earnings: updatedEarnings,
        netSalary: calculateNetSalary({ ...state, earnings: updatedEarnings })
      };
    case 'UPDATE_EARNING':
      const earningsCopy = [...state.earnings];
      earningsCopy[action.payload.index] = action.payload.earning;
      return {
        ...state,
        earnings: earningsCopy,
        netSalary: calculateNetSalary({ ...state, earnings: earningsCopy })
      };
    case 'DELETE_EARNING':
      const filteredEarnings = state.earnings.filter((_, index) => index !== action.payload);
      return {
        ...state,
        earnings: filteredEarnings,
        netSalary: calculateNetSalary({ ...state, earnings: filteredEarnings })
      };
    case 'ADD_DEDUCTION':
      const updatedDeductions = [...state.deductions, action.payload];
      return {
        ...state,
        deductions: updatedDeductions,
        netSalary: calculateNetSalary({ ...state, deductions: updatedDeductions })
      };
    case 'UPDATE_DEDUCTION':
      const deductionsCopy = [...state.deductions];
      deductionsCopy[action.payload.index] = action.payload.deduction;
      return {
        ...state,
        deductions: deductionsCopy,
        netSalary: calculateNetSalary({ ...state, deductions: deductionsCopy })
      };
    case 'DELETE_DEDUCTION':
      const filteredDeductions = state.deductions.filter((_, index) => index !== action.payload);
      return {
        ...state,
        deductions: filteredDeductions,
        netSalary: calculateNetSalary({ ...state, deductions: filteredDeductions })
      };
    case 'RESET':
      return {
        basicSalary: 0,
        earnings: [],
        deductions: [],
        netSalary: 0
      };
    default:
      return state;
  }
};

const calculateNetSalary = ({ basicSalary, earnings, deductions }) => {
  let totalEarnings = basicSalary + earnings.reduce((sum, earning) => sum + earning.amount, 0);
  let totalDeductions = deductions.reduce((sum, deduction) => sum + deduction.amount, 0);
  return totalEarnings - totalDeductions;
};

export default salaryReducer;
