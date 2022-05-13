let pagina = 1;
let params = {
  url: "https://api.themoviedb.org/3",
  api_key: "6c9af21b3a8246271925801289f82a36",
};

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPeliculas();
  }
});

btnSiguiente.addEventListener("click", () => {
  if (pagina < 1000) {
    pagina += 1;
    cargarPeliculas();
  }
});

let cargarPeliculas = async () => {
  try {
    let response = await fetch(
      `${params.url}/movie/popular?api_key=${params.api_key}&language=es-ES&page=${pagina}`
    );
    if (response.status === 200) {
      let data = await response.json();
      let movies = [];
      data.results.forEach((movie) => {
        movies += `
        <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
            <h3 class="titulo">${movie.title}</h3>
        </div>`;
      });
      document.getElementById("contenedor").innerHTML = movies;
    } else if (respuesta.status === 401) {
      console.log("no tiene la api_key correcta");
    } else if (respuesta.status === 404) {
      console.log("Lo buscado no esta disponible");
    } else {
      console.log("error desconocido no sabemos de donde viene");
    }
  } catch (e) {
    console.log(e.message);
  }
};

window.addEventListener("load", () => {
  cargarPeliculas();
});
