import { myEventListeners } from "./editingAndDeleting";
import { homePage } from "./homePage";
import { myProject } from "./TodoList";
import './style.css'
export function initialLoad(){
    homePage()
    myEventListeners()
    
}