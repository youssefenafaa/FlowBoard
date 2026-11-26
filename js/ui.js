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
    idElelment.classList.add("ClassIDTodoElements")

     let TitleElelment=document.createElement("h4")
    TitleElelment.textContent=element.title

    let DescriptionElelment=document.createElement("p")
    DescriptionElelment.textContent= "Description : " + element.description


    let statusElelment=document.createElement("p")
    statusElelment.textContent="status : " + element.status 

     let priorityElelment=document.createElement("p")
    priorityElelment.textContent="priority : "+ element.priority

    let assigneeElelment=document.createElement("p")
    assigneeElelment.textContent="asignne -> " + element.assignee

     containar.append(idElelment,TitleElelment,DescriptionElelment,statusElelment,priorityElelment,assigneeElelment)
     


    TodoAffichage.append( containar)
    }



        if(element.status=="in-progress"){
let containar=document.createElement("li")
containar.classList.add('containarInProgress')

    let idElelment=document.createElement("p")
    idElelment.textContent=element.id
    idElelment.classList.add("ClassIDInProgressElements")

     let TitleElelment=document.createElement("h4")
    TitleElelment.textContent=element.title

    let DescriptionElelment=document.createElement("p")
    DescriptionElelment.textContent="Description : " + element.description

    let statusElelment=document.createElement("p")
    statusElelment.textContent="status : " + element.status 

     let priorityElelment=document.createElement("p")
    priorityElelment.textContent="priority : "+ element.priority

    let assigneeElelment=document.createElement("p")
    assigneeElelment.textContent="asignne -> " + element.assignee

     containar.append(idElelment,TitleElelment,DescriptionElelment,statusElelment,priorityElelment,assigneeElelment)


    InProgressAffichage.append( containar)
    }



    
        if(element.status=="done"){
let containar=document.createElement("li")
containar.classList.add('containarDone')

    let idElelment=document.createElement("p")
    idElelment.textContent=element.id
    idElelment.classList.add("ClassIDDoneElements")

     let TitleElelment=document.createElement("h4")
    TitleElelment.textContent=element.title

    let DescriptionElelment=document.createElement("p")
    DescriptionElelment.textContent="Description : " + element.description

    let statusElelment=document.createElement("p")
    statusElelment.textContent="status : " + element.status 

     let priorityElelment=document.createElement("p")
    priorityElelment.textContent="priority : "+ element.priority

    let assigneeElelment=document.createElement("p")
    assigneeElelment.textContent="asignne -> " + element.assignee

     containar.append(idElelment,TitleElelment,DescriptionElelment,statusElelment,priorityElelment,assigneeElelment)


    afichageDone.append( containar)
    }
    
});

}



const butAjouterCard=document.querySelector("#but-Ajouter")
const sectionmodale=document.querySelector("#modale")
const myModal=new bootstrap.Modal(sectionmodale)

const sectionCards=document.querySelector("#sec-Afichage")

butAjouterCard.addEventListener("click",()=>{
   
   
   myModal.show()



})