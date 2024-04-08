const contenido = document.querySelector("#contenido");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();

const fetchApi = async () => {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        pintarTarjeta(data);
    } catch (err) {
        console.log(err);
    }
};

const pintarTarjeta = (data) => {
    console.log(data.results);
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
