/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// url de mi API:
const url = "https://rickandmortyapi.com/api/character";

// para dejar todo en el div creado y no de último lugar del body:
const appNode = document.querySelector("#app");

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
      imageCharacter.className =
        "h-48 w-48 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

      // crear título:
      const title = document.createElement("h2");
      title.textContent = item.name;
      title.className = "text-lg";

      // crear especie:
      const specieCharacter = document.createElement("div");
      specieCharacter.textContent = `Specie: ${item.species}`;
      specieCharacter.className = "text-gray-600";

      // Creación de un contenedor para título y especie:
      const infoCharacter = document.createElement("div");
      infoCharacter.append(title, specieCharacter);
      infoCharacter.className = "text-center md:text-left";

      // Por último, creación de una carta con toda la info del caracter:
      const card = document.createElement("div");
      card.append(imageCharacter, infoCharacter);
      card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";      

      //Cada grupo el contenedor de info e imagen se meten en un contenedor principal:
      const container = document.createElement("div");
      container.append(card);

      allItems.push(container);
    });

    appNode.append(...allItems);
  });
