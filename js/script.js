const container = document.querySelector(".container");

const url = "https://kitsu.io/api/edge/anime";


async function getAPI () {
    try {
        const response = await fetch(url);

        const json = await response.json();

        const anime = json.data;

        console.log(anime);

        const loading = document.querySelector(".loader");

        loading.classList.remove("loader");


        anime.forEach(function(selectedAnime){
    
            container.innerHTML += `<a class="item" href="details.html?id=${selectedAnime.id}">
                                <div class="card">
                                <h3>Name: ${selectedAnime.attributes.canonicalTitle}</h3>
                                <img src="${selectedAnime.attributes.posterImage.tiny}" alt="${selectedAnime.canonicalTitle}">
                                <h3>Status: ${selectedAnime.attributes.status}</h3>
                                </div>
                                </a>`;
        });
    }
    
    catch {
        console.log("There's an error.");
        container.innerHTML = `<div>Error.</div>`;
    }
}


getAPI();