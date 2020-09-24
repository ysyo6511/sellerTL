const category = [
    {categoryName: '스포츠/레저>신생아의류>보틀웨어'},
    {categoryName: '패션의류>신생아의류>보틀웨어'},
    {categoryName: '화장품/미용>신생아의류>보틀웨어'},
    {categoryName: '생활/건강>신생아의류>보틀웨어'},
    {categoryName: '도서>신생아의류>보틀웨어'},
    {categoryName: '식품>신생아의류>보틀웨어'},
    {categoryName: '패션잡화>신생아의류>보틀웨어'},
]

const categoryList=document.getElementById("pcy-addProduct-category-list-Gr");
// add data in li
function setList(group){
    clearList();
    for(const item of group){
        const categoryItem = document.createElement('li');
        categoryItem.classList.add('list-group-item');
        const text = document.createTextNode(item.categoryName);
        categoryItem.appendChild(text);
        categoryList.appendChild(categoryItem);
        categoryList.style.display ="block"
    }
    if(group.length === 0){
        setNoResult();
    }
}

function clearList(){
    while(categoryList.firstChild){
        categoryList.removeChild(categoryList.firstChild);
    }
}
//no result
function setNoResult(){
    const categoryItem = document.createElement('li');
    categoryItem.classList.add('list-group-item');
    const text = document.createTextNode('No result found');
    categoryItem.appendChild(text);
    categoryList.appendChild(categoryItem);
}
// higher relevancy, higher rangking
function getRelevancy(value, searchTerm){
    if(value === searchTerm){
        return 2;
    } 
    else if(value.startsWith(searchTerm)){
        
        return 1;
    } else if(value.includes(searchTerm)){
        return 0;
    } else{
        return-1
    }
}

//send to backend
function selectedCategoryItem(){
    categoryList.addEventListener('click',(event)=>{
        searchInput.value = (event.target.innerText)
        categoryList.style.display ="none"
        // console.log(event.target.innerText)
    })
}

// show data 
const searchInput=document.getElementById('categorySearch');
searchInput.addEventListener('input',(event)=>{
    selectedCategoryItem();
    let value=event.target.value;
    if(value && value.trim().length >0){
        value = value.trim().toLowerCase();
        setList(category.filter(item => {
            return item.categoryName.includes(value)
        }).sort((itemA, itemB) =>{
            return getRelevancy(itemB.categoryName, value) - getRelevancy(itemA.categoryName, value);
        }));
    } else{
        clearList();
    }
})