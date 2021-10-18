const container = document.querySelector(".container");

const url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick";


async function getAPI () {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

        container.innerHTML = "";

        results.forEach(function(){

    
            container.innerHTML += `<a href="details.html?id=${results.id}" class="item">
                                <div class="card">
                                <h3>Brand: ${results.brand}</h3>
                                <h3>Name: ${results.name}</h3>
                                <h3>Price: ${results.price}</h3>
                                </div>
                                </a>`;
        
       });
    }
    
    catch {
        console.log("Error");
        container.innerHTML = `<div>Error</div>`;
    }
}


getAPI();