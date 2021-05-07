document.addEventListener("DOMContentLoaded", () => {
    const getform = document.querySelector('#new-form')

    createDeleteButton();
    let deleteButton= document.querySelector('#delete-button')
    deleteButton.addEventListener('click', deleteAll)

    getform.addEventListener('submit', getAnimalDetails)
    
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