import {saleCalculate} from "../lib.js";
 test('it should be calculate persent', () => {
     const sales=[12000, 8000, 10000, 15000, 2000];
     const expected = 1350;
     const result = saleCalculate(sales);
     expect(result).toBe(expected);
 });