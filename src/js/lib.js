export function bonusCalculate(items){
    const percent = 0.05;
    const limitSale = 10000;
    let saleSum=0;
    for (const item of items) {
        if (item > limitSale){
            saleSum += item;
        }
    }
    const bonus = saleSum*percent;
    return bonus;

}
