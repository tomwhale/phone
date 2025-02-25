import { generateLoanSchedule } from './loanSchedule';
import { LoanParams } from './types';

describe('generateLoanSchedule', () => {
  it('should generate correct schedule for a simple loan', () => {
    const params: LoanParams = {
      principal: 1000,
      annualInterestRate: 0.12,
      months: 12
    };

    const schedule = generateLoanSchedule(params);

    // Check array length
    expect(schedule.length).toBe(12);

    // Check first month
    expect(schedule[0]).toEqual({
      month: 1,
      principalPayment: 83.33, // 1000/12 rounded to 2 decimals
      interestPayment: 10, // (1000 * 0.12/12)
      totalPayment: 93.33,
      principalRemaining: 916.67
    });

    // Check last month
    expect(schedule[11]).toEqual({
      month: 12,
      principalPayment: 83.33,
      interestPayment: 0.83, // (83.33 * 0.12/12)
      totalPayment: 84.16,
      principalRemaining: 0
    });

    // Check that all payments sum up to principal
    const totalPrincipalPaid = schedule.reduce(
      (sum, payment) => sum + payment.principalPayment,
      0
    );
    expect(Math.round(totalPrincipalPaid)).toBe(params.principal);
  });

  it('should handle zero interest rate', () => {
    const params: LoanParams = {
      principal: 1000,
      annualInterestRate: 0,
      months: 12
    };

    const schedule = generateLoanSchedule(params);

    expect(schedule.length).toBe(12);
    expect(schedule[0].interestPayment).toBe(0);
    expect(schedule[0].principalPayment).toBe(83.33);
    expect(schedule[0].totalPayment).toBe(83.33);
  });
}); 