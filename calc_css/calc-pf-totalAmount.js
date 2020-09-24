//총수익푸터
let isMarkets = null
function showTotalAmount(isMarkets){
    let totalMarginResult = 0;
    let totalAdCostResult = 0;
    let totalSaleCostResult = 0;
    const totalMargin = document.getElementById('pcy-pf-result-margin')
    const totalAdCost = document.getElementById('pcy-pf-result-adCost')
    const totalSaleCost = document.getElementById('pcy-pf-result-saleCost')
    const totalNetProfit = document.getElementById('pcy-pf-result-netProfit')
    for(var t=0; t<items.length; t++){
        if(isMarkets === items[t].kStoreName ){
        totalMarginResult += items[t].profitMargin
        totalAdCostResult += items[t].adCost
        totalSaleCostResult += items[t].saleCost
    }else if(isMarkets === undefined || isMarkets === "전체"){
        totalMarginResult += items[t].profitMargin
        totalAdCostResult += items[t].adCost
        totalSaleCostResult += items[t].saleCost
    }
}
    totalMargin.innerHTML = totalMarginResult
    totalAdCost.innerHTML = totalAdCostResult
    totalSaleCost.innerHTML = totalSaleCostResult
    totalNetProfit.innerHTML = totalMarginResult - totalAdCostResult - totalSaleCostResult
}