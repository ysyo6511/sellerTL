const pasteItems = [
    {id:1, itemName: '삼마이 S20 GPS 드론'},
    {id:2, itemName: '목풍기'},
    {id:3, itemName: '네이쳐하이크 캠핑체어'},
    {id:4, itemName: '레이져 마우스'},
]

const pasteItemList=document.getElementById("pcy-addProduct-paste-list-Gr");
//add data in li
function setPasteList(group){
    for(const item of group){
        const pasteItem = document.createElement('li');
        pasteItem.classList.add('pcy-addProduct-paste-item');
        const text = document.createTextNode(item.itemName);
        pasteItem.style.listStyle="none";
        pasteItem.appendChild(text);
        pasteItemList.appendChild(pasteItem);
        // pasteItemList.style.display ="block";
    }
}
//No result
function setNoPasteResult(){
    const pasteItem = document.createElement('li');
    pasteItem.classList.add('pcy-addProduct-paste-item');
    const text = document.createTextNode('복사등록 할 상품이 없습니다.');
    pasteItem.style.listStyle="none";
    pasteItem.appendChild(text);
    pasteItemList.appendChild(pasteItem);
}


//ready for send to backend
function selectedPasteItem(){
    pasteItemList.addEventListener('click',(event)=>{
        console.log(event.target.innerText)
        pasteItemList.style.display ="none"
    })
}
// click click!
function handleClickList(){
    if(pasteItems && pasteItems.length > 0){
        setPasteList(pasteItems.filter(item=>{
            return item.itemName;
        }))
        selectedPasteItem();
        } else{
        setNoPasteResult();
        }
    }
        
//open ul show li wow
    const selectPasteItem = document.getElementById('pasteItemBtn');
    selectPasteItem.addEventListener('click',function(e){
        e.preventDefault();
        handleClickList();
    },{once:true} )



