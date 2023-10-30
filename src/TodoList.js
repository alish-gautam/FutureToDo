export function myProject(title,details){
    let listTitle=document.createElement('input')
    listTitle.placeholder='Eg: Pay bills'
    listTitle.value=title
    listTitle.classList.add('list_title')

    let description=document.createElement('input')
    description.placeholder='Details: house,rent,internet...'
    description.value=details
    description.classList.add('description')
    return{
        listTitle,
        description
    }
    
}
export function domAppend(listTitleElement,description){
    let container=document.querySelector('.container')
    let content=document.createElement('div')

//    console.log(listTitle)
    content.appendChild(listTitleElement)
    content.appendChild(description)
    // content.appendChild(description)
    container.appendChild(content)
}

