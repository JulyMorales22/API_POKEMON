const API = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=00";

const getAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results) , pagination(json);
    })
    .catch((error) => {
      console.log("Error in the API :", error);
    });
};

const fillData = (data) => {
  let html = "";
  let j = 0;
  let pagi ="";
  data.forEach((ch) => {
      let url = ch.url;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {4
          j++;
          html += '<div class="col text-white">';
          html += '<div class="card h-100 text-center bg-dark border-danger">';
          html += '<div class="card-body">';
          html += `<h5 class="card-title">Name: ${ch.name}</h5>`;
          html += `<img src="${json.sprites.other.dream_world.front_default}" class="card-img-top" alt="..." <br>`;
          html += `<h5 class="card-title">Height: ${json.height}</h5>`;
          html += `<h5 class="card-title">Weight: ${json.weight}</h5>`;
          html += "</div>";
          html += "</div>";
          html += "</div>";
          document.getElementById("characters").innerHTML = html;
        })
        .catch((error) => {
      console.log("Error in the API2 : ", error);
    });
  });
 
};


const pagination = (json)=>{
  let pagi="";
  
  pagi +=`<li class="page-item ${json.previous == null ?  "disable" :""}"><a class="page-link" onclick="getAPI('${json.previous}')">Preview</a></li> `;
  pagi +=`<li class="page-item ${json.next == null?  "disable" :""}"><a class="page-link" onclick="getAPI('${json.next}')">Next</a></li> `;
  document.getElementById("pagination").innerHTML = pagi;

  
}
getAPI(API);
