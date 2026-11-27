import { GetCatds, loadData, supprimerCarte } from './Api.js'
let PartieTodo = document.querySelector(".sec-Todo")
let PartieInProgress = document.querySelector(".sec-Inprogress")
let PartieDone = document.querySelector(".sec-Done")

let TodoAffichage = document.querySelector(".afichage-todo")
let InProgressAffichage = document.querySelector(".afichage-Inprogress")
let afichageDone = document.querySelector(".afichage-Done")


export function afichage(cards) {
    document.querySelector(".afichage-todo").textContent = ""
    document.querySelector(".afichage-Inprogress").textContent = ""
    document.querySelector(".afichage-Done").textContent = ""

    cards.forEach(element => {
        if (element.status == "todo") {
            let containar = document.createElement("li")
            containar.classList.add('containarTodo')

            let idElelment = document.createElement("p")
            idElelment.textContent = element.id
            idElelment.classList.add("ClassIDTodoElements")

            let TitleElelment = document.createElement("h4")
            TitleElelment.textContent = element.title

            let DescriptionElelment = document.createElement("p")
            DescriptionElelment.textContent = "Description : " + element.description


            let statusElelment = document.createElement("p")
            statusElelment.textContent = "status : " + element.status

            let priorityElelment = document.createElement("p")
            priorityElelment.textContent = "priority : " + element.priority

            let assigneeElelment = document.createElement("p")
            assigneeElelment.textContent = "asignne -> " + element.assignee

            let ModiferCard = document.createElement("button")
            ModiferCard.textContent = "Modifier Card"
            ModiferCard.setAttribute("data-id", element.id)
            ModiferCard.classList.add("butModifer", "btn", "btn-dark")

            let SupprimerCard = document.createElement("button")
            SupprimerCard.textContent = "Supprimer Card"
            SupprimerCard.setAttribute("data-id", element.id)
            SupprimerCard.classList.add("ButSupprimer", "btn", "btn-warning")


            SupprimerCard.addEventListener("click", async () => {

                const result = await Swal.fire({
                    title: "Êtes-vous sûr ?",
                    text: "Cette tâche sera supprimée définitivement !",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Oui, supprimer",
                    cancelButtonText: "Annuler"
                });

                if (result.isConfirmed) {

                    try {
                        await supprimerCarte(element.id);

                        Swal.fire({
                            title: "Supprimée !",
                            text: "La tâche a été supprimée.",
                            icon: "success"
                        });

                        const data = await loadData();
                        afichage(data);

                    } catch (error) {
                        Swal.fire("Erreur", "La suppression a échoué.", "error");
                    }

                }

            });




            containar.append(idElelment, TitleElelment, DescriptionElelment, statusElelment, priorityElelment, assigneeElelment, ModiferCard, SupprimerCard)



            TodoAffichage.append(containar)
        }



        if (element.status == "in-progress") {
            let containar = document.createElement("li")
            containar.classList.add('containarInProgress')

            let idElelment = document.createElement("p")
            idElelment.textContent = element.id
            idElelment.classList.add("ClassIDInProgressElements")

            let TitleElelment = document.createElement("h4")
            TitleElelment.textContent = element.title

            let DescriptionElelment = document.createElement("p")
            DescriptionElelment.textContent = "Description : " + element.description

            let statusElelment = document.createElement("p")
            statusElelment.textContent = "status : " + element.status

            let priorityElelment = document.createElement("p")
            priorityElelment.textContent = "priority : " + element.priority

            let assigneeElelment = document.createElement("p")
            assigneeElelment.textContent = "asignne -> " + element.assignee

            let ModiferCard = document.createElement("button")
            ModiferCard.textContent = "Modifier Card"
            ModiferCard.setAttribute("data-id", element.id)
            ModiferCard.classList.add("butModifer", "btn", "btn-info")

            let SupprimerCard = document.createElement("button")
            SupprimerCard.textContent = "Supprimer  Card"
            SupprimerCard.setAttribute("data-id", element.id)
            SupprimerCard.classList.add("ButSupprimer", "btn", "btn-warning")

            SupprimerCard.addEventListener("click", async () => {

                const result = await Swal.fire({
                    title: "Êtes-vous sûr ?",
                    text: "Cette tâche sera supprimée définitivement !",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Oui, supprimer",
                    cancelButtonText: "Annuler"
                });

                if (result.isConfirmed) {

                    try {
                        await supprimerCarte(element.id);

                        Swal.fire({
                            title: "Supprimée !",
                            text: "La tâche a été supprimée.",
                            icon: "success"
                        });

                        const data = await loadData();
                        afichage(data);

                    } catch (error) {
                        Swal.fire("Erreur", "La suppression a échoué.", "error");
                    }

                }

            });


            containar.append(idElelment, TitleElelment, DescriptionElelment, statusElelment, priorityElelment, assigneeElelment, ModiferCard, SupprimerCard)


            InProgressAffichage.append(containar)
        }




        if (element.status == "done") {
            let containar = document.createElement("li")
            containar.classList.add('containarDone')

            let idElelment = document.createElement("p")
            idElelment.textContent = element.id
            idElelment.classList.add("ClassIDDoneElements")

            let TitleElelment = document.createElement("h4")
            TitleElelment.textContent = element.title

            let DescriptionElelment = document.createElement("p")
            DescriptionElelment.textContent = "Description : " + element.description

            let statusElelment = document.createElement("p")
            statusElelment.textContent = "status : " + element.status

            let priorityElelment = document.createElement("p")
            priorityElelment.textContent = "priority : " + element.priority

            let assigneeElelment = document.createElement("p")
            assigneeElelment.textContent = "asignne -> " + element.assignee

            let ModiferCard = document.createElement("button")
            ModiferCard.textContent = "Modifier Card"
            ModiferCard.setAttribute("data-id", element.id)
            ModiferCard.classList.add("butModifer", "btn", "btn-outline-success")

            let SupprimerCard = document.createElement("button")
            SupprimerCard.textContent = "Supprimer Card"
            SupprimerCard.setAttribute("data-id", element.id)
            SupprimerCard.classList.add("ButSupprimer", "btn", "btn-warning")

            SupprimerCard.addEventListener("click", async () => {

                const result = await Swal.fire({
                    title: "Êtes-vous sûr ?",
                    text: "Cette tâche sera supprimée définitivement !",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Oui, supprimer",
                    cancelButtonText: "Annuler"
                });

                if (result.isConfirmed) {

                    try {
                        await supprimerCarte(element.id);

                        Swal.fire({
                            title: "Supprimée !",
                            text: "La tâche a été supprimée.",
                            icon: "success"
                        });

                        const data = await loadData();
                        afichage(data);

                    } catch (error) {
                        Swal.fire("Erreur", "La suppression a échoué.", "error");
                    }

                }

            });


            containar.append(idElelment, TitleElelment, DescriptionElelment, statusElelment, priorityElelment, assigneeElelment, ModiferCard, SupprimerCard)


            afichageDone.append(containar)


        }



    })


    const ModiferCard = document.querySelectorAll(".butModifer")

    ModiferCard.forEach(butt => {
        butt.addEventListener("click", async (e) => {

            let { data } = await GetCatds(e.currentTarget.dataset.id)
            // const id = butt.dataset.id;
            // console.log(id)
            myModal.show()

            ButSaveModification.setAttribute("data-id", data.id)
            document.querySelector("#taskTitle").value = data.title
            document.querySelector("#taskDescription").value = data.description
            document.querySelector("#taskStatus").value = data.status
            document.querySelector("#taskPriority").value = data.priority
            document.querySelector("#taskAssignee").value = data.assignee


        })
    });

};


export const formModale = document.querySelector("#form-modale")
export const ButSaveModification = document.querySelector("#createCard")
//show Modal //


const butAjouterCard = document.querySelector("#but-Ajouter")
const sectionmodale = document.querySelector("#modale")
export const myModal = new bootstrap.Modal(sectionmodale)



// const sectionCards=document.querySelector("#sec-Afichage")


butAjouterCard.addEventListener("click", () => {

    ButSaveModification.removeAttribute("data-id");

    formModale.reset();

    myModal.show();

});

export const ButcreateCard = document.querySelector("#createCard")
export function createtasckSurForm() {

    let tasck = {
        title: document.querySelector("#taskTitle").value,
        description: document.querySelector("#taskDescription").value,
        status: document.querySelector("#taskStatus").value,
        priority: document.querySelector("#taskPriority").value,
        assignee: document.querySelector("#taskAssignee").value,
    }
    return tasck

}


export const filterassigne = document.querySelector("#filter-assigne")
export const filterRecherche = document.querySelector("#filter-recherche")


export const butRenisialiser = document.querySelector(".btnIcon")



