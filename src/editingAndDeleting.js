
import { myProject } from "./TodoList"
export function myEventListeners(){
    let container=document.querySelector('.container')
    let content=document.querySelector('.content')
    let editIcon=document.querySelector('.editIcon')
    let deleteIcon=document.querySelector('.deleteIcon')

    editIcon.addEventListener('click',()=>{
        container.removeChild(content)
        myProject("Brush your teeth","Brush it first thing in the morning")
    })
    deleteIcon.addEventListener('click',()=>{
        container.removeChild(content)
    })
}