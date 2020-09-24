// const amCheckboxForm = document.getElementById("pcy-addMarket-checkbox-form"),
// amAllCheckbox=document.getElementById("pcy-addMarket-checkbox-allMarket"),
//     amCheckbox = document.querySelector(".pcy-addMarket-checkbox");

function allCheckFunc( obj ) {
    $("[name=checkOne]").prop("checked", $(obj).prop("checked") );
}

/* 체크박스 체크시 전체선택 체크 여부 */
function oneCheckFunc( obj )
{
var allObj = $("[name=checkAll]");
var objName = $(obj).attr("name");

if( $(obj).prop("checked") )
{
    checkBoxLength = $("[name="+ objName +"]").length;
    checkedLength = $("[name="+ objName +"]:checked").length;

    if( checkBoxLength == checkedLength ) {
        allObj.prop("checked", true);
    } else {
        allObj.prop("checked", false);
    }
}
else
{
    allObj.prop("checked", false);
}
}

$(function(){
$("[name=checkAll]").click(function(){
    allCheckFunc( this );
});
$("[name=checkOne]").each(function(){
    $(this).click(function(){
        oneCheckFunc( $(this) );
    });
});
});


