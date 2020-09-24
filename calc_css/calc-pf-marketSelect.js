function selectedMarket(marketData){
    let html=``;
    for(let p=0; p<items.length; p++){
    if(marketData === items[p].kStoreName){
        let  selectedMarketItem = items[p]
        html += makeHtmlItems(selectedMarketItem)
        showTotalAmount(marketData)
    } else if(marketData === "전체"){
        let  selectedMarketItem = items[p]
        html += makeHtmlItems(selectedMarketItem)
        showTotalAmount(marketData)
    }
    
}


    $("#pcy-pf-tbody").html(html);

}

function makeHtmlMarkets(marketData){
    html = `
    <li class="pcy-pf-marketSelect-market-li" onclick="selectedMarket('${marketData.kStoreName}')"><a href="#">${marketData.kStoreName}</a></li>
    `;
    return html;
}

function loadMarkets(){
    let html=``;
    for(let i = 0; i < markets.length; i++){
        const marketData = markets[i]
        html += makeHtmlMarkets(marketData);
    }
    $("#pcy-pf-marketSelect-market-ul").html(html);
}

function init(){
    loadMarkets();
}

init();