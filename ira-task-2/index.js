let listItems = []

function addItem() {
    let newLi = document.createElement("li")
    let newRemoveButton = document.createElement("button")

    let liContent = document.getElementById("addItem").value
    listItems.push(liContent)

    let listItemId = "listItem" + listItems.indexOf(liContent)
    let removeButtonId = "remove" + listItems.indexOf(liContent)

    newLi.setAttribute("id", listItemId)
    newRemoveButton.setAttribute("id", removeButtonId)
    newRemoveButton.setAttribute("onclick", "removeItem(this.id)")

    newLi.textContent = liContent+ " "
    newRemoveButton.textContent = "Remove"
   
    newLi.appendChild(newRemoveButton)

    document.getElementById("toDoList").appendChild(newLi)  
    
    document.getElementById("addItem").value = ""
}

function removeItem(clickedID) {
    document.getElementById(clickedID).remove()
    deletedLiID = "listItem" + clickedID.slice(clickedID.length-1)
    document.getElementById(deletedLiID).remove()
}