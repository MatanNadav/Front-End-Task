
export default {
    template: `
        <div class="films-container" @click="toggleFavorite">
            <ul class="film flex">
                <li class="film-title" :class="{favorite: film.isFavorite}" >
                    <h3>{{film.title}}<span style="color:red">{{isFavorite}}</span></h3>
                    <p>Released at: {{film.release_date}}</p>
                    <p>Number of Starships: {{film.starships.length}}</p>
                </li>
            </ul>
        </div>        
        `,

    props: ['film'],
    computed: {
        isFavorite(){
            if(this.film.isFavorite) return ' - Favorite'
        }
    },
    methods: {
        toggleFavorite() {
            this.film.isFavorite = !this.film.isFavorite
            this.$emit('emitFavorite', this.film)
        }
    },
}

