function submitClickAddProduct() {
    // console.log(isNaN(document.getElementById("purchaseCost").value));
    if (
        String(document.getElementById("categorySearch").value) ||
        String(document.getElementById("pcy-ap-itemName").value) || 
        isNaN(document.getElementById("pcy-ap-purchaseCost").value) ||
        isNaN(document.getElementById("pcy-ap-purchaseTransCharge").value) ||
        isNaN(document.getElementById("pcy-ap-sellPrice").value) ||
        isNaN(document.getElementById("pcy-ap-realSellTransUnitCharge").value) ||
        isNaN(document.getElementById("pcy-ap-sellTransUnitCharge").value) ||
        isNaN(document.getElementById("pcy-ap-extraCharge").value)||
        isNaN(document.getElementById("pcy-ap-stockNumber").value)
    ) { 
        
        console.log(document.getElementById("categorySearch").value) 
    console.log(document.getElementById("pcy-ap-itemName").value) 
    console.log(document.getElementById("pcy-ap-purchaseCost").value) 
    console.log(document.getElementById("pcy-ap-purchaseTransCharge").value) 
    console.log(document.getElementById("pcy-ap-sellPrice").value) 
    console.log(document.getElementById("pcy-ap-realSellTransUnitCharge").value) 
    console.log(document.getElementById("pcy-ap-sellTransUnitCharge").value) 
    console.log(document.getElementById("pcy-ap-extraCharge").value)
    console.log(document.getElementById("pcy-ap-stockNumber").value)
    } else {
        // $(document).ready(function () {

            
            // $.ajax({
            //     type: "GET", //전송방식을 지정한다 (POST,GET)
            //     url: "/api/margin/whereever",//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
            //     dataType: "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
            //     data: {
                    // purchaseCost:document.getElementById("purchaseCost").value,

                    // categorySearch: $("#categorySearch").val() ? $("#categorySearch").val() : "카테고리 없음",
                    // itemName: $("#pcy-ap-itemName").val() ? $("#pcy-ap-itemName").val() : "상품명 없음",
                    // purchaseCost: $("#pcy-ap-purchaseCost").val() ? $("#pcy-ap-purchaseCost").val() : "0",
                    // purchaseTransCharge: $("#pcy-ap-purchaseTransCharge").val() ? $("#pcy-ap-purchaseTransCharge").val() : "0",
                    // sellPrice: $("#pcy-ap-sellPrice").val() ? $("#pcy-ap-sellPrice").val() : "0",
                    // realSellTransUnitCharge: $("#pcy-ap-realSellTransUnitCharge").val() ? $("#pcy-ap-realSellTransUnitCharge").val() : "0",
                    // sellTransUnitCharge: $("#pcy-ap-sellTransUnitCharge").val() ? $("#pcy-ap-sellTransUnitCharge").val() : "0",
                    // extraCharge:$("#pcy-ap-extraCharge").val() ? $("#pcy-ap-extraCharge").val() : "0"
                    
                // },
            //     error: function () {
            //         alert("server connect failed");
            //     },
            //     success: function (Parse_data) {
                
            //         // $("#Parse_Area").html(Parse_data); //div에 받아온 값을 넣는다.
            //         // alert("통신 데이터 값 : " + Parse_data);
            //         // console.log(JSON.parse(Parse_data).margin);
            //         $("#marginVal").html(JSON.parse(Parse_data).margin);
            //         $("#marginRateVal").html(JSON.parse(Parse_data).marginRate);
            //         $("#VAT_10").html(JSON.parse(Parse_data).VAT_10);
            //         $("#marginAfterVAT_10").html(JSON.parse(Parse_data).margin - JSON.parse(Parse_data).VAT_10);
                    
            //     }
            // });
        // });
        // document.getElementById("submitBtn").submit();
    }
}

    // 저장하기 누르면 데이터 전송 눌렸을 때 실행할 내용
    const saveProductBtn=document.getElementById('pcy-ap-save-btn');
    saveProductBtn.addEventListener('click',function(e){
        submitClickAddProduct();
    })
        


    const cancleProductBtn=document.getElementById('pcy-ap-cancle-btn');
    cancleProductBtn.addEventListener('click', function(e){
        window.history.back();
    }, {once : true})
