import edit from './Images/editing.png'
import trash from './Images/trash.png'
import { myProject } from './TodoList'
export function homePage(){
    let container=document.querySelector(".container")
    let listTitle=myProject.title
    let descript=myProject.description
    console.log(descript)
    console.log(listTitle)
    let content=document.createElement('div')
    
    content.classList.add('content')
    //edit icon
    let editIcon=document.createElement('img')
    editIcon.src=edit
    editIcon.classList.add('editIcon')
    //delete icon
    let deleteIcon=document.createElement('img')
    deleteIcon.src=trash
    deleteIcon.classList.add('deleteIcon')
    //appending to content and to the dom
    // content.appendChild(listTitle)
    content.appendChild(editIcon)
    content.appendChild(deleteIcon)
    container.appendChild(content)

}