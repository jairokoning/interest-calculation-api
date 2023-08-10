import InterestCalculation from "./IterestCalculation";

export default class CalculateFinalInvestment {
  execute({initialCapital, interestRate, investmentTime}: InterestCalc) {

    const finalInvestment = InterestCalculation.calculate({
      initialCapital,
      interestRate, 
      investmentTime
    });
    return finalInvestment;
  }
}

type InterestCalc = {
  initialCapital: number;
  interestRate: number;
  investmentTime: number;
}