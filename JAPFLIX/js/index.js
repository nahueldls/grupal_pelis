const input = document.getElementById("inputBuscar");
const buscador_button = document.getElementById("btnBuscar");
let conteiner = document.getElementById("content");

const pelis = await fetch(`https://japceibal.github.io/japflix_api/movies-data.json`)
.then( response => response.json())
// console.log( );

const control = new bootstrap.Offcanvas('#offcanvasTop');
let u = 0;
let stars = ""
let divforstars = document.getElementById("stars")
let title = document.getElementById('offcanvasTopLabel');

conteiner.addEventListener('click', (e) => {
    e.stopPropagation();

    const peli_id = e.target.id;
    const peli_clickeada = pelis.find((peli) => peli.id == peli_id);

    title.textContent = peli_clickeada.title;

    control.show();

})

function showContent(list) {
    for (let i = 0; i < list.length; i++) {
         // ---Estrellas--- en función de average
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
        conteiner.innerHTML += ` 
            <div class="position-relative">
                <div class="position-absolute w-100 h-100 top-0" id="${list[i].id}"></div>
                <li class="listado data" >${list[i].title}</li>
                <li class="desc" style="color:darkgrey">${list[i].tagline}${stars}</li>
            </div>
        `
        
        stars = ""
    }
}

let i = 0;
const conditionForFilteringGenre = (genre) => genre.name.toLowerCase().includes(input.value.toLowerCase());
buscador_button.addEventListener("click", () => {
    if ( conteiner.innerHTML == "") {
        if ( input.value !== ""){
            // const conditionForFilteringGenre = (genre) => genre.name.toLowerCase().includes(input.value.toLowerCase());

            showContent(pelis.filter( filtrados => filtrados.title.toLowerCase().includes(input.value))) || 
            showContent(pelis.filter( filtrados => filtrados.tagline.toLowerCase().includes(input.value))) ||
            showContent(pelis.filter( filtrados => filtrados.overview.toLowerCase().includes(input.value))) || 
            showContent(pelis.filter((peli) => peli.genres.some((genre) => conditionForFilteringGenre(genre))))

        }
     } else {
          conteiner.innerHTML = ""
         //showContent(pelis.filter( filtrados => filtrados.title.toLowerCase().includes(input.value)))
            showContent(pelis.filter( filtrados => filtrados.title.toLowerCase().includes(input.value))) || 
            showContent(pelis.filter( filtrados => filtrados.tagline.toLowerCase().includes(input.value))) ||
            showContent(pelis.filter( filtrados => filtrados.overview.toLowerCase().includes(input.value))) || 
            showContent(pelis.filter((peli) => peli.genres.some((genre) => conditionForFilteringGenre(genre))))
     }
})


// let canvas = document.getElementsByClassName("offcanvas")[0];

let class_object = document.getElementsByClassName("data");


// function showCanvaData() {

//     for (let i = 0; i < pelis.length; i++) {

//             canvas.innerHTML = `
//             <div id="content" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></div>
//     <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasExample${i}" aria-labelledby="offcanvasExampleLabel">
//     <div class="offcanvas-header">
//     <h5 class="offcanvas-title" id="offcanvasExampleLabel">${pelis[i].title}</h5>
//     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//   </div>
//   <div class="offcanvas-body">
//     <div>
//     ${pelis[i].overview} 
//     </div>
//     <div class="dropdown mt-3">
//       <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
//           More
//       </button>
//       <ul class="dropdown-menu">
//         <li><a class="dropdown-item">Year</a></li>
//         <li><a class="dropdown-item">Runtime</a></li>
//         <li><a class="dropdown-item">Budget</a></li>
//         <li><a class="dropdown-item">Revenue</a></li>
//       </ul>
//     </div>
//   </div>
//   </div>`
//     }
// }

// function clickContainer() {
// console.log que muestre id de objeto en pantalla
// console.log()
// }

// conteiner.addEventListener("click",showCanvaData)


/*-------------objetivos--------
Qué necesito? identificar el title de un objeto al darle click.
Para qué? Es una forma de poder mostrar los datos

----------------organizando----------
Le doy click a un onjeto y sucede una acción. (le doy click a un container)*/