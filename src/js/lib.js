export function saleCalculate(items){
    let maxsale=0;
    for (const item of items) {
        if (item > 10000){
            maxsale += item;
        }
    }
    const bonus = maxsale*0.05;
    return bonus;

}
