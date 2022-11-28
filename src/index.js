/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// url de mi API:
const url = "https://rickandmortyapi.com/api/character";

// para dejar todo en el div creado y no de último lugar del body:
const appNode = document.querySelector('#app');

// web API fetch (para traer recursos desde cualquier sitio web)
// 1. Conerctarnos al servidor.
window
  .fetch(url)
  // 2. Procesar la respuesta y convertirla en JSON.
  .then((response) => response.json())
  // 3. JSON -> Data -> Renderizar info en el browser.
  .then((data) => {
    const allItems = [];
    data.results.forEach((item) => {
      // crear imagen:
      const imageCharacter = document.createElement("img");
      imageCharacter.src = item.image; //url imagen
      // crear título:
      const title = document.createElement("h2");
      title.textContent = item.name;
      // crear especie:
      const specieCharacter = document.createElement("div");
      specieCharacter.textContent = `Specie: ${item.species}`;
      
      //Cada grupo img, name, specie, se mete en un div:
      const container = document.createElement("div"); 
      container.append(imageCharacter, title, specieCharacter);

      allItems.push(container);
    });

    appNode.append(...allItems);
  });
