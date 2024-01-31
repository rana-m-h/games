import { ui } from "./ui.js";


 export class details{
  constructor(id){

document.getElementById("btnClose").addEventListener("click" , ()=>{
document.getElementById("details").classList.add("d-none")
document.getElementById("games").classList.remove("d-none")
})

this.loading =document.querySelector(".loading")

this.getdetalis(id)


  }

  async getdetalis(id){

    this.loading.classList.remove(('d-none'))
    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '1a1402ef9fmsh1db63125548083ep179542jsn304d8dad7514',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
  };

  let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)

let respones = await api.json()

this.loading.classList.add(('d-none'))
console.log(respones)

 new ui().displayDetails(respones)


}
}
