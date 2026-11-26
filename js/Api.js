
 export async function loadData(){
const options = {
  method: 'GET',
  url: 'https://flowboard-api-virid.vercel.app/cards',
}


  const { data } = await axios.request(options)
//   console.log(data)
  return data

}

export async function createTasck(tasck){

const options = {
  method: 'POST',
  url: 'https://flowboard-api-virid.vercel.app/cards/?password=1234',
  data: tasck
}
  const { data } = await axios.request(options)
  return data

}

export async function filterData(title,assignee,resolved,rejected){
    const objet = {}
  if (title) {
    objet.title_like= title
  }
  if (assignee) {
    objet.assignee = assignee
  }
 

  try{
       let response = await axios.get('https://flowboard-api-virid.vercel.app/cards?', {
      params: objet,
    })
    resolved(response.data)
  }
catch (error){
 rejected(error)
}
}
