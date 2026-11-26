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