import * as api from './Api.js'
import * as ui from './ui.js'


async function init() {
    try {
        const data=await api.loadData()
        ui.afichage(data)
    } catch (error) {
        console.error("erreur:",error)
    }
}
init()


ui.ButcreateCard.addEventListener("click",async()=>{
    try {
   const tasck=ui.createtasckSurForm();
   await api.createTasck(tasck)
   init()
   ui.myModal.hide()
    } catch (error) {
        console.error("Erreur:",error.response?.data||error.message)
    }
   

})


function appliqueFilter(){
    api.filterData(ui.filterRecherche.value,ui.filterassigne.value,ui.afichage)
}
ui.filterRecherche.addEventListener("input", appliqueFilter)

ui.filterassigne.addEventListener("change", appliqueFilter)