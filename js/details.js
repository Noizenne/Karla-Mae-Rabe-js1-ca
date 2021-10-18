const container = document.querySelector(".container");

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");


const url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick" + id;

console.log(url);

async function getLipstick() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

        createHTML(results);
    }
    catch {
        console.log("There's an error");
        container.innerHTML = `<div>Error</div>`;
    }
}

getLipstick();

function createHTML(results) {
    container.innerHTML += `<a href="details.html?id=${results.id}" class="item">
                                <div class="card">
                                <h3>Name: ${results.name}</h3>
                                </div>
                                </a>`;
}
