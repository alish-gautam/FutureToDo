import edit from './Images/editing.png'
import trash from './Images/trash.png'
import { myProject } from './TodoList'
export function homePage(){
    let todo1 = myProject("Brush your teeth","Brush it first thing in the morning")
    let container=document.querySelector(".container")
    console.log(todo1.listTitle)
    let content=document.createElement('div')
    
    content.classList.add('content')
    //edit icon
    let icon_container=document.createElement('div')
    let editIcon=document.createElement('img')
    editIcon.src=edit
    editIcon.classList.add('editIcon')
    //delete icon
    let deleteIcon=document.createElement('img')
    deleteIcon.src=trash
    deleteIcon.classList.add('deleteIcon')
    let titlediv=document.createElement('h1')
    titlediv.innerText = todo1.listTitle.value
    //appending to content and to the dom
    content.appendChild(titlediv)
    icon_container.appendChild(editIcon)
    icon_container.appendChild(deleteIcon)
    content.appendChild(icon_container)
    container.appendChild(content)

}