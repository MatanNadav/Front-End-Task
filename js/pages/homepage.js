import { storageService } from '../storage.service.js'
import service from '../service.js'
import filmsList from '../cmps/films-list.js'


export default {
    template: `
    <section class="home-container">
        <h1>The films are all from the Star Wars universe, pick your favorites:</h1>
        <films-list @storeFavorite="storeFavorite" :films="films"></films-list>
    </section>
        `,

    data() {
        return {
            films: null
        }
    },

    methods: {
        storeFavorite() {
            storageService.store('films', this.films)
        }

    },

    created() { 
        service.query().then(res => {
            this.films = res;
        })
    },

    components: {
        filmsList
    },
    
}

