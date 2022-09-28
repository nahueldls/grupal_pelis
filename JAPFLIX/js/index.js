const input = document.getElementById("inputBuscar");
const buscador_button = document.getElementById("btnBuscar");
let conteiner = document.getElementById("content");

const pelis = await fetch(`https://japceibal.github.io/japflix_api/movies-data.json`)
.then( response => response.json())
// console.log(pelis[0].genres[0].id);


function showContent(list) {
    for (let i = 0; i < list.length; i++) {
        conteiner.innerHTML += `
        <p  class="listado">${list[i].title}</p>
        <p class="desc" style="color:darkgrey">${list[i].tagline}</p>`
        
        // ---Estrellas---en función de average
    }
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