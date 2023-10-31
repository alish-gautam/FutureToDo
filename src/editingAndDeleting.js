
import { myProject } from "./TodoList"
import { domAppend } from "./TodoList"
export function myEventListeners(){
    let container=document.querySelector('.container')
    let content=document.querySelector('.content')
    let editIcon=document.querySelector('.editIcon')
    let deleteIcon=document.querySelector('.deleteIcon')

    editIcon.addEventListener('click',()=>{
        container.removeChild(content)
        let project1=myProject("Brush your teeth","Brush it first thing in the morning")        
        domAppend(project1.listTitle,project1.description)
    })
    deleteIcon.addEventListener('click',()=>{
        container.removeChild(content)
    })
}