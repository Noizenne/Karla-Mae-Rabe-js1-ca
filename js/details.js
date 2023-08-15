const container = document.querySelector(".detailsContainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://kitsu.io/api/edge/anime/" + id;

console.log(url);

async function getAPI() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results.data);

    const anime = results.data;

    createHTML(anime);

    const loading = document.querySelector(".loader");

    loading.classList.remove("loader");
    
  } catch {
    console.log("There's an error");
    container.innerHTML = `<div>There's an error.</div>`;
  }
}

getAPI();

function createHTML(anime) {
  container.innerHTML += `<div class="item">
                            <a class="card" href="details.html?id=${anime.id}">
                            <h3>Name: ${anime.attributes.canonicalTitle}</h3>
                            <img src="${anime.attributes.posterImage.tiny}" alt="${anime.canonicalTitle}">
                            <h3>Status: ${anime.attributes.status}</h3>
                            <h3>Average Rating: ${anime.attributes.averageRating}</h3>
                            <h3>Episodes: ${anime.attributes.episodeCount}</h3>
                            <h3>Description:</h3>
                            <p>${anime.attributes.description}</p>
                            </a>
                            </div>`;
}
