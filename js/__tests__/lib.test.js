import {bonusCalculate} from "../lib.js";
 test('it should be calculate bonus', () => {
     const sales=[12000, 8000, 10000, 15000, 2000];
     const expected = 1350;
     const result = bonusCalculate(sales);
     expect(result).toBe(expected);
 });