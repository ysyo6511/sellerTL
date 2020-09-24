const pcyPfForm = document.getElementById("pcy-pf-form"),
      pcyPfItemName = document.getElementById("pcy-pf-itemName"),
      pcyPfProfitMargin = document.getElementById("pcy-pf-profitMargin"),
      pcyPfNumberOfSales = document.getElementById("pcy-pf-numberOfSales"),
      pcyPfAdCost=document.getElementById("pcy-pf-adCost"),
      pcyPfSaleCost=document.getElementById("pcy-pf-saleCost"),
      pcyPfNetProfitBtn=document.getElementById("pcy-pf-netProfit-btn"),
      pcyPfLocalDelBtn=document.getElementById("pcy-pf-localDel");

const pcyPfItemNameResult=document.querySelector(".pcy-pf-itemName-result"),
      pcyPfProfitMarginResult=document.querySelector(".pcy-pf-profitMargin-result");
 
const pcyPfNumberOfSalesResult=document.querySelector(".pcy-pf-numberOfSales-result"),
    pcyPfAdCostResult=document.querySelector(".pcy-pf-adCost-result"),
    pcyPfSaleCostResult=document.querySelector(".pcy-pf-saleCost-result"),
    pcyPfNetProfit=document.querySelector(".pcy-pf-netProfit");
      
const ITEM_NAME = "itemName";
const PROFIT_MARGIN = "profitMargin";
const NUMBER_OF_SALES = "numberOfSales";
const AD_COST = "adCost";
const SALE_COST = "saleCost"
//css 클래스
const SHOWING_CN = "showing";

//local refresh 불편하게 한번에 전부 삭제 
function handleSubmitLocalDel(){
    localStorage.clear();
    
}

function localDelBtn(){
    pcyPfLocalDelBtn.addEventListener('click', function(e){
        handleSubmitLocalDel();
        loadNumber();
    })
}

function saveItemName(itemNameValue,profitMarginValue) {
    localStorage.setItem(ITEM_NAME, itemNameValue);
    localStorage.setItem(PROFIT_MARGIN, profitMarginValue);
}

function handleSubmitName(event){
    const itemNameValue = pcyPfItemName.value;
    const profitMarginValue = pcyPfProfitMargin.value;
    saveItemName(itemNameValue,profitMarginValue)
    showItemName(itemNameValue,profitMarginValue)
}
function handleSubmitNumber(event){
    //submit시 인풋값을 보낸다(테이블과 푸터에)
    const profitMarginValueLocal=localStorage.getItem(PROFIT_MARGIN);
    const numberOfSalesValue = pcyPfNumberOfSales.value;
    const adCostValue = pcyPfAdCost.value;
    const saleCostValue = pcyPfSaleCost.value;

    
    showNumberOfSales(numberOfSalesValue,adCostValue,saleCostValue);
    showResultNumber(profitMarginValueLocal,numberOfSalesValue,adCostValue,saleCostValue);
}

//상품명, 마진액
function askForName(){
    //after local del h4 지우기
    pcyPfItemNameResult.classList.remove(SHOWING_CN);
    pcyPfProfitMarginResult.classList.remove(SHOWING_CN);
    //인풋창을 보여준다
    pcyPfItemName.classList.add(SHOWING_CN);
    pcyPfProfitMargin.classList.add(SHOWING_CN);
    pcyPfForm.addEventListener('submit', function(e){
        e.preventDefault();
        handleSubmitName();
    })
}

//판매개수, 광고비용, 판매비용, 계산버튼
function askForNumber(){
    //after local del h4 지우기
    pcyPfNumberOfSalesResult.classList.remove(SHOWING_CN);
    pcyPfAdCostResult.classList.remove(SHOWING_CN);
    pcyPfSaleCostResult.classList.remove(SHOWING_CN);
    pcyPfNetProfit.classList.remove(SHOWING_CN);
    //인풋창을 보여준다
    pcyPfNumberOfSales.classList.add(SHOWING_CN);
    pcyPfAdCost.classList.add(SHOWING_CN);
    pcyPfSaleCost.classList.add(SHOWING_CN);
    pcyPfNetProfitBtn.classList.add(SHOWING_CN);
    pcyPfForm.addEventListener('submit', function(e){
        e.preventDefault();
        handleSubmitNumber();
    })
}

