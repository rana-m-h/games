



import { details } from "./details.js"
import{ui} from "./ui.js"

 export class home{
    constructor(){

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click" , () => {
      this.active(link)
      let Data = link.getAttribute("data-category")
      this.getGames(Data)


    })


})



this.loading =document.querySelector(".loading")

this.details =document.getElementById("details")
this.games =document.getElementById("games")


this.ui = new ui()


this.getGames("mmorpg")

    }


async active(link){
    document.querySelector(".navbar-nav .active").classList.remove("active")
    link.classList.add("active")

  
}




 async  getGames(category){

    this.loading.classList.remove(('d-none'))


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1a1402ef9fmsh1db63125548083ep179542jsn304d8dad7514',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };



let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category} `, options)

let respones = await api.json()
this.loading.classList.add(('d-none'))
this.ui.display(respones)


document.querySelectorAll(".card").forEach((card)=>{
card.addEventListener("click", ()=>{
    
 this.details.classList.remove("d-none")
this.games.classList.add("d-none")
 new details(card.dataset.id)

})
})
 }
 }

