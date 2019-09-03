import filmsPreview from './films-preview.js'

export default {
    template: `
    <section class="list-container flex column align-center">
        <films-preview @emitFavorite="emitFavorite" :key="films.title" v-for="film in films" :film="film"></films-preview>
    </section>
        `,


    props: ['films'],
    methods: {
        emitFavorite() {
            this.$emit('storeFavorite', this.films)
        }
    },
    components: {
        filmsPreview
    },
    
}

