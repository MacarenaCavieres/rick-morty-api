const contenido = document.querySelector("#contenido");
const template = document.querySelector("#template");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const fragment = document.createDocumentFragment();

let page = 1;

next.addEventListener("click", () => {
    if (page <= 42) {
        page = page + 1;
        fetchApi();
        window.scrollTo(0, 0);
    }
});

previous.addEventListener("click", () => {
    if (page > 1) {
        page = page - 1;
        fetchApi();
        window.scrollTo(0, 0);
    }
});

const fetchApi = async () => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await response.json();
        pintarTarjeta(data);
    } catch (err) {
        console.log(err);
    }
};

const pintarTarjeta = (data) => {
    const datos = data.results;

    contenido.textContent = "";
    datos.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".card-title").textContent = item.name;
        clone.querySelector(".status").textContent = `${item.species} - ${item.status}`;
        clone.querySelector(".origin").textContent = `Origin: ${item.origin.name}`;
        clone.querySelector(".location").textContent = `Location: ${item.location.name}`;
        clone.querySelector(".gender").textContent = `Gender: ${item.gender}`;
        clone.querySelector(".img-fluid").src = item.image;
        clone.querySelector(".img-fluid").alt = item.name;

        fragment.appendChild(clone);
    });
    contenido.appendChild(fragment);
};

fetchApi();
