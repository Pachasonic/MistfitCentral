// bgGame

import {bgGameData} from "../data/bgList.js"

console.log(bgGameData)


const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')

const btnAll = document.createElement('button')
btnAll.textContent = "All Board Games"
btnAll.addEventListener('click', () => boardGameData(bgGameData))


const btnBen = document.createElement('button')
btnBen.textContent = "Owned by Ben"
btnBen.addEventListener('click', () => {
    const arrayBen = bgGameData.filter(bgGameData => bgGameData.obBen === 'Yes')
    boardGameData(arrayBen)
})

const btnAbi = document.createElement('button')
btnAbi.textContent = "Owned by Abi"
btnAbi.addEventListener('click', () => {
    const arrayAbi = bgGameData.filter(bgGameData => bgGameData.obAbi === 'Yes')
    boardGameData(arrayAbi)
})

const btnAlex = document.createElement('button')
btnAlex.textContent = "Owned by Alex"
btnAlex.addEventListener('click', () => {
    const arrayAlex = bgGameData.filter(bgGameData => bgGameData.obAlex === 'Yes')
    boardGameData(arrayAlex)
})

const btnCole = document.createElement('button')
btnCole.textContent = "Owned by Cole"
btnCole.addEventListener('click', () => {
    const arrayCole = bgGameData.filter(bgGameData => bgGameData.obCole === 'Yes')
    boardGameData(arrayCole)
})


myNav.appendChild(btnAll)
myNav.appendChild(btnBen)
myNav.appendChild(btnAbi)
myNav.appendChild(btnAlex)
myNav.appendChild(btnCole)

// nav 

function boardGameData (bgGameData) {
    myViewer.textContent=""
    bgGameData.forEach(bgGame => {
    const myFigure = document.createElement('figure')
    const myImg = document.createElement('img')

    myImg.src = bgGame.url
    myImg.alt = bgGame.name

    const myCaption = document.createElement('figcaption')
    myCaption.textContent = bgGame.name

    myFigure.appendChild(myImg)
    myFigure.appendChild(myCaption)
    myViewer.appendChild(myFigure)



    })


}

boardGameData(bgGameData);


// function showbgGame(bgGame) {

//         let bgGameSection = document.createElement("section")
//         let bgGameName = document.createElement("h2")
//         let bgGamePhoto = document.createElement("img")
//         let bgGameIngrTitle = document.createElement("p")
//         let bgGameIngredients = document.createElement("ul")
//         let bgGameInstTitle = document.createElement("p")
//         let bgGameInstructions = document.createElement("ul")


//         bgGame.textContent = bgGame.title
//         bgGame.src = `images/${bgGame.url}`
//         bgGamePhoto.alt = bgGame.title

//         bgGameIngrTitle.textContent = "Ingredients: "
//         bgGame.ingredients1.forEach(ingredient => {
//             let theIngredient = document.createElement('li')
//             theIngredient.textContent = ingredient
//             bgGameIngredients.appendChild(theIngredient)
//         })

//         bgGameInstTitle.textContent = "Ingredients: "
//         bgGame.instructions.forEach(instruction => {
//             let theInstruction = document.createElement('li')
//             theInstruction.textContent = instruction
//             bgGameInstructions.appendChild(theInstruction)
//         })


//         bgGameSection.appendChild(bgGameName)
//         bgGameSection.appendChild(bgGamePhoto)
//         bgGameSection.appendChild(bgGameIngrTitle)
//         bgGameSection.appendChild(bgGameIngredients)
//         bgGameSection.appendChild(bgGameInstTitle)
//         bgGameSection.appendChild(bgGameInstructions)
//         myViewer.textContent = ""
//         myViewer.appendChild(bgGameSection)

//     }