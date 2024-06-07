import React from 'react';
import SalaryForm from './components/SalaryForm';
import SalarySummary from './components/SalarySummary';
import { SalaryProvider } from './contexts/SalaryContext';

const App = () => {
  return (
    <SalaryProvider>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <SalaryForm />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <SalarySummary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SalaryProvider>
  );
};

export default App;
