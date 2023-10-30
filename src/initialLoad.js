import { myEventListeners } from "./editingAndDeleting";
import { homePage } from "./homePage";
import './style.css'
export function initialLoad(){
    homePage()
    myEventListeners()
}