let PartieTodo=document.querySelector(".sec-Todo")
let PartieInProgress=document.querySelector(".sec-Inprogress")
let PartieDone=document.querySelector(".sec-Done")

let TodoAffichage=document.querySelector(".afichage-todo")
let InProgressAffichage=document.querySelector(".afichage-Inprogress")
let afichageDone=document.querySelector(".afichage-Done")


export function afichage(cards){
  


cards.forEach(element => {
    if(element.status=="todo"){
let containar=document.createElement("li")
containar.classList.add('containarTodo')

    let idElelment=document.createElement("p")
    idElelment.textContent=element.id

     let TitleElelment=document.createElement("h6")
    TitleElelment.textContent=element.title

    let DescriptionElelment=document.createElement("p")
    DescriptionElelment.textContent=element.title


    let statusElelment=document.createElement("p")
    statusElelment.textContent=element.status

     let priorityElelment=document.createElement("p")
    priorityElelment.textContent=element.priority

    let assigneeElelment=document.createElement("p")
    assigneeElelment.textContent=element.assignee

     containar.append(idElelment,TitleElelment,DescriptionElelment,statusElelment,priorityElelment,assigneeElelment)
     


    TodoAffichage.append( containar)
    }



        if(element.status=="in-progress"){
let containar=document.createElement("li")
containar.classList.add('containarInProgress')

    let idElelment=document.createElement("p")
    idElelment.textContent=element.id

     let TitleElelment=document.createElement("h6")
    TitleElelment.textContent=element.title

    let DescriptionElelment=document.createElement("p")
    DescriptionElelment.textContent=element.title

    let statusElelment=document.createElement("p")
    statusElelment.textContent=element.status

     let priorityElelment=document.createElement("p")
    priorityElelment.textContent=element.priority

    let assigneeElelment=document.createElement("p")
    assigneeElelment.textContent=element.assignee

     containar.append(idElelment,TitleElelment,DescriptionElelment,statusElelment,priorityElelment,assigneeElelment)


    InProgressAffichage.append( containar)
    }



    
        if(element.status=="done"){
let containar=document.createElement("li")
containar.classList.add('containarDone')

    let idElelment=document.createElement("p")
    idElelment.textContent=element.id

     let TitleElelment=document.createElement("h6")
    TitleElelment.textContent=element.title

    let DescriptionElelment=document.createElement("p")
    DescriptionElelment.textContent=element.title

    let statusElelment=document.createElement("p")
    statusElelment.textContent=element.status

     let priorityElelment=document.createElement("p")
    priorityElelment.textContent=element.priority

    let assigneeElelment=document.createElement("p")
    assigneeElelment.textContent=element.assignee

     containar.append(idElelment,TitleElelment,DescriptionElelment,statusElelment,priorityElelment,assigneeElelment)


    afichageDone.append( containar)
    }
    
});

}


