


 export class ui {
  constructor(){ }

 

  display(data){
        
    let gameBox=``

for(let i = 0 ; i < data.length ; i++){

gameBox+=`
<div class="col-md-3">
        <div class="card" data-id="${data[i].id}" style="width: 18rem;">
        <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
        <div class="row">
  <div class="col-6">
  <h5 class="card-title">${data[i].title}</h5>
  </div>
<div class="col-6">
<button class="btn btn-danger mb-2 ms-5 button">free</button>
</div>
</div> 
          <p class="card-text"> ${data[i].short_description.split(' ').slice(0,4).join(' ')}.</p>
        </div>
        <div class="card-body">
          <span  class="card-link">${data[i].genre}</span>
          <span  class="card-link">${data[i].platform}</span>
        </div>
      </div>
   
      </div>
         
`

 document.getElementById("gameData").innerHTML = gameBox; 

}



}



displayDetails(data) {
  let detailsBox = `
  <div class="col-md-4">
  <img src="${data.thumbnail}" class="w-100" alt="image details" />
</div>
<div class="col-md-8">
  <h3>Title: ${data.title}</h3>
  <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
  <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
  <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
  <p class="small">${data.description}</p>
  <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
</div>
  
  `;

  document.getElementById("detailsContent").innerHTML = detailsBox;
}

}