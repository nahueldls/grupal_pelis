const input = document.getElementById("inputBuscar");
const buscador_button = document.getElementById("btnBuscar");
let conteiner = document.getElementById("content");

const pelis = await fetch(`https://japceibal.github.io/japflix_api/movies-data.json`)
.then( response => response.json())
console.log( );

let u = 0;
let stars = ""
let divforstars = document.getElementById("stars")
function showContent(list) {
    for (let i = 0; i < list.length; i++) {
         // ---Estrellas---en función de average
         while ( u < list[i].vote_average) {
            stars += `<span class="fa fa-star checked"></span>`
            u += 2
        }
        if ( u < 10) {
            while ( u < 10) {
                stars += `<span class="fa fa-star"></span>`
                u +=2
            }
        }
        u = 0
        conteiner.innerHTML += divforstars
        conteiner.innerHTML += ` 
        <p  class="listado id">${list[i].title}</p>
        <p class="desc" style="color:darkgrey">${list[i].tagline}${stars}</p>`
        u = 0
        divforstars = ""
        stars = ""
        
        // // ---Estrellas---en función de average
        // while ( u < list[i].vote_average) {
        //     stars += `<span class="fa fa-star checked"></span>`
        //     u += 1
        // }
        // divforstars += stars
        // u = 0
        // conteiner.innerHTML += divforstars
        // divforstars = ""
        // stars = ""

    }
    // let u;
    // for ( u = 0; u < list.length; u++) {

    // }
}


/* Cuando el usuario presiona el botón buscar, y si previamente ingresó algún valor en el campo de búsqueda, 
deberán mostrarle un listado con las películas que coincidan con dicha búsqueda en sus atributos 
de title o genres o tagline u overview. A TENER EN CUENTAA*/
let i = 0;
buscador_button.addEventListener("click", () => {
    if ( conteiner.innerHTML == "") {
        if ( input.value !== ""){
            const conditionForFilteringGenre = (genre) => genre.name.toLowerCase().includes(input.value.toLowerCase());

            showContent(pelis.filter( filtrados => filtrados.title.toLowerCase().includes(input.value))) || 
            showContent(pelis.filter( filtrados => filtrados.tagline.toLowerCase().includes(input.value))) ||
            showContent(pelis.filter( filtrados => filtrados.overview.toLowerCase().includes(input.value))) || 
            showContent(pelis.filter((peli) => peli.genres.some((genre) => conditionForFilteringGenre(genre))))

           

            
            // for (let i = 0; i < pelis.length; i++) {
            //     pelis.forEach(peli => { //recorrer
            //         console.log(peli)
            //         showContent(pelis.filter( filtrados => filtrados.genres[i].name.toLowerCase().includes(input.value)))
            //     });
                
            // } 
        }
    } else {
        conteiner.innerHTML = ""
        //showContent(pelis.filter( filtrados => filtrados.title.toLowerCase().includes(input.value)))
    }
})

/* Cuando el usuario presiona el botón buscar, y si previamente ingresó algún valor en el campo de búsqueda, 
deberán mostrarle un listado con las películas que coincidan con dicha búsqueda en sus atributos 
de title o genres o tagline u overview. A TENER EN CUENTAA*/

/* tengo que hacer que la busqueda coincida con el title o genres o tagline u overview*/

// let h = "";  
// let j = 0;
// for (let i = 0; i < pelis[i].genres[i].length; i++) {          
//     h = pelis[i].genres[i].name;
//     console.log(h)
// 
// let h = "";
//  for (let i = 0; i < pelis.length; i++) {
    // pelis.forEach(peli => {
        // if ( peli.genres[i].name == "action") {
        // console.log(peli.genres)
        // }
    // });
    // h += pelis[i].genres[i].name
    // console.log(h)
    
// } 

// console.log(pelis[1].genres[0])
let canvas = document.getElementById("offcanvasExample");
let class_object = document.getElementsByClassName("id");

function clickForData() {



    for (let i = 0; i < pelis.length; i++) {

    canvas.innerHTML = `
    <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">${pelis[i].title}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
    ${pelis[i].overview} 
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          More
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item">Year</a></li>
        <li><a class="dropdown-item">Runtime</a></li>
        <li><a class="dropdown-item">Budget</a></li>
        <li><a class="dropdown-item">Revenue</a></li>
      </ul>
    </div>
  </div>`
    }
}
conteiner.addEventListener("click",clickForData)

// let class_object = document.getElementsByClassName("id");
// function clickForData() {
//     for (let i = 0; i < pelis.length; i++) {
//         console.log(class_object[i])
        
//     }
// }

buscador_button.addEventListener("click", clickForData)


// function saveID() {
//     for ( let i = 0; i < pelis.length; i++) {
//         console.log(pelis[i].id)
//     }
// }
// saveID()