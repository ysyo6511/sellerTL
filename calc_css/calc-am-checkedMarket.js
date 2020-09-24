// input store data 
var foundValue = [];

//Header market name
const checkMarketName = document.getElementById('pcy-addMarket-marketname-clicked')

//오픈마켓명 클릭하면 오픈마켓에 맞는 데이터 전송
function storeClick(storeName) {
    for (var j = 0; j < itemCategory.length; j++) {
        if (itemCategory[j].categoryName === "S20") {
            for (var p = 0; p < items.length; p++) {
                if(itemCategory[j].id === items[p].category){
                if (items[p].store === storeName) {
                    foundValue = items[p]
                    checkMarketName.innerText = items[p].kStoreName
                    MarketsValue(foundValue)
                    returnDisplay();
                    break;
                } else{
                    foundValue = items[p];
                }
            }
            }
        }
    }
}

//input item detail 
const checkSellprice = document.getElementById('pcy-am-checkbox-sellprice')
const checkRealSellTransUnitCharge = document.getElementById('pcy-am-checkbox-realSellTransUnitCharge')
const checkSellTransUnitCharge = document.getElementById('pcy-am-checkbox-sellTransUnitCharge')
const checkPurchaseCost = document.getElementById('pcy-am-checkbox-purchaseCost')
const checkPurchaseTransCharge = document.getElementById('pcy-am-checkbox-purchaseTransCharge')
const checkExtraCharge = document.getElementById('pcy-am-checkbox-extraCharge')
const checkMarketFee = document.getElementById('pcy-am-checkbox-marketFee')
//마켓인풋창에 기본값입력
function MarketsValue(foundValue) {
    // console.log(foundValue)
    checkSellprice.value = foundValue.sellprice 
    checkRealSellTransUnitCharge.value = foundValue.realSellTransUnitCharge 
    checkSellTransUnitCharge.value = foundValue.sellTransUnitCharge 
    checkPurchaseCost.value = foundValue.purchaseCost 
    checkPurchaseTransCharge.value = foundValue.purchaseTransCharge 
    checkExtraCharge.value = foundValue.extraCharge 
    checkMarketFee.value = foundValue.marketFee 
}
//마켓인풋창에 새로운값 입력
function saveMarketValue(){
    foundValue.sellprice = checkSellprice.value 
    foundValue.realSellTransUnitCharge = checkRealSellTransUnitCharge.value 
    foundValue.sellTransUnitCharge = checkSellTransUnitCharge.value 
    foundValue.purchaseCost = checkPurchaseCost.value 
    foundValue.purchaseTransCharge = checkPurchaseTransCharge.value 
    foundValue.extraCharge = checkExtraCharge.value 
    foundValue.marketFee = checkMarketFee.value 
    console.log(foundValue)   
    returnDisplay();
}

//체크된 마켓들 저장
function saveCalcData(){
    for (var q = 0; q < items.length; q++) {
        clickLabel()
        if (items[q].category === "category1" && items[q].visible === true) {
            console.log(items[q])
        }
    }
}



