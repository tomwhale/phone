# Loan Schedule Generator Interview Challenge

## Challenge Description

Create a function that generates a loan amortization schedule based on the following inputs:

- `principal`: The original loan amount (e.g., £1,000)
- `annualInterestRate`: A decimal representing the annual interest rate (e.g., 0.12 for 12%)
- `months`: The total number of monthly payments (e.g., 12 for 1 year)

The function should generate a schedule (an array) of length `months`, where each entry is an object containing:

- `month`: The period number (1, 2, 3, ...)
- `interestPayment`: The interest paid in that month
- `principalPayment`: The portion of the payment that goes toward paying down the principal
- `totalPayment`: The sum of the interestPayment + principalPayment for that month
- `principalRemaining`: The amount of principal still owed after making that month's payment

### Payment Calculation Approach

1. Monthly interest rate = annualInterestRate / 12
2. Fixed principal portion each month = principal / months
3. For each month:
   - Calculate interest on the current outstanding principal: interestPayment = currentPrincipal × monthlyInterestRate
   - totalPayment = interestPayment + principalPayment
   - principalRemaining = currentPrincipal - principalPayment

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

3. Run tests in watch mode:
   ```bash
   npm run test:watch
   ```

## Implementation

The function template is located in `src/loanSchedule.ts`. Your task is to implement the `generateLoanSchedule` function according to the requirements.

Test cases are provided in `src/loanSchedule.test.ts` to help verify your implementation. 