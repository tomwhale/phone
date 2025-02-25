export interface LoanPayment {
  month: number;
  interestPayment: number;
  principalPayment: number;
  totalPayment: number;
  principalRemaining: number;
}

export interface LoanParams {
  principal: number;
  annualInterestRate: number;
  months: number;
} 