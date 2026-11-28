import * as api from './Api.js'
import * as ui from './ui.js'


async function init() {
    try {
        const data = await api.loadData()
        ui.afichage(data)
    } catch (error) {
        console.error("erreur:", error)
    }
}
init()





function appliqueFilter() {
    api.filterData(ui.filterRecherche.value, ui.filterassigne.value, ui.afichage)
}
ui.filterRecherche.addEventListener("input", appliqueFilter)

ui.filterassigne.addEventListener("change", appliqueFilter)


ui.butRenisialiser.addEventListener("click", async () => {
    ui.filterassigne.value = ""
    ui.filterRecherche.value = ""
    const data = await api.loadData()
    ui.afichage(data)

})

////Ajouter ET Modifier

ui.formModale.addEventListener("submit", async (e) => {

    e.preventDefault();

    const tasck = ui.createtasckSurForm();
    const id = ui.ButcreateCard.dataset.id;

    try {

        if (id) {
            // Modification
            await api.PutModification(id, tasck);

        } else {
            // Création
            await api.createTasck(tasck);
        }

        // Actualiser les cards
        const data = await api.loadData();
        ui.afichage(data);

        // Réinitialiser le bouton
        ui.ButcreateCard.removeAttribute("data-id");

        // Fermer le modal
        ui.myModal.hide();

        // Vider le formulaire
        ui.formModale.reset();

    } catch (error) {
        console.error("Erreur:", error.response?.data || error.message);
    }

});


////Move Cards///
let cardId;

document.addEventListener("dragstart", (e) => {

    if (e.target.tagName === "LI") {

        cardId = e.target.querySelector("p").textContent;

        // console.log( cardId);

    }

});

ui.TodoAffichage.addEventListener("dragover", (e) => {
    e.preventDefault();
});

ui.InProgressAffichage.addEventListener("dragover", (e) => {
    e.preventDefault();
});

ui.afichageDone.addEventListener("dragover", (e) => {
    e.preventDefault();
});

ui.TodoAffichage.addEventListener("drop", async () => {
    let newStatus = "todo";
    // console.log(newStatus);
    const { data } = await api.GetCatds(cardId)
    // console.log(data)
    data.status = newStatus
    await api.PutModification(cardId, data);
    const cards = await api.loadData()
    ui.afichage(cards)
});

ui.InProgressAffichage.addEventListener("drop", async () => {
    let newStatus = "in-progress";
    // console.log(newStatus);
    const { data } = await api.GetCatds(cardId)
    // console.log(data)
    data.status = newStatus
    await api.PutModification(cardId, data);
    const cards = await api.loadData()
    ui.afichage(cards)
});

ui.afichageDone.addEventListener("drop", async () => {
    let newStatus = "done";
    // console.log(newStatus);
    const { data } = await api.GetCatds(cardId)
    // console.log(data)
    data.status = newStatus
    await api.PutModification(cardId, data);
    const cards = await api.loadData()
    ui.afichage(cards)
});



///IA.......////
document.querySelector("#generateBtn").addEventListener("click",async ()=>{
    let description = document.querySelector("#projectDescription").value;
let count = document.querySelector("#taskCount").value;

// console.log(description)
// console.log(count)

    document.querySelector("#generateBtn").style.display="none"
    document.querySelector("#TextTraitment").textContent="Traitement En Cours"
    const result=await api.GenerieIA(count,description)
    // console.log(result)
    document.querySelector("#aiModal .btn-close").click()
    const data=await api.loadData()
    ui.afichage(data)
})
