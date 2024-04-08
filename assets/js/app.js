const contenido = document.querySelector("#contenido");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment;

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

    datos.forEach((item) => {});
};

fetchApi();
