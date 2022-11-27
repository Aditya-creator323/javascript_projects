const superhero_token = "101771126111197";
const BASE_URL = `https://superheroapi.com/api.php/${superhero_token}`;

const button = document.getElementById("superhero_button");

const heroImageDiv = document.getElementById("heroImage");

const searchButton = document.getElementById("search_button");

const searchInput = document.getElementById("searchInput");

const getSuperHero = (id, name) => {
  // name - base_url/search/batman
  // json.results[0].image.url

  // id - base_url/id
  // json.image.url

  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.powerstats);
      const superHero = json;
      showHeroInfo(superHero);
    });
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const img = `<img src="${character.image.url}" height=200 width=200 />`;
  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`;
    })
    .join("");

  heroImageDiv.innerHTML = `${name}${img}${stats}`;
};

const getSearchedSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      showHeroInfo(hero);
    });
};

const randomHero = () => {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
};

// let random = Math.floor((Math.random() * 731) + 1)

button.onclick = () => getSuperHero(randomHero());

searchButton.onclick = () => getSearchedSuperHero(searchInput.value);
