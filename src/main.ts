import express, { Request, Response } from "express";
import CalculateFinalInvestment from "./CalculateFinalInvestment";

const app = express();
app.use(express.json())

app.post("/calculate", async function(request: Request, response: Response) {  
  const { initialCapital, interestRate, investmentTime } = request.body;
  const calculateFinalInvestment = new CalculateFinalInvestment();  
  const finalInvestment = await calculateFinalInvestment.execute({ 
    initialCapital, 
    interestRate, 
    investmentTime 
  }); 
  response.json(finalInvestment);  
});

app.listen(3000);