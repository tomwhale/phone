import { LoanPayment, LoanParams } from './types';

/**
 * Generates a loan amortization schedule.
 * 
 * @param params The loan parameters
 * @param params.principal - The original loan amount (e.g., £1,000)
 * @param params.annualInterestRate - Annual interest rate as a decimal (e.g., 0.12 for 12%)
 * @param params.months - Total number of monthly payments
 * 
 * @returns An array of LoanPayment objects representing the monthly payment schedule
 * 
 * Requirements:
 * 1. Monthly interest rate = annualInterestRate / 12
 * 2. Fixed principal portion each month = principal / months
 * 3. For each month:
 *    - Calculate interest on current outstanding principal
 *    - Interest payment = currentPrincipal × monthlyInterestRate
 *    - Total payment = interestPayment + principalPayment
 *    - Update principalRemaining after the payment
 */
export function generateLoanSchedule(params: LoanParams): LoanPayment[] {
  // TODO: Implement the loan schedule generation logic
  return [];
} 

