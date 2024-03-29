document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#new-form').addEventListener('submit', getAnimalDetails)

    createDeleteButton();
    document.querySelector('#delete-button').addEventListener('click', deleteAll)
    


})

getAnimalDetails = function (event){
    event.preventDefault();

    let name = event.target.name.value
    let species = event.target.species.value
    let continent = event.target.continent.value
    let newList = document.createElement('ul')

    let nameList= document.createElement('li')
    nameList.textContent = name
    let speciesList= document.createElement('li')
    speciesList.textContent = species
    let continentList= document.createElement('li')
    continentList.textContent = continent

    newList.appendChild(nameList)
    newList.appendChild(speciesList)
    newList.appendChild(continentList)

    displayAnimalDetails(newList);
 // document.querySelector('#new-form').reset(); or can use this.reset(); as this here refer to the event object= form
    this.reset();
}

displayAnimalDetails = function (newList){
    let newDiv = document.createElement('div')
    newDiv.append(newList)

    let refPoint = document.querySelector('#display-list')
    refPoint.appendChild(newDiv)

}

createDeleteButton = function () {
    deleteButton = document.createElement('button')
    deleteButton.setAttribute('id', 'delete-button')
    deleteButton.setAttribute('type', 'submit')
    deleteButton.innerHTML = "Delete"

    let refPoint = document.querySelector('h3')
    refPoint.append(deleteButton)
}

deleteAll = function () {
    displayList = document.querySelector('#display-list')

    while(displayList.firstChild){
        displayList.removeChild(displayList.lastChild);
    }
}