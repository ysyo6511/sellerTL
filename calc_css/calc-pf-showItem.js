//등록된 상품 없음
function resultNoItem(){
    let html = ``;
    html = `
    <td colspan="7" class="pcy-pf-resultNoItem-container">
    <div class="pcy-pf-resultNoItem">등록된 상품이 없습니다. 상품을 등록해 주세요.</div>
    <a href="calc-ap.html" class="pcy-btn">상품등록</a>
    </td>
    `
    $("#pcy-pf-tbody").html(html);
    return html
}

//테이블에 인풋값 입력
function inputValue(id){
    // let changedValue = itemCategory[p].items[j]
    const numberOfSalesValue = document.getElementById(`pcy-pf-numberOfSales-${id}`).value
    const adCostValue =  document.getElementById(`pcy-pf-adCost-${id}`).value
    const saleCostValue =  document.getElementById(`pcy-pf-saleCost-${id}`).value
    for(var v=0; v<items.length; v++){
        // console.log(items[v].id , id)
        if(items[v].id === id){
            items[v].numberOfSales = numberOfSalesValue
            items[v].adCost = adCostValue
            items[v].saleCost = saleCostValue
        }
    }
     getItems();
}



function makeHtmlItems(getItemDetail){
    // console.log("!")
    // showTotalAmount(getItemDetail);
    let html = ``;
    html = `

    <tr class="pcy-pf-tr">
        <td><img class="pcy-pf-itemImg"
                src="https://shopping-phinf.pstatic.net/main_8248047/82480471955.1.jpg"></td>
        <td>
            <div class="pcy-pf-td-box">
                <h4 class="pcy-pf-itemName-result showing">${getItemDetail.itemName}</h4>
            </div>
        </td>
        <td>
            <div class="pcy-pf-td-box">
                <h4 class="pcy-pf-profitMargin-result showing">${getItemDetail.profitMargin}</h4>
            </div>
        </td>

        <td>
            <div class="pcy-pf-td-box">
            ${getItemDetail.numberOfSales === null ?
                `<input type="text" class="pcy-input-showing pcy-input pcy-pf-input showing" id="pcy-pf-numberOfSales-${getItemDetail.id}"
                value="0" />`
                :
                `<h4 class="pcy-pf-numberOfSales-result showing" id="pcy-pf-numberOfSalesResult-${getItemDetail.id}">${getItemDetail.numberOfSales}</h4>`
                
            }
            </div>
        </td>
        <td>
            <div class="pcy-pf-td-box">
            ${getItemDetail.adCost === null ?
                `<input type="text" class="pcy-input-showing pcy-input pcy-pf-input showing"  id="pcy-pf-adCost-${getItemDetail.id}" value="0" />`
                :
                `<h4 class="pcy-pf-adCost-result showing" id="pcy-pf-adCostResult-${getItemDetail.id}">${getItemDetail.adCost}</h4>`
            }
            </div>

        </td>
        <td>
            <div class="pcy-pf-td-box">
            ${getItemDetail.saleCost === null ?
            `<input type="text" class="pcy-input-showing pcy-input pcy-pf-input showing"  id="pcy-pf-saleCost-${getItemDetail.id}"
            value="0">`
                :
            `<h4 class="pcy-pf-saleCost-result showing" id="pcy-pf-saleCostResult-${getItemDetail.id}">${getItemDetail.saleCost}</h4>`
            }
            </div>

        </td>


        <td>
            <div class="pcy-pf-td-box">
                ${getItemDetail.numberOfSales || getItemDetail.adCost || getItemDetail.saleCost !== null ?
                    `<h4 class="pcy-pf-netProfit showing">${getItemDetail.profitMargin*getItemDetail.numberOfSales-getItemDetail.adCost-getItemDetail.saleCost}</h4>`
                    :
                    `<button type="button" class="pcy-pf-netProfit-btn showing" id="pcy-pf-netProfit-btn-${getItemDetail.id}" onclick="inputValue('${getItemDetail.id}')">
                        <i class="fas fa-check fa-2x"></i>
                    </button>`
                }
            </div>
        </td>
    </tr>
        `

        
    return html;

        }


function getItems(){

    console.log("!")
    let html = ``;
   
    
        for(let i = 0 ; i < itemCategory.length; i++){
        for(let j = 0 ; j < items.length; j++){
            if(itemCategory[i].id === items[j].category){
                    let getItemDetail = items[j]
                    html += makeHtmlItems(getItemDetail)
                    showTotalAmount();

            }
        }
    }
    $("#pcy-pf-tbody").html(html);
    
    
}

function loadItems(){
    if(itemCategory.length > 0){
        getItems()
    } else{
        resultNoItem()
    }
}

function init(){
    loadItems();
}



init()




// let id = uuidv4();
//     let html = ``;
//         html = `
//         <tr class="pcy-pf-tr">
//         <td><img class="pcy-pf-itemImg"
//                 src="https://shopping-phinf.pstatic.net/main_8248047/82480471955.1.jpg"></td>
//         <td>
//             <div class="pcy-pf-td-box">
//                 <h4 class="pcy-pf-itemName-result showing">${getItemDetail.itemName}</h4>
//                 <input type="text" class="pcy-input-showing pcy-input" id="pcy-pf-itemName-${id}"
//                     value="s20" />
//             </div>
//         </td>
//         <td>
//             <div class="pcy-pf-td-box">
//                 <h4 class="pcy-pf-profitMargin-result showing">${getItemDetail.profitMargin}</h4>
//                 <input type="text" class="pcy-input-showing pcy-input" id="pcy-pf-profitMargin-${id}"
//                     value="0" />
//             </div>
//         </td>

//         <td>
//             <div class="pcy-pf-td-box">
//             <h4 class="pcy-pf-numberOfSales-result showing">${getItemDetail.numberOfSales}</h4>
//             <input type="text" class="pcy-input-showing pcy-input pcy-pf-input" id="pcy-pf-numberOfSales-${id}"
//             value="0" />
//             </div>
//         </td>
//         <td>
//             <div class="pcy-pf-td-box">
//             ${getItemDetail.adCost === null ?
//                 `<input type="text" class="pcy-input-showing pcy-input pcy-pf-input shoiwng"  id="pcy-pf-adCost-${id} "value="0" />`
//                 :
//                 `<h4 class="pcy-pf-adCost-result showing">${getItemDetail.adCost}</h4>`
//             }
//             </div>

//         </td>
//         <td>
//             <div class="pcy-pf-td-box">
//                 <h4 class="pcy-pf-saleCost-result showing">${getItemDetail.saleCost}</h4>
//                 <input type="text" class="pcy-input-showing pcy-input pcy-pf-input"  id="pcy-pf-saleCost-${id}"
//                     value="0">
//             </div>

//         </td>


//         <td>
//             <div class="pcy-pf-td-box">
//                 <h4 class="pcy-pf-netProfit showing">${getItemDetail.profitMargin*getItemDetail.numberOfSales-getItemDetail.adCost-getItemDetail.saleCost}</h4>
//                 <button type="button" class="pcy-pf-netProfit-btn" id="pcy-pf-netProfit-btn-${id}"
//                 >
//                     <i class="fas fa-check fa-2x"></i>
//                 </button>
//             </div>
//         </td>
//     </tr>
//         `

