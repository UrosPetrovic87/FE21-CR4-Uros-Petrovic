let list = JSON.parse(movies);
var text=""


for (let val of list) {
    document.getElementById("start").innerHTML += `
    <div class="card mb-3" style="max-width: 440px;">
    <div class="row g-0">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <img src="${val.image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card-body">
          <h5 class="card-title">${val.movieName}</h5>
          <p class="card-text">${val.description}</p>
          <div><button type="button" class="btn btn-outline-secondary omg"> ${val.likes}</button><button type="button" class="btn btn-secondary pravo">Like</button></div>
        </div>
      </div>
    </div>
  </div>
`}


var dugme = document.getElementsByClassName("pravo");

for (let i = 0; i < dugme.length; i++) {
    dugme[i].addEventListener("click", function () {
        plus(i)
    })
};

function plus(i) {
    list[i].likes++;
    document.getElementsByClassName("omg")[i].innerHTML = list[i].likes;
}

document.getElementById("sortir").addEventListener("click", sort)

function sort(){

    list.sort(function(a,b){
      return b.likes - a.likes;
    });
    var text=""
    for (let val of list) {
      text+= `
      <div class="card mb-3" style="max-width: 440px;">
      <div class="row g-0">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <img src="${val.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="card-body">
            <h5 class="card-title">${val.movieName}</h5>
            <p class="card-text">${val.description}</p>
            <div><button type="button" class="btn btn-outline-secondary omg"> ${val.likes}</button><button type="button" class="btn btn-secondary pravo">Like</button></div>
          </div>
        </div>
      </div>
    </div>
  `}

  document.getElementById("start").innerHTML = text

  var dugme = document.getElementsByClassName("pravo");


    for (let i = 0; i < dugme.length; i++) {
        dugme[i].addEventListener("click", function () {
            plus(i)
        })
    };



      function plus(i) {
          list[i].likes++;
          document.getElementsByClassName("omg")[i].innerHTML = list[i].likes;
      }

    document.getElementById("sortir").addEventListener("click", sort)
}

  
