import { storageService } from './storage.service.js'
const FILMS_KEY = 'films'
let filmsDB

export default {
    query
}

function query() {
    let filmsFromStorage;

    if(!filmsDB) filmsFromStorage = storageService.load(FILMS_KEY);

    if ((!filmsFromStorage || !filmsFromStorage.length) && !filmsDB) {
        return new Promise((resolve, reject) => {
            axios.get(`https://swapi.co/api/films`)
            .then(res => {
            let films = res.data.results
            films.forEach( film => {
                film.isFavorite = false;
            })
            save(FILMS_KEY, films)
            filmsDB = films
            resolve(films)
            })
        });   
    }
    else {
        return Promise.resolve(filmsFromStorage)
    }
}

function save(key = FILMS_KEY, value = filmsDB) {
    storageService.store(key, value);
}