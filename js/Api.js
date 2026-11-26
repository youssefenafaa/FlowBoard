
 export async function loadData(){
const options = {
  method: 'GET',
  url: 'https://flowboard-api-virid.vercel.app/cards',
}


  const { data } = await axios.request(options)
//   console.log(data)
  return data

}

loadData()