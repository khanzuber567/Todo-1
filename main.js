let from =document.querySelector('form')

let input = document.querySelector('input')

let ul = document.querySelector('ul')

let dltAllbtn = document.querySelector('#btn-all')




function saveTodo(e){
e.preventDefault()
const newLi = document.createElement("li")
newLi.innerText = input.value
newLi.className = "list-group-item mt-3"
const delbtn = document.createElement('button')
delbtn.innerText = "Delete"
delbtn.className = "btn btn-danger btn-sm float-end"
newLi.appendChild(delbtn)
ul.appendChild(newLi)
from.reset()
}

from.addEventListener('submit', saveTodo)

function deleteTodo(e){
    if(e.target.className.includes('btn-danger')){
        let li = e.target.parentElement
        ul.removeChild(li)

    }
}
ul.addEventListener('click',deleteTodo)


function dltall(e){

    ul.remove()

}

dltAllbtn.addEventListener('click', dltall)