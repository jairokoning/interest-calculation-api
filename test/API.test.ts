import axios from 'axios';

test('Should test API calculating the final value of investment', async () => { 
  
  const {data: finalInvestment} = await axios({
    url: 'http://localhost:3000/calculate',
    method: 'post',
    data: {
      initialCapital: 1000,
      interestRate: 10,
      investmentTime: 2
    }
  });

  expect(finalInvestment).toBe(1210);
})