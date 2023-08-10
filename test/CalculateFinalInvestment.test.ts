import CalculateFinalInvestment from "../src/CalculateFinalInvestment";

test('Should calculate the final value of investment', () => {
  const calculateFinalInvestment = new CalculateFinalInvestment();
  const finalInvestment = calculateFinalInvestment.execute({ 
    initialCapital: 27800, 
    interestRate: 1.8,
    investmentTime: 3
   });
  expect(finalInvestment).toBe(29328.38);
})