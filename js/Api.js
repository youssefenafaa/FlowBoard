
async function loadData(){
const options = {
  method: 'GET',
  url: 'https://flowboard-api-virid.vercel.app/cards',
}

try {
  const { data } = await axios.request(options)
  console.log(data)
} catch (error) {
  console.error(error)
}
}

loadData()