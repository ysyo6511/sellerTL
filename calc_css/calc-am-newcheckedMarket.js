function paintMarkets(getMarket){

    let html;
    html = `
    <div class="pcy-addMarket-checkbox-label-box ">
                            
    <div>
        <input type="checkbox" class="pcy-addMarket-checkbox"
            id="pcy-addMarket-checkbox-${getMarket.store}" name="${getMarket.checkName}" value="${getMarket.store}">
        <label class="pcy-addMarket-checkbox-label"
            for="pcy-addMarket-checkbox-${getMarket.store}"
            onclick="storeClick('${getMarket.store}')"
            ></label>
    </div>
    <div class="pcy-addmarket-btn-container">
    <span 
    class="pcy-addMarket-checkbox-label" 
    id="pcy-addMarket-checkbox-label-${getMarket.store}"
    onclick="clickLabel('${getMarket.store}')"
    >${getMarket.kStoreName}</span>
    <button type="button" class="pcy-addMarket-check-btn" onclick="clickLabel('${getMarket.store}')"><i class="fas fa-cog"></i></button>
</div>
</div>
</div>
`

return html;
}

function showMarkets(){
    let html =``;
    for(var i=0; i<markets.length; i++){
        getMarket = markets[i];
        html += paintMarkets(getMarket);
    }
    $('#pcy-addMarket-checkbox-wrapper').html(html);
}

function init(){
    showMarkets()
}

init();