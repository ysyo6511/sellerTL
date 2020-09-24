function returnDisplay() {
        $('#pcy-addMarket-item-box').css('display', 'block');
        $('#pcy-addMarket-item-box-display-clicked').css('display', 'none');
}

function handleChangedDisplay() {
        $('#pcy-addMarket-item-box').css({
                display: "none"
            })
            $('#pcy-addMarket-item-box-display-clicked').css({
                display: 'block',
            })
}

function clickLabel(market){
    for(var i=0; i < items.length; i++){
        if(items[i].category === "category1" && items[i].store === market){
                storeClick(market)
                handleChangedDisplay()
                break;
        }else{
            returnDisplay()
        }
        //전체선택 데이터 보내기
        let findValue = items[i]
        checkMarketData(findValue)

    }

}


//checkbox의 check 유무에 따라 visible on/off
function checkMarketData(foundValue) {
    // returnDisplay()
    const checkAllmarket = document.getElementById('pcy-addMarket-checkbox-allMarket')
    const checkNaver = document.getElementById('pcy-addMarket-checkbox-naver')
    const checkCoupang = document.getElementById('pcy-addMarket-checkbox-coupang')
    const checkGmarket = document.getElementById('pcy-addMarket-checkbox-gmarket')
    const checkAuction = document.getElementById('pcy-addMarket-checkbox-auction')
    if (foundValue.store === "naver") {
        checkNaver.checked === true ?
            (foundValue.visible = true) : (foundValue.visible = false)
    } else if (foundValue.store === "coupang") {
        checkCoupang.checked === true ?
            (foundValue.visible = true) : (foundValue.visible = false)
    } else if (foundValue.store === "gmarket") {
        checkGmarket.checked === true ?
            (foundValue.visible = true) : (foundValue.visible = false)
    } else if (foundValue.store === "auction") {
        checkAuction.checked === true ?
            (foundValue.visible = true) : (foundValue.visible = false)
    } else {
        for(var t=0; t<items.length; t++){
            if(items[t].category === "category1"){
                checkAllmarket.checked === true ?
                items[t].visible =true
                :
                items[t].visible =false
            }
        }
    }
    }

