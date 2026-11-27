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