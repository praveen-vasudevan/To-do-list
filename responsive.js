const addButton = document.querySelector(".add");
// const deleteButton = document.querySelector(".delete");
const listContent = document.querySelector(".list-input");
const toDoList = document.querySelector(".list-elements");
// const listDiv = document.querySelector(".li-div");


addButton.addEventListener("click", function(){
    //create a new Li and append the input from the user

    const newLi = document.createElement('li');
    const listInput = document.createTextNode(listContent.value);
    // console.log(listInput);
    newLi.appendChild(listInput);
    // console.log(newLi);

    //create a delete Button

    const deleteButton = document.createElement('button');
    deleteButton.className = "delete";
    deleteButton.innerHTML = "Delete";


    //create a new div

    const newDiv = document.createElement("div");
    newDiv.className = "li-div";
    newDiv.appendChild(newLi);
    newDiv.appendChild(deleteButton);
    // console.log(newDiv)

    //append the new li and delete button to the div

    toDoList.appendChild(newDiv);


    deleteButton.addEventListener("click", function(){
        this.parentElement.classList = 'display-none';    
    });

});







