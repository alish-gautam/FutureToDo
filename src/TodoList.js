export function myProject(title,details){
    let container=document.querySelector('.container')
    let content=document.createElement('div')
    let listTitle=document.createElement('input')
    listTitle.placeholder='Eg: Pay bills'
    listTitle.value=title
    listTitle.classList.add('list_title')

    let description=document.createElement('input')
    description.placeholder='Details: house,rent,internet...'
    description.value=details
    description.classList.add('description')

    content.appendChild(listTitle)
    content.appendChild(description)
    container.appendChild(content)
    console.log(listTitle.value)
    return{
        title,
        details
    }
    
}