//상품명,마진액 보여주기
function showItemName(itemNameValue, profitMarginValue){
    
      //인풋창을제거
    pcyPfItemName.classList.remove(SHOWING_CN);
    pcyPfProfitMargin.classList.remove(SHOWING_CN);
      //h4 보여준다
    pcyPfItemNameResult.classList.add(SHOWING_CN);
    pcyPfProfitMarginResult.classList.add(SHOWING_CN);
     //인풋에서 받아온 값을 보여준다
    pcyPfItemNameResult.innerText=itemNameValue;
    pcyPfProfitMarginResult.innerText=profitMarginValue;
}

//판매개수, 광고비용, 판매비용 보여주기
function showNumberOfSales(numberOfSalesValue,adCostValue,saleCostValue){
    

    //인풋창을제거
    pcyPfNumberOfSales.classList.remove(SHOWING_CN);
    pcyPfAdCost.classList.remove(SHOWING_CN);
    pcyPfSaleCost.classList.remove(SHOWING_CN);
    pcyPfNetProfitBtn.classList.remove(SHOWING_CN);

    //h4 보여준다
    pcyPfNumberOfSalesResult.classList.add(SHOWING_CN);
    pcyPfAdCostResult.classList.add(SHOWING_CN);
    pcyPfSaleCostResult.classList.add(SHOWING_CN);
    pcyPfNetProfit.classList.add(SHOWING_CN);

    //인풋에서 받아온 값을 보여준다
    pcyPfNumberOfSalesResult.innerText=numberOfSalesValue;
    pcyPfAdCostResult.innerText=adCostValue;
    pcyPfSaleCostResult.innerText=saleCostValue;
    pcyPfNetProfit.innerText=numberOfSalesValue*210000-adCostValue-saleCostValue;
}


//총수익 푸터
function showResultNumber(profitMarginValueLocal,numberOfSalesValue,adCostValue,saleCostValue){
const pcyPfResultMargin = document.getElementById("pcy-pf-result-margin"),
    pcyPfResultAdCost = document.getElementById("pcy-pf-result-adCost"),
    pcyPfResultSaleCost = document.getElementById("pcy-pf-result-saleCost"),
    pcyPfResultNetProfit = document.getElementById("pcy-pf-result-netProfit");
    console.log(profitMarginValueLocal,numberOfSalesValue,adCostValue,saleCostValue)
    // let profitMarginValue = localStorage.getItem(PROFIT_MARGIN);
    
    //모든 row의 수익, 총광고비용등을 더해서 합계로 계산해준다
    const PCYPFRESULTMARGIN = profitMarginValueLocal*numberOfSalesValue;
    pcyPfResultMargin.innerText=PCYPFRESULTMARGIN+"원";

    const PCYPFRESULTADCOST = adCostValue;
    pcyPfResultAdCost.innerText=PCYPFRESULTADCOST+"원";

    const PCYPFRESULTSALECOST = saleCostValue;
    pcyPfResultSaleCost.innerText=PCYPFRESULTSALECOST+"원";

    const PCYPFRESULTNETPROFIT = PCYPFRESULTMARGIN-PCYPFRESULTADCOST-PCYPFRESULTSALECOST
    pcyPfResultNetProfit.innerText=PCYPFRESULTNETPROFIT+"원";
}


function loadNumber(){
    const itemName = localStorage.getItem(ITEM_NAME);
    const profitMagin = localStorage.getItem(PROFIT_MARGIN);
    const numberOfSales = localStorage.getItem(NUMBER_OF_SALES);
    const adCost = localStorage.getItem(AD_COST);
    const saleCost = localStorage.getItem(SALE_COST);

    if(itemName === null){
        askForName();
        askForNumber();
        // console.log("1")
    } else{
        askForNumber();
        showItemName(itemName,profitMagin)
        // console.log("2")
    } 

    localDelBtn();
}



function init() {
    loadNumber();
}

init();